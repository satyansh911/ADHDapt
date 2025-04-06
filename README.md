# ADHDapt

**ADHDapt** is a supportive web application designed to assist individuals with ADHD in managing their daily lives more effectively. It addresses common ADHD-related challenges through a combination of scheduling, mood tracking, gamification, journaling, and community support.

---

## 🧠 Problem Statement

ADHDapt aims to help users tackle:

- Lack of Focus
- Poor Time Management
- Emotional Dysregulation
- Impulsivity
- Burnout
- Social Isolation
- Various types of ADHD
- Low awareness about ADHD symptoms

---

## 💡 Our Solution

ADHDapt provides the following features:

- 🎮 **Gamification** to develop and maintain focus
- 📅 **Scheduler** with calendar, notification, timer, and optional AI-based suggestions
- 📈 **Mood Tracker** with relaxing audio session playback
- 📓 **Journaling** system to reflect on thoughts, with graphs and analytics
- ✅ **Task Breakdown** feature that includes breaks and distraction-free mode
- 💬 **Community Support** to connect with others in a similar journey
- 🧩 **Information Hub** explaining ADHD types, symptoms, and possible remedies
- ✍️ **Articles & Blogs** for personal experiences and education

---

## 👥 Who Can Use ADHDapt?

- Individuals (self-use)
- Parents (with a dedicated **Parent Mode**)
- Therapists

---

## 🛠 Tech Stack

### 🔷 Frontend

- Next.js
- ShadCN
- TailwindCSS
- Framer
- Recharts (for graphs)
- Websockets
- Zustand (for state management)
- Three.js (optional)

### 🔶 Backend

- MongoDB
- Firebase (for notifications and reminders; may use OneSignal)

### 🔐 Authentication

- Firebase Auth / JWT
- Google OAuth

### 🔌 APIs

- OpenAI
- Gamification API

### 🌐 Hosting

- Vercel / Render
- Cloudinary
- Mongo Atlas

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
