const BeforeAfterSlider = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen w-full flex group">
        {/* Home Solutions - Left Half */}
        <div className="w-1/2 bg-gradient-to-br from-green-500/90 to-green-700/90 relative transition-all duration-500 ease-in-out hover:w-full group-hover:w-1/2 hover:!w-full cursor-pointer">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=800&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-green-700/90" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pt-20">
            <div className="text-center text-white max-w-lg px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Solutions</h1>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Smart home technology and reliable IT support for modern families and home offices
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-semibold mb-1">Smart Home Setup</div>
                  <div className="text-xs opacity-90">WiFi, Security, Automation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-semibold mb-1">Home Office IT</div>
                  <div className="text-xs opacity-90">Remote work solutions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-semibold mb-1">Device Support</div>
                  <div className="text-xs opacity-90">Repair & maintenance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-semibold mb-1">Data Protection</div>
                  <div className="text-xs opacity-90">Backup & security</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Solutions - Right Half */}
        <div className="w-1/2 bg-gradient-to-br from-teal-500/90 to-teal-700/90 relative transition-all duration-500 ease-in-out hover:w-full group-hover:w-1/2 hover:!w-full cursor-pointer">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-teal-700/90" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pt-20">
            <div className="text-center text-white max-w-lg px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business IT Solutions</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Enterprise technology that drives growth. Empower your business with scalable IT infrastructure, cybersecurity, cloud services, and strategic technology consulting.
              </p>
            </div>
          </div>
        </div>
        
        {/* Centered Logo Over Both Areas */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200">
              <span className="font-bold text-xl text-transparent bg-gradient-to-br from-gray-600 to-gray-800 bg-clip-text stroke-gray-800" style={{WebkitTextStroke: '1px #374151'}}>Z</span>
            </div>
            <div className="text-2xl font-bold text-white drop-shadow-lg">
              ZyberNetSolutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;