import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import Script from 'next/script' // ✅ Use only in <body>, no "use client" here

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin',
})

export const metadata = {
  title: 'Mehfil Kitchen Skokie - Hyderabadi Biryani, Kabobs & Catering Services',
  description:
    'Mehfil Kitchen serves the Best Indian Restaurant Skokie IL experience with authentic Hyderabadi Biryani Skokie, Chicken Biryani Near Me, and delicious Chicken Kabob Skokie dishes. Serving Hyderabadi Biryani, Kabobs & Catering in Skokie, Glenview, Evanston, Niles & nearby.',
  keywords: [
    'Hyderabadi Biryani Skokie',
    'Chicken Biryani Near Me',
    'Mutton Biryani Skokie',
    'Indian Catering Skokie',
    'Best Indian Restaurant Skokie',
    'Indian Food Delivery Skokie',
    'Authentic Indian Cuisine Skokie',
    'Chicken Kabob Skokie',
    'Indian Party Catering Skokie',
    'Butter Chicken Skokie',
  ],
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Mehfil Kitchen",
  "image": "https://www.mehfilkitchen.com/logo2.png",
  "@id": "https://www.mehfilkitchen.com/",
  "url": "https://www.mehfilkitchen.com/",
  "telephone": "+1-786-763-4000",
  "email": "info@mehfilkitchen.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5264 Lincoln Ave",
    "addressLocality": "Skokie",
    "addressRegion": "IL",
    "postalCode": "60077",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "servesCuisine": ["Indian", "Pakistani", "Desi", "Halal"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/mehfilkitchen/",
    "https://www.instagram.com/kitchen.mehfil/?igsh=ejNmNzJkbG56bmxj#/"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={josefin.variable}>
      <body>
        {/* ✅ Inject JSON-LD schema only from body (allowed) */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  )
}
