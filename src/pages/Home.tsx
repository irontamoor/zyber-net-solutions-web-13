import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Twitter, Linkedin, CheckCircle, Shield, Zap, Users, Home, Wifi, Monitor } from "lucide-react";
import Navigation from "@/components/Navigation";
import HomeStatsSection from "@/components/HomeStatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=800&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Home Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Smart home technology and reliable IT support for modern families and home offices everywhere
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Home className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Smart Home Setup</h3>
                <p className="text-sm text-gray-600">WiFi, Security, Automation</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Monitor className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Home Office IT</h3>
                <p className="text-sm text-gray-600">Remote work solutions</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Zap className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Device Support</h3>
                <p className="text-sm text-gray-600">Repair & maintenance</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Shield className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">CCTV & Alarm Systems</h3>
                <p className="text-sm text-gray-600">Home security solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeStatsSection />

      {/* Home Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Home IT Services</h2>
            <p className="text-xl text-gray-600">Complete technology solutions for your home</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Wifi className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-gray-800">Smart Home Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete smart home automation including WiFi optimization, security systems, and connected device integration.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mesh WiFi network setup</li>
                  <li>• Smart device integration</li>
                  <li>• Home automation systems</li>
                  <li>• Security camera installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Monitor className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-gray-800">Home Office Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Professional home office IT setup for remote work productivity and seamless connectivity.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• High-speed internet setup</li>
                  <li>• Multi-monitor configurations</li>
                  <li>• Video conferencing solutions</li>
                  <li>• Cloud backup systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-gray-800">Home Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Advanced home security systems with CCTV, alarms, and smart monitoring solutions.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• CCTV system installation</li>
                  <li>• Smart alarm systems</li>
                  <li>• Remote monitoring</li>
                  <li>• Access control systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Home Technology Experts</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Transform your home into a smart, secure, and connected environment with our expert home technology services.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From smart home automation to home office setup, we provide comprehensive IT solutions that make modern living more convenient, secure, and efficient.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Smart Home Specialists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Home Office Setup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Security System Installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">24/7 Technical Support</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Home className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-gray-800 font-semibold mb-2">Smart Living</h3>
                <p className="text-gray-600 text-sm">Advanced home automation for modern families</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/30">
                <Monitor className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-gray-800 font-semibold mb-2">Remote Work Ready</h3>
                <p className="text-gray-600 text-sm">Professional home office setups for productivity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to upgrade your home technology? Contact us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-gray-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+44020712345675" className="text-primary hover:text-secondary text-lg font-semibold">
                  (+44) 0 20 7123 4567
                </a>
                <p className="text-gray-600 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-gray-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@zybernetsolutions.com" className="text-primary hover:text-secondary text-lg font-semibold">
                  info@zybernetsolutions.com
                </a>
                <p className="text-gray-600 mt-2">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <div className="text-2xl font-bold">
                  ZyberNet<span className="text-secondary">Solutions</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional home technology solutions for modern families and home offices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Home Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Smart Home Setup</span></li>
                <li><span className="text-gray-400">Home Office IT</span></li>
                <li><span className="text-gray-400">Security Systems</span></li>
                <li><span className="text-gray-400">Device Support</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3">
                <a href="tel:+44020712345675" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-3" />
                  (+44) 0 20 7123 4567
                </a>
                <a href="mailto:info@zybernetsolutions.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-3" />
                  info@zybernetsolutions.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZyberNetSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;