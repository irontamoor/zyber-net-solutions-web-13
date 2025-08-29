import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'home',
      title: 'Home Solutions',
      subtitle: 'Smart home technology and reliable IT support for modern families and home offices',
      services: [
        'Smart Home Setup',
        'Wi-Fi Optimization', 
        'Device Support',
        'Home Security Systems'
      ],
      gradient: 'bg-gradient-to-br from-green-500 to-green-700',
      logoPosition: 'top-left'
    },
    {
      id: 'business', 
      title: 'Business IT Solutions',
      subtitle: 'Enterprise technology that drives growth',
      description: 'Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.',
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
      logoPosition: 'top-center'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`h-full w-full ${slide.gradient} relative`}>
              {/* Logo */}
              <div className={`absolute ${
                slide.logoPosition === 'top-center' 
                  ? 'top-12 left-1/2 transform -translate-x-1/2' 
                  : 'top-8 left-8'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-teal-600 font-bold text-xl">Z</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    ZyberNetSolutions
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-8">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  )}
                  
                  {/* Services for Home slide */}
                  {slide.services && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {slide.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center justify-start bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                          <span className="text-white font-medium text-lg">{service}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Arrows - only show on Home slide */}
              {slide.id === 'home' && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Slide Indicators */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Mouse icon for Business slide */}
              {slide.id === 'business' && (
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mb-12">
                  <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSlider;