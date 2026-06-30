/* =============================================================================
   main.js — renders content.js into the page and handles interactions.
   You normally DON'T need to edit this file. Edit content.js for wording.
   ============================================================================= */

(function () {
  "use strict";

  // Helper: get a nested value like "meta.name" from CONTENT
  function get(path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? undefined : o[k];
    }, CONTENT);
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // 1) Fill all [data-bind] elements
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var val = get(el.getAttribute("data-bind"));
    if (val != null) el.textContent = val;
  });

  // Brand falls back to the name
  var brand = document.querySelector(".nav__brand");
  if (brand && !brand.textContent.trim()) brand.textContent = CONTENT.meta.name;

  // 2) Hero photo + page title
  var heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto) {
    heroPhoto.src = CONTENT.hero.photo;
    heroPhoto.alt = "Portrait of " + CONTENT.meta.name;
  }
  document.title = CONTENT.meta.name + " — " + CONTENT.meta.title;

  // 3) About paragraphs + stats
  var aboutText = document.getElementById("aboutText");
  if (aboutText) {
    aboutText.innerHTML = CONTENT.about.paragraphs
      .map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }
  var aboutIcons = document.getElementById("aboutIcons");
  if (aboutIcons && CONTENT.about.icons) {
    aboutIcons.innerHTML = CONTENT.about.icons.map(function (ic) {
      return '<img class="about__icon" src="' + esc(ic.src) + '" alt="' + esc(ic.alt || "") + '" loading="lazy">';
    }).join("");
  }
  var aboutStats = document.getElementById("aboutStats");
  if (aboutStats) {
    aboutStats.innerHTML = (CONTENT.about.stats || []).map(function (s) {
      return '<div class="about__stat reveal"><div class="v">' + esc(s.value) +
        '</div><div class="l">' + esc(s.label) + "</div></div>";
    }).join("");
  }

  // 4) Experience
  var expList = document.getElementById("experienceList");
  if (expList) {
    expList.innerHTML = CONTENT.experience.jobs.map(function (j) {
      return '' +
        '<article class="job reveal">' +
          '<div class="job__meta">' +
            '<span class="company">' + esc(j.company) + "</span>" +
            '<span class="timeline-date">' + esc(j.timeline) + "</span>" +
          "</div>" +
          "<div>" +
            '<p class="job__role">' + esc(j.role) + "</p>" +
            '<p class="job__desc">' + esc(j.description) + "</p>" +
            (function () {
              var arr = j.links || (j.link ? [{ label: j.linkLabel, url: j.link }] : []);
              if (!arr.length) return "";
              return '<div class="job__links">' + arr.map(function (lk) {
                return '<a class="job__link" href="' + esc(lk.url) + '" target="_blank" rel="noopener">' + esc(lk.label || "View") + " ↗</a>";
              }).join("") + "</div>";
            })() +
          "</div>" +
        "</article>";
    }).join("");
  }

  // 5) Skills
  var skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = CONTENT.skills.categories.map(function (c) {
      var items = c.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
      return '<div class="skill-card reveal"><h3>' + esc(c.name) +
        "</h3><ul>" + items + "</ul></div>";
    }).join("");
  }

  // 6) Projects
  var projectsList = document.getElementById("projectsList");
  if (projectsList) {
    projectsList.innerHTML = CONTENT.projects.items.map(function (p) {
      var tags = (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      return '' +
        '<article class="project reveal">' +
          '<h3 class="project__title">' + esc(p.title) + "</h3>" +
          '<p class="project__summary">' + esc(p.summary) + "</p>" +
          '<div class="project__detail-grid">' +
            '<div class="project__detail"><h4>Context</h4><p>' + esc(p.context) + "</p></div>" +
            '<div class="project__detail"><h4>Data</h4><p>' + esc(p.data) + "</p></div>" +
            '<div class="project__detail"><h4>Results</h4><p>' + esc(p.results) + "</p></div>" +
          "</div>" +
          '<div class="project__tags">' + tags + "</div>" +
          (function () {
            var arr = p.links || [];
            if (!arr.length) return "";
            return '<div class="job__links">' + arr.map(function (lk) {
              return '<a class="job__link" href="' + esc(lk.url) + '" target="_blank" rel="noopener">' + esc(lk.label || "View") + " ↗</a>";
            }).join("") + "</div>";
          })() +
        "</article>";
    }).join("");
  }

  // 7) Education
  var eduList = document.getElementById("educationList");
  if (eduList) {
    eduList.innerHTML = CONTENT.education.items.map(function (e) {
      return '<div class="edu-card reveal">' +
        '<p class="degree">' + esc(e.degree) + "</p>" +
        '<p class="school">' + esc(e.school) + "</p>" +
        '<p class="when">' + esc(e.timeline) + "</p></div>";
    }).join("");
  }

  // 8) Leadership + photo gallery
  function leadCardsHTML(items) {
    return (items || []).map(function (l) {
      return '<article class="lead-card reveal">' +
        '<div class="lead-card__top">' +
          '<span class="role">' + esc(l.role) + "</span>" +
          '<span class="org">' + esc(l.org) + "</span>" +
          '<span class="when">' + esc(l.timeline) + "</span>" +
        "</div>" +
        '<p class="desc">' + esc(l.description) + "</p></article>";
    }).join("");
  }
  var leadList = document.getElementById("leadershipList");
  if (leadList) leadList.innerHTML = leadCardsHTML(CONTENT.leadership.items);
  var leadListBelow = document.getElementById("leadershipListBelow");
  if (leadListBelow) leadListBelow.innerHTML = leadCardsHTML(CONTENT.leadership.itemsBelow);
  var gallery = document.getElementById("leadershipGallery");
  if (gallery) {
    var placeholderSvg =
      '<div class="lead-photo__placeholder">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<path d="m21 15-5-5L5 21"/></svg><span>Add a photo in content.js</span></div>';
    gallery.innerHTML = (CONTENT.leadership.photos || []).map(function (ph) {
      if (ph.src) {
        return '<figure class="lead-photo reveal"><img src="' + esc(ph.src) +
          '" alt="' + esc(ph.caption || "Leadership photo") + '" loading="lazy">' +
          (ph.caption ? '<figcaption class="lead-photo__caption">' + esc(ph.caption) + "</figcaption>" : "") +
          "</figure>";
      }
      return '<figure class="lead-photo reveal">' + placeholderSvg + "</figure>";
    }).join("");
  }

  // 9) Resume links + inline viewer
  var dl = document.getElementById("resumeDownload");
  if (dl) { dl.href = CONTENT.resume.file; dl.textContent = CONTENT.resume.downloadLabel; }
  var rv = document.getElementById("resumeView");
  if (rv) { rv.href = CONTENT.resume.file; rv.textContent = CONTENT.resume.viewLabel; }
  var frame = document.getElementById("resumeFrame");
  if (frame) frame.src = CONTENT.resume.file + "#view=FitH";

  // 10) Contact cards
  var contactCards = document.getElementById("contactCards");
  if (contactCards) {
    var mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
    var liIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>';
    contactCards.innerHTML =
      '<a class="contact-card reveal" href="mailto:' + esc(CONTENT.contact.email) + '">' +
        '<span class="contact-card__icon">' + mailIcon + "</span>" +
        '<span><span class="k">Email</span><br><span class="v">' + esc(CONTENT.contact.email) + "</span></span></a>" +
      '<a class="contact-card reveal" href="' + esc(CONTENT.contact.linkedin) + '" target="_blank" rel="noopener">' +
        '<span class="contact-card__icon">' + liIcon + "</span>" +
        '<span><span class="k">LinkedIn</span><br><span class="v">' + esc(CONTENT.contact.linkedinLabel) + "</span></span></a>";
  }

  // Footer year
  var fy = document.getElementById("footerYear");
  if (fy) fy.textContent = "© " + new Date().getFullYear() + " " + CONTENT.meta.name;

  // --- Navbar scroll state ---
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Mobile menu ---
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Reveal on scroll ---
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
