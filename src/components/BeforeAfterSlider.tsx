import { useState } from "react";
const BeforeAfterSlider = () => {
  return <section className="relative overflow-hidden">
      <div className="relative h-screen w-full flex">
        {/* Home Solutions - Left Half */}
        <div className="w-1/2 bg-gradient-to-br from-green-500/90 to-green-700/90 relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=800&fit=crop')"
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-green-700/90"></div>
          
          {/* Logo - Top Center */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
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
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-lg px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Solutions</h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Smart home technology and reliable IT support for modern families and home offices
              </p>
              
              {/* Services Grid */}
              
            </div>
          </div>
        </div>

        {/* Business Solutions - Right Half */}
        <div className="w-1/2 bg-gradient-to-br from-teal-500/90 to-teal-700/90 relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop')"
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-teal-700/90"></div>
          
          {/* Logo - Top Center */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
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
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-lg px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business IT Solutions</h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Enterprise technology that drives growth
              </p>
              <p className="text-base md:text-lg mb-8 opacity-90">
                Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>

          {/* Mouse scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BeforeAfterSlider;