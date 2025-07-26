# Personal Website - Just Broch

A modern, responsive personal website built with React, TypeScript, and shadcn/ui. Features a clean design with smooth animations and excellent user experience.

## 🚀 Features

-   **Modern Design**: Clean, professional layout with shadcn/ui components
-   **Responsive**: Fully responsive design that works on all devices
-   **Smooth Animations**: Fade-in animations on scroll and hover effects
-   **Dark/Light Mode**: Built-in theme support (ready for implementation)
-   **SEO Optimized**: Meta tags and structured content
-   **Fast Performance**: Optimized with Vite for quick loading times

## 📋 Sections

-   **Hero Section**: Introduction with call-to-action buttons
-   **About Me**: Personal background and experience
-   **Work Experience**: Professional journey and achievements
-   **Projects**: Showcase of technical projects with GitHub links
-   **Contact**: Contact information and social media links

## 🛠️ Tech Stack

-   **Frontend**: React 18 + TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui (Radix UI)
-   **Build Tool**: Vite
-   **Icons**: Lucide React
-   **Animations**: CSS transitions and scroll effects

## 📦 Installation

### Prerequisites

-   Node.js (version 18 or higher)
-   npm or yarn

### Setup Instructions

1. **Clone the repository**

    ```bash
    git clone https://github.com/JustBroch/personal-website.git
    cd personal-website
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🏗️ Project Structure

```
personal-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── hero1.tsx       # Hero section
│   │   ├── navbar1.tsx     # Navigation bar
│   │   ├── careers4.tsx    # Work experience section
│   │   └── footer2.tsx     # Footer component
│   ├── pages/              # Page components
│   ├── assets/             # Images and static files
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Public assets
├── index.html              # HTML template
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Content Updates

-   **Personal Information**: Update `personalData` object in `App.tsx`
-   **Work Experience**: Modify `workExperienceData` array in `App.tsx`
-   **Projects**: Edit `projectsData` array in `App.tsx`
-   **Contact Info**: Update contact information in `App.tsx`

### Styling

-   **Colors**: Modify Tailwind CSS classes or update CSS variables
-   **Layout**: Adjust component structure in individual component files
-   **Animations**: Update CSS transitions and scroll effects

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to the main layout in `App.tsx`
3. Update navigation if needed

## 📝 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages

1. Add `gh-pages` dependency: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run `npm run deploy`

## 🔧 Configuration Files

-   `vite.config.ts` - Vite configuration
-   `tsconfig.json` - TypeScript configuration
-   `tailwind.config.js` - Tailwind CSS configuration
-   `components.json` - shadcn/ui configuration

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Just Broch**

-   LinkedIn: [justbroch](https://www.linkedin.com/in/justbroch)
-   GitHub: [JustBroch](https://github.com/JustBroch)

---

⭐ **Star this repository if you found it helpful!**
