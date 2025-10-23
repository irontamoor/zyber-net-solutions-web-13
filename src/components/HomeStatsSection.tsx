import { Users, Clock, Star, Wifi } from "lucide-react";

const HomeStatsSection = () => {
  const stats = [
    { 
      number: "1000+", 
      label: "Happy Homeowners",
      icon: Users
    },
    { 
      number: "24/7", 
      label: "Home Support",
      icon: Clock
    },
    { 
      number: null, 
      label: "Rated Service",
      icon: Star,
      showStars: true
    },
    { 
      number: "500+", 
      label: "Smart Homes Installed",
      icon: Wifi
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/80 to-teal-400/80"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {stat.showStars ? (
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-white drop-shadow-lg">{stat.number}</div>
                )}
                
                <div className="text-white font-medium drop-shadow">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
