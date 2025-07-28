
#  Admin Dashboard – Full Stack Web App

A modern and responsive Admin Dashboard built with **React 19**, **Tailwind CSS**, **Material UI**, and a robust **Node.js/Express/MongoDB** backend.  
Includes full **JWT authentication**, **frontend/backend validation**, **skeleton loading states**, and custom **error handling** pages — ensuring seamless UI/UX and robust security.

Images

Register:
<img width="1374" height="771" alt="Screenshot 2025-07-28 at 10 15 56 AM" src="https://github.com/user-attachments/assets/84ad65f6-7387-4073-b27b-dbb778041e05" />



Home
<img width="2832" height="1588" alt="image" src="https://github.com/user-attachments/assets/c59a1019-fd14-41d5-b80b-bcfa0cb1a831" />


Dark mode
<img width="1433" height="789" alt="Screenshot 2025-07-28 at 10 36 38 AM" src="https://github.com/user-attachments/assets/8efcd35c-8f40-4866-816d-bc04bc051d59" />



Mobile responsive


<img width="334" height="699" alt="Screenshot 2025-07-28 at 10 40 11 AM" src="https://github.com/user-attachments/assets/6c472979-0eee-4bf7-b32e-4485e0d2da1c" />

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

-  **Authentication:** Login/Register with JWT stored in cookies  
- **Validation:** Yup (frontend) + Express Validator (backend)  
-  **Protected Routes:** via custom Express middleware  
-  **Dynamic Data Loading:** Orders, Customers, Employees  
-  **Skeleton Loaders**: Real-time feedback during fetch  
-  **Custom 404/500 Error Pages**  
- **Dark Mode** toggle via Context API  
 

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
