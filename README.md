# 📊 FlowAnalytics — AI-Powered Admin Dashboard

> **FlowAnalytics** is a full-stack analytics dashboard that visualizes vendor, invoice, and spend data with live charts, tables, and AI-driven SQL insights using **Vanna AI / OpenAI**, **Next.js**, and **PostgreSQL**.

---

## 🧭 Overview

FlowAnalytics combines clean UI, interactive analytics, and an integrated chat assistant (“FlowAI”) to help admins understand real-time financial metrics — such as total spend, top vendors, and monthly invoice trends.

### ✨ Key Features
- 📈 **Dynamic Charts** — Line & Bar charts using live backend data  
- 🧮 **Real-Time Metrics** — Total spend, invoices, vendors, and uploaded documents  
- 💬 **AI Chat Assistant** — FlowAI bot powered by OpenAI/Vanna to answer natural-language queries  
- 🗄️ **PostgreSQL Integration** — Prisma ORM used for relational data and aggregations  
- 🎨 **Modern UI** — Built in **Next.js 16 + TailwindCSS + Recharts + Framer Motion**  
- 🔐 **Modular Code** — Cleanly separated components for scalability  

---

## 🛠️ Tech Stack

| Area | Technology |
|-------|-------------|
| **Frontend** | Next.js 16, TypeScript, TailwindCSS |
| **Charts & Animations** | Recharts, Framer-Motion |
| **Backend** | Express.js + Prisma ORM |
| **Database** | PostgreSQL (`flowbitdb`) |
| **AI Assistant** | OpenAI API / Vanna AI |
| **Deployment** | Vercel (frontend) + Render/Railway (backend) |

---

## 📂 Project Structure



apps-web/
│
├── app/
│ ├── api/
│ │ └── chat/route.ts # Chatbot backend endpoint
│ ├── dashboard/page.tsx # Main dashboard page
│ ├── layout.tsx # Global layout with Navbar + Sidebar
│ └── globals.css # Global styles
│
├── src/
│ ├── components/ # Sidebar, Navbar, ChatBot, Cards, etc.
│ ├── lib/api.ts # API utilities
│ └── prismaClient.ts (backend) # Prisma connection wrapper
│
apps-api/
│ ├── src/
│ │ ├── index.ts # Express server entry
│ │ ├── routes/dashboard.ts # REST API routes (summary, vendors, monthly)
│ │ └── prismaClient.ts # Prisma instance
│ └── package.json

