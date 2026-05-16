# Sugar Overdose
A fully responsive, single-page food ordering web application for a dessert café. Customers can browse handcrafted sundaes, cakes, shakes and cookies, add items to a cart and place orders. 

## Features

### Customer
- Browse products across 4 categories — Sundaes, Cakes, Shakes, Cookies
- Filter products by category using tab navigation
- Add items to cart, adjust quantities, remove items
- Real-time cart total calculation
- Checkout flow with name, phone, delivery address, and payment method
- Order receipt with unique Order ID on successful placement
- Fully responsive — mobile first design

### Authentication
- Customer signup with name, email, password and phone
- Customer login with email and password
- Session persistence across page refreshes using localStorage

## Tech Stack
- HTML  
- TailwindCSS
- Vanilla JavaScript

## Project Structure

```
sugar-overdose/
├── index.html          
├── login.html         
├── signup.html       
├── css/
│   ├── input.css       
│   └── output.css     
└── js/
    ├── config.js      
    ├── products.json   
    ├── products.js     
    ├── app.js          
    ├── cart.js         
    └── auth.js        
```

## Setup & Running Locally
### Prerequisites
- Node.js installed
- A local server (VS Code Live Server extension recommended)

### Steps

**1. Clone or download the repository**
```bash
git clone https://github.com/your-username/sugar-overdose.git
cd sugar-overdose
```

**2. Install Tailwind CSS**
```bash
npm install
```

**3. Start the Tailwind watcher**
```bash
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

**4. Open with Live Server**
Right-click `index.html` in VS Code → **Open with Live Server**

## Testing the Features

### As a Customer

1. Go to `index.html` — browse all products
2. Click category tabs to filter
3. Click **Sign Up** → create an account
4. After login — click `+` on any product to add to cart
5. Open cart via the 🛒 button in navbar
6. Adjust quantities with `+` / `−` buttons
7. Click **Process to Checkout**
8. Fill in delivery details → click **Place Order**
9. Receipt appears with Order ID
10. Click ☆ on any product to leave a star rating

### Resetting Data

To clear all users and sessions, open browser DevTools → **Application** → **Local Storage** → select your localhost → **Clear All**.

## Design

- **Color scheme:** Warm cream base (`#fdf6ec`) with chocolate dark tones (`#3b1f0e`) and crimson red accents (`#e8274b`)
- **Typography:** Playfair Display (headings) + DM Sans (body)
- **Mobile first:** All layouts designed for mobile, scaled up to desktop using Tailwind breakpoints (`md:`, `lg:`, `xl:`)

## 🔮 Planned Improvements

- Admin dashboard — full CRUD interface for products with stock toggle (add, edit, delete, mark in/out of stock)
- Star ratings — customers can rate purchased products 1–5 stars, average displayed on each product card
- Toast notifications — non-intrusive success and error feedback for cart actions, login, logout and order placement
- Firebase Authentication to replace localStorage users
- Firestore database for persistent product and order storage
- Order history page for customers
- Search and sort functionality across the menu
