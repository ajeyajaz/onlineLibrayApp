# Online Library System (React + Vite)

An online library system built using **React**, **Vite**, **React Router**, and **Redux Toolkit**.  
This application allows users to browse books by category, view detailed book information, add new books, and handle invalid routes properly.

**GitHub Repository**  
https://github.com/ajeyajaz/onlineLibrayApp.git

---

## Tech Stack

- React (Vite)
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- JavaScript (ES6+)

---

## Features

### Home Page
- Welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi, Fantasy, Self-Help)
- Popular books displayed as cards
- Navigation bar with links:
  - Home
  - Browse Books
  - Add Book

---

### Browse Books Page
- Displays books filtered by category
- Dynamic routing using `/books/:category`
- Search books by **title or author**
- Each book has a **View Details** link

---

### Book Details Page
- Dynamic route for each book
- Displays:
  - Title
  - Author
  - Description
  - Rating
- Includes **Back to Browse Books** button

---

### Add Book Page
- Form to add a new book
- Form validation for all fields
- Books state managed using **Redux Toolkit**
- After submission:
  - Redirects to Browse Books page
  - Newly added book appears at the top

---

### 404 Page (Not Found)
- Handles undefined routes
- Displays invalid route URL

---

## How to Run the Application

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ajeyajaz/onlineLibrayApp.git
```

### 2️⃣ Go to project folder
```bash
cd onlineLibrayApp
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start development server
```bash
npm run dev
```

### 5️⃣ Open in browser
```
http://localhost:5173
```

---

## 👨‍💻 Author

**Ajay H**  
Frontend Developer (React)
