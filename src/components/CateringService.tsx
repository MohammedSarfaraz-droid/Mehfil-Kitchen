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
    introText: 'Looking for the best Indian food catering for birthdays in Chicago? Whether you\'re hosting a small family dinner or a grand birthday party, we bring authentic Indian taste and professional service right to your celebration.',
    introImage: '/birthday-intro.jpg',
    features: [
      {
        title: "Custom Birthday Menus",
        description: "Choose from our selection or work with our chefs to create a personalized menu",
        icon: '/catering-icons/cake.gif'
      },
      {
        title: "Theme Coordination",
        description: "We align our presentation with your party theme for a cohesive experience",
        icon: '/catering-icons/palette.png'
      },
      {
        title: "Age-Appropriate Options",
        description: "Special menus for kids, teens, and adult celebrations",
        icon: '/catering-icons/menu.gif'
      },
      {
        title: "Full Service",
        description: "Delivery, setup, servers, cleanup",
        icon: '/catering-icons/box.gif'
      },
      {
        title: "Trusted Across Chicago",
        description: "Catering in Schaumburg, Naperville, Skokie, and more",
        icon: '/catering-icons/rating.png'
      }
    ],
    menuItems: [
      { name: "Mini Kabob Platters", description: "Assorted kabobs perfect for party finger food" },
      { name: "Biryani Stations", description: "Interactive biryani serving with all accompaniments" },
      { name: "Chaat Corner", description: "Build-your-own chaat station with various toppings" },
      { name: "Chicken 65", description: "Spicy fried chicken, a popular Indian appetizer" },
      { name: "Fish Fry", description: "Crispy fried fish, seasoned with traditional spices" },
      { name: "Masala Chai", description: "Fragrant spiced tea served with traditional snacks" },
      { name: "Mango Lassi", description: "Creamy mango yogurt drink, a perfect complement to any meal" },
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
    introText: `Make Your Big Day Memorable with Authentic Hyderabadi Cuisine
Planning a wedding in Chicago and want to impress your guests with unforgettable Indian food? Our Hyderabadi wedding catering service brings the royal flavors of Hyderabad straight to your celebration. From Dum Biryani to Double Ka Meetha, we specialize in traditional dishes that create a luxury dining experience for your wedding day.
`,
    introImage: '/wedding-intro.jpg',
    features: [
      {
        title: "Royal Wedding Menus",
        description: "Traditional Nizami cuisine fit for your special day",
        icon: '/catering-icons/crown.gif'
      },
      {
        title: "Multiple Event Packages",
        description: "Covering mehndi, nikah, walima, and reception events",
        icon: '/catering-icons/wedding-ceremony.png'
      },
      {
        title: "Tasting Sessions",
        description: "Private tastings to finalize your menu selections",
        icon: '/catering-icons/food-delivery.gif'
      },
      {
        title: "Authentic Hyderabadi Taste",
        description: "Our chefs are experts in age-old recipes from Hyderabad, blending spices and slow-cooking techniques to deliver rich, flavorful dishes.",
        icon: '/catering-icons/rating.png'
      },
      {
        title: "Customized Wedding Menus",
        description: "Choose from a wide selection of dishes including Hyderabadi Chicken Biryani, Mutton Korma, Bagara Baingan, Haleem, and more. We offer vegetarian, non-vegetarian, and fusion menus tailored to your theme.",
        icon: '/catering-icons/menu.gif'
      },
      {
        title: "Full-Service Indian Catering",
        description: "We handle everything—from food preparation and live stations to professional staff and elegant presentation. Whether it's a sangeet, mehndi, nikah, or wedding reception, we’ve got you covered.",
        icon: '/catering-icons/catering.gif'
      }
    ],
    menuItems: [
      { name: "Hyderabadi Dum Biryani", description: "Fragrant basmati rice with tender meat, cooked in dum style" },
      { name: "Haleem", description: "Slow-cooked meat and lentil stew, a Hyderabadi specialty" },
      { name: "Murgh Badami", description: "Chicken in creamy almond sauce with delicate spices" },
      { name: "Mutton Korma", description: "Rich, aromatic mutton curry with traditional spices" },
      { name: "Bagara Baingan", description: "Eggplant cooked in a tangy peanut and sesame sauce" },
      { name: "Nihari", description: "Slow-cooked beef stew, perfect for late-night feasts" },
      { name: "Kebabs Galore", description: "A selection of chicken, mutton, and vegetable kebabs" },
      { name: "Raita and Salads", description: "Refreshing yogurt-based sides to complement the meal" },
      { name: "Sheermal", description: "Saffron-infused traditional bread for ceremonial occasions" },
      { name: "Live Chaat", description: "Assorted Indian street food served live" },
      { name: "Khubani Ka Meetha", description: "Apricot dessert with a rich, creamy texture" },
      { name: "Double Ka Meetha", description: "Traditional Hyderabadi dessert made with bread, milk, and dry fruits" }

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
    introText: 'Looking for mouthwatering Hyderabadi catering in Chicago for your next party or event? We specialize in authentic Hyderabadi cuisine that brings the royal flavors of India to your celebrations. Whether it’s a wedding, birthday, graduation, or corporate event, our catering service ensures your guests enjoy an unforgettable culinary experience.',
    introImage: '/party-intro.jpg',
    features: [
      {
        title: "Crowd-Pleasing Favorites",
        description: "All the dishes your guests will love and remember",
        icon: '/catering-icons/rating.png'
      },
      {
        title: "Flexible Portion Sizes",
        description: "From intimate gatherings to large celebrations",
        icon: '/catering-icons/pie-chart.png'
      },
      {
        title: "Last-Minute Availability",
        description: "Quality catering even with short notice",
        icon: '/catering-icons/quick-response.gif'
      }
    ],
    menuItems: [
      { name: "Mehfils Chicken", description: "Signature chicken dish with a blend of spices" },
      { name: "Mutton Biryani", description: "Fragrant basmati rice layered with tender mutton" },
      { name: "Fish Fry", description: "Crispy fried fish seasoned with traditional spices" },
      { name: "Paneer Tikka", description: "Grilled paneer cubes marinated in spices" },
      { name: "Vegetable Biryani", description: "Aromatic rice with mixed vegetables and spices" },
      { name: "Kebabs and Rolls", description: "Assorted kebabs served with fresh rolls" },
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
    introText: `Looking to add authentic Hyderabadi flavor to your next event in Chicago? Whether it's a wedding, birthday, corporate gathering, or graduation party, Mehfil Kitchen brings the rich taste of Hyderabadi cuisine right to your celebration. We specialize in traditional recipes, royal presentation, and unmatched hospitality.`,
    introImage: '/event-intro.jpg',
    features: [
      {
        title: "Custom Event Packages",
        description: "Tailored to your event type and guest count",
        icon: '/catering-icons/package.gif'
      },
      {
        title: "Professional Service Staff",
        description: "Uniformed attendants for seamless service",
        icon: '/catering-icons/professional.png'
      },
      {
        title: "Live Catering Stations",
        description: "Pani Puri, Seekh Kebab, Tandoori specials",
        icon: '/catering-icons/food-stall.png'
      },
      {
        title: "Equipment Rental",
        description: "China, linens, and serving equipment available",
        icon: '/catering-icons/platter.gif'
      }
    ],
    menuItems: [
      { name: "Gourmet Appetizer Platters", description: "A selection of our finest starters" },
      { name: "Executive Lunch Boxes", description: "Gourmet meals in premium packaging" },
      { name: "Action Stations", description: "Interactive cooking demonstrations" },
      { name: "International Fusion Options", description: "Blending Hyderabadi with global flavors" },
      { name: "Diet-Specific Menus", description: "Vegetarian, vegan, gluten-free, and halal options" },
      { name: "Custom Dessert Stations", description: "Personalized sweets and treats for your event" },
      { name: "Late Night Snack Stations", description: "Tasty bites for after-hours events" },
      { name: "Beverage Packages", description: "Coffee, tea, and soft drink options" }
    ],
    galleryImages: ['catering/fish-fry.png', 'catering/mutton-biryani.png', 'catering/butter-chicken.png'],
    ctaTitle: "Discuss Your Event Needs",
    ctaText: "Get a customized proposal for your upcoming event"
  },
  'corporate': {
    title: 'Corporate Meals',
    heroSubtitle: 'Delight your team with professionally prepared meals',
    heroImage: '/corporate-hero.jpg',
    introTitle: 'Business Dining Solutions',
    introText: 'Spice up your corporate events with the rich and royal flavors of Hyderabadi cuisine! We specialize in Hyderabadi corporate catering in Chicago, offering a unique menu that blends traditional Indian spices with Mughlai finesse — perfect for impressing your clients, colleagues, or employees.',
    introImage: '/corporate-intro.jpg',
    features: [
      {
        title: "Office Lunch Programs",
        description: "Regular scheduled deliveries for your workplace",
        icon: '/catering-icons/lunch-box.gif'
      },
      {
        title: "Client Meeting Menus",
        description: "We offer flexible menu packages tailored to suit your event size, dietary needs (vegetarian, vegan, halal), and budget. From full buffets to individually packed lunch boxes, we've got you covered.",
        icon: '/catering-icons/customization.png'
      },
      {
        title: "Perfect for Meetings, Conferences & Office Parties",
        description: "Whether it’s a business lunch, a holiday office party, or a client appreciation dinner, we deliver consistent quality and taste that leaves a lasting impression.",
        icon: '/catering-icons/meeting.gif'
      },
      {
        title: "Bulk Order Discounts",
        description: "Special pricing for recurring corporate clients",
        icon: '/catering-icons/price-tag.png'
      }
    ],
    menuItems: [
      { name: "Office Lunch Packages", description: "Convenient meals for busy workdays" },
      { name: "Executive Thali Meals", description: "Balanced meals with varied flavors" },
      { name: "Box Lunch Options", description: "Neatly packaged individual meals" },
      { name: "Conference Buffets", description: "Self-serve setups for large groups" },
      { name: "Vegetarian and Vegan Options", description: "Healthy choices for all dietary needs" },
      { name: "Dessert Platters", description: "Sweet treats to end the meal on a high note" },
      { name: "Beverage Packages", description: "Coffee, tea, and soft drinks for meetings" },
      { name: "Gourmet Platters", description: "Artfully arranged selections for sharing" },
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
    introText: `Looking for Delicious Hyderabadi Food On-Demand in Chicago?
We’ve got you covered with authentic Hyderabadi catering, made fresh and delivered fast — perfect for small parties, family dinners, office lunches, and last-minute events.
`,
    introImage: '/ondemand-intro.jpg',
    features: [
      {
        title: "Quick Turnaround",
        description: "Freshly prepared meals with minimal wait",
        icon: '/catering-icons/fast-time.png'
      },
      {
        title: "Customized Portions",
        description: "Order for 10 to 200+ guests",
        icon: '/catering-icons/pie-chart.png'
      },
      {
        title: "Family Meal Packages",
        description: "Complete dinners for hassle-free meals",
        icon: '/catering-icons/tray.png'
      },
      {
        title: "Contactless Delivery",
        description: "Safe and hygienic food handling",
        icon: '/catering-icons/delivery-man.png'
      }
    ],
    menuItems: [
      { name: "Family Meal Packages", description: "Complete dinners for hassle-free meals" },
      { name: "Customized Portions", description: "Order for 10 to 200+ guests" },
      { name: "Express Delivery", description: "Fast service for last-minute orders" },
      { name: "Signature Dishes", description: "Popular items like Biryani, Kebabs, and Curries" },
      { name: "Vegetarian and Vegan Options", description: "Healthy choices for all dietary needs" },
      { name: "Daily Specials", description: "Chef's selections made fresh each day" },
      { name: "Combo Meals", description: "Complete with main, sides, and bread" },
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
                <div className="text-4xl mb-4">
                  {feature.icon.startsWith('/') ? (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={58}
                      height={58}
                      className="inline-block"
                    />
                  ) : (
                    feature.icon
                  )}
                </div>
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

          <div className="flex justify-center mt-10">
        <Link href="/gallery">
          <button className="bg-[#1a3c34] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#122822] transition-colors">
            Explore Gallery
          </button>
        </Link>
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