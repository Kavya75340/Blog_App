# 📝 Blog App

A Full Stack Web Application for writing and managing blogs — built using **React**, **Spring Boot**, and **MySQL**.

---

## 🎞️ Demo GIFs

| Feature                    | Preview                      |
| -------------------------- | ---------------------------- |
| Home Page                  | ![](gifs/home.gif)           |
| Explore + Blog Detail View | ![](gifs/explore-detail.gif) |
| Add Blog                   | ![](gifs/add-blog.gif)       |

---

## 🚀 Features

-   🏠 **Home** – Landing page with welcome message
-   🔍 **Blogs** – View all submitted blogs
    -   🔎 **Click on a blog** to view full details
-   ✍️ **Add Blog** – Create a new blog with title, content, etc.
-   ℹ️ **About** – App information and project details
-   📞 **Contact** – Developer or support contact form

---

## 🛠️ Tech Stack

### 🧩 Frontend – React

-   React JS (with hooks and functional components)
-   Axios for API interaction
-   React Router DOM
-   Tailwind CSS

### ⚙️ Backend – Spring Boot

-   Spring Web
-   Spring Data JPA
-   RESTful API design
-   Cross-Origin Resource Sharing (CORS)

### 🗄️ Database – MySQL

-   Blogs Entity
-   JPA Repository
-   Database connectivity via `application.properties`

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Kavya75340/Blog_App.git
cd Blog_App
```

---

### 2. Backend Setup (Spring Boot)

-   Open the `backend/` folder in your IDE (like VS Code or Eclipse)
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
└── gifs/
```

---

## 📬 Contact

**Created By:** Kavya Varshney

📧 Email: \[[KvVarshney\kvvarshney75@gmail.com](mailto:kvvarshney75@gmail.com)]
🔗 LinkedIn: [linkedin.com/in/kavya-varshney](https://www.linkedin.com/in/kavya-varshney-658803327/)

---
