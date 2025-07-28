import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  ShoppingBag, 
  UtensilsCrossed, 
  Shirt, 
  Sparkles, 
  Wrench,
  Home,
  Heart,
  User,
  ShoppingCart,
  Truck,
  CreditCard,
  Filter,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Package,
  CheckCircle,
  Navigation,
  DollarSign,
  Bell
} from 'lucide-react';

const CustomerApp = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: ShoppingBag, color: 'bg-gray-100 text-gray-600' },
    { id: 'retail', name: 'Retail', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
    { id: 'fnb', name: 'F&B', icon: UtensilsCrossed, color: 'bg-green-100 text-green-600' },
    { id: 'laundry', name: 'Laundry', icon: Shirt, color: 'bg-purple-100 text-purple-600' },
    { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'bg-pink-100 text-pink-600' },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench, color: 'bg-orange-100 text-orange-600' },
    { id: 'home', name: 'Home Business', icon: Home, color: 'bg-indigo-100 text-indigo-600' }
  ];

  const vendors = [
    {
      id: 1,
      name: 'Clean Express Laundry',
      category: 'laundry',
      rating: 4.8,
      reviews: 124,
      distance: '0.8 km',
      deliveryTime: '45-60 min',
      services: ['Wash & Fold', 'Dry Cleaning', 'Ironing'],
      priceRange: 'RM 8-25',
      isOpen: true,
      featured: true
    },
    {
      id: 2,
      name: 'Mama Kitchen',
      category: 'fnb',
      rating: 4.6,
      reviews: 89,
      distance: '1.2 km',
      deliveryTime: '30-45 min',
      services: ['Malaysian Cuisine', 'Delivery', 'Dine-in'],
      priceRange: 'RM 12-35',
      isOpen: true,
      featured: false
    },
    {
      id: 3,
      name: 'Beauty Bliss Salon',
      category: 'beauty',
      rating: 4.9,
      reviews: 156,
      distance: '2.1 km',
      deliveryTime: 'Book ahead',
      services: ['Hair Styling', 'Facial', 'Manicure'],
      priceRange: 'RM 25-80',
      isOpen: true,
      featured: true
    },
    {
      id: 4,
      name: 'Tech Repair Pro',
      category: 'maintenance',
      rating: 4.7,
      reviews: 67,
      distance: '1.5 km',
      deliveryTime: 'Same day',
      services: ['Phone Repair', 'Laptop Service', 'Home Visit'],
      priceRange: 'RM 30-150',
      isOpen: false,
      featured: false
    }
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      vendor: 'Clean Express Laundry',
      service: 'Wash & Fold (3kg)',
      status: 'Delivered',
      amount: 'RM 18.00',
      date: '2 days ago',
      rating: 5
    },
    {
      id: '#ORD-002',
      vendor: 'Mama Kitchen',
      service: 'Nasi Lemak Set',
      status: 'Delivered',
      amount: 'RM 15.50',
      date: '1 week ago',
      rating: 4
    }
  ];

  const activeOrders = [
    {
      id: '#ORD-003',
      vendor: 'Beauty Bliss Salon',
      service: 'Hair Cut & Styling',
      status: 'Confirmed',
      amount: 'RM 45.00',
      estimatedTime: '2:30 PM today',
      progress: 25
    }
  ];

  const filteredVendors = selectedCategory === 'all' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === selectedCategory);

  const renderDiscover = () => (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for services, vendors..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        />
        <Button variant="outline" className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-2 text-gray-600">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">Delivering to: Kuala Lumpur</span>
        <Button variant="ghost" size="sm" className="text-primary">Change</Button>
      </div>

      {/* Categories */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-md'
                : category.color
            }`}
          >
            <category.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Featured Vendors */}
      {selectedCategory === 'all' && (
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Featured Near You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vendors.filter(v => v.featured).map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{vendor.name.charAt(0)}</span>
                  </div>
                  {vendor.featured && (
                    <Badge className="absolute top-2 left-2 bg-secondary text-secondary-dark">
                      Featured
                    </Badge>
                  )}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                    vendor.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {vendor.isOpen ? 'Open' : 'Closed'}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-primary">{vendor.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                      <span className="text-sm text-gray-500">({vendor.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{vendor.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{vendor.deliveryTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{vendor.services.join(', ')}</p>
                      <p className="text-sm font-medium text-primary">{vendor.priceRange}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark">
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Vendors */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">
          {selectedCategory === 'all' ? 'All Vendors' : `${categories.find(c => c.id === selectedCategory)?.name} Services`}
        </h3>
        <div className="space-y-4">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{vendor.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-primary">{vendor.name}</h4>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        vendor.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {vendor.isOpen ? 'Open' : 'Closed'}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{vendor.rating}</span>
                        <span>({vendor.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{vendor.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{vendor.deliveryTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{vendor.services.join(', ')}</p>
                        <p className="text-sm font-medium text-primary">{vendor.priceRange}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary-dark">
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      {/* Active Orders */}
      {activeOrders.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Active Orders</h3>
          <div className="space-y-4">
            {activeOrders.map((order) => (
              <Card key={order.id} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-primary">{order.id}</h4>
                      <p className="text-sm text-gray-600">{order.vendor}</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {order.status}
                    </Badge>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm font-medium">{order.service}</p>
                    <p className="text-sm text-gray-600">Estimated: {order.estimatedTime}</p>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">{order.amount}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Navigation className="h-4 w-4 mr-1" />
                        Track
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Order History */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-primary">Order History</h3>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-primary">{order.id}</h4>
                    <p className="text-sm text-gray-600">{order.vendor}</p>
                  </div>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {order.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium">{order.service}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{order.amount}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < order.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Reorder
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Rate & Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Ahmad Rahman</h3>
              <p className="text-gray-600">ahmad.rahman@email.com</p>
              <p className="text-sm text-gray-500">Member since Jan 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">24</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">RM 450</p>
            <p className="text-sm text-gray-600">Total Spent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">8</p>
            <p className="text-sm text-gray-600">Favorites</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">4.9</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Options */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: User, label: 'Edit Profile', description: 'Update your personal information' },
              { icon: MapPin, label: 'Manage Addresses', description: 'Add or edit delivery addresses' },
              { icon: CreditCard, label: 'Payment Methods', description: 'Manage your payment options' },
              { icon: Bell, label: 'Notifications', description: 'Control your notification preferences' },
              { icon: Heart, label: 'Favorites', description: 'View your favorite vendors' },
              { icon: MessageCircle, label: 'Support', description: 'Get help and contact support' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/bluej-logo.png" alt="BlueJ" className="h-8" />
              <span className="text-lg font-semibold text-primary">BlueJ</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto pb-20">
        <div className="p-4">
          {activeTab === 'discover' && renderDiscover()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            {[
              { id: 'discover', label: 'Discover', icon: Search },
              { id: 'orders', label: 'Orders', icon: Package },
              { id: 'profile', label: 'Profile', icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerApp;