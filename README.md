# 🧾 InvoGen – AI-Powered Invoice Generator  
**“Your AI Partner for Effortless Invoicing & Smart Business Insights”**  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Here-blue)](https://ai-invoice-inogen.vercel.app/)  

InvoGen is an **AI-powered invoice generation platform** built with the **MERN stack** and **Groq AI**. It helps businesses and freelancers generate professional invoices instantly, print or download them as PDFs, track payments, manage overdue bills, and gain insightful analytics on their finances.

---

## ✨ Features  

- **🤖 AI Invoice Creation** – Paste any text, email, or receipt, and let Groq AI generate a professional invoice instantly.  

- **📊 AI-Powered Dashboard** – Gain actionable financial insights through AI-generated analytics presented on the dashboard.  
- **📧 Smart Reminders** – Automatically send polite and effective payment reminder emails for overdue invoices.  
- **📂 Easy Invoice Management** – Centralized management of all invoices with payment tracking and reminder functionalities.  
- **🖨️ Print & PDF Export** – Print invoices directly or download them as PDFs for easy sharing and record-keeping.  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js, Tailwind CSS / Custom CSS 

- **Backend:** Node.js, Express.js  
- **AI Integration:** Groq API  
- **Database:** MongoDB Atlas  
- **Authentication:** JWT (JSON Web Tokens)  
- **Other Tools:** Axios, Chart.js / Recharts, Multer, jsPDF / react-to-print  

---

## ⚙️ Installation & Setup  


1. **Clone the Repository**  
```
git clone https://github.com/your-username/InvoGen.git
cd InvoGen
```



2. **Install Dependencies**  
```
npm install
```


3. **Set up Environment Variables**  
Create a `.env` file in the root directory with the following content:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
```


4. **Run the Application**  
Start backend server
```
npm run dev
```

Start frontend client
```
npm run dev
```



---

## 🧑‍💻 How to Use  

- **Sign Up / Log In**  
Create a new account or log in with existing credentials.  

- **Generate Invoice**  
Paste any text, email, or receipt details into the input area and click Generate Invoice. The AI (Groq) will create a professional invoice instantly.  

- **Print / Download PDF**  
Preview your generated invoice. Print it directly or download as PDF for sharing or record-keeping.  

- **Manage Invoices**  
View, track, and manage all invoices from your dashboard, including payment statuses (Paid / Pending).  

- **Get Insights**  
Explore the AI-powered dashboard featuring analytics and financial business insights.  

- **Smart Reminders**  
Enable automated reminders for overdue invoices, sending polite payment request emails to clients.  






---

## 🔮 Future Enhancements  

- Multi-language invoice support  

- Integration with payment gateways (Stripe, Razorpay, PayPal)  
- Role-based access control (Admin, Accountant, Client)  
- AI-powered expense categorization  

---
