'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User as UserIcon } from 'lucide-react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from "@supabase/supabase-js"; // Import the correct type from Supabase
const supabase = createClient();

     // Prevent rendering if user is not fetched
  
// Service categories and services from your existing data
const servicesData = [
  {
    category: "Hair Artistry",
    services: [
      {
        id: "hair-1",
        title: "Couture Haircut",
        description: "Personalized cutting technique tailored to your unique facial structure and personal style.",
        duration: "90 mins",
        price: "$185",
      },
      {
        id: "hair-2",
        title: "Color Metamorphosis",
        description: "Advanced coloration using rare pigments and innovative techniques.",
        duration: "120 mins",
        price: "$275",
      },
      {
        id: "hair-3",
        title: "Bridal Transformation",
        description: "Bespoke styling for your most significant moments.",
        duration: "180 mins",
        price: "$350",
      }
    ]
  },
  {
    category: "Skin Renewal",
    services: [
      {
        id: "skin-1",
        title: "Luminous Cellular Facial",
        description: "Advanced rejuvenation using cutting-edge biotechnology and rare botanical extracts.",
        duration: "120 mins",
        price: "$275",
      },
      {
        id: "skin-2",
        title: "Hydration Metamorphosis",
        description: "Intensive moisture renewal using proprietary hydration technologies.",
        duration: "90 mins",
        price: "$225",
      },
      {
        id: "skin-3",
        title: "Anti-Aging Signature",
        description: "Comprehensive regenerative treatment targeting multiple signs of aging.",
        duration: "150 mins",
        price: "$375",
      }
    ]
  },
  {
    category: "Nail Couture",
    services: [
      {
        id: "nail-1",
        title: "Prestige Manicure",
        description: "Exquisite nail artistry using premium international techniques.",
        duration: "75 mins",
        price: "$145",
      },
      {
        id: "nail-2",
        title: "Artistic Nail Design",
        description: "Bespoke nail art creating wearable masterpieces.",
        duration: "90 mins",
        price: "$195",
      },
      {
        id: "nail-3",
        title: "Gentleman's Grooming",
        description: "Refined nail and hand care for the discerning gentleman.",
        duration: "60 mins",
        price: "$125",
      }
    ]
  }
];

// Dummy data for stylists
const stylists = [
  { id: 1, name: "Olivia Laurent", specialty: "Hair Artistry", image: "/images/stylist-1.jpg" },
  { id: 2, name: "Marco Vittori", specialty: "Hair Artistry", image: "/images/stylist-2.jpg" },
  { id: 3, name: "Sophia Chen", specialty: "Skin Renewal", image: "/images/stylist-3.jpg" },
  { id: 4, name: "Isabella Rodriguez", specialty: "Skin Renewal", image: "/images/stylist-4.jpg" },
  { id: 5, name: "Aria Kim", specialty: "Nail Couture", image: "/images/stylist-5.jpg" },
  { id: 6, name: "James Mitchell", specialty: "Nail Couture", image: "/images/stylist-6.jpg" },
];

// Generate available time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    const hourFormatted = hour > 12 ? (hour - 12) : hour;
    const amPm = hour >= 12 ? 'PM' : 'AM';
    slots.push(`${hourFormatted}:00 ${amPm}`);
    if (hour !== 18) {
      slots.push(`${hourFormatted}:30 ${amPm}`);
    }
  }
  return slots;
};

// Generate available dates (next 14 days)
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};

export default function BookingPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      const fetchUser = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
          router.push("/Auth"); // Redirect if not logged in
        } else {
          setUser(data.user);
        }
      };
  
      fetchUser();
    }, [router]);
  
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  interface Service {
    id: string;
    title: string;
    description: string;
    duration: string;
    price: string;
  }
  interface Stylist {
    id: number;
    name: string;
    specialty: string;
    image: string;
  }
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();
  
  // Filter stylists based on selected category
  const availableStylists = selectedCategory 
    ? stylists.filter(stylist => stylist.specialty === selectedCategory) 
    : [];

  const formatDate = (date: { toLocaleDateString: (arg0: string, arg1: { weekday: string; month: string; day: string; }) => any; } | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!selectedService || !selectedStylist || !selectedDate || !selectedTime) {
      alert("Please complete all selections before proceeding.");
      return;
    }
  
    // Define a dummy userId for linking the appointment to an authenticated user; replace with actual user ID if available
   
  
    const { data, error } = await supabase.from("appointments").insert([
        {
          user_id: user?.id, // ✅ Correct: Use user ID
          service: selectedService.title,
          stylist: selectedStylist.name,
          date: selectedDate.toISOString().split("T")[0], // Store YYYY-MM-DD
          time: selectedTime,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone,
          customer_notes: customerInfo.notes,
        },
      ]);
  
      if (error) {
        console.error("Error submitting appointment:", error.message);
        alert("Failed to submit appointment. Please try again.");
      } else {
        console.log("Appointment submitted successfully:", data);
        nextStep();
      }
    };


  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", filter: "grayscale(0.5)" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-8 pt-24">
          <h1 className="font-bodoni text-5xl font-semibold mb-6 tracking-wide">
            Schedule Your Transformation
          </h1>
          <p className="font-inter text-xl text-white/90 mb-10">
            Begin your journey to elevated aesthetics with a bespoke appointment
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-8 container mx-auto max-w-6xl">
        {/* Step indicators */}
        <div className="flex justify-between items-center mb-16 max-w-3xl mx-auto">
          {[
            "Select Service", 
            "Choose Date & Stylist", 
            "Your Information", 
            "Confirmation"
          ].map((stepTitle, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`
                h-12 w-12 
                rounded-full 
                flex items-center justify-center 
                ${step > index + 1 
                  ? 'bg-neutral-900 text-white' 
                  : step === index + 1 
                  ? 'bg-neutral-800 text-white' 
                  : 'bg-neutral-200 text-neutral-500'}
                transition-colors duration-300
              `}>
                {index + 1}
              </div>
              <span className={`
                mt-2 text-sm 
                ${step === index + 1 ? 'text-neutral-800 font-medium' : 'text-neutral-500'}
                hidden sm:block
              `}>
                {stepTitle}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bodoni text-3xl font-semibold mb-8 text-neutral-800 text-center">
              Select Your Experience
            </h2>
            
            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {servicesData.map((category, index) => (
                <button
                  key={index}
                  className={`
                    p-6 
                    border 
                    rounded-xl 
                    text-center 
                    transition-all 
                    duration-300
                    ${selectedCategory === category.category 
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }
                  `}
                  onClick={() => setSelectedCategory(category.category)}
                >
                  <h3 className="font-bodoni text-2xl mb-2">{category.category}</h3>
                  <p className="text-sm opacity-80">
                    {category.category === "Hair Artistry" 
                      ? "Transformative styling experiences"
                      : category.category === "Skin Renewal"
                      ? "Advanced skin rejuvenation"
                      : "Precision nail artistry"
                    }
                  </p>
                </button>
              ))}
            </div>
            
            {/* Services based on selected category */}
            {selectedCategory && (
              <>
                <h3 className="font-bodoni text-2xl font-semibold mb-6 text-neutral-800">
                  Choose Your Service
                </h3>
                <div className="space-y-4">
                  {servicesData
                    .find(cat => cat.category === selectedCategory)
                    ?.services.map((service, index) => (
                      <div 
                        key={index}
                        className={`
                          p-6 
                          border 
                          rounded-xl 
                          cursor-pointer
                          transition-all 
                          duration-300
                          ${selectedService?.id === service.id 
                            ? 'border-neutral-900 bg-neutral-50'
                            : 'border-neutral-200 bg-white hover:border-neutral-400'
                          }
                        `}
                        onClick={() => setSelectedService(service)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bodoni text-xl">{service.title}</h4>
                          <span className="font-medium">{service.price}</span>
                        </div>
                        <p className="text-neutral-600 mb-4">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-neutral-500">Duration: {service.duration}</span>
                          {selectedService?.id === service.id && (
                            <span className="text-neutral-900 text-sm">Selected</span>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            )}
            
            <div className="mt-12 flex justify-end">
              <button 
                className={`
                  px-12 
                  py-4 
                  bg-neutral-900 
                  text-white 
                  rounded-lg 
                  font-inter 
                  tracking-wider 
                  uppercase 
                  hover:bg-neutral-800 
                  transition-colors
                  ${(!selectedService) ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                onClick={nextStep}
                disabled={!selectedService}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date, Time and Stylist */}
        {step === 2 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bodoni text-3xl font-semibold mb-8 text-neutral-800 text-center">
              Select Date, Time & Specialist
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Date Selection */}
              <div>
                <h3 className="font-bodoni text-2xl font-semibold mb-6 text-neutral-800 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Choose Date
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {availableDates.map((date, index) => (
                    <button
                      key={index}
                      className={`
                        p-3 
                        border 
                        rounded-lg 
                        text-center 
                        transition-all 
                        duration-300
                        ${selectedDate && date.toDateString() === selectedDate.toDateString()
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-white hover:border-neutral-400'
                        }
                      `}
                      onClick={() => setSelectedDate(date)}
                    >
                      <div className="font-medium">{date.getDate()}</div>
                      <div className="text-xs">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Time Selection */}
              <div>
                <h3 className="font-bodoni text-2xl font-semibold mb-6 text-neutral-800 flex items-center">
                  <Clock className="mr-2 h-5 w-5" /> Choose Time
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className={`
                        p-3 
                        border 
                        rounded-lg 
                        text-center 
                        transition-all 
                        duration-300
                        ${selectedTime === time
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-white hover:border-neutral-400'
                        }
                      `}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stylist Selection */}
            <div className="mb-12">
              <h3 className="font-bodoni text-2xl font-semibold mb-6 text-neutral-800 flex items-center">
                <UserIcon className="mr-2 h-5 w-5" /> Choose Specialist
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {availableStylists.map((stylist) => (
                  <button
                    key={stylist.id}
                    className={`
                      p-6 
                      border 
                      rounded-xl 
                      text-center 
                      transition-all 
                      duration-300
                      ${selectedStylist?.id === stylist.id
                        ? 'border-neutral-900 bg-neutral-50'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                      }
                    `}
                    onClick={() => setSelectedStylist(stylist)}
                  >
                    <div className="w-20 h-20 rounded-full bg-neutral-200 mx-auto mb-4">
                      {/* Placeholder for stylist image */}
                    </div>
                    <h4 className="font-bodoni text-xl mb-1">{stylist.name}</h4>
                    <p className="text-sm text-neutral-600">{stylist.specialty}</p>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex justify-between">
              <button 
                className="
                  px-12 
                  py-4 
                  border 
                  border-neutral-300 
                  text-neutral-800 
                  rounded-lg 
                  font-inter 
                  tracking-wider 
                  uppercase 
                  hover:bg-neutral-100 
                  transition-colors
                "
                onClick={prevStep}
              >
                Back
              </button>
              <button 
                className={`
                  px-12 
                  py-4 
                  bg-neutral-900 
                  text-white 
                  rounded-lg 
                  font-inter 
                  tracking-wider 
                  uppercase 
                  hover:bg-neutral-800 
                  transition-colors
                  ${(!selectedDate || !selectedTime || !selectedStylist) ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                onClick={nextStep}
                disabled={!selectedDate || !selectedTime || !selectedStylist}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Customer Information */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bodoni text-3xl font-semibold mb-8 text-neutral-800 text-center">
              Your Information
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      px-4 
                      py-3 
                      border 
                      border-neutral-300 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-neutral-500
                    "
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      px-4 
                      py-3 
                      border 
                      border-neutral-300 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-neutral-500
                    "
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      px-4 
                      py-3 
                      border 
                      border-neutral-300 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-neutral-500
                    "
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={customerInfo.notes}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      px-4 
                      py-3 
                      border 
                      border-neutral-300 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-neutral-500
                    "
                  />
                </div>
              </div>
              
              <div className="mt-12 flex justify-between">
                <button 
                  type="button"
                  className="
                    px-12 
                    py-4 
                    border 
                    border-neutral-300 
                    text-neutral-800 
                    rounded-lg 
                    font-inter 
                    tracking-wider 
                    uppercase 
                    hover:bg-neutral-100 
                    transition-colors
                  "
                  onClick={prevStep}
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="
                    px-12 
                    py-4 
                    bg-neutral-900 
                    text-white 
                    rounded-lg 
                    font-inter 
                    tracking-wider 
                    uppercase 
                    hover:bg-neutral-800 
                    transition-colors
                  "
                >
                  Complete Booking
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-16 mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-bodoni text-3xl font-semibold mb-4 text-neutral-800">
                Booking Confirmed
              </h2>
              <p className="text-neutral-600 mb-8">
                Thank you for scheduling your appointment with us. We look forward to providing you with an exceptional experience.
              </p>
              
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="font-bodoni text-xl mb-4 text-neutral-800">Your Appointment Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service:</span>
                    <span className="font-medium">{selectedService?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Date:</span>
                    <span className="font-medium">{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Specialist:</span>
                    <span className="font-medium">{selectedStylist?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Price:</span>
                    <span className="font-medium">{selectedService?.price}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-neutral-600 mb-8">
              A confirmation has been sent to your email. If you need to make any changes to your appointment, please contact us at least 24 hours in advance.
            </p>
            
            <div className="flex justify-center">
              <button 
                className="
                  px-12 
                  py-4 
                  bg-neutral-900 
                  text-white 
                  rounded-lg 
                  font-inter 
                  tracking-wider 
                  uppercase 
                  hover:bg-neutral-800 
                  transition-colors
                "
                onClick={() => window.location.href = "/"}
              >
                Return Home
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}