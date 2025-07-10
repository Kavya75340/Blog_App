✅ README.md for Full Stack Blog App
markdown
Copy
Edit

# 📝 Blog App

A Full Stack Web Application for writing and managing blogs — built using **React**, **Spring Boot**, and **MySQL**.

## 🌐 Live Demo

> [🔗 Live Link (if deployed)](https://yourdomain.com)

---

## 📸 Screenshots

| Home Page                     | Add Blog                         | Explore Blogs                       |
| ----------------------------- | -------------------------------- | ----------------------------------- |
| ![Home](screenshots/home.png) | ![Add](screenshots/add-blog.png) | ![Explore](screenshots/explore.png) |

---

## 🚀 Features

-   🏠 **Home** – Landing page with welcome message
-   ✍️ **Add Blog** – Create a new blog with title, content, etc.
-   🔍 **Explore Blogs** – View all submitted blogs
-   ℹ️ **About** – App information and project details
-   📞 **Contact** – Developer or support contact form
-   🗑️ **Delete Blog** – (Optional) Remove any blog post directly from explore page

---

## 🛠️ Tech Stack

### 🧩 Frontend – React

-   React JS (with hooks and functional components)
-   Axios for API interaction
-   React Router DOM
-   Tailwind CSS or Bootstrap for styling

### ⚙️ Backend – Spring Boot

-   Spring Web
-   Spring Data JPA
-   RESTful API design
-   Cross-Origin Resource Sharing (CORS)

### 🗄️ Database – MySQL

-   Database: `blogdb`
-   Table: `blog` with fields: `id`, `title`, `content`, `createdAt`

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Kavya75340/Blog_App.git
cd Blog_App
```

---

### 2. Backend Setup (Spring Boot)

-   Open the `backend/` folder in your IDE (like IntelliJ or Eclipse)
-   Configure `application.properties` with your MySQL DB details:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/blogdb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

-   Run the main class:

```bash
./mvnw spring-boot:run
```

---

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

> React app will run on `http://localhost:5173`

---

## 📂 Folder Structure

```
course-app/
├── backend/        # Spring Boot backend
│   └── src/
├── frontend/       # React frontend
│   └── src/
├── README.md
└── screenshots/
```

---

## 📬 Contact

**Created By:** Kavya Varshney
📧 Email: \[[KvVarshney\kvvarshney75@gmail.com](mailto:kvvarshney75@gmail.com)]
🔗 LinkedIn: [linkedin.com/in/kavya-varshney](https://www.linkedin.com/in/kavya-varshney-658803327/)

---
