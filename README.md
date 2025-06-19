# 💬 ChatApp - Node.js & Express

A real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. This lightweight chat app allows multiple users to join chat rooms and exchange messages instantly.

---

## 🚀 Features

- Real-time communication using WebSockets (Socket.IO)
- Room-based chat functionality
- Dynamic username and room joining
- Auto-scroll for new messages
- Simple and responsive UI using HTML & CSS

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Real-Time Engine:** Socket.IO
- **Frontend:** HTML, CSS, JavaScript

---

## 📁 Project Structure

```
ChatApp---Node-Express/
│
├── public/               # Static files served to the client
│   ├── css/
│   ├── js/
│   └── index.html        # Main frontend file
│
├── utils/                # Utility modules
│   ├── messages.js
│   └── users.js
│
├── .gitignore
├── index.js              # Main server file
└── package.json
```

---

## 🧪 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/coderemon24/ChatApp---Node-Express.git
   cd ChatApp---Node-Express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🌐 Deployment Guide

### 🔹 Deploy to Shared Hosting (cPanel)

> Shared hosting typically does **not support Node.js** natively. You need a VPS or a specialized Node hosting provider. If shared hosting supports Node, follow their Node.js app setup.

### 🔹 Deploy to [Netlify](https://www.netlify.com/)

Netlify only supports static frontend hosting. You must:

1. Host backend (Node.js) on [Render](https://render.com), [Railway](https://railway.app), [Heroku](https://www.heroku.com) or [Vercel](https://vercel.com) (for serverless).
2. Deploy only the `public/` folder to Netlify as static frontend.
3. Update the WebSocket URL in `public/js/chat.js` to point to the backend server.

---

## ✍️ Author

**Md: Emon Ahmed**  
[GitHub Profile](https://github.com/coderemon24)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
