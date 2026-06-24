// Majesty Mandi House - Advanced JavaScript

// 1. Menu Data
const menuData = [
    // Mandi
    { id: 'm1', name: "Traditional Chicken Mandi", category: "mandi", price: 300, desc: "Fragrant rice with slow-cooked tender chicken.", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80" },
    { id: 'm2', name: "Traditional Mutton Mandi", category: "mandi", price: 350, desc: "Authentic Arabian style rice with juicy mutton.", img: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=600&q=80" },
    { id: 'm3', name: "Special Family Mandi Platter", category: "combos", price: 900, desc: "Massive platter with mixed meats for 4-5 people.", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80" },
    
    // Chicken Starters
    { id: 'c1', name: "Chilli Chicken", category: "starters", price: 240, desc: "Spicy Indo-Chinese style chicken bites.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'c2', name: "Chicken Manchuria", category: "starters", price: 260, desc: "Tender chicken in savory Manchurian sauce.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'c3', name: "Chicken 65", category: "starters", price: 260, desc: "Classic deep-fried spicy chicken.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'c4', name: "Dragon Chicken", category: "starters", price: 260, desc: "Sweet and spicy chicken strips.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'c5', name: "Chicken 555", category: "starters", price: 260, desc: "Fried chicken tossed in a rich garlic-chilli sauce.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'c6', name: "Chicken Majestic", category: "starters", price: 260, desc: "Tender chicken strips tossed in yogurt and spices.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'c7', name: "Papper Chicken", category: "starters", price: 240, desc: "Chicken stir-fried with crushed black pepper.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'c8', name: "Chicken Lollipop", category: "starters", price: 240, desc: "Crispy coated chicken wings.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'c9', name: "Chicken Drumsticks", category: "starters", price: 260, desc: "Juicy, spiced chicken drumsticks.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'c10', name: "Chicken Wings", category: "starters", price: 240, desc: "Flavorful and spicy fried wings.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'c11', name: "Ginger Chicken", category: "starters", price: 260, desc: "Chicken flavored heavily with fresh ginger.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },

    // Veg Starters
    { id: 'v1', name: "Paneer Manchuria", category: "starters", price: 250, desc: "Paneer in savory Manchurian sauce.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'v2', name: "Paneer Chilli", category: "starters", price: 250, desc: "Spicy Indo-Chinese paneer cubes.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'v3', name: "Paneer 65", category: "starters", price: 250, desc: "Spicy and tangy fried paneer cubes.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'v4', name: "Babycorn Chilli", category: "starters", price: 220, desc: "Crispy baby corn tossed in chilli sauce.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'v5', name: "Babycorn Manchurian", category: "starters", price: 220, desc: "Crispy baby corn in Manchurian sauce.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
    { id: 'v6', name: "Babycorn 65", category: "starters", price: 220, desc: "Spicy, deep-fried baby corn.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
    { id: 'v7', name: "Babycorn Pepper", category: "starters", price: 220, desc: "Baby corn stir-fried with crushed pepper.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" }
];

// 2. Render Menu
const menuContainer = document.getElementById('menu-container');

function renderMenu() {
    menuContainer.innerHTML = menuData.map(item => `
        <div class="glass-card rounded-xl overflow-hidden group flex flex-col h-full">
            <div class="h-48 overflow-hidden relative shrink-0">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover img-zoom-hover">
                <div class="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-sm font-bold shadow-lg">₹${item.price}</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="font-serif text-xl text-white mb-2 leading-tight">${item.name}</h3>
                <p class="text-gray-400 text-sm mb-6 flex-grow">${item.desc}</p>
                <button onclick="addToCart('${item.id}')" class="w-full border border-gold text-gold py-2 rounded uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition font-semibold mt-auto">
                    + Add to Order
                </button>
            </div>
        </div>
    `).join('');
}
renderMenu();

// 3. Cart State Management
let cart = [];
let orderType = 'delivery';

function addToCart(id) {
    const item = menuData.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    updateCartUI();
    
    // Auto open drawer briefly or show animation
    if(cart.length === 1 && existing === undefined) {
        const floatBtn = document.getElementById('floating-cart-btn');
        floatBtn.classList.add('animate-bounce');
        setTimeout(() => floatBtn.classList.remove('animate-bounce'), 1000);
    }
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    updateCartUI();
}

function updateCartUI() {
    // Top Nav & Float Button Counts
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('nav-cart-count').textContent = totalItems;
    document.getElementById('mobile-cart-badge').textContent = totalItems;
    document.getElementById('float-count').textContent = totalItems;
    
    const floatBtn = document.getElementById('floating-cart-btn');
    if (totalItems > 0) {
        floatBtn.classList.remove('translate-y-full');
    } else {
        floatBtn.classList.add('translate-y-full');
    }

    // Cart Drawer Items
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyMsg.style.display = 'block';
        checkoutForm.classList.add('hidden');
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        emptyMsg.style.display = 'none';
        checkoutForm.classList.remove('hidden');
        checkoutBtn.disabled = false;
        checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center bg-black p-3 rounded-lg border border-gray-800">
                <div class="flex-1 pr-2">
                    <h4 class="text-white text-sm font-serif truncate">${item.name}</h4>
                    <p class="text-gold text-sm font-bold">₹${item.price * item.qty}</p>
                </div>
                <div class="flex items-center gap-3 bg-dark-lighter px-2 py-1 rounded shrink-0">
                    <button onclick="updateQty('${item.id}', -1)" class="text-gray-400 hover:text-white px-1"><i class="fas fa-minus text-xs"></i></button>
                    <span class="text-white font-bold w-4 text-center">${item.qty}</span>
                    <button onclick="updateQty('${item.id}', 1)" class="text-gray-400 hover:text-white px-1"><i class="fas fa-plus text-xs"></i></button>
                </div>
            </div>
        `).join('');
    }

    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const gst = subtotal * 0.05;
    const grandTotal = subtotal + gst;

    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('cart-gst').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `₹${grandTotal.toFixed(2)}`;
    document.getElementById('float-total').textContent = `₹${grandTotal.toFixed(2)}`;
}

// 4. Cart Drawer Logic
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const isClosed = drawer.classList.contains('translate-x-full');

    if (isClosed) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('cart-open');
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('cart-open');
    }
}

// 5. Order Type Toggle (Delivery vs Pickup)
function setOrderType(type) {
    orderType = type;
    const btnDelivery = document.getElementById('tab-delivery');
    const btnPickup = document.getElementById('tab-pickup');
    const deliveryFields = document.getElementById('delivery-fields');

    if (type === 'delivery') {
        btnDelivery.classList.add('bg-burgundy', 'text-white');
        btnDelivery.classList.remove('text-gray-400', 'bg-transparent');
        
        btnPickup.classList.remove('bg-burgundy', 'text-white');
        btnPickup.classList.add('text-gray-400', 'bg-transparent');
        
        deliveryFields.classList.remove('hidden');
    } else {
        btnPickup.classList.add('bg-burgundy', 'text-white');
        btnPickup.classList.remove('text-gray-400', 'bg-transparent');
        
        btnDelivery.classList.remove('bg-burgundy', 'text-white');
        btnDelivery.classList.add('text-gray-400', 'bg-transparent');
        
        deliveryFields.classList.add('hidden');
    }
}

// 6. Checkout via WhatsApp
function checkoutWhatsApp() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    
    if(!name || !phone) {
        alert("Please enter your name and mobile number.");
        return;
    }

    let addressStr = "";
    if (orderType === 'delivery') {
        const flat = document.getElementById('cust-flat').value.trim();
        const street = document.getElementById('cust-street').value.trim();
        const area = document.getElementById('cust-area').value.trim();
        if(!flat || !street) {
            alert("Please complete the delivery address.");
            return;
        }
        addressStr = `%0A*Delivery Address:*%0A${flat}, ${street}, ${area}`;
    } else {
        addressStr = `%0A*Order Type:* PICKUP`;
    }

    const notes = document.getElementById('cust-notes').value.trim();
    const notesStr = notes ? `%0A*Notes:* ${notes}` : "";

    let itemsStr = "";
    cart.forEach(item => {
        itemsStr += `${item.qty}x ${item.name} (₹${item.price * item.qty})%0A`;
    });

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const gst = subtotal * 0.05;
    const grandTotal = subtotal + gst;

    const msg = `*NEW ${orderType.toUpperCase()} ORDER*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}${addressStr}${notesStr}%0A%0A*ITEMS:*%0A${itemsStr}%0A*Subtotal:* ₹${subtotal.toFixed(2)}%0A*GST (5%):* ₹${gst.toFixed(2)}%0A*GRAND TOTAL:* ₹${grandTotal.toFixed(2)}`;

    window.open(`https://wa.me/918121213533?text=${msg}`, '_blank');
}

// 7. Advanced Reservation System
const timePills = document.querySelectorAll('.time-pill');
let selectedTime = "";

timePills.forEach(pill => {
    pill.addEventListener('click', () => {
        timePills.forEach(p => {
            p.classList.remove('bg-gold', 'text-dark', 'border-gold');
            p.classList.add('text-gray-300', 'border-gray-700');
        });
        pill.classList.add('bg-gold', 'text-dark', 'border-gold');
        pill.classList.remove('text-gray-300', 'border-gray-700');
        selectedTime = pill.textContent;
    });
});

document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(!selectedTime) {
        alert("Please select a time slot.");
        return;
    }

    const guests = document.getElementById('res-guests').value;
    const date = document.getElementById('res-date').value;
    const occasion = document.getElementById('res-occasion').value;
    const name = document.getElementById('res-name').value;
    const phone = document.getElementById('res-phone').value;

    const msg = `*TABLE RESERVATION REQUEST*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Time:* ${selectedTime}%0A*Guests:* ${guests}%0A*Occasion:* ${occasion}%0A%0A_Please confirm availability._`;

    window.open(`https://wa.me/918121213533?text=${msg}`, '_blank');
});

// Sticky Nav Background
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.style.backgroundColor = 'rgba(18, 10, 8, 0.98)';
    } else {
        nav.classList.remove('shadow-lg');
        nav.style.backgroundColor = 'rgba(28, 15, 13, 0.75)';
    }
});
