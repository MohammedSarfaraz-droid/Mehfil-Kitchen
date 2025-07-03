import Image from 'next/image';
import Link from 'next/link';

type ServiceKey = 'birthday' | 'wedding' | 'party' | 'event' | 'corporate' | 'ondemand';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface MenuItem {
  name: string;
  description: string;
}


interface ServiceData {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImage: string;
  features: Feature[];
  menuItems: MenuItem[];
  galleryImages: string[];
  ctaTitle: string;
  ctaText: string;
}

interface ServicePageProps {
  service: ServiceKey;
}

const serviceData: Record<ServiceKey, ServiceData> = {
  'birthday': {
    title: 'Birthday Catering',
    heroSubtitle: 'Celebrate your special day with authentic Hyderabadi flavors',
    heroImage: '/birthday-hero.jpg',
    introTitle: 'Unforgettable Birthday Celebrations',
    introText: 'Make your birthday memorable with our carefully curated menus featuring the best of Hyderabadi cuisine. From kid-friendly options to sophisticated adult gatherings, we tailor our services to your needs.',
    introImage: '/birthday-intro.jpg',
    features: [
      {
        title: "Custom Birthday Menus",
        description: "Choose from our selection or work with our chefs to create a personalized menu",
        icon: "🎂"
      },
      {
        title: "Theme Coordination",
        description: "We align our presentation with your party theme for a cohesive experience",
        icon: "🎨"
      },
      {
        title: "Age-Appropriate Options",
        description: "Special menus for kids, teens, and adult celebrations",
        icon: "👶"
      }
    ],
    menuItems: [
      { name: "Mini Kabob Platters", description: "Assorted kabobs perfect for party finger food" },
      { name: "Biryani Stations", description: "Interactive biryani serving with all accompaniments" },
      { name: "Chaat Corner", description: "Build-your-own chaat station with various toppings" },
      { name: "Gulab Jamun Towers", description: "Impressive dessert display with warm gulab jamun" }
    ],
    galleryImages: ['catering/chicken-biryani.png', 'catering/malai-boti.png', 'catering/snacks.png'],
    ctaTitle: "Plan Your Birthday Feast",
    ctaText: "Contact us to discuss menu options and pricing for your celebration"
  },
  'wedding': {
    title: 'Wedding Catering',
    heroSubtitle: 'Making your special day truly memorable with royal Hyderabadi cuisine',
    heroImage: '/wedding-hero.jpg',
    introTitle: 'Exquisite Wedding Catering',
    introText: 'Your wedding day deserves nothing but perfection. Our Hyderabadi wedding catering brings generations of culinary tradition to your celebration, with dishes prepared using authentic recipes and the finest ingredients.',
    introImage: '/wedding-intro.jpg',
    features: [
      {
        title: "Royal Wedding Menus",
        description: "Traditional Nizami cuisine fit for your special day",
        icon: "👑"
      },
      {
        title: "Multiple Event Packages",
        description: "Covering mehndi, nikah, walima, and reception events",
        icon: "💒"
      },
      {
        title: "Tasting Sessions",
        description: "Private tastings to finalize your menu selections",
        icon: "🍽️"
      }
    ],
    menuItems: [
      { name: "Hyderabadi Dum Biryani", description: "Fragrant basmati rice with tender meat, cooked in dum style" },
      { name: "Murgh Badami", description: "Chicken in creamy almond sauce with delicate spices" },
      { name: "Sheermal", description: "Saffron-infused traditional bread for ceremonial occasions" },
      { name: "Double Ka Meetha", description: "Bread pudding dessert with cardamom and dry fruits" }
    ],
    galleryImages: ['catering/mutton-biryani.png', 'catering/badami-chicken.png', 'catering/reshmi-kabob.png'],
    ctaTitle: "Begin Planning Your Wedding Menu",
    ctaText: "Schedule a consultation with our wedding catering specialists"
  },
  'party': {
    title: 'Party Orders',
    heroSubtitle: 'Flavorful gatherings with our signature party menus',
    heroImage: '/party-hero.jpg',
    introTitle: 'The Perfect Party Food',
    introText: 'Host unforgettable parties with our crowd-pleasing Hyderabadi dishes. Whether you need appetizers for 20 or a full buffet for 200, we provide fresh, flavorful options that will impress your guests.',
    introImage: '/party-intro.jpg',
    features: [
      {
        title: "Crowd-Pleasing Favorites",
        description: "All the dishes your guests will love and remember",
        icon: "👍"
      },
      {
        title: "Flexible Portion Sizes",
        description: "From intimate gatherings to large celebrations",
        icon: "⚖️"
      },
      {
        title: "Last-Minute Availability",
        description: "Quality catering even with short notice",
        icon: "⏱️"
      }
    ],
    menuItems: [
      { name: "Chicken 65 Platters", description: "Our signature spicy appetizer in party-sized portions" },
      { name: "Kalimirchi Beef", description: "Pepper-crusted beef that's always a hit" },
      { name: "Veggie Samosa Towers", description: "Crispy samosas arranged as a centerpiece" },
      { name: "Mirchi Ka Salan", description: "Traditional chili curry for authentic flavor" }
    ],
    galleryImages: ['catering/chicken-65.png', 'catering/kalimirchi-beef.png', 'catering/mehfils-chicken.png'],
    ctaTitle: "Order Your Party Catering",
    ctaText: "Call +1 786-763-4000 for quick quotes and orders"
  },
  'event': {
    title: 'Event Catering',
    heroSubtitle: 'Professional catering for corporate and social events',
    heroImage: '/event-hero.jpg',
    introTitle: 'Impeccable Event Catering',
    introText: 'From corporate galas to charity fundraisers, our event catering delivers consistent quality and presentation. We handle every detail so you can focus on your guests and the occasion.',
    introImage: '/event-intro.jpg',
    features: [
      {
        title: "Custom Event Packages",
        description: "Tailored to your event type and guest count",
        icon: "📦"
      },
      {
        title: "Professional Service Staff",
        description: "Uniformed attendants for seamless service",
        icon: "👔"
      },
      {
        title: "Equipment Rental",
        description: "China, linens, and serving equipment available",
        icon: "🍽️"
      }
    ],
    menuItems: [
      { name: "Executive Lunch Boxes", description: "Gourmet meals in premium packaging" },
      { name: "Action Stations", description: "Interactive cooking demonstrations" },
      { name: "International Fusion Options", description: "Blending Hyderabadi with global flavors" },
      { name: "Diet-Specific Menus", description: "Vegetarian, vegan, gluten-free, and halal options" }
    ],
    galleryImages: ['catering/fish-fry.png','catering/mutton-biryani.png', 'catering/butter-chicken.png'],
    ctaTitle: "Discuss Your Event Needs",
    ctaText: "Get a customized proposal for your upcoming event"
  },
  'corporate': {
    title: 'Corporate Meals',
    heroSubtitle: 'Delight your team with professionally prepared meals',
    heroImage: '/corporate-hero.jpg',
    introTitle: 'Business Dining Solutions',
    introText: 'Impress clients or reward your team with meals that deliver comfort, quality, and authentic Hyderabadi spice. Our corporate catering is designed for business settings with professional presentation and timely delivery.',
    introImage: '/corporate-intro.jpg',
    features: [
      {
        title: "Office Lunch Programs",
        description: "Regular scheduled deliveries for your workplace",
        icon: "🏢"
      },
      {
        title: "Client Meeting Menus",
        description: "Impressive spreads for business discussions",
        icon: "🤝"
      },
      {
        title: "Bulk Order Discounts",
        description: "Special pricing for recurring corporate clients",
        icon: "💲"
      }
    ],
    menuItems: [
      { name: "Executive Thali Meals", description: "Balanced meals with varied flavors" },
      { name: "Box Lunch Options", description: "Neatly packaged individual meals" },
      { name: "Conference Buffets", description: "Self-serve setups for large groups" },
      { name: "Coffee Break Packages", description: "With snacks and beverages" }
    ],
    galleryImages: ['catering/mutton-biryani.png', 'catering/shahi-rice.png', 'catering/chicken-kadai.png'],
    ctaTitle: "Enhance Your Workplace Dining",
    ctaText: "Ask about our corporate account benefits"
  },
  'ondemand': {
    title: 'On-Demand Orders',
    heroSubtitle: 'Freshly prepared meals at your convenience',
    heroImage: '/ondemand-hero.jpg',
    introTitle: 'Quality Meals When You Need Them',
    introText: 'For those times when you need great food without the fuss of cooking or planning. Our on-demand service brings authentic Hyderabadi flavors to your door or ready for quick pickup.',
    introImage: '/ondemand-intro.jpg',
    features: [
      {
        title: "Quick Turnaround",
        description: "Freshly prepared meals with minimal wait",
        icon: "⚡"
      },
      {
        title: "Family Meal Packages",
        description: "Complete dinners for hassle-free meals",
        icon: "👨‍👩‍👧‍👦"
      },
      {
        title: "Contactless Delivery",
        description: "Safe and hygienic food handling",
        icon: "🚚"
      }
    ],
    menuItems: [
      { name: "Daily Specials", description: "Chef's selections made fresh each day" },
      { name: "Combo Meals", description: "Complete with main, sides, and bread" },
      { name: "A la Carte Options", description: "Mix and match your favorites" },
      { name: "Dessert Add-ons", description: "Sweet endings to your meal" }
    ],
    galleryImages: ['catering/chicken-biryani.png', 'catering/beef-masala.png', 'catering/malai-boti.png'],
    ctaTitle: "Place Your Order Now",
    ctaText: "Call +1 786-763-4000 for immediate service"
  }
};

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const currentService = serviceData[service] || serviceData['birthday'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={currentService.heroImage}
          alt={currentService.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{currentService.title}</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">{currentService.heroSubtitle}</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1a3c34] mb-6">
              {currentService.introTitle}
            </h2>
            <p className="text-gray-700 mb-4">
              {currentService.introText}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={currentService.introImage}
              alt={`${currentService.title} presentation`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f9f8f3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1a3c34] mb-12 text-center">
            Our {currentService.title} Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentService.features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1a3c34] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-[#1a3c34] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Signature {currentService.title} Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.menuItems.map((item, index) => (
              <div key={index} className="text-center p-6 border border-[#e6d38d] rounded-lg">
                <h3 className="text-xl font-medium mb-2 text-[#e6d38d]">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-semibold text-[#1a3c34] mb-12 text-center">
      {currentService.title} Gallery
    </h2>
    
    {/* Keep original grid structure but adjust for 3 images */}
    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
      {currentService.galleryImages.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
          <Image
            src={`/${image}`}
            alt={`${currentService.title} example ${index + 1}`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-[#e6d38d]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-[#1a3c34] mb-4">
            {currentService.ctaTitle}
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            {currentService.ctaText}
          </p>
            <Link href="/contact">
            <button className="bg-[#1a3c34] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#122822] transition-colors">
              Contact Us Now
            </button>
            </Link>
        </div>
      </section>
      {/* Attribution for Freepik Images (hidden visually, accessible to crawlers) */}
      <p className="text-xs text-center text-gray-400 px-4 bg-[#e6d38d]">
        Some images on this page are sourced from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline">Freepik</a>
      </p>

    </div>
  );
};

// Example usage:
// <ServicePage service="birthday" />
// <ServicePage service="wedding" />
// etc.

export default ServicePage;