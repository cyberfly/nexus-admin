# Nexus Admin Dashboard

A modern, dark-themed admin dashboard built with Vite and Vanilla JavaScript featuring modular HTML components and a cyberpunk-inspired aesthetic.

## Features

- **Vite Build System**: Fast development and optimized production builds.
- **Modular HTML Components**: Shared UI elements like Head, Header, and Sidebar managed via Vite templates.
- **No Heavy Frameworks**: Built using Vanilla JavaScript and enhanced with Alpine.js for lightweight interactivity.
- **Dark Neon Theme**: Premium cyberpunk design with vibrant accents.
- **Responsive Layout**: Seamlessly transitions between desktop and mobile views with a functional sidebar toggle.
- **Extensive UI Components**: A wide range of pre-built component pages (Alerts, Badges, Charts, Tables, etc.).

## Project Structure

```
nexus-admin/
├── src/
│   ├── components/
│   │   ├── head.html       # Shared <head> metadata and scripts
│   │   ├── header.html     # Top navigation bar
│   │   └── sidebar.html    # Side navigation menu
│   ├── styles/
│   │   └── main.css        # Global CSS variables and styles
│   └── main.js             # Application entry point/styles import
├── index.html              # Dashboard Home
├── vite.config.js          # Vite configuration with HTML injection logic
└── package.json            # Project dependencies and scripts
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

This will start the Vite dev server at http://localhost:3000 (with auto-open enabled).

### Build for Production

**Minified Build:**

```bash
npm run build
```

**Non-Minified Build (for debugging/review):**

```bash
npm run html
```

Proceeds will be generated in the `dist/` directory.

### Deployment

```bash
npm run deploy
```

Pushes the `dist` folder to the `gh-pages` branch.

## Component System

The dashboard utilizes `vite-plugin-html` to inject reusable HTML snippets into all pages. This allows for modular development while maintaining static output.

### Shared Components

- **Head (`src/components/head.html`)**: Contains meta tags, Google Fonts (Outfit), Tailwind CDN config, and Alpine.js.
- **Header (`src/components/header.html`)**: Desktop/Mobile top bar with search, notifications, and profile.
- **Sidebar (`src/components/sidebar.html`)**: Navigation links to all dashboard sections.

### Usage in HTML files

Inject components using the EJS-like syntax:

```html
<%- head %> <%- header %> <%- sidebar %>
```

## Available UI Pages

- **Dashboard**: `index.html`
- **Elements**: `alerts.html`, `badge.html`, `buttons.html`, `button_group.html`, `cards.html`, `breadcrumb.html`
- **Advanced**: `charts.html`, `modal.html`, `popover.html`, `tooltips.html`, `toast.html`
- **Data**: `tables.html`, `pagination.html`, `timeline.html`, `grids.html`
- **Forms**: `forms.html`
- **Other**: `about.html`, `tabs.html`

## Styling & Libraries

- **Tailwind CSS**: Loaded via CDN for utility-first styling.
- **Alpine.js**: Handles UI state (sidebar toggle, dropdowns, etc.) with zero runtime configuration.
- **Custom Fonts**: Outfit font family from Google Fonts.
- **Charts**: Integrated chart libraries for data visualization.

## Browser Support

Targeting modern browsers with ES6+ support:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

ISC
