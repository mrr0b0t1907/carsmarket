(function () {
  "use strict";

  /* =================================================================
     PLACEHOLDER CONTACT DETAILS — replace with your real ones.
     WHATSAPP_NUMBER: digits only (country code + number, no +/spaces).
     ================================================================= */
  const WHATSAPP_NUMBER = "966546720452";
  const PHONE_DISPLAY = "+966 54 672 0452";
  const EMAIL_ADDRESS = "noemail@gmail.com";
  /* ================================================================= */

  /* =================================================================
     YOUR CAR PHOTOS
     Put your photo files in the /images folder next to index.html.
     Each car has a "photos" array — the FIRST path is the one shown
     on the card, and clicking the card opens all of them in a gallery.
     Add as many paths per car as you have photos for, e.g.:
       photos: ["images/dacia-duster-1.jpg", "images/dacia-duster-2.jpg"]
     Leave the array empty ( [] ) for a car you have no photos for yet
     — it will show a plain placeholder instead of a broken image.
     ================================================================= */
  const BRANDS = ["Dacia", "Kia", "Renault", "Hyundai", "Volkswagen", "Peugeot", "Toyota", "Mercedes-Benz", "Fiat", "Citroën"];

  const CARS = [
    { brand: "KIA", model: "Karnaval", year: 2022, dayRate: 38, fuel: "Diesel", trans: "Automatic", seats: 11, city: "madina", available: true,
      description: "A dependable, spacious SUV — good for city driving and longer road trips alike.",
      photos: ["images/vid.mp4"] },
    { brand: "KIA", model: "Sarento", year: 2023, dayRate: 29, fuel: "Diesel", trans: "Manual", seats: 7, city: "madina", available: true,
      description: "Compact and easy to park, with a bit of extra ground clearance for rougher roads.",
      photos: ["images/vid2.mp4"] },
    { brand: "Kia", model: "Santa Fe", year: 2023, dayRate: 52, fuel: "Diesel", trans: "Automatic", seats: 7, city: "madinah", available: true,
      description: "A comfortable mid-size SUV with automatic transmission, ideal for families.",
      photos: ["images/vid3.mp4"] },
    { brand: "Hyundai", model: "Elantra", year: 2022, dayRate: 24, fuel: "inconnu", trans: "inconnu", seats: 5, city: "madinah", available: true,
      description: "Our smallest and most affordable option — great for solo trips around town.",
      photos: ["images/hyundai1.jpg","images/hyundai2.jpg"] },
    { brand: "Hyundai", model: "Avante", year: 2022, dayRate: 31, fuel: "inconnu", trans: "inconnu", seats: 5, city: "madinah", available: true,
      description: "A reliable hatchback with low fuel consumption, well suited to daily errands.",
      photos: ["images/hyundai3.jpg"] },
    { brand: "Renault", model: "Megane", year: 2021, dayRate: 36, fuel: "Diesel", trans: "Manual", seats: 5, city: "Casablanca", available: true,
      description: "Roomier than the Clio, with a diesel engine that's efficient on longer drives.",
      photos: ["images/renault-megane-1.jpg"] },
    { brand: "Hyundai", model: "Tucson", year: 2023, dayRate: 55, fuel: "Diesel", trans: "Automatic", seats: 5, city: "Rabat", available: true,
      description: "A well-equipped SUV with automatic transmission and plenty of trunk space.",
      photos: ["images/hyundai-tucson-1.jpg", "images/hyundai-tucson-2.jpg", "images/hyundai-tucson-3.jpg"] },
    { brand: "Hyundai", model: "i10", year: 2022, dayRate: 23, fuel: "Petrol", trans: "Manual", seats: 4, city: "Marrakech", available: true,
      description: "Light, fuel-efficient, and simple to drive — a solid budget pick.",
      photos: ["images/hyundai-i10-1.jpg"] },
    { brand: "Volkswagen", model: "Golf", year: 2021, dayRate: 41, fuel: "Diesel", trans: "Manual", seats: 5, city: "Tangier", available: false,
      description: "A well-built hatchback known for comfort at higher speeds on the highway.",
      photos: ["images/vw-golf-1.jpg", "images/vw-golf-2.jpg"] },
    { brand: "Volkswagen", model: "Polo", year: 2023, dayRate: 34, fuel: "Petrol", trans: "Automatic", seats: 5, city: "Agadir", available: true,
      description: "Smaller than the Golf but similarly solid, with automatic transmission for easy driving.",
      photos: ["images/vw-polo-1.jpg"] },
    { brand: "Peugeot", model: "208", year: 2022, dayRate: 30, fuel: "Petrol", trans: "Manual", seats: 5, city: "Casablanca", available: true,
      description: "A stylish, modern hatchback that's easy to maneuver in city traffic.",
      photos: ["images/peugeot-208-1.jpg", "images/peugeot-208-2.jpg"] },
    { brand: "Peugeot", model: "3008", year: 2024, dayRate: 62, fuel: "Diesel", trans: "Automatic", seats: 5, city: "Rabat", available: true,
      description: "Our newest SUV — spacious, well-appointed, and comfortable for long trips.",
      photos: ["images/peugeot-3008-1.jpg", "images/peugeot-3008-2.jpg", "images/peugeot-3008-3.jpg"] },
    { brand: "Toyota", model: "Corolla", year: 2022, dayRate: 44, fuel: "Hybrid", trans: "Automatic", seats: 5, city: "Fes", available: true,
      description: "A hybrid sedan that's especially economical for longer rentals.",
      photos: ["images/toyota-corolla-1.jpg"] },
    { brand: "Toyota", model: "Yaris", year: 2023, dayRate: 33, fuel: "Petrol", trans: "Manual", seats: 5, city: "Marrakech", available: true,
      description: "Compact, reliable, and cheap to run — a popular everyday choice.",
      photos: ["images/toyota-yaris-1.jpg", "images/toyota-yaris-2.jpg"] },
    { brand: "Mercedes-Benz", model: "C-Class", year: 2021, dayRate: 78, fuel: "Diesel", trans: "Automatic", seats: 5, city: "Casablanca", available: true,
      description: "A premium sedan for clients who want extra comfort — automatic, diesel, well maintained.",
      photos: ["images/mercedes-cclass-1.jpg", "images/mercedes-cclass-2.jpg", "images/mercedes-cclass-3.jpg"] },
    { brand: "Fiat", model: "500", year: 2022, dayRate: 26, fuel: "Petrol", trans: "Manual", seats: 4, city: "Agadir", available: true,
      description: "A fun, compact city car that's very easy to park.",
      photos: ["images/fiat-500-1.jpg"] },
    { brand: "Citroën", model: "C3", year: 2023, dayRate: 29, fuel: "Petrol", trans: "Manual", seats: 5, city: "Tangier", available: true,
      description: "Comfortable seating and a smooth ride for a car in this price range.",
      photos: ["images/citroen-c3-1.jpg", "images/citroen-c3-2.jpg"] },
    { brand: "Kia", model: "Seltos", year: 2024, dayRate: 49, fuel: "Petrol", trans: "Automatic", seats: 5, city: "Rabat", available: true,
      description: "One of our newer arrivals — a compact SUV with automatic transmission.",
      photos: ["images/kia-seltos-1.jpg", "images/kia-seltos-2.jpg"] }
  ];

  let activeBrand = null;
  let currentList = [];   // the currently filtered/rendered list
  let modalCarIndex = -1; // index into currentList of the open car
  let modalPhotoIndex = 0;

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
    });
  }

  function waLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  /* wire up contact details */
  document.getElementById("nav-whatsapp").href = waLink("Hi! I'd like to ask about renting a car.");
  document.getElementById("float-whatsapp").href = waLink("Hi! I'd like to ask about renting a car.");
  document.getElementById("contact-whatsapp").href = waLink("Hi! I'd like to ask about renting a car.");
  document.getElementById("wa-number-display").textContent = PHONE_DISPLAY;
  document.getElementById("contact-phone").href = `tel:${WHATSAPP_NUMBER.replace(/^/, "+")}`;
  document.getElementById("phone-number-display").textContent = PHONE_DISPLAY;
  document.getElementById("contact-email").href = `mailto:${EMAIL_ADDRESS}`;
  document.getElementById("email-display").textContent = EMAIL_ADDRESS;

  /* brand chips */
  const chipRow = document.getElementById("brand-chips");
  function renderChips() {
    let html = `<button class="chip${activeBrand === null ? " active" : ""}" data-brand="">All brands</button>`;
    BRANDS.forEach(b => {
      html += `<button class="chip${activeBrand === b ? " active" : ""}" data-brand="${escapeHTML(b)}">${escapeHTML(b)}</button>`;
    });
    chipRow.innerHTML = html;
  }
  chipRow.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeBrand = btn.dataset.brand || null;
    renderChips();
    renderCars();
  });

  function noPhotoMarkup() {
    return `
      <div class="no-photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 17l-5.5-5.5L11 16l-2.5-2.5L3 19"/></svg>
        <span>Photo coming soon</span>
      </div>`;
  }

  /* is this file a video? checked by extension so photos and
     videos can be mixed freely in the same "photos" list */
  function isVideo(path) {
    return /\.(mp4|webm|mov|m4v|ogg)$/i.test(path);
  }

  /* returns the right tag (<img> or <video>) for one media item.
     opts.autoplay: small silent looping preview (used on cards).
     opts.controls: full playback controls (used in the modal). */
  function mediaTag(path, alt, opts) {
    opts = opts || {};
    if (isVideo(path)) {
      const attrs = [
        "muted", "playsinline",
        opts.autoplay ? "autoplay loop" : "",
        opts.controls ? "controls" : "",
        "preload=\"metadata\""
      ].filter(Boolean).join(" ");
      return `<video src="${escapeHTML(path)}" ${attrs} onerror="window.__handleMissingPhoto(this)"></video>`;
    }
    return `<img src="${escapeHTML(path)}" alt="${escapeHTML(alt)}" onerror="window.__handleMissingPhoto(this)">`;
  }

  window.__handleMissingPhoto = function (imgEl) {
    imgEl.outerHTML = `
      <div class="no-photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 17l-5.5-5.5L11 16l-2.5-2.5L3 19"/></svg>
        <span>Photo coming soon</span>
      </div>`;
  };

  /* render cars */
  const grid = document.getElementById("car-grid");
  const resultCount = document.getElementById("result-count");
  const searchInput = document.getElementById("search-input");

  function waIconSmall() {
    return `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.24 1.63 6.02L4 29l8.2-1.57a12.9 12.9 0 0 0 3.82.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3Zm5.46 13.52c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47a8.9 8.9 0 0 1-1.63-2.03c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>`;
  }

  function matches(car, query) {
    if (activeBrand && car.brand !== activeBrand) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return car.brand.toLowerCase().includes(q) || car.model.toLowerCase().includes(q);
  }

  function renderCars() {
    const query = searchInput.value.trim();
    currentList = CARS.filter(c => matches(c, query));
    resultCount.textContent = `${currentList.length} car${currentList.length === 1 ? "" : "s"}`;

    if (currentList.length === 0) {
      grid.innerHTML = `<div class="empty-state">No cars match that search. Try a different brand.</div>`;
      return;
    }

    grid.innerHTML = currentList.map((c, i) => {
      const cover = c.photos && c.photos[0];
      const media = cover
        ? mediaTag(cover, `${c.brand} ${c.model}`, { autoplay: true })
        : noPhotoMarkup();
      return `
      <article class="card" data-index="${i}" role="button" tabindex="0" aria-label="View details for ${escapeHTML(c.brand)} ${escapeHTML(c.model)}">
        <div class="card-media">
          <span class="tag-avail">${c.available ? "Available now" : "Currently rented"}</span>
          <span class="tag-year">${c.year}</span>
          ${media}
        </div>
        <div class="card-body">
          <div class="card-title"><h3>${escapeHTML(c.brand)} ${escapeHTML(c.model)}</h3></div>
          <div class="price mono">$${c.dayRate} <span>/ day</span></div>
          <div class="specs">
            <span>${escapeHTML(c.fuel)}</span>
            <span>${escapeHTML(c.trans)}</span>
            <span>${escapeHTML(c.city)}</span>
          </div>
          <div class="card-footer">
            <span class="city">Tap for details</span>
            <button class="book-btn" data-book-index="${i}">${waIconSmall()}Book</button>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  /* clicking a card (but not its Book button) opens the detail modal */
  grid.addEventListener("click", e => {
    const bookBtn = e.target.closest(".book-btn");
    if (bookBtn) {
      const i = Number(bookBtn.dataset.bookIndex);
      const c = currentList[i];
      if (c) window.open(waLink(`Hi! I'd like to rent the ${c.brand} ${c.model} (${c.year}) listed at $${c.dayRate}/day.`), "_blank");
      return;
    }
    const card = e.target.closest(".card");
    if (card) openCarModal(Number(card.dataset.index));
  });
  grid.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (card) { e.preventDefault(); openCarModal(Number(card.dataset.index)); }
  });

  /* ---------------- car detail modal ---------------- */
  const carModal = document.getElementById("car-modal");
  const modalMainPhoto = document.getElementById("modal-main-photo");
  const modalThumbs = document.getElementById("modal-thumbs");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalSpecs = document.getElementById("modal-specs");
  const modalDesc = document.getElementById("modal-description");
  const modalBookBtn = document.getElementById("modal-book-btn");
  const modalAvail = document.getElementById("modal-avail");

  function renderModalPhoto() {
    const car = currentList[modalCarIndex];
    const photos = (car.photos && car.photos.length) ? car.photos : [];
    if (photos.length === 0) {
      modalMainPhoto.innerHTML = noPhotoMarkup();
      return;
    }
    const src = photos[modalPhotoIndex];
    modalMainPhoto.innerHTML = mediaTag(src, `${car.brand} ${car.model}`, { controls: true });
  }

  function renderModalThumbs() {
    const car = currentList[modalCarIndex];
    const photos = (car.photos && car.photos.length) ? car.photos : [];
    if (photos.length <= 1) { modalThumbs.innerHTML = ""; modalThumbs.style.display = "none"; return; }
    modalThumbs.style.display = "flex";
    modalThumbs.innerHTML = photos.map((p, idx) => `
      <button class="thumb${idx === modalPhotoIndex ? " active" : ""}${isVideo(p) ? " video" : ""}" data-photo-index="${idx}" aria-label="${isVideo(p) ? "Video" : "Photo"} ${idx + 1}">
        ${isVideo(p)
          ? `<video src="${escapeHTML(p)}" muted preload="metadata" onerror="this.style.display='none'"></video>`
          : `<img src="${escapeHTML(p)}" alt="" onerror="this.style.display='none'">`}
      </button>`).join("");
  }

  function openCarModal(index) {
    modalCarIndex = index;
    modalPhotoIndex = 0;
    const car = currentList[index];
    if (!car) return;

    modalTitle.textContent = `${car.brand} ${car.model}`;
    modalPrice.innerHTML = `$${car.dayRate} <span>/ day</span>`;
    modalAvail.textContent = car.available ? "Available now" : "Currently rented";
    modalAvail.classList.toggle("unavailable", !car.available);
    modalDesc.textContent = car.description || "";
    modalSpecs.innerHTML = `
      <div><span class="label">Year</span><span class="value">${car.year}</span></div>
      <div><span class="label">Fuel</span><span class="value">${escapeHTML(car.fuel)}</span></div>
      <div><span class="label">Transmission</span><span class="value">${escapeHTML(car.trans)}</span></div>
      <div><span class="label">Seats</span><span class="value">${car.seats}</span></div>
      <div><span class="label">Location</span><span class="value">${escapeHTML(car.city)}</span></div>
    `;
    modalBookBtn.href = waLink(`Hi! I'd like to rent the ${car.brand} ${car.model} (${car.year}) listed at $${car.dayRate}/day.`);

    renderModalPhoto();
    renderModalThumbs();

    carModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCarModal() {
    carModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  modalThumbs.addEventListener("click", e => {
    const btn = e.target.closest(".thumb");
    if (!btn) return;
    modalPhotoIndex = Number(btn.dataset.photoIndex);
    renderModalPhoto();
    renderModalThumbs();
  });

  document.getElementById("modal-prev").addEventListener("click", () => {
    const car = currentList[modalCarIndex];
    const count = (car.photos && car.photos.length) || 0;
    if (count < 2) return;
    modalPhotoIndex = (modalPhotoIndex - 1 + count) % count;
    renderModalPhoto();
    renderModalThumbs();
  });
  document.getElementById("modal-next").addEventListener("click", () => {
    const car = currentList[modalCarIndex];
    const count = (car.photos && car.photos.length) || 0;
    if (count < 2) return;
    modalPhotoIndex = (modalPhotoIndex + 1) % count;
    renderModalPhoto();
    renderModalThumbs();
  });

  document.getElementById("modal-close").addEventListener("click", closeCarModal);
  carModal.addEventListener("click", e => { if (e.target === carModal) closeCarModal(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && carModal.classList.contains("open")) closeCarModal();
  });

  searchInput.addEventListener("input", renderCars);
  document.getElementById("search-btn").addEventListener("click", renderCars);

  /* contact form validation (client-side only — a real deployment
     needs a server endpoint to actually receive these messages) */
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  function showError(inputId, errId, show) {
    document.getElementById(errId).classList.toggle("show", show);
    document.getElementById(inputId).style.borderColor = show ? "var(--danger)" : "";
  }
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById("f-name").value.trim();
    if (name.length < 1) { showError("f-name", "err-name", true); valid = false; } else showError("f-name", "err-name", false);
    const email = document.getElementById("f-email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { showError("f-email", "err-email", true); valid = false; } else showError("f-email", "err-email", false);
    const message = document.getElementById("f-message").value.trim();
    if (message.length < 1) { showError("f-message", "err-message", true); valid = false; } else showError("f-message", "err-message", false);
    if (!valid) return;
    form.reset();
    showToast("Message sent — we'll get back to you shortly.");
  });

  renderChips();
  renderCars();
})();
