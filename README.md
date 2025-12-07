# Donnievate

A volunteer project for a laptop sales and tech support business. This website provides customers with a platform to browse laptops, access tech guides, and get expert support.

## 🎯 Project Overview

Donnievate is a full-featured e-commerce website designed to help customers find reliable laptops with honest guidance and lasting support. The site emphasizes trust, quality, and customer service.

**Live Demo:** [https://donnievate.vercel.app/](https://donnievate.vercel.app/)

## ✨ Features

- **Hero Section** – Compelling value proposition with dual call-to-action buttons
- **Why Choose Section** – Highlights core values: Trusted Quality, Expert Guidance, and Ongoing Support
- **Featured Laptops** – Product showcase with images, pricing, star ratings, and action buttons
- **Guides & Resources** – Educational content section for tutorials and tips
- **Testimonials** – Customer reviews with ratings and profile images
- **Support Section** – Multiple contact methods (Live Chat, Email, Phone)
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop
- **Mobile Navigation** – Slide-down menu with icon-based links
- **Search Functionality** – Quick search button in header
- **Footer** – Brand info, navigation links, and social media icons

## 🛠️ Technologies Used

- **HTML5** – Semantic markup structure
- **CSS3** – Custom styles with modern layouts
- **JavaScript** – Interactive menu and navigation
- **Remix Icons** – Icon library via CDN
- **Google Fonts** – Poppins font family
- **Vercel** – Deployment platform

## 📁 Project Structure

```
donnievate/
├── index.html              # Main landing page
├── about.html             # About page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
└── assets/
    └── img/
        ├── logo.jpeg      # Brand logo
        ├── guide1.jpg     # Guide thumbnails
        ├── guide2.jpg
        └── guide3.jpg
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE

### Installation

1. **Clone or download** the repository
   ```bash
   git clone https://github.com/yourusername/donnievate.git
   cd donnievate
   ```

2. **Open locally**
   - Simply open `index.html` in your browser, or
   - Use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

3. **Visit** `http://localhost:8000`

## 📱 Key Sections

### Hero Section
- Clear value proposition
- Two CTAs: "Shop Laptops" and "Get Guidance"

### Featured Laptops
- Product cards with:
  - Product images
  - Pricing
  - Star ratings (1-5 stars)
  - "Buy Now" and "Specs" buttons

### Guides & Resources
- Educational content cards
- Tutorial topics covering setup, productivity, and maintenance

### Testimonials
- Customer reviews with profile pictures
- 5-star rating system
- Social proof for building trust

### Support Options
- Live Chat
- Email Support
- Phone Support

## 🎨 Customization

### Updating Content
All content is in plain HTML and can be edited directly:
- **Hero text:** Line 46-50
- **Laptop products:** Lines 82-115
- **Guides:** Lines 126-155
- **Testimonials:** Lines 185-232

### Styling
The main stylesheet is located at `css/style.css`. Key areas to customize:
- **Colors** – Brand colors and theme
- **Typography** – Font sizes and weights
- **Layout** – Grid and flexbox configurations
- **Spacing** – Margins and padding

### Adding New Products
To add a new laptop card, copy this template in the "Featured Laptops" section:

```html
<div class="laptop-card">
  <img src="assets/img/laptop-new.jpg" alt="Laptop Name">
  <h3>Laptop Model Name</h3>
  <p class="price">$999</p>
  <div class="rating">
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-half-fill"></i>
    <span>4.5</span>
  </div>
  <div class="card-actions">
    <a href="#cta" class="btn-primary">Buy Now</a>
    <a href="#specs" class="btn-outline">Specs</a>
  </div>
</div>
```

## 📸 Image Assets

Replace placeholder images in `assets/img/`:
- **logo.jpeg** – Brand logo (recommended: 200×200px)
- **guide1.jpg, guide2.jpg, guide3.jpg** – Guide thumbnails (recommended: 800×600px)
- **User profile images** – Testimonial avatars (recommended: 150×150px)

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own version:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect the HTML project
5. Deploy!

Alternatively, you can deploy to:
- **Netlify** – Drag and drop your folder
- **GitHub Pages** – Push to a `gh-pages` branch
- **Firebase Hosting** – Use Firebase CLI

## 🧭 Navigation Structure

```
Home (index.html)
├── Why Choose (#why)
├── Featured Laptops (#featured)
├── Guides & Resources (#guides)
├── Testimonials (#testimonials)
├── Support (#support)
└── CTA / Get Started (#cta)
```

## 🔧 JavaScript Functionality

The `js/main.js` file includes:
- Mobile menu toggle
- Smooth scroll navigation
- Active link highlighting
- Search button interactions

## 📱 Responsive Breakpoints

- **Mobile:** `< 768px`
- **Tablet:** `768px - 1024px`
- **Desktop:** `> 1024px`

## 🤝 Contributing

This is a volunteer project. Suggestions and improvements are welcome!

To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project was created as a volunteer effort for Donnievate. Feel free to use this template for similar business websites.

## 📞 Support

For questions about this project:
- **Website:** [donnievate.vercel.app](https://donnievate.vercel.app/)
- **Issues:** Open an issue on GitHub

## 🙏 Acknowledgments

- **Remix Icons** for the beautiful icon library
- **Google Fonts** for the Poppins typeface
- **Vercel** for free hosting

---

**Built with ❤️ as a volunteer project for Donnievate**
