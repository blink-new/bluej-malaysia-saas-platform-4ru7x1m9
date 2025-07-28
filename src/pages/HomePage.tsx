import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingBag, 
  UtensilsCrossed, 
  Shirt, 
  Sparkles, 
  Wrench,
  Home,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
  Smartphone
} from 'lucide-react';

const HomePage = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Product ordering & inventory management",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: UtensilsCrossed,
      title: "F&B",
      description: "Menu ordering + dine-in reservations",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Shirt,
      title: "Laundry",
      description: "Pickup/delivery with multi-stage tracking",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Appointment booking system",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Wrench,
      title: "Home Maintenance",
      description: "Service scheduling & booking",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Home,
      title: "Home Businesses",
      description: "Home-based services & operations",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Auto-Generated Mini Websites",
      description: "Each vendor gets their own branded mobile-first website"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Track orders, revenue, and customer insights"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "FPX, Cards, and Cash on Pickup options"
    },
    {
      icon: Users,
      title: "CRM & Marketing",
      description: "Customer segmentation and targeted campaigns"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "RM80",
      period: "per 3 months",
      features: [
        "Order Management",
        "Mini Website",
        "Basic Analytics",
        "Vendor Wallet",
        "WhatsApp Integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "RM120",
      period: "per 3 months",
      features: [
        "Everything in Starter",
        "Booking Management",
        "CRM Tools",
        "Marketing Tools",
        "Staff Scheduling",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "RM150",
      period: "per 3 months",
      features: [
        "Everything in Professional",
        "Advanced Analytics",
        "Custom Integrations",
        "Dedicated Support",
        "White-label Options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/bluej-logo.png" alt="BlueJ" className="h-8" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#industries" className="text-gray-600 hover:text-primary transition-colors">Industries</a>
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-primary hover:text-primary-dark">
                  Login
                </Button>
              </Link>
              <div className="hidden lg:flex items-center space-x-2">
                <Link to="/customer">
                  <Button variant="outline" size="sm">Customer App</Button>
                </Link>
                <Link to="/partner-app">
                  <Button variant="outline" size="sm">Partner App</Button>
                </Link>
              </div>
              <Link to="/partner">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-accent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              One System.
              <br />
              <span className="text-secondary">Everything You Need.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empower your business with our complete B2B2C SaaS platform. 
              From order management to customer engagement - all under your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/partner">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-dark font-semibold px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for key business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to digitize and grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-accent shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent-dark' : 'bg-primary hover:bg-primary-dark'} text-white`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Malaysian businesses already using BlueJ to grow their operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partner">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-dark font-semibold px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/bluej-logo.png" alt="BlueJ" className="h-8 brightness-0 invert" />
              </div>
              <p className="text-blue-200">
                Empowering businesses with complete digital solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 BlueJ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;