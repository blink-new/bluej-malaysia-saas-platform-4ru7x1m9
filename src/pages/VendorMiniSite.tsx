import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  MessageCircle,
  ShoppingCart,
  Calendar
} from 'lucide-react';

const VendorMiniSite = () => {
  const { vendorName } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold text-primary">BlueJ</span>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              Powered by BlueJ
            </Badge>
          </div>
        </div>
      </div>

      {/* Vendor Info */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">CE</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Clean Express Laundry</h1>
          <p className="text-gray-600 mb-4">Professional laundry services with pickup & delivery</p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Kuala Lumpur</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.8 (124 reviews)</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Wash & Fold</CardTitle>
              <CardDescription>Professional washing and folding service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">RM 5.00</span>
                <span className="text-sm text-gray-500">per kg</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Order Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Dry Cleaning</CardTitle>
              <CardDescription>Specialized dry cleaning for delicate items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">RM 15.00</span>
                <span className="text-sm text-gray-500">per item</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Order Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Express Service</CardTitle>
              <CardDescription>Same-day service for urgent items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">RM 8.00</span>
                <span className="text-sm text-gray-500">per kg</span>
              </div>
              <Button className="w-full bg-accent hover:bg-accent-dark">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch for any questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/60123456789?text=Hi%20Clean%20Express%20Laundry,%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
              <Button variant="outline" className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/60123456789?text=Hi%20Clean%20Express%20Laundry,%20I%20would%20like%20to%20inquire%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden sm:inline font-medium">Chat with us</span>
        </a>
      </div>
    </div>
  );
};

export default VendorMiniSite;