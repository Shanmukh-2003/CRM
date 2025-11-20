# CarWale Rentals - Car Rental Management System

A complete, feature-rich car rental management system built with pure HTML, CSS, and JavaScript. This system includes user authentication, admin dashboard, car management, booking system, and responsive design.

## Features

### 🚗 Car Management
- Browse available cars with detailed specifications
- Filter cars by type, price range, and fuel type
- Indian market cars with realistic pricing (₹2500 - ₹4500 per day)
- Car categories: Hatchback, Sedan, SUV, MPV
- Detailed car information including features, seats, fuel type, transmission

### 👥 User Authentication
- Separate login for users and admin
- User registration system
- Secure session management
- Profile management
- Admin role differentiation

### 📅 Booking System
- Easy car booking process
- Date selection for rental period
- Automatic price calculation
- Booking history for users
- Booking status management (confirmed, cancelled, completed)

### 🛠️ Admin Dashboard
- Complete car management (add, edit, delete cars)
- User management
- Booking management
- Revenue tracking
- System statistics

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet and desktop optimized
- Touch-friendly navigation
- Modern gradient design
- Smooth animations and transitions

### 💾 Data Persistence
- Local storage for data persistence
- No database required
- Automatic data saving
- Session management

## Quick Start

1. **Download/Clone the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Start using the system immediately**

## Default Admin Account

For testing the admin features:
- **Email:** admin@carwale.in
- **Password:** admin123

## Available Cars (Indian Market)

### Economy Cars
- **Maruti Suzuki Swift** - ₹2,500/day
- **Maruti Suzuki Baleno** - ₹2,800/day

### Sedans
- **Honda City** - ₹3,000/day

### SUVs
- **Hyundai Creta** - ₹3,500/day
- **Tata Nexon** - ₹3,200/day
- **Mahindra Scorpio** - ₹4,000/day
- **Kia Seltos** - ₹3,800/day

### MPV
- **Toyota Innova Crysta** - ₹4,500/day

## Navigation Guide

### For Users
1. **Home** - Landing page with overview
2. **Cars** - Browse and filter available cars
3. **Register** - Create new account
4. **Login** - Access your account
5. **Profile** - View your profile information
6. **My Bookings** - View your booking history

### For Admin
1. Login with admin credentials
2. Access **Admin Dashboard**
3. **Manage Cars** - Add, edit, delete cars
4. **Manage Bookings** - View and update booking status
5. **Manage Users** - View all registered users

## System Architecture

### Frontend Components
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - Complete functionality without frameworks

### Key Features Implemented

#### Routing System
- Client-side routing using JavaScript
- Dynamic page loading
- Browser history management
- SEO-friendly URLs

#### Authentication
- Role-based access control
- Session management
- Secure login/logout
- User profile management

#### Data Management
- Local storage for persistence
- JSON data structure
- Real-time updates
- Data validation

#### UI/UX Design
- Responsive grid layouts
- Modern gradient design
- Smooth transitions
- Interactive elements
- Loading states
- Error handling
- Success notifications

## File Structure

```
car-rental-system/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # All JavaScript functionality
└── README.md           # This documentation
```

## Browser Compatibility

This system works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Mobile Responsiveness

The system is fully responsive and works on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1200px+)

## Security Features

- Input validation
- XSS protection
- Session management
- Role-based access
- Data sanitization

## Performance Optimizations

- Efficient DOM manipulation
- Event delegation
- Lazy loading ready
- Optimized CSS
- Minimal JavaScript

## Customization

### Adding New Cars
Edit the `initializeCars()` function in `script.js` to add more vehicles.

### Changing Colors
Modify the CSS variables in `styles.css` to customize the theme.

### Adding New Features
The modular structure makes it easy to add new functionality.

## Support

This is a demonstration project built with pure HTML, CSS, and JavaScript. For production use, consider:

- Backend API integration
- Database implementation
- Payment gateway integration
- Email notifications
- Advanced security measures

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ using only HTML, CSS, and JavaScript**