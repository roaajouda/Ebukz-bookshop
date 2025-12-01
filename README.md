## Project Overview

**Ebukz Bookshop** is a modern, e-commerce web application for buying and selling books online. The project features a clean, user-friendly interface with multiple pages for browsing books, managing shopping carts, reading blogs, and contacting support.

## Project Structure

```
Ebukz-bookshop/
├── index.html                 # Home page
├── book.html                  # Book listing/catalog page
├── shop.html                  # Shop page with filters
├── Blog-Details.html          # Individual blog post details
├── blog.html                  # Blog listing page
├── cart.html                  # Shopping cart page
├── Contact.html               # Contact form page
├── wishlist.html              # Wishlist page
├── signUp.html                # User registration page
├── sample.txt                 # Sample data/reference file
├── .gitignore                 # Git ignore configuration
│
├── assets/                    # Static assets
│   ├── img/                   # Images
│   │   ├── blog/              # Blog post images
│   │   └── la.avif            # Sample image
│   ├── fontawesome/           # Font Awesome icons
│   │   └── all.min.css        # Font Awesome CSS
│   └── webfonts/              # Web fonts
│
├── css/                       # Stylesheets
│   ├── main.css               # Global styles
│   ├── bookDetailes.css       # Book details page styles
│   ├── shop.css               # Shop page styles
│   ├── cart.css               # Cart page styles
│   ├── contact.css            # Contact page styles
│   ├── blog.css               # Blog listing styles
│   └── blog-details.css       # Blog details page styles
│
└── js/                        # JavaScript files
    ├── main.js                # Global JavaScript functionality
    ├── booksInfo.js           # Book information management
    ├── info.js                # General information utilities
    ├── blog.js                # Blog functionality
    └── product.js             # Product/book management
```

## Features

### Pages

1. **index.html** - Landing/Home page
   - Featured books
   - Hero section
   - Navigation

2. **book.html** - Book Details Page
   - Individual book information
   - Price, availability, reviews
   - Add to cart/wishlist functionality

3. **shop.html** - Shop/Browse Books
   - Book catalog with filters
   - Search functionality
   - Category browsing

4. **cart.html** - Shopping Cart
   - View cart items
   - Adjust quantities
   - Checkout process

5. **blog.html** - Blog Listing
   - Latest articles and posts
   - Search and filtering

6. **Blog-Details.html** - Individual Blog Post
   - Full blog post content
   - Comments section
   - Related posts

7. **Contact.html** - Contact Page
   - Contact form
   - Business information
   - Communication channels

8. **wishlist.html** - Wishlist
   - Saved favorite books
   - Move to cart functionality

9. **signUp.html** - User Registration
   - Account creation
   - User authentication

## Styling

The project uses a consistent design system with CSS custom properties (variables) defined in bookDetailes.css:

### Color Scheme
- **Main Color**: `#D16655` (Coral Red)
- **Secondary Color**: `#BD7579` (Mauve)
- **Title Color**: `#2E4A5B` (Dark Blue)
- **Body Color**: `#F8EBE5` (Cream)
- **Theme Color**: Dynamic (Blue theme)
- **Success Color**: `#28a745` (Green)
- **Error Color**: `#dc3545` (Red)

### Typography
- **Title Font**: "Josefin Sans", sans-serif
- **Body Font**: "Poppins", sans-serif
- **Icon Font**: "Font Awesome 6 Pro"

### Layout Containers
- `--main-container`: 1320px
- `--main-container2`: 1760px
- `--main-container3`: 1340px
- `--main-container4`: 1920px
- `--container-gutters`: 30px

## JavaScript Modules

### main.js
Global functionality including:
- Navigation handling
- DOM manipulation
- Event listeners
- Utility functions

### booksInfo.js
Book-related functionality:
- Book data management
- Display book information
- Used on Contact.html and cart.html

### info.js
General information utilities:
- Common helper functions
- Data utilities
- Used on Contact.html and cart.html

### blog.js
Blog functionality:
- Blog post management
- Comment handling
- Blog filtering and search

### product.js
Product management:
- Product filtering
- Stock management
- Product details handling

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ebukz-bookshop
   ```

3. **File structure setup**
   - Ensure all image paths in img are correct
   - Verify Font Awesome webfonts are properly linked
   - Check JavaScript imports in HTML files

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- CSS Grid and Flexbox support required

## Dependencies

- **Font Awesome 6 Pro** - Icon library
- **Google Fonts** - Josefin Sans and Poppins fonts
- Vanilla JavaScript (no frameworks required)

## Notes

- All styles are custom CSS with CSS custom properties for theming
- JavaScript is modular and organized by functionality
- Images are stored in img directory
- The project uses semantic HTML structure

## Future Enhancements

- Backend integration for book database
- User authentication system
- Payment gateway integration
- Search functionality optimization
- Performance improvements
- SEO optimization


## 👩‍💻 Team Members

| Name | GitHub Profile |
|------|----------------|
| 🌸 **Roaa Jouda** | [@roaajouda](https://github.com/roaajouda) |
| ✨ **Rasha Jouda** | [@Rashajouda](https://github.com/Rashajouda) |
| 🌼 **Salma Nabil** | [@Salma-Nabil-Afify](https://github.com/Salma-Nabil-Afify) |
| 💫 **Ahemd Salama**| [@Ahmed-Salamaa](https://github.com/Ahmed-Salamaa) |


---