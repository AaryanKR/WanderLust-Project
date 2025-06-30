<<<<<<< HEAD
Wanderlust 🌍 – An Airbnb-Style Web App

Wanderlust is a full-stack travel accommodations platform inspired by Airbnb, built with modern technologies to showcase your ability in frontend, backend, database design, and deployment.

🚀 Features & Technologies
Frontend

    EJS templating with layout inheritance (express-ejs-layouts) for clean, maintainable UI.

    Bootstrap 5-styled responsive design: navbar, forms, cards, and grid layouts.

    Real-time navigation, search bar, and clean listing pages.

Backend & Server

    Node.js + Express for robust RESTful API handling.

    MVC structure:

        Routes organized for listings, search, auth, and user profiles.

        Controllers handling business logic like:

            Listing management (CRUD)

            Country-based search

            User authentication (Login, Signup, Logout)

            Image upload via Multer + Cloudinary

    Passport.js for session-based user authentication.

Database

    MongoDB (via Mongoose):

        Collections: User, Listing

        Listing model fields: title, description, country, price, image, author, createdAt, reviews

        Case-insensitive search implemented using MongoDB’s $regex

Image Hosting

    Cloudinary integration:

        Images stored in the cloud with secure, resizable URLs

        Organized uploads with folder structure support

Validation & Security

    Joi or custom schema validation middleware for secure data submission.

    Input sanitization to prevent XSS and injection attacks.

    Auth-Wrapped routes ensuring only authenticated owners can edit or delete listings.

Layout & UX

    Shared layout template (boilerplate.ejs) for consistent headers, footers, and site-wide assets.

    Clean search.ejs results page showing listings by country with graceful "no results" messaging.

    Each listing’s “show” page displays title, images, country, author info, and timestamp.

🚀 Deployment on Render.com
  
    I deployed Wanderlust on Render.com, a modern and free-tier-friendly hosting provider:

   🔒 Web Service setup with auto HTTPS, GitHub integration, and zero‑downtime deploys
   

✔️ Why Wanderlust Makes a Strong Portfolio Project

    Demonstrates proficiency in full-stack web development using current technologies.

    Shows understanding of MVC architecture and RESTful API design.

    Includes practical features like search functionality and secure image uploads.

    Structured with maintainability and readability in mind.
=======
# WanderLust-project
>>>>>>> 4f448cd135e44b649a7965f5ac49b50c5694b0f9
