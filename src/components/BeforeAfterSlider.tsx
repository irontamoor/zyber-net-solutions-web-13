import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
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
          {/* Before/After Container */}
          <div 
            ref={containerRef}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Business Side (Right) */}
            <div className="absolute inset-0">
              <div 
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-blue-900/60"></div>
                <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
                  <div className="text-right text-white max-w-md">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Business Solutions</h3>
                    <p className="text-lg md:text-xl mb-6">
                      Enterprise-grade IT infrastructure, cybersecurity, and strategic consulting to drive your business forward
                    </p>
                    <ul className="text-left space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Network Infrastructure
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Cybersecurity Solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Cloud Services & Migration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        24/7 IT Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Side (Left) */}
            <div 
              className="absolute inset-0 transition-all duration-300 ease-out"
              style={{
                clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)`
              }}
            >
              <div 
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-900/60"></div>
                <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
                  <div className="text-left text-white max-w-md">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Home Solutions</h3>
                    <p className="text-lg md:text-xl mb-6">
                      Smart home technology and reliable IT support for modern families and home offices
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Smart Home Setup
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Wi-Fi Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Device Support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Home Security Systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-300 ease-out"
              style={{ left: `${sliderValue[0]}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
                <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Slider Control */}
          <div className="mt-8 px-8">
            <Slider
              value={sliderValue}
              onValueChange={handleSliderChange}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Home Solutions</span>
              <span>Business Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;