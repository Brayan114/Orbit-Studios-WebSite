# 🚀 Orbit Studios

A modern, space-themed portfolio website built with React, TypeScript, and Tailwind CSS.

![Orbit Studios Preview](https://picsum.photos/800/400)

## ✨ Features

- **Stunning Space Theme** - Animated starfield background with nebula effects
- **Responsive Design** - Looks great on desktop, tablet, and mobile
- **Smooth Animations** - Micro-interactions and hover effects throughout
- **Contact Form** - Powered by Formspree for easy message handling
- **Fast Performance** - Built with Vite for lightning-fast load times

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **Lucide React** - Icons
- **Formspree** - Contact Form Backend

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Brayan114/Orbit-Studios-WebSite.git

# Navigate to project directory
cd Orbit-Studios-WebSite

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## 📁 Project Structure

```
orbit-studios/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── OrbitLogo.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── StarBackground.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
└── package.json
```

## 🎨 Customization

### Update Your Info
- Edit `Hero.tsx` - Main heading and tagline
- Edit `About.tsx` - Your bio and fast facts
- Edit `Projects.tsx` - Your portfolio projects
- Edit `Skills.tsx` - Your tech stack
- Edit `Contact.tsx` - Your contact info and social links

### Contact Form Setup
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the Form ID
3. Update `FORMSPREE_FORM_ID` in `src/components/Contact.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Deployed on [Netlify](https://netlify.com/)

---

Built with 💜 by [Brie](https://x.com/DevBrie) at Orbit Studios
