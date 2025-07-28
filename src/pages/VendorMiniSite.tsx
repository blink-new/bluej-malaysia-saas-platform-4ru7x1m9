import React, { useState } from 'react';
import { Star, Clock, MapPin, Phone, MessageCircle, Search, Filter, Share2, ShoppingCart, Plus, Minus, Bot } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

const VendorMiniSite = () => {
  const [activeCategory, setActiveCategory] = useState('SHAWARMA');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Array<{id: string, name: string, price: number, quantity: number}>>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const categories = ['ADD ON', 'SHAWARMA', 'PLATE MEAL', 'AYAM CRISPY', 'SIDES'];
  
  const menuItems = [
    {
      id: '1',
      name: 'DAGING (L)',
      description: 'Beef • Mayonnaise • Vegetables • Pita',
      price: 13.65,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA',
      popular: true
    },
    {
      id: '2',
      name: 'AYAM ARABIC STYLE (S)',
      description: 'Chicken • Garlic Sauce • Chicken • Pita',
      price: 6.3,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '3',
      name: 'DAGING (S)',
      description: 'Beef • Mayonnaise • Vegetables • Pita',
      price: 9.45,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '4',
      name: 'AYAM (S)',
      description: 'Chicken • Garlic Sauce • Chicken • Pita',
      price: 5.25,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '5',
      name: 'AYAM (L)',
      description: 'Chicken • Garlic Sauce • Chicken • Pita',
      price: 9.45,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '6',
      name: 'MIX DAGING & AYAM (L)',
      description: 'Mixed Combination of Chicken • Chicken • Pita',
      price: 12.6,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '7',
      name: 'AYAM ARABIC STYLE (L)',
      description: 'Chicken • Garlic Sauce • Chicken • Pita',
      price: 10.5,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    },
    {
      id: '8',
      name: 'MIX DAGING & AYAM (S)',
      description: 'Mixed Combination of Chicken • Chicken • Pita',
      price: 8.4,
      image: '/api/placeholder/120/120',
      category: 'SHAWARMA'
    }
  ];

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredItems = menuItems.filter(item => 
    item.category === activeCategory &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Restaurant Info */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
        </div>
        
        <div className="relative px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-lg">
                  <img src="/bluej-logo.png" alt="Shawarma Kebab" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Shawarma kebab</h1>
                  <p className="text-lg opacity-90">$$Middle Eastern shawarma</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="bg-red-500 px-2 py-1 rounded text-xs">CLOSED</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Jalan Teknokrat 3, Cyberjaya</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for items"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  FILTERS
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Navigation */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                      activeCategory === category
                        ? 'text-primary border-primary bg-primary bg-opacity-5'
                        : 'text-gray-600 border-transparent hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{activeCategory}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=120&fit=crop&crop=center';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        {item.popular && (
                          <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">RM{item.price.toFixed(2)}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Cart</h3>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </div>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your order from</p>
                  <p className="text-gray-900 font-medium">Shawarma kebab</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">RM{item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>RM{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>TOTAL DUE</span>
                      <span className="text-accent">RM{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-secondary text-primary font-bold py-4 rounded-lg mt-6 hover:bg-secondary-dark transition-colors">
                    CHECKOUT
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Chatbot Button */}
      <button
        onClick={() => setShowAIAssistant(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/60123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span>Powered By</span>
            <img src="/bluej-logo.png" alt="BlueJ" className="h-6" />
            <span className="font-bold">BlueJ</span>
          </div>
          <p className="text-sm opacity-80">
            © 2025 BlueJ Business Services Sdn Bhd (1378513-X) | All rights reserved
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">@</span>
            </div>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">in</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Modal */}
      <AIAssistant
        type="chatbot"
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
      />
    </div>
  );
};

export default VendorMiniSite;