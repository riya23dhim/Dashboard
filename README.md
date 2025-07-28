
#  Admin Dashboard – Full Stack Web App

A modern and responsive Admin Dashboard built with **React 19**, **Tailwind CSS**, **Material UI**, and a robust **Node.js/Express/MongoDB** backend.  
Includes full **JWT authentication**, **frontend/backend validation**, **skeleton loading states**, and custom **error handling** pages — ensuring seamless UI/UX and robust security.

---

##  Tech Stack

###  Frontend
- React 19, React Router DOM  
- Tailwind CSS, Material UI  
- **Yup** for client-side validation  
- **Skeleton Loader** for smooth UX  
- Custom **404 & 500 Error Pages** with React Router  
- **Dark Mode** using Context API  

###  Backend
- Node.js, Express.js, MongoDB  
- **JWT Auth** with protected routes and cookies  
- **bcrypt** for password hashing  
- **Express Validator** for server-side field validation  
- Mongoose ODM  
- Centralized error handling and route fallback  
- **morgan** logger for developer debugging  

---

##  Features

- 🔐 **Authentication:** Login/Register with JWT stored in cookies  
- ✅ **Validation:** Yup (frontend) + Express Validator (backend)  
- 🔁 **Protected Routes:** via custom Express middleware  
- 📦 **Dynamic Data Loading:** Orders, Customers, Employees  
- 🧊 **Skeleton Loaders**: Real-time feedback during fetch  
- 🚫 **Custom 404/500 Error Pages**  
- 🌙 **Dark Mode** toggle via Context API  
 

---

##  Folder Structure Highlights

```bash
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx

backend/
├── routes/
├── middleware/
├── config/
├── index.js
└── .env
```

---

##  Live Demo

- **Frontend**: [Netlify Live Link](ttps://dashboard7733.netlify.app)  
- **Backend**: [Render API Link](#)  

---

##  Run Locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

**Don’t forget to add your `.env` with Mongo URI and JWT secret:**

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

---

##  Protected API Routes

```http
GET /api/orders
GET /api/customer
GET /api/employee
```

> All routes require a valid JWT token (via cookies).

---

##  Notes

- Built with **React 19** and latest hooks & updates  
- Backend runs with **nodemon** via `npm run dev`  
- Accessing unknown backend routes returns a **400 JSON error**  
- Skeleton loaders enhance perceived performance  
- Error page  handled via custom **`/error`** route  
