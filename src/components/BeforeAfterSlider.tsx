import { useState, useRef } from "react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative overflow-hidden">
      <div 
        ref={containerRef}
        className="relative h-screen w-full cursor-col-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Business Solutions - Right Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700">
          {/* Logo - Top Center */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
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
              <h1 className="text-5xl md:text-7xl font-bold mb-8">Business IT Solutions</h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
                Enterprise technology that drives growth
              </p>
              <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto">
                Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${sliderPosition > 50 ? 'bg-white' : 'bg-white/40'}`}></div>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${sliderPosition <= 50 ? 'bg-white' : 'bg-white/40'}`}></div>
          </div>

          {/* Mouse scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Home Solutions - Left Side (Clipped) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 transition-all duration-100 ease-out"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        >
          {/* Logo - Top Center (Same position as Business) */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-green-600 font-bold text-xl">Z</span>
              </div>
              <div className="text-2xl font-bold text-white">
                ZyberNetSolutions
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-5xl px-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">Home Solutions</h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
                Smart home technology and reliable IT support for modern families and home offices
              </p>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-start bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                  <span className="text-white font-medium text-lg">Smart Home Setup</span>
                </div>
                <div className="flex items-center justify-start bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                  <span className="text-white font-medium text-lg">Wi-Fi Optimization</span>
                </div>
                <div className="flex items-center justify-start bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                  <span className="text-white font-medium text-lg">Device Support</span>
                </div>
                <div className="flex items-center justify-start bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                  <span className="text-white font-medium text-lg">Home Security Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Draggable Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 transition-all duration-100 ease-out"
          style={{ left: `${sliderPosition}%` }}
        >
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-gray-200 flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform duration-200"
            onMouseDown={handleMouseDown}
          >
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;