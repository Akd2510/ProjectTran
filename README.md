**🚌 Public Transport Tracking System**  

🚀 A modern, minimal, and stylish **Public Transport Tracking System** built with **Next.js, Supabase, Tailwind CSS v4, and Google Maps**. This project allows users to track public transport, view routes on an embedded map, check real-time weather, and manage transport-related data with a database.

## **📌 Features**
✅ **Modern UI** – Minimal, dark, and stylish design  
✅ **Embedded Google Maps** – View transport routes  
✅ **User Authentication** – Secure login with Supabase Auth  
✅ **Database Management** – Store transport details using Supabase  
✅ **Weather Display** – Get real-time weather updates  
✅ **Optimized for Performance** – Built with Next.js for fast loading  
✅ **Future-Ready** – Scalable backend with Supabase  

---

## **🚀 Tech Stack**
| Technology  | Description |
|-------------|------------|
| **Next.js** | React-based framework for frontend & backend |
| **Supabase** | Database, authentication, and backend API |
| **Tailwind CSS v4** | Modern, responsive, utility-first styling |
| **Google Maps API** | Embedding and tracking transport locations |
| **Prisma** | ORM for database integration |

---

## **📂 Folder Structure**
```
/public_transport_tracking
│── /app           # Next.js App Router (Frontend & Backend)
│── /components    # Reusable UI Components
│── /lib           # Helper Functions
│── /pages/api     # API Routes (Backend Logic)
│── /public        # Static Assets
│── /styles        # Tailwind CSS Styles
│── /utils         # Utility Functions
│── .env.local     # Environment Variables
│── next.config.js # Next.js Configuration
│── tailwind.config.js # Tailwind CSS Config
│── README.md      # Documentation
```

---

## **🛠️ Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/public_transport_tracking.git
cd public_transport_tracking
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
```

### **4️⃣ Run the Development Server**
```sh
npm run dev
```
App will be live at **http://localhost:3000**

---

## **📡 Database Setup (Supabase)**
1. **Go to [Supabase](https://supabase.com/) and create a project.**  
2. **Create the required tables** (CSV files for tables are included).  
3. **Copy the API keys** from Supabase and paste them into `.env.local`.  
4. **You're all set!**

---

## **🗺️ Google Maps Integration**
- The app embeds Google Maps to display transport locations.  
- Make sure to enable **Google Maps JavaScript API** in your Google Cloud account.  

---

## **📊 Future Plans**
✅ **Real-Time Transport Tracking** – Live location updates  
✅ **Admin Dashboard** – Manage routes, vehicles, and users  
✅ **Notifications** – Alerts for transport delays  
✅ **Mobile App** – Convert to React Native for Android & iOS  

---

## **📜 License**
MIT License. Free to use and modify.  

---
