
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Remote Marketing Consultant",
      text: "Working from home is brilliant now! They set up my entire home office with dual monitors and lightning-fast WiFi. Video calls never drop anymore.",
      rating: 5
    },
    {
      name: "Michael Davies",
      role: "Homeowner", 
      text: "Our smart home setup is incredible. Lights, heating, security cameras - all controlled from my phone. The installation was seamless and they explained everything clearly.",
      rating: 5
    },
    {
      name: "Emma Clarke",
      role: "Freelance Designer",
      text: "My home office transformation was amazing. They sorted out my WiFi dead zones and set up cloud backup for all my work. Couldn't be happier!",
      rating: 5
    },
    {
      name: "David Wright",
      role: "Remote Software Developer",
      text: "Best decision I made was getting ZyberNet to set up my home office. Three monitors, perfect cable management, and stable internet for video meetings all day.",
      rating: 5
    },
    {
      name: "Lisa Bennett",
      role: "Family Home",
      text: "Our home security system gives us real peace of mind. CCTV cameras, smart alarms, and we can check everything from our phones whilst on holiday. Brilliant!",
      rating: 5
    },
    {
      name: "James Robinson",
      role: "Remote Project Manager",
      text: "Working from home full-time now thanks to their professional setup. Fast internet, proper desk setup, and backup systems mean I'm more productive than at the office.",
      rating: 5
    },
    {
      name: "Patricia Mitchell",
      role: "Online Teacher",
      text: "Teaching from home needed reliable tech. They installed brilliant WiFi coverage throughout my house and sorted my webcam and lighting setup. Students say it's like I'm in a professional studio!",
      rating: 5
    },
    {
      name: "Mark Henderson",
      role: "Homeowner",
      text: "Our smart home is fantastic. Automated lighting, thermostat control, and the kids love the voice-activated music system. ZyberNet made it all work together perfectly.",
      rating: 5
    },
    {
      name: "Rachel Phillips",
      role: "Remote Accountant",
      text: "My home office setup is spot on. They installed a mesh WiFi system that reaches every corner, set up secure cloud storage, and configured my printer properly. No more tech headaches!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by families, remote workers, and homeowners across the UK
          </p>
          <div className="flex justify-center items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <CardDescription className="text-gray-700 text-base italic">
                  "{testimonial.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t border-primary/20 pt-4">
                  <CardTitle className="text-gray-800 text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
