🛒 QuickCart – React SPA with FakeStore API

QuickCart is a responsive Single Page Application (SPA) built using React and Pure CSS.
The application fetches real-time product data from the FakeStore API and displays it using dynamic routing, reusable components, and clean UI.

This project demonstrates core front-end concepts such as API integration, routing, state management, reusable components, and localStorage usage.

🚀 Live Features

Single Page Application (SPA)

Product listing using external API

Product detail view with dynamic routing

Search products by name

Filter products by category

Add to Cart functionality

Add to Favorites functionality

Pagination

Loading & error handling

Responsive design (Pure CSS)

🛠️ Technologies Used

React (Hooks)

React Router DOM

JavaScript (ES6+)

Pure CSS

Fetch API

FakeStore API

localStorage

🌐 API Used

Products API:
https://fakestoreapi.com/products

Categories API:
https://fakestoreapi.com/products/categories

🧭 Application Routes
Route	Description
/	Home Page
/products	Product List Page
/product/:id	Product Detail Page
📂 Folder Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ProductCard.jsx
 │    ├── Loader.jsx
 │    └── ErrorMessage.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── ProductList.jsx
 │    └── ProductDetail.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css

⚙️ Core Components

Navbar – Navigation between pages

ProductCard – Reusable product display card

Loader – Displays loading state during API calls

ErrorMessage – Displays API error messages

✨ Optional Enhancements Implemented

🔍 Search bar to filter products

🗂 Category filter dropdown

❤️ Favorites system using localStorage

🛒 Cart system using localStorage

📄 Pagination for product listing

🧠 State Management

Local component state using React Hooks

Persistent data using localStorage for:

Cart items

Favorite products

🖼 Screenshots

(Add screenshots of the following pages here)

Home Page

Product List Page

Product Detail Page

🧪 Challenges & Solutions

Challenge: Handling API loading and error states
Solution: Created reusable Loader and ErrorMessage components

Challenge: Persisting cart and favorites data
Solution: Used localStorage to store and retrieve user data

Challenge: Dynamic routing for product details
Solution: Implemented route parameters using React Router

📦 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/quickcart-react-spa.git


Navigate to project directory:

cd quickcart-react-spa


Install dependencies:

npm install


Run the application:

npm run dev

🔗 GitHub Repository

👉 Add your GitHub repository link here
Example:

https://github.com/your-username/quickcart-react-spa

🌍 Live Demo (Optional)

👉 Add Netlify or Vercel deployment link here

👩‍💻 Author

Your Name
Sriramula Likhitha
Front-End Developer | React Enthusiast