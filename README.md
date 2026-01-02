# Nexus Admin Dashboard

A modern, dark-themed admin dashboard built with Vite and Vanilla JavaScript featuring modular components.

## Features

- **Vite Build System**: Fast development and optimized production builds
- **Modular Components**: Header and Sidebar as reusable JavaScript modules
- **No Framework**: Pure vanilla JavaScript - lightweight and fast
- **Dark Theme**: Cyberpunk-inspired neon design
- **Responsive**: Mobile-friendly with sidebar toggle

## Project Structure

```
nexus-admin/
├── src/
│   ├── components/
│   │   ├── header.js       # Header component
│   │   └── sidebar.js      # Sidebar component
│   ├── styles/
│   │   └── main.css        # Global styles
│   └── main.js             # Application entry point
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start the Vite dev server at http://localhost:3000

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Component System

The dashboard uses a simple component include system:

### Header Component (`src/components/header.js`)
- Search bar
- Notification button
- Settings button
- Mobile menu toggle

### Sidebar Component (`src/components/sidebar.js`)
- Logo
- Navigation menu
- User profile section

### Usage

Components are automatically loaded via `src/main.js`:

```javascript
import { createHeader } from './components/header.js';
import { createSidebar } from './components/sidebar.js';
```

## Styling

- **Tailwind CSS**: Loaded via CDN for rapid development
- **Custom Fonts**: Outfit font family from Google Fonts
- **Custom Scrollbar**: Styled to match dark theme
- **Grid Pattern Background**: Subtle cyberpunk aesthetic

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

ISC
