# ShopZone 🛒

ShopZone is a modern E-Commerce Single Page Application (SPA) built using React.js.  
Users can browse products, view detailed product information, add items to cart, and access protected checkout routes with mock authentication.

# 🚀 Features

## Routing
- Multi-page SPA using React Router DOM
- Dynamic product routes
- Protected checkout route

## Product Management
- Fetch products from DummyJSON API
- Product detail pages
- Responsive product grid

## Cart Functionality
- Add to Cart
- Remove from Cart
- Dynamic Cart Count
- Total Price Calculation

## Authentication
- Mock Login System
- Protected Routes
- Unauthorized user redirection

## Persistence
- Cart data saved using localStorage
# 🛠️ Tech Stack
- React.js
- React Router DOM
- Context API
- Standard CSS
- Vite
# 🌐 API Used
DummyJSON Products API
https://dummyjson.com/products

# 📂 Project Structure
```bash
src/
│
├── components/
├── context/
├── pages/
├── App.jsx
├── App.css
├── main.jsx
└── index.css

Run development server:

```bash
npm run dev
```

---

# 🔐 Mock Authentication

This project uses mock authentication using React Context API.

Users must login before accessing the checkout page.

---

# 🛒 Protected Routes

The `/checkout` route is protected using React Router.

Unauthorized users are automatically redirected to the login page.

# 🚀 Deployment

Deployed using Vercel.

---

# 👨‍💻 Author

Shravan
