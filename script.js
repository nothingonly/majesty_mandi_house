// Majesty Mandi House - Core JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(33, 21, 18, 0.98)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(33, 21, 18, 0.95)';
        }
    });

    // 2. Load Today's Special
    function loadSpecial() {
        const specialName = document.getElementById('special-name');
        const specialDesc = document.getElementById('special-desc');
        const specialPrice = document.getElementById('special-price');
        const specialOffer = document.getElementById('special-offer');
        
        const savedSpecial = JSON.parse(localStorage.getItem('majestySpecial'));
        
        if (savedSpecial) {
            specialName.textContent = savedSpecial.name;
            specialDesc.textContent = savedSpecial.desc;
            specialPrice.textContent = '₹' + savedSpecial.price;
            specialOffer.textContent = savedSpecial.offer;
        } else {
            // Default special
            specialName.textContent = "Family Mandi Platter";
            specialDesc.textContent = "A royal platter featuring a mix of our finest grilled meats and authentic fragrant rice, perfect for 4 people.";
            specialPrice.textContent = "₹850";
            specialOffer.textContent = "Includes 2 Free Starters";
        }
    }
    loadSpecial();

    // 3. Menu Data & Rendering
    const menuData = [
        { name: "Traditional Chicken Mandi", category: "mandi", price: 300, desc: "Fragrant rice with slow-cooked tender chicken.", popular: true },
        { name: "Traditional Mutton Mandi", category: "mandi", price: 350, desc: "Authentic Arabian style rice with juicy mutton.", popular: true },
        { name: "Fish Mandi", category: "mandi", price: 320, desc: "Flavorful mandi rice served with spiced grilled fish." },
        { name: "Chilli Chicken", category: "chicken-start", price: 240, desc: "Spicy Indo-Chinese style chicken bites.", popular: true },
        { name: "Chicken 65", category: "chicken-start", price: 260, desc: "Classic deep-fried spicy chicken." },
        { name: "Chicken Majestic", category: "chicken-start", price: 260, desc: "Tender chicken strips tossed in yogurt and spices.", popular: true },
        { name: "Dragon Chicken", category: "chicken-start", price: 260, desc: "Sweet and spicy chicken strips." },
        { name: "Ginger Chicken", category: "chicken-start", price: 260, desc: "Chicken flavored heavily with fresh ginger." },
        { name: "Chicken Lollipop", category: "chicken-start", price: 240, desc: "Crispy coated chicken wings." },
        { name: "Paneer 65", category: "veg-start", price: 250, desc: "Spicy and tangy fried paneer cubes.", popular: true },
        { name: "Paneer Manchuria", category: "veg-start", price: 250, desc: "Paneer in savory Manchurian sauce." },
        { name: "Babycorn Chilli", category: "veg-start", price: 220, desc: "Crispy baby corn tossed in chilli sauce." },
        { name: "Grilled Chicken (Half)", category: "grilled", price: 350, desc: "Charcoal grilled marinated chicken." },
        { name: "Special Family Mandi Platter", category: "combos", price: 900, desc: "Massive platter with mix meats, enough for a family.", popular: true }
    ];

    const menuGrid = document.getElementById('menu-grid');
    
    function renderMenu(items) {
        menuGrid.innerHTML = '';
        if(items.length === 0){
            menuGrid.innerHTML = '<p>No items found matching your search.</p>';
            return;
        }
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = `menu-item ${item.category}`;
            div.innerHTML = `
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
                ${item.popular ? '<span class="popular-badge"><i class="fas fa-fire"></i> Popular</span>' : ''}
            `;
            menuGrid.appendChild(div);
        });
    }

    renderMenu(menuData);

    // Menu Filtering
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            if(filter === 'all'){
                renderMenu(menuData);
            } else {
                const filtered = menuData.filter(item => item.category === filter);
                renderMenu(filtered);
            }
        });
    });

    // Menu Search
    const searchInput = document.getElementById('menu-search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const activeCat = document.querySelector('.cat-btn.active').getAttribute('data-filter');
        
        let filtered = menuData;
        if(activeCat !== 'all') {
            filtered = filtered.filter(item => item.category === activeCat);
        }
        
        filtered = filtered.filter(item => item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term));
        renderMenu(filtered);
    });

    // 4. Lightbox for Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox-close');
    const galleryImgs = document.querySelectorAll('.gallery-img');

    galleryImgs.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.style.display = 'none';
    });

    // 5. Pre-order WhatsApp Generation
    const preOrderForm = document.getElementById('preorder-form');
    preOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('order-name').value;
        const phone = document.getElementById('order-phone').value;
        const details = document.getElementById('order-details').value;
        const time = document.getElementById('order-time').value;
        
        const message = `*NEW PRE-ORDER*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Pickup Time:* ${time}%0A%0A*Order Details:*%0A${details}%0A%0A_Generated via Majesty Website_`;
        
        window.open(`https://wa.me/918121213533?text=${message}`, '_blank');
        preOrderForm.reset();
    });

    // 6. Loyalty Tracker Simulation
    const simulateBtn = document.getElementById('simulate-order');
    const pointsCount = document.getElementById('points-count');
    const trackerFill = document.getElementById('tracker-fill');
    
    // Load from local storage or set to 3
    let currentPoints = parseInt(localStorage.getItem('majestyPoints')) || 3;
    
    function updateTracker() {
        pointsCount.textContent = currentPoints;
        trackerFill.style.width = (currentPoints * 10) + '%';
        if(currentPoints >= 10){
            alert("Congratulations! You've earned a FREE Mandi! Show this to the cashier.");
            currentPoints = 0; // reset
            localStorage.setItem('majestyPoints', currentPoints);
        }
    }
    
    updateTracker();

    simulateBtn.addEventListener('click', () => {
        currentPoints++;
        localStorage.setItem('majestyPoints', currentPoints);
        updateTracker();
    });

    // 7. Feedback Form (Local Storage)
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('feed-name').value;
        const phone = document.getElementById('feed-phone').value;
        const rating = document.getElementById('feed-rating').value;
        const message = document.getElementById('feed-message').value;
        
        const feedback = {
            id: Date.now(),
            name, phone, rating, message, date: new Date().toLocaleDateString()
        };
        
        let allFeedback = JSON.parse(localStorage.getItem('majestyFeedback')) || [];
        allFeedback.push(feedback);
        localStorage.setItem('majestyFeedback', JSON.stringify(allFeedback));
        
        document.getElementById('feedback-success').style.display = 'block';
        feedbackForm.reset();
        
        setTimeout(() => {
            document.getElementById('feedback-success').style.display = 'none';
        }, 4000);
    });

    // 8. Lead Collection Popup (15 seconds)
    const leadPopup = document.getElementById('lead-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const leadForm = document.getElementById('lead-form');
    
    // Only show once per session
    if(!sessionStorage.getItem('leadPopupShown')){
        setTimeout(() => {
            leadPopup.style.display = 'flex';
        }, 15000);
    }

    closePopupBtn.addEventListener('click', () => {
        leadPopup.style.display = 'none';
        sessionStorage.setItem('leadPopupShown', 'true');
    });

    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('lead-name').value;
        const phone = document.getElementById('lead-phone').value;
        
        const lead = { name, phone, date: new Date().toLocaleDateString() };
        
        let allLeads = JSON.parse(localStorage.getItem('majestyLeads')) || [];
        allLeads.push(lead);
        localStorage.setItem('majestyLeads', JSON.stringify(allLeads));
        
        document.getElementById('lead-success').style.display = 'block';
        leadForm.reset();
        sessionStorage.setItem('leadPopupShown', 'true');
        
        setTimeout(() => {
            leadPopup.style.display = 'none';
            document.getElementById('lead-success').style.display = 'none';
        }, 3000);
    });

    // 9. QR Modal
    const showQrBtn = document.getElementById('show-qr-btn');
    const qrModal = document.getElementById('qr-modal');
    const closeQr = document.getElementById('close-qr');

    showQrBtn.addEventListener('click', () => {
        qrModal.style.display = 'flex';
    });

    closeQr.addEventListener('click', () => {
        qrModal.style.display = 'none';
    });
    
    qrModal.addEventListener('click', (e) => {
        if(e.target === qrModal) qrModal.style.display = 'none';
    });
});
