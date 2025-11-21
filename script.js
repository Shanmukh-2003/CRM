// Car Rental Management System - Complete JavaScript Implementation

// Global State Management
const state = {
    currentUser: null,
    currentPage: 'home',
    cars: [],
    bookings: [],
    users: []
};
const MS_IN_DAY = 1000 * 60 * 60 * 24;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadFromLocalStorage();
    initializeCars();
    updateNavigation();
    showPage('home');
}

// Local Storage Management
function saveToLocalStorage() {
    localStorage.setItem('carRentalState', JSON.stringify(state));
}

function loadFromLocalStorage() {
    const savedState = localStorage.getItem('carRentalState');
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        Object.assign(state, parsedState);
    }
}

// Initialize Cars Database with Indian Market Cars
function initializeCars() {
    if (state.cars.length === 0) {
        state.cars = [
            {
                id: 1,
                brand: 'Maruti Suzuki',
                model: 'Swift',
                type: 'Hatchback',
                price: 2500,
                image: 'swift.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Manual'
            },
            {
                id: 2,
                brand: 'Hyundai',
                model: 'Creta',
                type: 'SUV',
                price: 3500,
                image: 'creta.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS', 'Bluetooth'],
                available: true,
                seats: 5,
                fuel: 'Diesel',
                transmission: 'Manual'
            },
            {
                id: 3,
                brand: 'Tata',
                model: 'Nexon',
                type: 'SUV',
                price: 3200,
                image: 'Tata Nexon.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Manual'
            },
            {
                id: 4,
                brand: 'Honda',
                model: 'City',
                type: 'Sedan',
                price: 3000,
                image: 'honda city.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS', 'Leather Seats'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                id: 5,
                brand: 'Mahindra',
                model: 'Scorpio',
                type: 'SUV',
                price: 4000,
                image: 'mahindra scorpio.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS', '4WD'],
                available: true,
                seats: 7,
                fuel: 'Diesel',
                transmission: 'Manual'
            },
            {
                id: 6,
                brand: 'Toyota',
                model: 'Innova Crysta',
                type: 'MPV',
                price: 4500,
                image: 'toyota innova crysta.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS', 'Captain Seats'],
                available: true,
                seats: 7,
                fuel: 'Diesel',
                transmission: 'Automatic'
            },
            {
                id: 7,
                brand: 'Maruti Suzuki',
                model: 'Baleno',
                type: 'Hatchback',
                price: 2800,
                image: 'maruti suzuki baleno.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Manual'
            },
            {
                id: 8,
                brand: 'Kia',
                model: 'Seltos',
                type: 'SUV',
                price: 3800,
                image: 'kia seltos.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'GPS', 'Sunroof'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                id: 9,
                brand: 'Skoda',
                model: 'Kushaq',
                type: 'SUV',
                price: 3600,
                image: 'skoda kushaq.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'Ventilated Seats'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                id: 10,
                brand: 'MG',
                model: 'Hector',
                type: 'SUV',
                price: 4200,
                image: 'MG Hector.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'Panoramic Sunroof'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                id: 11,
                brand: 'Volkswagen',
                model: 'Virtus',
                type: 'Sedan',
                price: 3300,
                image: 'virtus.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'Digital Cockpit'],
                available: true,
                seats: 5,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                id: 12,
                brand: 'Renault',
                model: 'Triber',
                type: 'MPV',
                price: 2600,
                image: 'renault triber.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'Modular Seats'],
                available: true,
                seats: 7,
                fuel: 'Petrol',
                transmission: 'Manual'
            },
            {
                id: 13,
                brand: 'Jeep',
                model: 'Compass',
                type: 'SUV',
                price: 4800,
                image: 'jeep compas.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', '4WD', 'Terrain Modes'],
                available: true,
                seats: 5,
                fuel: 'Diesel',
                transmission: 'Automatic'
            },
            {
                id: 14,
                brand: 'Mercedes-Benz',
                model: 'GLC',
                type: 'Luxury SUV',
                price: 7500,
                image: 'mercedes benz glc.jpg',
                features: ['AC', 'Power Steering', 'Airbags', 'Music System', 'Ambient Lighting', 'ADAS'],
                available: true,
                seats: 5,
                fuel: 'Diesel',
                transmission: 'Automatic'
            }
        ];
        saveToLocalStorage();
    }
}

// Routing System
function showPage(pageName) {
    state.currentPage = pageName;
    const mainContent = document.getElementById('main-content');
    
    switch(pageName) {
        case 'home':
            mainContent.innerHTML = getHomePage();
            break;
        case 'cars':
            mainContent.innerHTML = getCarsPage();
            break;
        case 'login':
            mainContent.innerHTML = getLoginPage();
            break;
        case 'register':
            mainContent.innerHTML = getRegisterPage();
            break;
        case 'profile':
            mainContent.innerHTML = getProfilePage();
            break;
        case 'bookings':
            mainContent.innerHTML = getBookingsPage();
            break;
        case 'admin':
            mainContent.innerHTML = getAdminPage();
            break;
        case 'about':
            mainContent.innerHTML = getAboutPage();
            break;
        case 'contact':
            mainContent.innerHTML = getContactPage();
            break;
        default:
            mainContent.innerHTML = getHomePage();
    }
    
    updateNavigation();
    saveToLocalStorage();
}

// Navigation Management
function updateNavigation() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const adminNavLink = document.getElementById('admin-nav-link');

    if (state.currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
    } else {
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
    }

    if (adminNavLink) {
        if (state.currentUser && state.currentUser.role === 'admin') {
            adminNavLink.style.display = 'block';
        } else {
            adminNavLink.style.display = 'none';
        }
    }
}

// Authentication Functions
function login(email, password, isAdmin = false) {
    const users = state.users || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        state.currentUser = user;
        saveToLocalStorage();
        updateNavigation();
        showPage(isAdmin && user.role === 'admin' ? 'admin' : 'home');
        showNotification('Login successful!', 'success');
        return true;
    } else {
        showNotification('Invalid email or password', 'error');
        return false;
    }
}

function register(userData) {
    const users = state.users || [];
    
    // Check if user already exists
    if (users.find(u => u.email === userData.email)) {
        showNotification('User with this email already exists', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    state.users = users;
    saveToLocalStorage();
    
    showNotification('Registration successful! Please login.', 'success');
    showPage('login');
    return true;
}

function logout() {
    state.currentUser = null;
    saveToLocalStorage();
    updateNavigation();
    showPage('home');
    showNotification('Logged out successfully', 'success');
}

// Page Templates
function getHomePage() {
    return `
        <section class="hero">
            <div class="hero-content">
                <h1>Premium Car Rental Service in India</h1>
                <p>Explore our wide range of vehicles at affordable prices</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary btn-large" onclick="showPage('cars')">
                        <i class="fas fa-car"></i> Browse Cars
                    </button>
                    <button class="btn btn-outline btn-large" onclick="showPage('register')">
                        <i class="fas fa-user-plus"></i> Register Now
                    </button>
                </div>
            </div>
        </section>
        
        <section class="features">
            <div class="container">
                <h2>Why Choose CarWale Rentals?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <i class="fas fa-rupee-sign"></i>
                        <h3>Affordable Prices</h3>
                        <p>Best rates in the market with no hidden charges</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-car-side"></i>
                        <h3>Wide Selection</h3>
                        <p>From economy cars to luxury vehicles</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Fully Insured</h3>
                        <p>All vehicles are comprehensively insured</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-clock"></i>
                        <h3>24/7 Support</h3>
                        <p>Round the clock customer assistance</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="popular-cars">
            <div class="container">
                <h2>Popular Cars</h2>
                <div class="cars-preview">
                    ${state.cars.slice(0, 3).map(car => getCarCard(car)).join('')}
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" onclick="showPage('cars')">View All Cars</button>
                </div>
            </div>
        </section>
    `;
}

function getCarsPage() {
    const filters = `
        <div class="filters">
            <div class="filter-group">
                <label>Car Type:</label>
                <select id="typeFilter" onchange="filterCars()">
                    <option value="">All Types</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="MPV">MPV</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Price Range:</label>
                <select id="priceFilter" onchange="filterCars()">
                    <option value="">All Prices</option>
                    <option value="0-3000">Under ₹3000</option>
                    <option value="3000-4000">₹3000 - ₹4000</option>
                    <option value="4000+">Above ₹4000</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Fuel Type:</label>
                <select id="fuelFilter" onchange="filterCars()">
                    <option value="">All Fuel Types</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                </select>
            </div>
        </div>
    `;
    
    return `
        <section class="cars-section">
            <div class="container">
                <h1>Available Cars</h1>
                ${filters}
                <div class="cars-grid" id="carsGrid">
                    ${state.cars.map(car => getCarCard(car)).join('')}
                </div>
            </div>
        </section>
    `;
}

function getCarCard(car) {
    return `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <div class="car-badge">${car.type}</div>
            </div>
            <div class="car-details">
                <h3>${car.brand} ${car.model}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-users"></i> ${car.seats} Seats</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <div class="car-features">
                    ${car.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        <span class="price">₹${car.price}</span>
                        <span class="per-day">/day</span>
                    </div>
                    <button class="btn btn-primary" onclick="bookCar(${car.id})" 
                            ${!car.available ? 'disabled' : ''}>
                        ${car.available ? 'Book Now' : 'Not Available'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getLoginPage() {
    return `
        <section class="auth-section">
            <div class="auth-container">
                <div class="auth-card">
                    <h2>Login</h2>
                    <form id="loginForm" onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="isAdmin">
                                <span class="checkmark"></span>
                                Login as Admin
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">Login</button>
                    </form>
                    <div class="auth-footer">
                        <p>Don't have an account? <a href="#" onclick="showPage('register')">Register here</a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getRegisterPage() {
    return `
        <section class="auth-section">
            <div class="auth-container">
                <div class="auth-card">
                    <h2>Register</h2>
                    <form id="registerForm" onsubmit="handleRegister(event)">
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" pattern="[0-9]{10}" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" minlength="6" required>
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" minlength="6" required>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="isAdmin">
                                <span class="checkmark"></span>
                                Register as Admin
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">Register</button>
                    </form>
                    <div class="auth-footer">
                        <p>Already have an account? <a href="#" onclick="showPage('login')">Login here</a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getProfilePage() {
    if (!state.currentUser) {
        showPage('login');
        return '';
    }
    
    return `
        <section class="profile-section">
            <div class="container">
                <div class="profile-card">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="profile-info">
                            <h2>${state.currentUser.fullName}</h2>
                            <p>${state.currentUser.email}</p>
                            <span class="role-badge">${state.currentUser.role || 'User'}</span>
                        </div>
                    </div>
                    <div class="profile-details">
                        <div class="detail-item">
                            <label>Phone:</label>
                            <span>${state.currentUser.phone || 'Not provided'}</span>
                        </div>
                        <div class="detail-item">
                            <label>Member Since:</label>
                            <span>${new Date(state.currentUser.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div class="detail-item">
                            <label>Total Bookings:</label>
                            <span>${state.bookings.filter(b => b.userId === state.currentUser.id).length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getBookingsPage() {
    if (!state.currentUser) {
        showPage('login');
        return '';
    }
    
    const userBookings = state.bookings.filter(b => b.userId === state.currentUser.id);
    
    return `
        <section class="bookings-section">
            <div class="container">
                <h2>My Bookings</h2>
                ${userBookings.length === 0 ? 
                    '<p class="no-bookings">You have no bookings yet.</p>' :
                    userBookings.map(booking => getBookingCard(booking)).join('')
                }
            </div>
        </section>
    `;
}

function getBookingCard(booking) {
    const car = state.cars.find(c => c.id === booking.carId);
    return `
        <div class="booking-card">
            <div class="booking-header">
                <h3>${car.brand} ${car.model}</h3>
                <span class="booking-status ${booking.status}">${formatStatus(booking.status)}</span>
            </div>
            <div class="booking-details">
                <div class="booking-info">
                    <p><strong>From:</strong> ${formatBookingDate(booking.startDate)}</p>
                    <p><strong>To:</strong> ${formatBookingDate(booking.endDate)}</p>
                    <p><strong>Total Days:</strong> ${booking.totalDays}</p>
                    <p><strong>Total Price:</strong> ₹${booking.totalPrice}</p>
                </div>
                <div class="booking-actions">
                    ${booking.status === 'confirmed' ? 
                        `<button class="btn btn-danger" onclick="cancelBooking(${booking.id})">Cancel Booking</button>` :
                        ''
                    }
                </div>
            </div>
        </div>
    `;
}

function getAdminPage() {
    if (!state.currentUser || state.currentUser.role !== 'admin') {
        showPage('home');
        return '';
    }
    
    return `
        <section class="admin-section">
            <div class="container">
                <h1>Admin Dashboard</h1>
                
                <div class="admin-stats">
                    <div class="stat-card">
                        <h3>Total Cars</h3>
                        <p>${state.cars.length}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Users</h3>
                        <p>${state.users.length}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Bookings</h3>
                        <p>${state.bookings.length}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Revenue</h3>
                        <p>₹${state.bookings.reduce((sum, b) => sum + b.totalPrice, 0)}</p>
                    </div>
                </div>
                
                <div class="admin-tabs">
                    <button class="tab-btn active" data-tab="cars" onclick="showAdminTab('cars', event)">Manage Cars</button>
                    <button class="tab-btn" data-tab="bookings" onclick="showAdminTab('bookings', event)">Manage Bookings</button>
                    <button class="tab-btn" data-tab="users" onclick="showAdminTab('users', event)">Manage Users</button>
                </div>
                
                <div id="admin-content">
                    ${getAdminCarsTab()}
                </div>
            </div>
        </section>
    `;
}

function getAdminCarsTab() {
    return `
        <div class="admin-cars">
            <div class="admin-header">
                <h2>Manage Cars</h2>
                <button class="btn btn-primary" onclick="showAddCarForm()">Add New Car</button>
            </div>
            <div class="cars-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Type</th>
                            <th>Price/Day</th>
                            <th>Available</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.cars.map(car => `
                            <tr>
                                <td>${car.id}</td>
                                <td>${car.brand}</td>
                                <td>${car.model}</td>
                                <td>${car.type}</td>
                                <td>₹${car.price}</td>
                                <td>
                                    <span class="status ${car.available ? 'available' : 'unavailable'}">
                                        ${car.available ? 'Available' : 'Unavailable'}
                                    </span>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-primary" onclick="editCar(${car.id})">Edit</button>
                                    <button class="btn btn-sm btn-danger" onclick="deleteCar(${car.id})">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getAboutPage() {
    return `
        <section class="about-section">
            <div class="container">
                <h1>About CarWale Rentals</h1>
                <div class="about-content">
                    <p>CarWale Rentals is India's premier car rental service, offering a wide range of vehicles to suit every need and budget. With operations in major cities across the country, we provide reliable, affordable, and convenient transportation solutions.</p>
                    
                    <div class="about-grid">
                        <div class="about-item">
                            <h3>Our Mission</h3>
                            <p>To provide exceptional car rental experiences with quality vehicles and outstanding customer service.</p>
                        </div>
                        <div class="about-item">
                            <h3>Our Vision</h3>
                            <p>To become India's most trusted car rental company, known for reliability and customer satisfaction.</p>
                        </div>
                        <div class="about-item">
                            <h3>Our Values</h3>
                            <p>Integrity, Quality, Customer Focus, and Innovation drive everything we do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getContactPage() {
    return `
        <section class="contact-section">
            <div class="container">
                <h1>Contact Us</h1>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>info@carwalerentals.in</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Address</h3>
                                <p>123 Main Road, Mumbai, Maharashtra 400001</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form">
                        <h3>Send us a message</h3>
                        <form onsubmit="handleContactForm(event)">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Event Handlers
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const isAdmin = document.getElementById('isAdmin').checked;
    
    login(email, password, isAdmin);
}

function handleRegister(event) {
    event.preventDefault();
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        role: document.getElementById('isAdmin').checked ? 'admin' : 'user'
    };
    
    if (formData.password !== formData.confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    register(formData);
}

function handleContactForm(event) {
    event.preventDefault();
    showNotification('Message sent successfully! We will get back to you soon.', 'success');
    event.target.reset();
}

// Car Management Functions
function bookCar(carId) {
    if (!state.currentUser) {
        showNotification('Please login to book a car', 'error');
        showPage('login');
        return;
    }
    
    const car = state.cars.find(c => c.id === carId);
    if (!car || !car.available) {
        showNotification('Car is not available', 'error');
        return;
    }

    showBookingModal(car);
}

function showBookingModal(car) {
    closeBookingModal();
    const modal = document.createElement('div');
    modal.id = 'bookingModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="booking-modal">
            <button class="modal-close" onclick="closeBookingModal()">&times;</button>
            <h2>Book ${car.brand} ${car.model}</h2>
            <p class="modal-subtitle">₹${car.price} per day</p>
            <form id="bookingForm" data-car-id="${car.id}" onsubmit="handleBookingSubmit(event)">
                <div class="form-group">
                    <label for="bookingStartDate">Start Date</label>
                    <input type="date" id="bookingStartDate" name="bookingStartDate" required>
                </div>
                <div class="form-group">
                    <label for="bookingEndDate">End Date</label>
                    <input type="date" id="bookingEndDate" name="bookingEndDate" required>
                </div>
                <div class="booking-summary">
                    <h4>Booking Summary</h4>
                    <div id="bookingSummaryContent">
                        <p>Select start and end dates to calculate the duration and price.</p>
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-outline" onclick="closeBookingModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Confirm Booking</button>
                </div>
            </form>
        </div>
    `;

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeBookingModal();
        }
    });

    document.body.appendChild(modal);
    document.body.classList.add('modal-active');

    const today = new Date().toISOString().split('T')[0];
    const startInput = modal.querySelector('#bookingStartDate');
    const endInput = modal.querySelector('#bookingEndDate');
    startInput.min = today;
    endInput.min = today;

    startInput.addEventListener('change', () => {
        if (startInput.value) {
            endInput.min = startInput.value;
            if (endInput.value && endInput.value < startInput.value) {
                endInput.value = startInput.value;
            }
        } else {
            endInput.min = today;
        }
        updateBookingSummary(modal, car, startInput.value, endInput.value);
    });

    endInput.addEventListener('change', () => {
        updateBookingSummary(modal, car, startInput.value, endInput.value);
    });

    updateBookingSummary(modal, car, startInput.value, endInput.value);
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.remove();
    }
    document.body.classList.remove('modal-active');
}

function updateBookingSummary(modal, car, startValue, endValue) {
    const summaryContent = modal.querySelector('#bookingSummaryContent');
    if (!summaryContent) {
        return;
    }

    if (startValue && endValue) {
        const totalDays = calculateTotalDays(startValue, endValue);
        if (totalDays > 0) {
            const totalPrice = totalDays * car.price;
            summaryContent.innerHTML = `
                <p><strong>From:</strong> ${formatBookingDate(startValue)}</p>
                <p><strong>To:</strong> ${formatBookingDate(endValue)}</p>
                <p><strong>Total Days:</strong> ${totalDays}</p>
                <p><strong>Estimated Price:</strong> ₹${totalPrice}</p>
            `;
            return;
        }
    }

    summaryContent.innerHTML = '<p>Select valid start and end dates to calculate the booking.</p>';
}

function handleBookingSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const carId = parseInt(form.dataset.carId, 10);
    const car = state.cars.find(c => c.id === carId);

    if (!car) {
        showNotification('Car not found. Please try again.', 'error');
        return;
    }

    const startDate = form.bookingStartDate.value;
    const endDate = form.bookingEndDate.value;

    if (!startDate || !endDate) {
        showNotification('Please select both start and end dates.', 'error');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        showNotification('Please enter valid dates.', 'error');
        return;
    }

    if (end <= start) {
        showNotification('End date must be after the start date.', 'error');
        return;
    }

    if (hasBookingOverlap(carId, start, end)) {
        showNotification('This car is already booked for the selected dates. Please choose another date range.', 'error');
        return;
    }

    const totalDays = calculateTotalDays(startDate, endDate);

    if (totalDays <= 0) {
        showNotification('Invalid date range selected.', 'error');
        return;
    }

    const booking = {
        id: Date.now(),
        carId: carId,
        userId: state.currentUser.id,
        startDate: startDate,
        endDate: endDate,
        totalDays: totalDays,
        totalPrice: totalDays * car.price,
        status: 'confirmed',
        createdAt: new Date().toISOString()
    };

    state.bookings.push(booking);
    saveToLocalStorage();

    closeBookingModal();
    showNotification(`Car booked successfully! Total: ₹${booking.totalPrice}`, 'success');
    showPage('bookings');
}

function hasBookingOverlap(carId, start, end) {
    return state.bookings.some(existing => {
        if (existing.carId !== carId || existing.status !== 'confirmed') {
            return false;
        }
        const existingStart = new Date(existing.startDate);
        const existingEnd = new Date(existing.endDate);
        return start <= existingEnd && end >= existingStart;
    });
}

function cancelBooking(bookingId) {
    const bookingIndex = state.bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex !== -1) {
        state.bookings[bookingIndex].status = 'cancelled';
        saveToLocalStorage();
        showNotification('Booking cancelled successfully', 'success');
        showPage('bookings');
    }
}

// Admin Functions
function showAdminTab(tab, evt = null) {
    const content = document.getElementById('admin-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    if (evt && evt.target) {
        evt.target.classList.add('active');
    } else {
        const targetButton = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }
    
    switch(tab) {
        case 'cars':
            content.innerHTML = getAdminCarsTab();
            break;
        case 'bookings':
            content.innerHTML = getAdminBookingsTab();
            break;
        case 'users':
            content.innerHTML = getAdminUsersTab();
            break;
    }
}

function getAdminBookingsTab() {
    return `
        <div class="admin-bookings">
            <h2>All Bookings</h2>
            <div class="bookings-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Car</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.bookings.map(booking => {
                            const user = state.users.find(u => u.id === booking.userId);
                            const car = state.cars.find(c => c.id === booking.carId);
                            return `
                                <tr>
                                    <td>${booking.id}</td>
                                    <td>${user ? user.fullName : 'Unknown'}</td>
                                    <td>${car ? `${car.brand} ${car.model}` : 'Unknown'}</td>
                                    <td>${formatBookingDate(booking.startDate)}</td>
                                    <td>${formatBookingDate(booking.endDate)}</td>
                                    <td>₹${booking.totalPrice}</td>
                                    <td>
                                        <span class="status ${booking.status}">${formatStatus(booking.status)}</span>
                                    </td>
                                    <td>
                                        ${booking.status === 'confirmed' ? 
                                            `<button class="btn btn-sm btn-warning" onclick="updateBookingStatus(${booking.id}, 'completed')">Complete</button>` :
                                            ''
                                        }
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getAdminUsersTab() {
    return `
        <div class="admin-users">
            <h2>All Users</h2>
            <div class="users-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Member Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.users.map(user => `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.fullName}</td>
                                <td>${user.email}</td>
                                <td>${user.phone || 'N/A'}</td>
                                <td>
                                    <span class="role-badge">${user.role || 'user'}</span>
                                </td>
                                <td>${new Date(user.createdAt).toLocaleDateString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function updateBookingStatus(bookingId, newStatus) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.status = newStatus;
        saveToLocalStorage();
        showNotification(`Booking status updated to ${newStatus}`, 'success');
        showAdminTab('bookings');
    }
}

function showAddCarForm() {
    openCarFormModal('add');
}

function editCar(carId) {
    const car = state.cars.find(c => c.id === carId);
    if (!car) {
        showNotification('Car not found', 'error');
        return;
    }
    openCarFormModal('edit', car);
}

function deleteCar(carId) {
    const carIndex = state.cars.findIndex(c => c.id === carId);
    if (carIndex === -1) {
        showNotification('Car not found', 'error');
        return;
    }

    const car = state.cars[carIndex];
    const confirmed = confirm(`Delete ${car.brand} ${car.model}? This action cannot be undone.`);
    if (!confirmed) {
        return;
    }

    state.cars.splice(carIndex, 1);
    saveToLocalStorage();
    showNotification('Car deleted successfully', 'success');
    showAdminTab('cars');
}

function openCarFormModal(mode, car = null) {
    closeCarModal();
    const modal = document.createElement('div');
    modal.id = 'carModal';
    modal.className = 'modal-overlay';
    const title = mode === 'edit' ? 'Edit Car' : 'Add New Car';
    const featuresValue = car && Array.isArray(car.features) ? car.features.join(', ') : '';

    modal.innerHTML = `
        <div class="booking-modal car-modal">
            <button class="modal-close" onclick="closeCarModal()">&times;</button>
            <h2>${title}</h2>
            <form id="carForm" data-mode="${mode}" onsubmit="handleCarFormSubmit(event)">
                <input type="hidden" name="carId" value="${car ? car.id : ''}">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="carBrand">Brand</label>
                        <input type="text" id="carBrand" name="brand" value="${car ? car.brand : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carModel">Model</label>
                        <input type="text" id="carModel" name="model" value="${car ? car.model : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carType">Type</label>
                        <input type="text" id="carType" name="type" value="${car ? car.type : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carPrice">Price / Day (₹)</label>
                        <input type="number" id="carPrice" name="price" min="0" value="${car ? car.price : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carSeats">Seats</label>
                        <input type="number" id="carSeats" name="seats" min="1" value="${car ? car.seats : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carFuel">Fuel Type</label>
                        <input type="text" id="carFuel" name="fuel" value="${car ? car.fuel : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carTransmission">Transmission</label>
                        <input type="text" id="carTransmission" name="transmission" value="${car ? car.transmission : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carImage">Image Path</label>
                        <input type="text" id="carImage" name="image" value="${car ? car.image : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="carAvailable">Availability</label>
                        <select id="carAvailable" name="available">
                            <option value="true" ${!car || car.available ? 'selected' : ''}>Available</option>
                            <option value="false" ${car && !car.available ? 'selected' : ''}>Unavailable</option>
                        </select>
                    </div>
                    <div class="form-group form-group-full">
                        <label for="carFeatures">Features (comma separated)</label>
                        <textarea id="carFeatures" name="features" rows="2" placeholder="AC, Power Steering, ...">${featuresValue}</textarea>
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-outline" onclick="closeCarModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">${mode === 'edit' ? 'Save Changes' : 'Add Car'}</button>
                </div>
            </form>
        </div>
    `;

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeCarModal();
        }
    });

    document.body.appendChild(modal);
    document.body.classList.add('modal-active');
}

function closeCarModal() {
    const modal = document.getElementById('carModal');
    if (modal) {
        modal.remove();
    }
    document.body.classList.remove('modal-active');
}

function handleCarFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const mode = form.dataset.mode;
    const carIdValue = form.carId.value;
    const price = parseInt(form.price.value, 10);
    const seats = parseInt(form.seats.value, 10);

    if (isNaN(price) || isNaN(seats)) {
        showNotification('Please provide valid numeric values for price and seats.', 'error');
        return;
    }

    const features = form.features.value
        .split(',')
        .map(feature => feature.trim())
        .filter(Boolean);

    const carData = {
        brand: form.brand.value.trim(),
        model: form.model.value.trim(),
        type: form.type.value.trim(),
        price,
        seats,
        fuel: form.fuel.value.trim(),
        transmission: form.transmission.value.trim(),
        image: form.image.value.trim(),
        available: form.available.value === 'true',
        features
    };

    if (!carData.brand || !carData.model || !carData.type || !carData.fuel || !carData.transmission || !carData.image) {
        showNotification('All fields are required.', 'error');
        return;
    }

    if (mode === 'edit' && carIdValue) {
        const carId = parseInt(carIdValue, 10);
        const carIndex = state.cars.findIndex(c => c.id === carId);
        if (carIndex === -1) {
            showNotification('Car not found.', 'error');
            return;
        }
        state.cars[carIndex] = { ...state.cars[carIndex], ...carData };
        showNotification('Car updated successfully', 'success');
    } else {
        const newCar = {
            id: Date.now(),
            ...carData
        };
        state.cars.push(newCar);
        showNotification('Car added successfully', 'success');
    }

    saveToLocalStorage();
    closeCarModal();
    showAdminTab('cars');
}

// Utility Functions
function filterCars() {
    const typeFilter = document.getElementById('typeFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const fuelFilter = document.getElementById('fuelFilter').value;
    
    let filteredCars = state.cars;
    
    if (typeFilter) {
        filteredCars = filteredCars.filter(car => car.type === typeFilter);
    }
    
    if (priceFilter) {
        if (priceFilter === '0-3000') {
            filteredCars = filteredCars.filter(car => car.price <= 3000);
        } else if (priceFilter === '3000-4000') {
            filteredCars = filteredCars.filter(car => car.price > 3000 && car.price <= 4000);
        } else if (priceFilter === '4000+') {
            filteredCars = filteredCars.filter(car => car.price > 4000);
        }
    }
    
    if (fuelFilter) {
        filteredCars = filteredCars.filter(car => car.fuel === fuelFilter);
    }
    
    const carsGrid = document.getElementById('carsGrid');
    carsGrid.innerHTML = filteredCars.map(car => getCarCard(car)).join('');
}

function toggleUserMenu() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function calculateTotalDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / MS_IN_DAY);
}

function formatBookingDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatStatus(status) {
    if (!status) return '';
    return status.charAt(0).toUpperCase() + status.slice(1);
}

// Initialize default admin user
function initializeDefaultAdmin() {
    if (!state.users || state.users.length === 0) {
        const now = new Date().toISOString();
        state.users = [
            {
                id: 1,
                fullName: 'Admin User',
                email: 'admin@carwale.in',
                phone: '9999999999',
                password: 'admin123',
                role: 'admin',
                createdAt: now
            },
            {
                id: 2,
                fullName: 'Rohit Sharma',
                email: 'rohit@carwale.in',
                phone: '9876543210',
                password: 'password123',
                role: 'user',
                createdAt: now
            },
            {
                id: 3,
                fullName: 'Sneha Patel',
                email: 'sneha@carwale.in',
                phone: '9123456780',
                password: 'welcome123',
                role: 'user',
                createdAt: now
            },
            {
                id: 4,
                fullName: 'Arjun Mehta',
                email: 'arjun@carwale.in',
                phone: '9012345678',
                password: 'driveeasy',
                role: 'user',
                createdAt: now
            },
            {
                id: 5,
                fullName: 'Priya Nair',
                email: 'priya@carwale.in',
                phone: '9345678901',
                password: 'securepass',
                role: 'user',
                createdAt: now
            }
        ];
        saveToLocalStorage();
    }
}

// Initialize default admin on app load
initializeDefaultAdmin();