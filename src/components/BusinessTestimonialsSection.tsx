
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const BusinessTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Robert Jenkins",
      role: "CEO, Technology Company",
      text: "Their enterprise infrastructure transformed our operations. 99.9% uptime, seamless cloud migration, and outstanding support. A true technology partner.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "IT Director, Financial Services", 
      text: "Cybersecurity and compliance were critical for us. Their team delivered GDPR-compliant solutions and proactive threat management. Excellent service.",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "Operations Manager, Retail Company",
      text: "From network infrastructure to 24/7 support, they handle everything. Our 50-person team hasn't had a major IT issue in over a year.",
      rating: 5
    },
    {
      name: "Catherine Williams",
      role: "Managing Partner, Law Firm",
      text: "Data security is paramount in our industry. Their backup solutions and encryption protocols give us complete peace of mind with client information.",
      rating: 5
    },
    {
      name: "Thomas Anderson",
      role: "CTO, Manufacturing Company",
      text: "Scaled from 20 to 200 employees seamlessly. Their infrastructure planning and system integration expertise saved us countless headaches and downtime.",
      rating: 5
    },
    {
      name: "Jennifer Collins",
      role: "Director, Healthcare Organization",
      text: "HIPAA compliance and patient data security were complex challenges. They delivered a robust, compliant solution with exceptional training for our staff.",
      rating: 5
    },
    {
      name: "Michael Stevens",
      role: "Founder, Technology Startup",
      text: "As a growing startup, we needed scalable IT. They provided enterprise-grade solutions at a price that fit our budget. Highly recommend.",
      rating: 5
    },
    {
      name: "Sarah Patterson",
      role: "HR Director, Global Technology Company",
      text: "Managing devices for 300+ remote employees was overwhelming. Their MDM solution and help desk support transformed our IT operations.",
      rating: 5
    },
    {
      name: "Richard Thompson",
      role: "Owner, Architecture Firm",
      text: "Large file handling and cloud collaboration were crucial. Their network optimization and cloud setup doubled our team's productivity.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/90 to-cyan-50/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-teal-700">What Our Business Clients Say</h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by businesses, enterprises, and organizations across multiple industries
          </p>
          <div className="flex justify-center items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600">250+</div>
              <div className="text-gray-600">Business Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">99%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-teal-600 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-teal-600 mb-4" />
                <CardDescription className="text-gray-700 text-base italic">
                  "{testimonial.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t border-teal-200 pt-4">
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

export default BusinessTestimonialsSection;
