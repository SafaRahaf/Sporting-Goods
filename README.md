# Sporting Goods E-Commerce Website

## Introduction

A comprehensive e-commerce platform for sporting goods, offering a wide range of equipment and accessories for various sports, designed to enhance both customer and admin experiences.

## Project Description

This project aims to build a dynamic and user-friendly e-commerce website tailored for a sporting goods business. The platform will provide a seamless shopping experience for customers. The site includes various features such as product browsing, detailed product views, cart management, and a streamlined checkout process. and more.

## Features

- **Navbar & Footer**

  - Logo and menu items (All Products, Manage Products, Cart, About Us, home)
  - Social media icons and website links in the footer contact informations etc

- **Homepage**

  - Hero section with a carousel showcasing discount information
  - Featured products section with product details and View Details button
  - Category section with clickable categories redirecting to filtered products
  - Contact Us section with a form

- **About Us**

  - Company information, mission, vision, contact details, team, and store locations

- **All Products**

  - Display of all products with search, filter, and sorting functionalities
  - Clear filter button

- **Single Product**

  - Detailed product view with an Add to Cart button and image viewing options

- **Cart Page**

  - View and manage products in the cart
  - Total price calculation including VAT
  - Proceed to checkout functionality

- **Checkout Page**

  - User details form
  - Payment methods (Cash on Delivery, Stripe)
  - Success page redirection post-purchase

- **Manage Products**

  - Add, delete, and update products using RTK Query
  - Prefilled update form fields
  - Real-time UI updates with modals/toasts for actions

- **Backend Integration**

  - Backend integration using Node.js, Express.js, Mongoose, and TypeScript

- **Responsive Design**
  - Ensuring compatibility across devices (desktop, tablet, mobile)

## Technology Stack

- **Frontend Development**

  - React
  - Redux
  - typescript

  - **Style**
    - tailewindcss

- **Backend Development**
  - Node.js
  - Express.js
  - Mongoose
  - TypeScript

## Installation and Start App Guideline

- npm i
- npm run dev

### Configuration

- **Create a .env file in the root directory of the project.**
- **Add necessary configuration variables in the .env file. Example:**

```bash
PORT=5000
DB_URL=your_db_connection_uri
```
