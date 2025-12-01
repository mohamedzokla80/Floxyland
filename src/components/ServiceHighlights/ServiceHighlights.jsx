import React from "react";

export default function ServiceHighlights() {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Concierge",
      description: "Round-the-clock personalized service to assist with all your needs, from restaurant reservations to travel arrangements.",
      features: ["Personal Assistant", "Travel Planning", "Event Coordination"]
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Prime Location",
      description: "Strategically located in the heart of the city with walking distance to major attractions, shopping, and business districts.",
      features: ["City Center", "Shopping Districts", "Business Hub"]
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Spa & Wellness",
      description: "Award-winning spa and wellness center featuring rejuvenating treatments, fitness facilities, and relaxation areas.",
      features: ["Spa Treatments", "Fitness Center", "Yoga Studio"]
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Fine Dining",
      description: "Multiple award-winning restaurants offering diverse cuisines from renowned chefs, plus 24-hour room service.",
      features: ["Michelin Stars", "International Cuisine", "Room Service"]
    },
    {
      id: 5,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Premium Amenities",
      description: "Exceptional facilities including rooftop pool, business center, meeting rooms, and luxury transportation services.",
      features: ["Rooftop Pool", "Business Center", "Luxury Transport"]
    },
    {
      id: 6,
      icon: (
        <svg className="w-16 h-16 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Smart Technology",
      description: "High-speed WiFi, smart room controls, digital concierge, and seamless connectivity throughout the property.",
      features: ["High-Speed WiFi", "Smart Controls", "Digital Services"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            World-Class Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Exceptional <span className="text-yellow-600">Hospitality</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled hospitality with our comprehensive range of premium services 
            designed to exceed your expectations and create unforgettable memories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-2xl group-hover:bg-yellow-100 dark:group-hover:bg-yellow-500/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Experience <span className="text-yellow-600">Luxury?</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Let our dedicated team create an unforgettable experience tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Book Your Stay
              </button>
              <button className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900">
                Contact Concierge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
