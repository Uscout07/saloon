'use client';
import { useState } from 'react';
import ServiceCard from "./components/ServiceCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const philosophyItems = [
    {
      title: "Bespoke Artistry",
      description: "We craft each experience as a unique masterpiece, meticulously tailored to reveal your individual essence and beauty."
    },
    {
      title: "Precision Expertise",
      description: "Our internationally trained specialists employ cutting-edge techniques, blending innovative technologies with timeless craftsmanship."
    },
    {
      title: "Holistic Transformation",
      description: "Beyond aesthetic enhancement, we curate transformative experiences that elevate confidence and personal expression."
    }
  ];

  const testimonials = [
    {
      quote: "An extraordinary experience that redefined my understanding of personalized beauty. Every detail was meticulously crafted to perfection.",
      name: "Elizabeth Hartwell",
      role: "Fashion Consultant"
    },
    {
      quote: "The level of expertise and attention to detail is unparalleled. I've never felt more confident and radiant after a treatment.",
      name: "Marcus Delacroix",
      role: "Creative Director"
    },
    {
      quote: "A sanctuary of transformation where artistry meets precision. Each visit is a journey of personal renewal.",
      name: "Sophia Reyes",
      role: "Wellness Entrepreneur"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-neutral-50 font-light text-neutral-800 overflow-hidden w-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/05/21/20/31/version-5202618_1280.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center text-white relative z-10 max-w-4xl w-full px-4 sm:px-8">
          <h1 className="font-bodoni text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-wide leading-tight">
            Elegance Refined, Beauty Redefined
          </h1>
          <p className="font-light text-base sm:text-xl opacity-90 mb-6 sm:mb-10 tracking-wider">
            Immerse yourself in an extraordinary realm of sophisticated beauty and unparalleled craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="sm:w-[20vw] w-[80vw]   py-4 sm:py-5 bg-white text-neutral-900 font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-neutral-200 transition-colors duration-300">
              Curate Your Experience
            </button>
            <button className="sm:w-[20vw] w-[80vw]  py-4 sm:py-5 border-2 border-white text-white font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-white hover:text-neutral-900 transition-colors duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 w-full">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-bodoni text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4 sm:mb-6 tracking-wide">
              Curated Beauty Experiences
            </h2>
            <p className="font-light text-neutral-600 max-w-3xl mx-auto text-base sm:text-xl tracking-wider leading-relaxed">
              Meticulously crafted treatments that transcend conventional beauty, delivering transformative elegance
            </p>
          </div>
          <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3">
            <ServiceCard 
              title="Couture Styling" 
              description="Avant-garde transformations by master stylists, creating personalized art."
              imageUrl="https://cdn.pixabay.com/photo/2020/05/21/20/30/version-5202613_1280.jpg"
              price="$185"
              duration="90 mins"
            />
            <ServiceCard 
              title="Prestige Manicure" 
              description="Exquisite nail artistry using premium international techniques and products."
              imageUrl="https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              price="$145"
              duration="75 mins"
            />
            <ServiceCard 
              title="Luminous Facial" 
              description="Advanced cellular rejuvenation utilizing rare botanical extracts and precision technologies."
              imageUrl="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              price="$275"
              duration="120 mins"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-neutral-50 w-full">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bodoni text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4 sm:mb-6 tracking-wide">
              Our Guiding Principles
            </h2>
            <p className="font-inter text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A sanctuary where artistry, precision, and personal transformation converge to redefine beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {philosophyItems.map((item, index) => (
              <div 
                key={index} 
                className="
                  bg-white 
                  border border-neutral-100 
                  rounded-2xl 
                  p-6 sm:p-8 
                  text-center 
                  transform 
                  transition-all 
                  duration-500 
                  hover:-translate-y-4 
                  hover:shadow-2xl 
                  hover:border-neutral-200
                "
              >
                <h3 className="font-bodoni text-2xl sm:text-3xl font-semibold text-neutral-800 mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-inter text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="
            mt-12 sm:mt-16 
            border-t 
            border-neutral-200 
            pt-6 sm:pt-8 
            text-center 
            font-inter 
            text-neutral-500
          ">
            Elevating beauty through uncompromising commitment to excellence
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-white w-full">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bodoni text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4 sm:mb-6 tracking-wide">
              Voices of Transformation
            </h2>
            <p className="font-inter text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Authentic experiences from discerning individuals who have discovered their true elegance
            </p>
          </div>

          <div className="relative">
            <div className="text-center px-4 sm:px-16">
              <p className="font-inter text-base sm:text-xl text-neutral-700 mb-6 sm:mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-bodoni text-xl sm:text-2xl font-semibold text-neutral-800">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="font-inter text-neutral-500 text-sm sm:text-base">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="
                  text-neutral-400 
                  hover:text-neutral-700 
                  transition-colors 
                  duration-300 
                  p-2
                "
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="
                  text-neutral-400 
                  hover:text-neutral-700 
                  transition-colors 
                  duration-300 
                  p-2
                "
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`
                    w-2 h-2 rounded-full 
                    ${currentTestimonial === index ? 'bg-neutral-800' : 'bg-neutral-300'}
                    transition-colors duration-300
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-900 text-white py-16 sm:py-24 px-4 sm:px-8 text-center w-full">
        <h2 className="font-bodoni text-4xl sm:text-5xl font-semibold mb-6 sm:mb-8 tracking-wide">
          Your Journey Begins
        </h2>
        <p className="text-base sm:text-xl font-light tracking-wider mb-8 sm:mb-12 max-w-3xl mx-auto">
          Elevate your personal aesthetic. Schedule a bespoke consultation with our premier stylists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a href="tel:+1234567890" className="w-full sm:w-auto bg-white text-neutral-900 px-8 sm:px-12 py-4 sm:py-5 font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-neutral-200 transition-colors duration-300 rounded-lg">
            Contact Concierge
          </a>
          <button className="w-full sm:w-auto border-2 border-white px-8 sm:px-12 py-4 sm:py-5 font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-white hover:text-neutral-900 transition-colors duration-300 rounded-lg">
            Reserve Consultation
          </button>
        </div>
      </section>
    </div>
  );
}