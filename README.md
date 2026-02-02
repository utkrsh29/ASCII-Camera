# 🎥 ASCII Camera

A real-time **ASCII art camera** built using **JavaScript, HTML Canvas, and Express**.  
This project captures live webcam video, converts each frame into ASCII characters, and renders it as **selectable, copyable text** with a **futuristic UI**.

---

## ✨ Features

- 📷 Live webcam capture
- 🔤 Real-time ASCII conversion
- 🪞 Mirrored (selfie-style) output
- ⏸ Pause / Play camera
- ✏️ Editable ASCII character set
- 🔠 Adjustable font size
- 🎨 Custom font color
- 📋 Fully selectable & copyable ASCII text
- 🧩 Sidebar-based control panel
- 🌌 Futuristic dark UI theme

---

## 🛠 Tech Stack

- **Frontend**
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Canvas API

- **Backend**
  - Node.js
  - Express.js
  - EJS (templating)

---

## 📁 Project Structure

ascii-camera/
│
├── public/
│ ├── camera.js
│ └── styles.css
│
├── views/
│ └── index.ejs
│
├── server.js
└── README.md


---

## 🚀 How It Works

1. Webcam input is accessed using `getUserMedia`
2. Each video frame is drawn onto a hidden `<canvas>`
3. Pixel brightness is calculated
4. Brightness is mapped to ASCII characters
5. ASCII output is rendered inside a `<pre>` element
6. Users can customize characters, font size, and color in real time

---

## 🧪 Controls

| Control | Description |
|------|------------|
| Characters | Change ASCII density |
| Font Size | Adjust ASCII size |
| Font Color | Customize text color |
| Pause / Play | Freeze or resume camera |

---

## ▶️ Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ascii-camera.git
cd ascii-camera
```


### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Start the server
```
node server.js
```

### 4️⃣ Open in browser
```
http://localhost:3000
```

