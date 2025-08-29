
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'home',
      title: 'Home IT Solutions',
      subtitle: 'Smart technology for modern families',
      description: 'Enhance your home with reliable Wi-Fi, smart home integration, and comprehensive tech support for all your family\'s devices.',
      backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop'
    },
    {
      id: 'business',
      title: 'Business IT Solutions', 
      subtitle: 'Enterprise technology that drives growth',
      description: 'Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.',
      backgroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop'
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-30`}
          style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary/90"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Custom Logo Design */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center shadow-2xl">
                <span className="text-primary font-bold text-xl md:text-3xl">Z</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl">
                ZyberNet<span className="text-white/90">Solutions</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
