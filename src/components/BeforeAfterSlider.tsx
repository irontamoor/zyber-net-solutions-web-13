import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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
      backgroundImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=800&fit=crop',
      gradient: 'from-green-600/90 to-green-800/90'
    },
    {
      id: 'business', 
      title: 'Business IT Solutions',
      subtitle: 'Enterprise technology that drives growth',
      description: 'Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.',
      services: [
        'Network Infrastructure',
        'Cybersecurity Solutions',
        'Cloud Services & Migration', 
        '24/7 IT Support'
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop',
      gradient: 'from-blue-600/90 to-blue-800/90'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    
    const diff = e.clientX - dragStart;
    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
      setDragStart(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Tailored Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Slide to explore our specialized IT services for homes and businesses
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Slider Container */}
          <div 
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-transform duration-500 ease-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div 
                  className="h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
                  
                  {/* Logo */}
                  <div className="absolute top-8 left-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-primary font-bold text-xl">Z</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        ZyberNetSolutions
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-8">
                      <h3 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      {slide.description && (
                        <p className="text-lg md:text-xl mb-8 opacity-90">
                          {slide.description}
                        </p>
                      )}
                      
                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {slide.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center justify-start bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                            <span className="text-white font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
          </div>

          {/* Slide Labels */}
          <div className="flex justify-between mt-6 px-8 text-gray-600">
            <span className={`transition-all duration-300 ${currentSlide === 0 ? 'text-green-600 font-semibold' : ''}`}>
              Home Solutions
            </span>
            <span className={`transition-all duration-300 ${currentSlide === 1 ? 'text-blue-600 font-semibold' : ''}`}>
              Business Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;