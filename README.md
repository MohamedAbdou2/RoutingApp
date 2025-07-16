# Angular Routing Application

A modern single-page application built with Angular that demonstrates advanced routing and component features.

## Features

### Navigation
- Responsive navigation bar with dynamic scroll behavior
- Hash-based routing strategy
- Active route highlighting
- Automatic scroll restoration

### Components
1. **Home**
   - Landing page with avatar display
   - Responsive layout
   - Custom star component integration

2. **About**
   - Two-column content layout
   - Background color customization
   - Responsive text formatting

3. **Portfolio**
   - Grid layout for project showcase
   - Modal image viewer
   - Hover effects with opacity transitions
   - Dynamic image loading

4. **Contact**
   - Contact form with validation
   - Contact information display
   - Responsive two-column layout

5. **Shared Components**
   - Star Component
     - Customizable color through input properties
     - Reusable across multiple sections
   - Navbar Component
     - Scroll-aware behavior
     - Dynamic padding adjustments
   - Footer Component
     - Social media links
     - Copyright information
     - Location details

### Styling
- CSS Variables for theme colors
- Bootstrap integration
- Font Awesome icons
- Responsive design
- Custom animations and transitions

### Routing Features
- Path-based navigation
- Default route redirection
- 404 page handling
- Route titles
- Child routes support

## Technical Details

### Prerequisites
- Node.js (v14 or higher)
- Angular CLI (v20.1.0)
- NPM (v6 or higher)

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
ng serve
```

### Project Structure
```
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── footer/
│   ├── home/
│   ├── navbar/
│   ├── notfound/
│   ├── portfolio/
│   └── star/
├── assets/
│   └── images/
└── styles.css
```

### Built With
- Angular 20.1.0
- Bootstrap 5
- Font Awesome
- Angular Router

### Development Commands
```bash
# Generate new component
ng generate component new-component

# Build for production
ng build --configuration production

# Run tests
ng test

# Check for linting errors
ng lint
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



