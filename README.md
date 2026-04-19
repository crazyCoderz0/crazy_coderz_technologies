# Crazy Coderz Technologies Website

A modern, responsive, production-ready company website for Crazy Coderz Technologies built with Next.js, TypeScript, and Firebase-ready inquiry flows.

## Features

- Multi-page company website with App Router routing
- Responsive mobile-first layout
- Dark and light mode
- Sticky navigation and smooth scrolling
- SEO metadata, `robots.ts`, and `sitemap.ts`
- Firebase-backed contact inquiry and meeting request forms
- WhatsApp floating contact button
- Vercel-ready project structure

## Tech Stack

- Next.js
- TypeScript
- React
- Firebase Firestore

## Pages

- Home
- About
- Services
- Pricing
- Portfolio
- Contact
- Book a Meeting

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Update `.env.local` with your Firebase project values and your production site URL.

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Firebase Setup

Create a Firebase project and enable Firestore. The forms in this site write to these collections:

- `inquiries`
- `meeting_requests`

Recommended Firestore document fields:

- Contact inquiry: `name`, `email`, `phone`, `message`, `source`, `createdAt`
- Meeting request: `name`, `email`, `phone`, `company`, `preferredDate`, `preferredTime`, `message`, `source`, `createdAt`

Example Firestore security rule starter:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    match /meeting_requests/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

You should tighten these rules for production by adding rate limiting, App Check, or backend validation if needed.

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the same Firebase environment variables in the Vercel project settings.
4. Deploy.

## Suggested Folder Structure

```txt
src/
  app/
  components/
  data/
  lib/
  types/
```

## Notes

- Replace the demo Calendly URL in `src/app/book-meeting/page.tsx` with your real meeting link.
- Update `NEXT_PUBLIC_SITE_URL` so canonical URLs and sitemap entries use your actual domain.
- Current live deployment URL: `https://crazy-coderz-technologies-tsx5.vercel.app`
