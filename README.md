# Developer Portfolio | High-Fidelity IDE Theme

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

A high-fidelity, **IDE-themed** developer portfolio designed for software engineers. It features a professional code-first aesthetic, interactive 3D elements, and a modular architecture that makes it easy to customize and deploy.

> [!TIP]
> This portfolio is designed to look like a modern code editor (VS Code / JetBrains style) to immediately showcase technical depth to recruiters and collaborators.

---

## ✨ Key Features

- 🖥️ **IDE-Inspired Terminal UI**: Realistic code-typing animations and JSON-structured data presentation.
- 🌐 **Interactive 3D Skill Sphere**: A dynamic Three.js/React Three Fiber globe visualizing technical expertise, powered by Edge Config.
- 📬 **Secure Contact Form**: Integrated with **Web3Forms** with a server-side **Redis Message Limiter**.
- 🛡️ **Message Limiting**: Restricts form submissions to 3 messages per 24 hours to prevent spam.
- 🌓 **Premium Dark Aesthetic**: Custom-tuned color palette using Tailwind CSS v4 and glassmorphism.
- 🚀 **Performance Optimized**: Built with Next.js App Router and monitored via **Vercel Speed Insights**.
- 📱 **Fully Responsive**: Optimized for everything from ultra-wide monitors to the latest mobile devices.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Storage & Data**: 
  - [Vercel Edge Config](https://vercel.com/docs/storage/edge-config) (Dynamic Data)
  - [Upstash Redis](https://upstash.com/) / Redis Labs (Message Limiting)
- **Monitoring**: [Vercel Speed Insights](https://vercel.com/speed-insights), [Analytics](https://vercel.com/analytics)

---

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   └── api/send-contact/route.ts  # Message limit API logic
│   ├── components/
│   │   ├── sections/                 # Main portfolio sections
│   │   └── ui/                       # Base UI primitives
│   └── lib/
│       ├── data.ts                   # Fetching logic (Edge Config)
│       └── context.tsx               # Portfolio data context
├── public/                           # Static assets
├── vercel.json                       # Deployment & Rewrite configurations
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/golamwasy/golamwasy.github.io.git
cd golamwasy.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```env
# Web3Forms API Key
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here

# Redis Connection (Required for Message Limiting)
REDIS_URL=redis://your-redis-url

# Vercel Edge Config (Required for dynamic data)
EDGE_CONFIG=your_connection_string
```

### 4. Run the development server
```bash
npm run dev
```

---

## 🎨 How to Customize (Make it yours!)

1. **Update Personal Data**: This portfolio is fully driven by **Vercel Edge Config**.
   - Create an Edge Config in Vercel with a key named `portfolio`.
   - Use the schema provided in the documentation to populate your bio, experiences, and skills.
2. **Message Limiting**: Set up a free Redis database (e.g., Upstash) and add the `REDIS_URL`. The system will automatically start tracking submission limits.
3. **Contact Form**: Register at [Web3Forms](https://web3forms.com/) to get your own access key. The form uses a "Pre-check" flow to bypass Cloudflare bot protection while maintaining server-side security.
4. **Theme**: Adjust colors in `src/app/globals.css` or the Tailwind configuration to match your branding.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ☕ and 💻 by [Golam Wasy](https://github.com/golamwasy)
