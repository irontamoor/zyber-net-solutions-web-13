
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Managing Director",
      text: "ZyberNetSolutions transformed our IT infrastructure completely. Their round-the-clock support has been invaluable to our growing business.",
      rating: 5
    },
    {
      name: "Michael Davies",
      role: "IT Manager", 
      text: "Professional, reliable, and always available when we need them most. Their cybersecurity expertise saved us from potential threats.",
      rating: 5
    },
    {
      name: "Emma Clarke",
      role: "Operations Director",
      text: "Remote working became seamless after their network setup. Outstanding support and brilliant response times.",
      rating: 5
    },
    {
      name: "David Wright",
      role: "Practice Manager",
      text: "Their compliance expertise helped us meet GDPR requirements effortlessly. Highly recommend their consultancy services.",
      rating: 5
    },
    {
      name: "Lisa Bennett",
      role: "Chief Technology Officer",
      text: "The digital transformation strategy they provided increased our efficiency by 40%. Exceptional strategic thinking.",
      rating: 5
    },
    {
      name: "James Robinson",
      role: "Security Manager",
      text: "Brilliant cybersecurity implementation. Their team is knowledgeable and responsive to our industry requirements.",
      rating: 5
    },
    {
      name: "Dr. Patricia Mitchell",
      role: "Head Teacher",
      text: "ZyberNet transformed our entire academy trust's IT infrastructure. 15 schools now have secure, fast networks supporting 8,000 pupils and staff.",
      rating: 5
    },
    {
      name: "Mark Henderson",
      role: "Charity Director",
      text: "Their cybersecurity expertise protected our donor database and helped us achieve compliance. Professional service at a price charities can afford.",
      rating: 5
    },
    {
      name: "Dr. Rachel Phillips",
      role: "NHS Trust Administrator",
      text: "Data protection compliance made simple. Their healthcare IT solutions ensure patient data security whilst improving our operational efficiency significantly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by businesses, schools, healthcare organizations, and non-profits nationwide
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
