# Professional Portfolio - Gajendra Singh

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic navigation, smooth scrolling, and hover effects
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with lazy loading and optimized assets

## Sections

1. **Hero Section**: Eye-catching introduction with profile image and social links
2. **About**: Personal information, statistics, and key features
3. **Experience**: Professional timeline with work history
4. **Skills**: Technology stack and expertise areas
5. **Projects**: Portfolio of featured projects with descriptions
6. **Contact**: Contact information and message form

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Setup Instructions

1. **Clone or Download**: Get the project files
2. **Customize Content**: Update the following with your information:
   - Personal details in `index.html`
   - Profile image (replace placeholder)
   - Contact information
   - Work experience
   - Skills and technologies
   - Project details and links
   - Social media links

3. **Local Development**: 
   - Open `index.html` in a web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using Live Server (VS Code extension)
     ```

## Customization Guide

### Personal Information
Update these sections in `index.html`:
- Hero title and description
- About section content
- Contact details
- Social media links

### Profile Image
Replace the placeholder image URL in the hero section:
```html
<img src="path/to/your/image.jpg" alt="Gajendra Singh" id="profile-img">
```

### Experience Timeline
Modify the timeline items in the experience section with your work history.

### Skills Section
Update the skills categories and items to match your expertise.

### Projects
Replace the project cards with your actual projects:
- Project images
- Descriptions
- Technology tags
- Live demo and GitHub links

### Colors and Styling
The main color scheme can be changed by updating CSS variables:
- Primary color: `#4f46e5` (Indigo)
- Secondary color: `#fbbf24` (Amber)
- Background colors and gradients

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Smooth scrolling navigation
- Intersection Observer for animations
- Lazy loading for images
- Optimized CSS and JavaScript
- Mobile-first responsive design

## Deployment

The portfolio can be deployed to:
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Deploy directly from GitHub
- **Traditional Web Hosting**: Upload files via FTP

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out through the contact form on the website or via LinkedIn.

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
