import Image from "next/image";

const servicesData = [
  {
    category: "Hair Artistry",
    services: [
      {
        title: "Couture Haircut",
        description: "Personalized cutting technique tailored to your unique facial structure and personal style.",
        duration: "90 mins",
        price: "$185",
        image: "/images/hair-styling.jpg",
        details: [
          "Comprehensive consultation",
          "Precision cutting by master stylists",
          "Personalized styling recommendations",
          "Premium hair analysis"
        ]
      },
      {
        title: "Color Metamorphosis",
        description: "Advanced coloration using rare pigments and innovative techniques.",
        duration: "120 mins",
        price: "$275",
        image: "/images/hair-color.jpg",
        details: [
          "Customized color consultation",
          "Organic, damage-free coloration",
          "Multidimensional color techniques",
          "Personalized hair treatment"
        ]
      },
      {
        title: "Bridal Transformation",
        description: "Bespoke styling for your most significant moments.",
        duration: "180 mins",
        price: "$350",
        image: "/images/bridal-hair.jpg",
        details: [
          "Comprehensive styling trial",
          "Advanced updo and styling techniques",
          "Hairpiece and accessory consultation",
          "Day-of styling touch-up"
        ]
      }
    ]
  },
  {
    category: "Skin Renewal",
    services: [
      {
        title: "Luminous Cellular Facial",
        description: "Advanced rejuvenation using cutting-edge biotechnology and rare botanical extracts.",
        duration: "120 mins",
        price: "$275",
        image: "/images/facial-treatments.jpg",
        details: [
          "Comprehensive skin analysis",
          "Customized treatment protocol",
          "Advanced cellular regeneration",
          "Luxury treatment masks"
        ]
      },
      {
        title: "Hydration Metamorphosis",
        description: "Intensive moisture renewal using proprietary hydration technologies.",
        duration: "90 mins",
        price: "$225",
        image: "/images/hydration-facial.jpg",
        details: [
          "Deep hydration mapping",
          "Molecular moisture infusion",
          "Barrier repair treatment",
          "Customized hydration prescription"
        ]
      },
      {
        title: "Anti-Aging Signature",
        description: "Comprehensive regenerative treatment targeting multiple signs of aging.",
        duration: "150 mins",
        price: "$375",
        image: "/images/anti-aging.jpg",
        details: [
          "Advanced cellular analysis",
          "Multi-phase rejuvenation",
          "Precision lifting techniques",
          "Collagen stimulation protocol"
        ]
      }
    ]
  },
  {
    category: "Nail Couture",
    services: [
      {
        title: "Prestige Manicure",
        description: "Exquisite nail artistry using premium international techniques.",
        duration: "75 mins",
        price: "$145",
        image: "/images/manicure-pedicure.jpg",
        details: [
          "Luxury hand treatment",
          "Precision nail shaping",
          "Exclusive polish selection",
          "Hydration and protection"
        ]
      },
      {
        title: "Artistic Nail Design",
        description: "Bespoke nail art creating wearable masterpieces.",
        duration: "90 mins",
        price: "$195",
        image: "/images/nail-art.jpg",
        details: [
          "Personalized design consultation",
          "Hand-painted artistry",
          "Premium product application",
          "Protective finish"
        ]
      },
      {
        title: "Gentleman's Grooming",
        description: "Refined nail and hand care for the discerning gentleman.",
        duration: "60 mins",
        price: "$125",
        image: "/images/mens-grooming.jpg",
        details: [
          "Precision nail care",
          "Exfoliating hand treatment",
          "Moisturizing protocol",
          "Subtle, professional finish"
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh]  flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", filter: "grayscale(0.5)" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-8  pt-24">
          <h1 className="font-bodoni text-6xl font-semibold mb-6 tracking-wide">
            Elevate Your Aesthetic Journey
          </h1>
          <p className="font-inter text-xl text-white/90 mb-10">
            Discover transformative experiences meticulously crafted to unveil your most radiant self
          </p>
        </div>
      </section>

      {/* Services Showcase */}
      {servicesData.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-24 px-8 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bodoni text-5xl font-semibold text-neutral-800 mb-6 tracking-wide">
              {category.category}
            </h2>
            <p className="font-inter text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {category.category === "Hair Artistry" 
                ? "Transformative styling that celebrates your unique essence"
                : category.category === "Skin Renewal"
                ? "Advanced treatments that renew, restore, and reveal your natural luminosity"
                : "Precision artistry for impeccable, sophisticated nail experiences"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {category.services.map((service, serviceIndex) => (
              <div 
                key={serviceIndex}
                className="
                  bg-white 
                  border border-neutral-100 
                  rounded-2xl 
                  overflow-hidden 
                  shadow-lg 
                  transform 
                  transition-all 
                  duration-500 
                  hover:-translate-y-4 
                  hover:shadow-2xl
                "
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bodoni text-3xl font-semibold text-neutral-800 tracking-wide">
                      {service.title}
                    </h3>
                    <span className="text-xl font-semibold text-neutral-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-neutral-500 font-inter">
                      Duration: {service.duration}
                    </span>
                  </div>
                  <div className="border-t border-neutral-200 pt-6">
                    <h4 className="font-bodoni text-xl mb-4 text-neutral-800">
                      Experience Includes:
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <span className="mr-3 text-neutral-400">●</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="
                    w-full 
                    mt-6 
                    py-4 
                    bg-neutral-900 
                    text-white 
                    font-inter 
                    tracking-wider 
                    uppercase 
                    rounded-lg 
                    hover:bg-neutral-700 
                    transition-colors
                  ">
                    Book Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Consultation Section */}
      <section className="bg-neutral-900 text-white py-24 px-8 text-center">
        <h2 className="font-bodoni text-5xl font-semibold mb-8 tracking-wide">
          Personalized Consultation
        </h2>
        <p className="text-xl font-light tracking-wider mb-12 max-w-3xl mx-auto">
          Unsure which experience is perfect for you? Our expert stylists offer complimentary consultations to craft your ideal transformation.
        </p>
        <div className="flex justify-center space-x-8">
          <button className="
            bg-white 
            text-neutral-900 
            px-12 
            py-5 
            font-inter 
            tracking-wider 
            uppercase 
            rounded-lg 
            hover:bg-neutral-200 
            transition-colors
          ">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}