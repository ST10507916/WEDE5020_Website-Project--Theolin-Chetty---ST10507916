/* =========================================================================
   Sibusiso Electrical & Plumbing Services
   Script: script.js
   WEDE5020 | Website Project | Part 3 | Theolin Chetty | ST10507916
   -------------------------------------------------------------------------
   Contents:
     1. Mobile navigation toggle (hamburger menu)                 [Part 1]
     2. Current-year footer stamp                                  [Part 1]
     3. Scroll-reveal animations (IntersectionObserver)             [Part 3]
     4. Services: dynamic render + category filter + sort           [Part 3]
     5. Gallery: dynamic render + filter/search + lightbox           [Part 3]
     6. Testimonials: dynamic render                                 [Part 3]
     7. FAQ accordion (services.html)                                [Part 3]
     8. Interactive Leaflet map (contact.html)                       [Part 3]
     9. Form validation + Netlify AJAX submission                   [Part 3]

   Every section below checks that its target elements exist before doing
   anything, so this one file can be safely loaded, unchanged, on every
   page of the site - each page only "activates" the sections relevant to
   the elements actually present in its HTML.

   Loaded with `defer`, after data.js, on every page - safe to query the
   DOM and to reference the SERVICES / GALLERY_ITEMS / TESTIMONIALS / FAQS
   arrays here.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================================
     1. Mobile navigation toggle
     ======================================================================= */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    var navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =======================================================================
     2. Footer "current year" stamp
     ======================================================================= */
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* =======================================================================
     3. Scroll-reveal animations
     Any element with the `.reveal` class fades/slides into view the first
     time it scrolls into the viewport. Respects `prefers-reduced-motion`
     (see the matching CSS rule in style.css, which disables the transition
     entirely for visitors with that OS setting on).

     `observeReveal(els)` is defined here and reused later (sections 4, 5,
     6) for cards that get created dynamically, after this initial pass
     has already run - a plain querySelectorAll at the top of the file
     would miss them entirely since they don't exist in the DOM yet.
     ======================================================================= */
  var canObserve = "IntersectionObserver" in window;
  var sharedRevealObserver = canObserve
    ? new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      )
    : null;

  function observeReveal(els) {
    els.forEach(function (el) {
      if (canObserve) {
        sharedRevealObserver.observe(el);
      } else {
        // No IntersectionObserver support: show everything immediately
        // rather than leaving content invisible.
        el.classList.add("is-visible");
      }
    });
  }

  observeReveal(document.querySelectorAll(".reveal"));

  /* =======================================================================
     4. Services: dynamic render + category filter + sort
     Target markup (services.html): #services-list, .service-filter-bar
     button[data-filter], #service-sort
     ======================================================================= */
  var servicesList = document.getElementById("services-list");

  if (servicesList && typeof SERVICES !== "undefined") {
    var serviceState = { filter: "all", sort: "default" };

    function renderServices() {
      var items = SERVICES.slice();

      if (serviceState.filter !== "all") {
        items = items.filter(function (s) {
          return s.category === serviceState.filter;
        });
      }

      if (serviceState.sort === "name-asc") {
        items.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      } else if (serviceState.sort === "category") {
        items.sort(function (a, b) {
          return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
        });
      }

      servicesList.innerHTML = "";

      if (items.length === 0) {
        var emptyMsg = document.createElement("p");
        emptyMsg.className = "form-hint";
        emptyMsg.textContent = "No services match that filter right now.";
        servicesList.appendChild(emptyMsg);
        return;
      }

      items.forEach(function (service) {
        var card = document.createElement("article");
        card.className = "service-card reveal";
        card.setAttribute("data-category", service.category);

        var h3 = document.createElement("h3");
        h3.textContent = service.name;

        var desc = document.createElement("p");
        desc.textContent = service.description;

        var cost = document.createElement("p");
        cost.className = "service-card__cost";
        cost.innerHTML = "<strong>Typical cost:</strong> " + service.typicalCost;

        card.appendChild(h3);
        card.appendChild(desc);
        card.appendChild(cost);
        servicesList.appendChild(card);
      });

      observeReveal(servicesList.querySelectorAll(".reveal"));
    }

    var filterButtons = document.querySelectorAll(".service-filter-bar button[data-filter]");
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        serviceState.filter = btn.getAttribute("data-filter");
        renderServices();
      });
    });

    var sortSelect = document.getElementById("service-sort");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        serviceState.sort = sortSelect.value;
        renderServices();
      });
    }

    renderServices();
  }

  /* =======================================================================
     5. Gallery: dynamic render + filter/search + lightbox
     Target markup (gallery.html): #gallery-grid, .gallery-filter-bar
     button[data-filter], #gallery-search, #lightbox (+ children)
     ======================================================================= */
  var galleryGrid = document.getElementById("gallery-grid");

  if (galleryGrid && typeof GALLERY_ITEMS !== "undefined") {
    var galleryState = { filter: "all", search: "" };
    var visibleItems = GALLERY_ITEMS.slice();

    function renderGallery() {
      visibleItems = GALLERY_ITEMS.filter(function (item) {
        var matchesFilter = galleryState.filter === "all" || item.category === galleryState.filter;
        var haystack = (item.title + " " + item.description + " " + item.location).toLowerCase();
        var matchesSearch = haystack.indexOf(galleryState.search.toLowerCase()) !== -1;
        return matchesFilter && matchesSearch;
      });

      galleryGrid.innerHTML = "";

      var resultsCount = document.getElementById("gallery-results-count");
      if (resultsCount) {
        resultsCount.textContent = visibleItems.length + (visibleItems.length === 1 ? " project found" : " projects found");
      }

      if (visibleItems.length === 0) {
        var emptyMsg = document.createElement("p");
        emptyMsg.className = "form-hint";
        emptyMsg.textContent = "No projects match your search. Try a different keyword or filter.";
        galleryGrid.appendChild(emptyMsg);
        return;
      }

      visibleItems.forEach(function (item, index) {
        var card = document.createElement("article");
        card.className = "gallery-card reveal";

        var media = document.createElement("div");
        media.className = "gallery-card__media";

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "gallery-card__open";
        btn.setAttribute("aria-label", "View larger photo: " + item.title);
        btn.setAttribute("data-index", String(index));

        var img = document.createElement("img");
        img.src = item.thumb;
        img.alt = item.alt;
        img.loading = "lazy";
        img.width = 400;
        img.height = 280;

        var tag = document.createElement("span");
        tag.className = "tag" + (item.category === "plumbing" ? " tag--plumbing" : "");
        tag.textContent = item.category === "plumbing" ? "Plumbing" : "Electrical";

        btn.appendChild(img);
        media.appendChild(btn);
        media.appendChild(tag);

        var body = document.createElement("div");
        body.className = "gallery-card__body";
        body.innerHTML =
          "<p class=\"location\">" + item.location + "</p>" +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.description + "</p>";

        card.appendChild(media);
        card.appendChild(body);
        galleryGrid.appendChild(card);

        btn.addEventListener("click", function () {
          openLightbox(index);
        });
      });

      observeReveal(galleryGrid.querySelectorAll(".reveal"));
    }

    var galleryFilterButtons = document.querySelectorAll(".gallery-filter-bar button[data-filter]");
    galleryFilterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        galleryFilterButtons.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        galleryState.filter = btn.getAttribute("data-filter");
        renderGallery();
      });
    });

    var searchInput = document.getElementById("gallery-search");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        galleryState.search = searchInput.value.trim();
        renderGallery();
      });
    }

    /* ---- Lightbox ---- */
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var lightboxCaption = document.getElementById("lightbox-caption");
    var lightboxClose = document.getElementById("lightbox-close");
    var lightboxPrev = document.getElementById("lightbox-prev");
    var lightboxNext = document.getElementById("lightbox-next");
    var currentLightboxIndex = 0;
    var lastFocusedEl = null;

    function openLightbox(index) {
      if (!lightbox) return;
      currentLightboxIndex = index;
      updateLightbox();
      lastFocusedEl = document.activeElement;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-locked");
      if (lightboxClose) lightboxClose.focus();
      document.addEventListener("keydown", onLightboxKeydown);
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-locked");
      document.removeEventListener("keydown", onLightboxKeydown);
      if (lastFocusedEl) lastFocusedEl.focus();
    }

    function updateLightbox() {
      var item = visibleItems[currentLightboxIndex];
      if (!item || !lightboxImg) return;
      lightboxImg.src = item.full;
      lightboxImg.alt = item.alt;
      if (lightboxCaption) {
        lightboxCaption.textContent = item.title + " - " + item.location;
      }
    }

    function showNext() {
      currentLightboxIndex = (currentLightboxIndex + 1) % visibleItems.length;
      updateLightbox();
    }

    function showPrev() {
      currentLightboxIndex = (currentLightboxIndex - 1 + visibleItems.length) % visibleItems.length;
      updateLightbox();
    }

    function onLightboxKeydown(event) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener("click", showNext);
    if (lightboxPrev) lightboxPrev.addEventListener("click", showPrev);
    if (lightbox) {
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeLightbox();
      });
    }

    renderGallery();
  }

  /* =======================================================================
     6. Testimonials: dynamic render
     Target markup (testimonials.html): #testimonials-list
     ======================================================================= */
  var testimonialsList = document.getElementById("testimonials-list");

  if (testimonialsList && typeof TESTIMONIALS !== "undefined") {
    TESTIMONIALS.forEach(function (t) {
      var card = document.createElement("div");
      card.className = "testimonial-card reveal";

      var stars = "";
      for (var i = 0; i < 5; i++) {
        stars += i < t.rating ? "★" : "☆";
      }

      var initials = t.name
        .split(" ")
        .map(function (part) { return part.charAt(0); })
        .join("")
        .toUpperCase();

      card.innerHTML =
        "<div class=\"stars\" aria-label=\"Rated " + t.rating + " out of 5 stars\">" + stars + "</div>" +
        "<p class=\"testimonial-card__quote\">\"" + t.quote + "\"</p>" +
        "<div class=\"testimonial-card__meta\">" +
          "<div class=\"avatar\" aria-hidden=\"true\">" + initials + "</div>" +
          "<div>" +
            "<span class=\"testimonial-name\">" + t.name + "</span>" +
            "<span class=\"testimonial-location\">" + t.location + "</span>" +
          "</div>" +
        "</div>";

      testimonialsList.appendChild(card);
    });

    // Re-observe the freshly-created .reveal cards using the single shared
    // observer set up in section 3 above (ran before these cards existed).
    observeReveal(testimonialsList.querySelectorAll(".reveal"));
  }

  /* =======================================================================
     7. FAQ accordion (services.html)
     Target markup: #faq-accordion > .accordion-item > button.accordion-trigger
     + .accordion-panel
     ======================================================================= */
  var faqAccordion = document.getElementById("faq-accordion");

  if (faqAccordion && typeof FAQS !== "undefined") {
    FAQS.forEach(function (faq, index) {
      var item = document.createElement("div");
      item.className = "accordion-item";

      var triggerId = "faq-trigger-" + index;
      var panelId = "faq-panel-" + index;

      item.innerHTML =
        "<h3 class=\"accordion-heading\">" +
          "<button type=\"button\" class=\"accordion-trigger\" id=\"" + triggerId + "\" aria-expanded=\"false\" aria-controls=\"" + panelId + "\">" +
            "<span>" + faq.question + "</span>" +
            "<span class=\"accordion-icon\" aria-hidden=\"true\">+</span>" +
          "</button>" +
        "</h3>" +
        "<div class=\"accordion-panel\" id=\"" + panelId + "\" role=\"region\" aria-labelledby=\"" + triggerId + "\" hidden>" +
          "<p>" + faq.answer + "</p>" +
        "</div>";

      faqAccordion.appendChild(item);
    });

    faqAccordion.addEventListener("click", function (event) {
      var trigger = event.target.closest(".accordion-trigger");
      if (!trigger) return;

      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!isExpanded));
      trigger.classList.toggle("is-active", !isExpanded);
      if (panel) {
        panel.hidden = isExpanded;
      }
    });
  }

  /* =======================================================================
     8. Interactive Leaflet map (contact.html)
     Target markup: #map-locations (a single map showing both locations).
     Leaflet is loaded via CDN <script>/<link> in contact.html; if it
     failed to load for any reason, `L` will be undefined and this section
     quietly does nothing rather than throwing an error.
     ======================================================================= */
  var mapEl = document.getElementById("map-locations");

  if (mapEl && typeof L !== "undefined") {
    var map = L.map("map-locations", { scrollWheelZoom: false }).setView([-26.148, 28.025], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    var locations = [
      {
        coords: [-26.2023, 28.0436],
        name: "Head Office & Workshop",
        address: "123 Empire Road, Johannesburg CBD",
      },
      {
        coords: [-26.0939, 28.0064],
        name: "Randburg Satellite Depot",
        address: "45 Republic Road, Randburg",
      },
    ];

    var bounds = [];
    locations.forEach(function (loc) {
      var marker = L.marker(loc.coords).addTo(map);
      marker.bindPopup("<strong>" + loc.name + "</strong><br />" + loc.address);
      bounds.push(loc.coords);
    });

    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    // Re-enable scroll-to-zoom only once the visitor has clicked into the
    // map, so an ordinary page-scroll doesn't get trapped by the map.
    map.on("click", function () {
      map.scrollWheelZoom.enable();
    });
  }

  /* =======================================================================
     9. Form validation + Netlify AJAX submission
     Applies to any <form> carrying `data-validate` (Enquiry + Contact).
     On a valid submit, the form is POSTed to Netlify via fetch() (see
     https://docs.netlify.com/forms/setup/#ajax-form-submissions) instead
     of doing a full page reload, and a page-specific success message is
     shown. If the fetch fails (e.g. the site isn't deployed on Netlify
     yet, or there's no network), the error is shown instead and nothing
     is lost - the visitor's filled-in values stay on screen.
     ======================================================================= */
  function encodeFormData(formEl) {
    var formData = new FormData(formEl);
    var params = new URLSearchParams();
    formData.forEach(function (value, key) {
      params.append(key, value);
    });
    return params.toString();
  }

  function submitToNetlify(formEl) {
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(formEl),
    });
  }

  var SERVICE_RESPONSES = {
    electrical: "Typical turnaround for electrical call-outs is same-day to next business day, with an indicative call-out fee from R450 (final quote confirmed on-site).",
    plumbing: "Typical turnaround for plumbing jobs is same-day to next business day, with an indicative call-out fee from R500 (final quote confirmed on-site).",
    both: "Since this covers both trades, we'll usually schedule one visit to assess both jobs together - typical turnaround is 1 to 2 business days.",
    emergency: "This has been flagged as an emergency call-out - typical response time is 60 to 90 minutes across our core Johannesburg service area.",
  };

  var forms = document.querySelectorAll("form[data-validate]");

  forms.forEach(function (form) {
    var statusBox = form.querySelector(".form-status");
    var submitBtn = form.querySelector("button[type=submit]");
    var mailtoLink = document.getElementById("contact-mailto-link");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var isValid = true;
      var fields = form.querySelectorAll("input[required], select[required], textarea[required]");

      fields.forEach(function (field) {
        var errorEl = document.getElementById(field.id + "-error");
        var fieldValid = field.checkValidity() && field.value.trim() !== "";

        if (!fieldValid) {
          isValid = false;
          field.classList.add("invalid");
          if (errorEl) errorEl.classList.add("is-visible");
        } else {
          field.classList.remove("invalid");
          if (errorEl) errorEl.classList.remove("is-visible");
        }
      });

      if (!statusBox) return;

      statusBox.classList.remove("form-status--success", "form-status--error");

      if (!isValid) {
        statusBox.textContent = "Please fill in all required fields correctly before submitting.";
        statusBox.classList.add("form-status--error", "is-visible");
        statusBox.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      submitToNetlify(form)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not OK (" + response.status + ")");
          }

          statusBox.classList.add("form-status--success", "is-visible");

          var serviceTypeField = form.querySelector("#service-type");
          if (serviceTypeField && serviceTypeField.value && SERVICE_RESPONSES[serviceTypeField.value]) {
            statusBox.textContent =
              "Thanks! Your enquiry has been received. " + SERVICE_RESPONSES[serviceTypeField.value];
          } else {
            statusBox.textContent = "Thanks! Your message has been sent. We'll get back to you shortly.";
          }

          // Contact page only: compile a mailto: link from the entered
          // fields so the visitor can also send the same message directly
          // from their own email client, addressed to the business.
          if (mailtoLink) {
            var nameVal = (form.querySelector("#contact-name") || {}).value || "";
            var emailVal = (form.querySelector("#contact-email") || {}).value || "";
            var typeVal = (form.querySelector("#contact-type") || {}).value || "General Enquiry";
            var messageVal = (form.querySelector("#contact-message") || {}).value || "";

            var subject = "Website Contact: " + typeVal;
            var body =
              "Name: " + nameVal + "\n" +
              "Email: " + emailVal + "\n" +
              "Type: " + typeVal + "\n\n" +
              messageVal;

            mailtoLink.href =
              "mailto:info@sibusisoelectricalplumbing.co.za" +
              "?subject=" + encodeURIComponent(subject) +
              "&body=" + encodeURIComponent(body);
            mailtoLink.hidden = false;
          }

          form.reset();
        })
        .catch(function () {
          statusBox.classList.add("form-status--error", "is-visible");
          statusBox.textContent =
            "Sorry, something went wrong sending your message. Please call us on 083 555 0142, or try again in a moment.";
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = form.getAttribute("data-submit-label") || "Send";
          }
          statusBox.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });

    // Remove the invalid state as soon as the visitor starts fixing a field
    var allFields = form.querySelectorAll("input, select, textarea");
    allFields.forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.checkValidity() && field.value.trim() !== "") {
          field.classList.remove("invalid");
          var errorEl = document.getElementById(field.id + "-error");
          if (errorEl) errorEl.classList.remove("is-visible");
        }
      });
    });
  });

});
