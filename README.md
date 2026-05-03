# Developer Portfolio | High-Fidelity IDE Theme

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer-motion&logoColor=white)

A high-fidelity, **IDE-themed** developer portfolio designed for software engineers. It features a professional code-first aesthetic, interactive 3D elements, and a modular architecture that makes it easy to customize and deploy.

> [!TIP]
> This portfolio is designed to look like a modern code editor (VS Code / JetBrains style) to immediately showcase technical depth to recruiters and collaborators.

---

## ✨ Key Features

- 🖥️ **IDE-Inspired Terminal UI**: Realistic code-typing animations and JSON-structured data presentation.
- 🌐 **Interactive 3D Skill Sphere**: A dynamic Three.js/React Three Fiber globe visualizing technical expertise.
- 📬 **Secure Contact Form**: Integrated with **Web3Forms**.
- 🌓 **Premium Dark Aesthetic**: Custom-tuned color palette using Tailwind CSS v4 and glassmorphism.
- 📱 **Fully Responsive**: Optimized for everything from ultra-wide monitors to the latest mobile devices.
- 🔄 **Project Proxies**: Configured for Vercel Rewrites to host sub-projects seamlessly.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Data Store**: [Vercel Edge Config](https://vercel.com/docs/storage/edge-config)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)

---

## 📂 Project Structure

```text
├── public/          # Static assets (images, icons)
├── src/
│   ├── app/         # Next.js App Router (Layouts & Pages)
│   ├── components/  # Reusable UI components
│   │   ├── sections/# Main portfolio sections (Hero, About, etc.)
│   │   └── ui/      # Base UI primitives
│   └── lib/
│       ├── data.ts  # Logic for fetching from Edge Config / Fallback
│       └── context.tsx # Portfolio data context provider
├── tailwind.config.js
└── vercel.json      # Deployment & Rewrite configurations
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
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
EDGE_CONFIG=your_vercel_edge_config_connection_string (optional for local)
```

### 4. Run the development server
```bash
npm run dev
```

---

## 🎨 How to Customize (Make it yours!)

If you want to copy this portfolio for your own use, follow these steps:

1. **Update Personal Data**: This portfolio is fully driven by **Vercel Edge Config**.
   - **Setup**: Create an Edge Config in Vercel, add a key named `portfolio`, and paste your JSON data there.
   - **Environment Variables**: Add the `EDGE_CONFIG` connection string to your Vercel project to enable data fetching.
2. **Change Icons/Images**: Replace files in the `public/` directory with your own profile picture (`myself.jpg`) and favicon.
3. **Customize Theme**: Adjust colors in `src/app/globals.css` or the Tailwind configuration to match your branding.
4. **Update Contact Form**: Register at [Web3Forms](https://web3forms.com/) to get your own access key and update it in your environment variables.



---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ☕ and 💻 by [Golam Wasy](https://github.com/golamwasy)
