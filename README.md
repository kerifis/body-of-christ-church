# Body of Christ Church Edmonton

Official web application for **Body of Christ Church** in Edmonton, Alberta, Canada.

Live site reference: [https://body-of-christ.netlify.app/](https://body-of-christ.netlify.app/)

## Overview

A modern, responsive, and Spirit-led church website built with Next.js (App Router), React, Tailwind CSS, TypeScript, and EmailJS.

### Features & Pages

- **Home (`/`)**:
  - Hero section with church mission and scripture (Acts 2:47)
  - Sunday service & Midweek service details with Google Maps directions
  - Latest Sermon video preview and link
  - Dynamic upcoming events fetched from `/events/events.json` with expandable image modal
  - Ministry overview (Family in Christ, Youth, Women's, Men's)
  - Connect with Us callout
  - Secure Giving section
  - Pastor Jean Paul Niyibizi profile and ministry focus
- **About Us (`/about`)**:
  - Statement of Faith (7 doctrinal tenets)
  - Complete history and vision of Body of Christ Church
  - Pastor Jean Paul & Claire Niyibizi leadership background
  - Church purpose (Evangelize, Equip, Establish)
- **Events (`/event`, `/events`)**:
  - Event catalog loaded from `/events/events.json`
  - Monthly filters (All, This Month, Next Month)
  - Click-to-zoom event flyer lightbox
  - Event submission link
- **Giving (`/give`)**:
  - Online giving dropdown powered by Tithe.ly (General Funds, Offering, Tithe)
  - In-person giving instructions (Cash & Cheques)
  - Interac E-transfer details (`give@bocchurch.ca`)
  - Scripture on giving (2 Corinthians 9:7)
- **Contact Us (`/contact`)**:
  - Church meeting location and email address
  - Contact message form with automated EmailJS email dispatch
- **Prayer Request (`/connect/prayer`)**:
  - Confidential prayer request submission form
  - Anonymous submission toggle option
  - Pastoral care & meeting links
- **Water Baptism (`/connect/baptism`)**:
  - Baptism registration form with client-side validation
  - Theological explanation and biblical basis (Romans 10:9–10)
  - 3-step baptism process overview and FAQs
- **Admin (`/admin`)**:
  - Static administration status page

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: `react-scroll-parallax` & custom CSS keyframes
- **Notifications**: [Sonner](https://sonner.emilkowal.com/)
- **Email Delivery**: [@emailjs/browser](https://www.emailjs.com/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ or 20+ LTS
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Managing Content

- **Events**: Add new events or update flyers in [`public/events/events.json`](public/events/events.json) and place flyers in [`public/events/`](public/events/).
- **Images**: Church photos and logos are stored in the [`public/`](public/) directory.

## License

© 2026 Body of Christ Church. All rights reserved.
