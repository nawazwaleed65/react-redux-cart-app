
```markdown
# 🛍 React Redux Cart App

A modern shopping cart application built with **React**, **Redux Toolkit**, **Vite**, and **Tailwind CSS**.  
It demonstrates state management, product fetching, cart persistence, and seamless UI interactions using React Context and Redux Toolkit.

---

## 🚀 Features

- 🧠 **Redux Toolkit** for efficient global state management  
- 📦 **Add / Remove / Update** cart items  
- 💾 **Persistent cart** with localStorage  
- 🌐 **Routing** using React Router DOM  
- 🎨 **Responsive UI** with Tailwind CSS  
- ⚡ **Fast Build & Development** using Vite  
- 🔍 **Product fetching** from [DummyJSON API](https://dummyjson.com/products)

---

## 🏗️ Tech Stack

| Tool | Description |
|------|--------------|
| **React 19+** | UI library for building components |
| **Redux Toolkit** | For state management |
| **React Router DOM** | For navigation between pages |
| **Vite** | Fast development and build tool |
| **Tailwind CSS** | Utility-first CSS framework |
| **DummyJSON API** | Product data source |



````

---

## ⚙️ Installation Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/react-redux-cart-app.git
cd react-redux-cart-app
````

### 2️⃣ Initialize with Vite + React

```bash
npm create vite@latest . -- --template react
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Install Additional Packages

```bash
npm install react-router-dom @reduxjs/toolkit react-redux tailwindcss postcss autoprefixer react-icons
```

### 5️⃣ Setup Tailwind CSS

```bash
npx tailwindcss init -p
```

Then update **`tailwind.config.js`**:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

Add Tailwind directives to **`index.css`**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6️⃣ Run the Development Server

```bash
npm run dev
```

### 7️⃣ Build for Production

```bash
npm run build
```

---

## 🧠 Redux Setup

### 🪄 Store Configuration (`src/Redux/store.js`)

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
```

### 🧩 Provider Setup (`main.jsx`)

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## 📸 Screenshots (Optional)

*Add some screenshots of your UI once ready.*

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 💬 Author

**Waleed Nawaz**
👨‍💻 Frontend Developer | React | Redux | Tailwind | Vite

