document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE (Client-Side) --- //
    const db = {
        sliderImages: [
            'https://i.pinimg.com/1200x/49/13/05/4913059a115dab4f42aae043dbf22f05.jpg',
            'images/slider-2.jpg',
            'images/slider-3.jpg',
        ],
        attractions: [
            { name: 'Médina de Fès', description: 'La plus ancienne médina du monde, classée UNESCO.', image: 'images/attraction-medina.jpg' },
            { name: 'Tanneries Chouara', description: 'Tanneries traditionnelles datant du XIe siècle.', image: 'images/attraction-tanneries.jpg' },
            { name: 'Université Al Quaraouiyine', description: 'Plus ancienne université du monde en activité.', image: 'images/attraction-university.jpg' },
        ],
        accommodations: [
            { id: 1, name: 'Riad Fès - Relais & Châteaux', type: 'Riad', price: 2500, rating: 5, image: 'images/accom-1.jpg' },
            { id: 2, name: 'Hôtel Sahrai', type: 'Hôtel', price: 3000, rating: 5, image: 'images/accom-2.jpg' },
            { id: 3, name: 'Funky Fes Hostel', type: 'Auberge', price: 300, rating: 4, image: 'images/accom-3.jpg' },
            { id: 4, name: 'Palais Amani', type: 'Riad', price: 2200, rating: 4.5, image: 'images/accom-4.jpg' },
            { id: 5, name: 'Fes Marriott Hotel Jnan Palace', type: 'Hôtel', price: 1800, rating: 4, image: 'images/accom-5.jpg' },
            { id: 6, name: 'Riad Braya', type: 'Riad', price: 1500, rating: 4.5, image: 'images/accom-6.jpg' },
            { id: 7, name: 'Dar El Mandar', type: 'Auberge', price: 450, rating: 3.5, image: 'images/accom-7.jpg' },
            { id: 8, name: 'Hotel & Spa Dar Bensouda', type: 'Hôtel', price: 1900, rating: 4, image: 'images/accom-8.jpg' },
        ],
        transportOptions: [
            { id: 1, type: 'Bus de Ville', description: 'Le moyen le plus économique pour se déplacer dans la ville et atteindre les principaux sites.', fare: 'À partir de 4 DH', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-9-8.494h18m-18 5h18M5 12.753h14M5 12.753V6.253a2 2 0 012-2h10a2 2 0 012 2v6.5m-14 0v4.5a2 2 0 002 2h10a2 2 0 002-2v-4.5" /></svg>` },
            { id: 2, type: 'Petit Taxi (Rouge)', description: 'Idéal pour des trajets courts et rapides en ville. Utilise un compteur pour le tarif.', fare: 'Course min. 7 DH', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>` },
            { id: 3, type: 'Grand Taxi (Blanc)', description: 'Pour les trajets plus longs, vers la périphérie de la ville, l\'aéroport ou d\'autres villes.', fare: 'Tarif fixe/négocié', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>` },
            { id: 4, type: 'Navettes CAN', description: 'Des navettes spéciales seront mises en place pour relier les hôtels, le centre-ville et le stade.', fare: 'À confirmer', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h14" /></svg>` },
        ],
        icons: {
            star: `<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`,
            starEmpty: `<svg class="empty" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`
        }
    };

    // --- STATE --- //
    let state = {
        currentPage: 'home',
        accommodations: {
            filterType: 'all',
            sortOrder: 'price_asc',
            priceRange: 3000
        },
        slider: {
            currentSlide: 0,
            interval: null
        }
    };

    // --- SELECTORS --- //
    const DOMElements = {
        navLinks: document.querySelectorAll('.nav-link'),
        pages: document.querySelectorAll('.page'),
        // Home
        sliderInner: document.querySelector('.slider-inner'),
        attractionsGrid: document.getElementById('attractions-grid'),
        // Accommodations
        accommodationsGrid: document.getElementById('accommodations-grid'),
        typeFilter: document.getElementById('type-filter'),
        sortOrder: document.getElementById('sort-order'),
        priceRange: document.getElementById('price-range'),
        priceValue: document.getElementById('price-value'),
        // Transport
        transportOptionsContainer: document.getElementById('transport-options'),
    };

    // --- RENDER FUNCTIONS --- //
    const renderHomePage = () => {
        // Slider
        if (DOMElements.sliderInner) {
            DOMElements.sliderInner.innerHTML = db.sliderImages.map((src, index) =>
                `<div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${src}')"></div>`
            ).join('');
        }
        // Attractions
        if (DOMElements.attractionsGrid) {
            DOMElements.attractionsGrid.innerHTML = db.attractions.map(attraction => `
                <div class="attraction-card">
                    <img src="${attraction.image}" alt="${attraction.name}">
                    <div class="card-content">
                        <h3>${attraction.name}</h3>
                        <p>${attraction.description}</p>
                    </div>
                </div>
            `).join('');
        }
    };
    
    const renderAccommodations = () => {
        if (!DOMElements.accommodationsGrid) return;

        const { filterType, sortOrder, priceRange } = state.accommodations;
        
        const filtered = db.accommodations
            .filter(acc => acc.price <= priceRange)
            .filter(acc => filterType === 'all' || acc.type === filterType);

        const sorted = filtered.sort((a, b) => {
            if (sortOrder === 'price_asc') return a.price - b.price;
            if (sortOrder === 'price_desc') return b.price - a.price;
            if (sortOrder === 'rating') return b.rating - a.rating;
            return 0;
        });

        DOMElements.accommodationsGrid.innerHTML = sorted.map(acc => {
            const ratingStars = Array.from({ length: 5 }, (_, i) => 
                i < Math.round(acc.rating) ? db.icons.star : db.icons.starEmpty
            ).join('');
            
            return `
            <div class="accommodation-card">
                <img src="${acc.image}" alt="${acc.name}">
                <div class="card-content">
                    <span class="type-badge">${acc.type}</span>
                    <h3>${acc.name}</h3>
                    <div class="card-footer">
                        <div class="rating">${ratingStars}</div>
                        <p class="price">${acc.price} DH<span>/nuit</span></p>
                    </div>
                </div>
            </div>
        `}).join('');
    };

    const renderTransportPage = () => {
        if (!DOMElements.transportOptionsContainer) return;
        DOMElements.transportOptionsContainer.innerHTML = db.transportOptions.map(option => `
            <div class="transport-option">
                <div class="transport-icon-wrapper">${option.icon}</div>
                <div>
                    <h3>${option.type}</h3>
                    <p>${option.description}</p>
                    <p class="fare">${option.fare}</p>
                </div>
            </div>
        `).join('');
    };

    // --- NAVIGATION --- //
    const navigateTo = (pageId) => {
        state.currentPage = pageId;
        DOMElements.pages.forEach(p => {
            p.classList.add('hidden');
            p.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if(targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
        }

        DOMElements.navLinks.forEach(link => {
            link.classList.toggle('active', link.hash === `#${pageId}`);
        });
        window.scrollTo(0, 0);
    };

    DOMElements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.currentTarget.hash.substring(1);
            navigateTo(pageId);
        });
    });

    // --- SLIDER LOGIC --- //
    const startSlider = () => {
        if (!DOMElements.sliderInner) return;
        
        state.slider.interval = setInterval(() => {
            const slides = document.querySelectorAll('.slide');
            if (slides.length === 0) return;
            slides[state.slider.currentSlide].classList.remove('active');
            state.slider.currentSlide = (state.slider.currentSlide + 1) % slides.length;
            slides[state.slider.currentSlide].classList.add('active');
        }, 5000);
    };

    // --- EVENT LISTENERS --- //
    if(DOMElements.typeFilter) {
        DOMElements.typeFilter.addEventListener('change', (e) => {
            state.accommodations.filterType = e.target.value;
            renderAccommodations();
        });
    }

    if(DOMElements.sortOrder) {
        DOMElements.sortOrder.addEventListener('change', (e) => {
            state.accommodations.sortOrder = e.target.value;
            renderAccommodations();
        });
    }
    
    if(DOMElements.priceRange) {
        DOMElements.priceRange.addEventListener('input', (e) => {
            state.accommodations.priceRange = Number(e.target.value);
            DOMElements.priceValue.textContent = e.target.value;
            renderAccommodations();
        });
    }


    // --- INITIALIZATION --- //
    const init = () => {
        renderHomePage();
        renderAccommodations();
        renderTransportPage();
        navigateTo('home');
        startSlider();
    };

    init();
});
