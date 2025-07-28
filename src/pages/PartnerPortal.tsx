import React, { useState } from 'react';
import { 
  BarChart3, Users, ShoppingBag, Star, TrendingUp, Calendar, 
  MessageSquare, Settings, Bell, Search, Filter, Plus, Bot,
  Package, Truck, CreditCard, Target, Zap, Clock, MapPin,
  Phone, Mail, Edit, Eye, Trash2, Download, Upload
} from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

const PartnerPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiAssistantType, setAIAssistantType] = useState<'marketing' | 'crm' | 'chatbot' | 'tips'>('marketing');

  const openAIAssistant = (type: 'marketing' | 'crm' | 'chatbot' | 'tips') => {
    setAIAssistantType(type);
    setShowAIAssistant(true);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'CRM', icon: Users },
    { id: 'marketing', label: 'Marketing', icon: Target },
    { id: 'booking', label: 'Booking', icon: Calendar },
    { id: 'delivery', label: 'Delivery', icon: Truck },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'wallet', label: 'Wallet', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Shawarma Kebab!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your business today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => openAIAssistant('tips')}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              AI Assistant
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              View Store
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
              <p className="text-2xl font-bold text-gray-900">RM 1,247</p>
              <p className="text-sm text-green-600">+12% from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orders Today</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-sm text-blue-600">+8 from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Customer Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-yellow-600">Based on 156 reviews</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
              <p className="text-sm text-purple-600">+23 this week</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 group">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </button>

          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 group">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Create Promo</span>
          </button>

          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 group">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Send Message</span>
          </button>

          <button className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-200 group">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">View Analytics</span>
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-primary hover:text-primary-dark font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { id: '#12345', customer: 'Ahmad Rahman', items: '2x Daging (L), 1x Ayam (S)', amount: 'RM 32.75', status: 'Preparing', time: '10 mins ago' },
            { id: '#12344', customer: 'Siti Nurhaliza', items: '1x Mix Daging & Ayam (L)', amount: 'RM 12.60', status: 'Ready', time: '25 mins ago' },
            { id: '#12343', customer: 'John Doe', items: '3x Ayam Arabic Style (S)', amount: 'RM 18.90', status: 'Delivered', time: '1 hour ago' },
          ].map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{order.items}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">{order.amount}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'Ready' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMarketing = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Marketing Tools</h1>
            <p className="text-gray-600 mt-1">Create promotions, manage vouchers, and engage customers.</p>
          </div>
          <button 
            onClick={() => openAIAssistant('marketing')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Bot className="w-4 h-4" />
            AI Assistant
          </button>
        </div>
      </div>

      {/* Marketing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Promotions</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <Target className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vouchers Redeemed</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Campaign ROI</p>
              <p className="text-2xl font-bold text-gray-900">245%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Create Promotion */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Promotion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Promotion Title</label>
            <input
              type="text"
              placeholder="e.g., Weekend Special 20% Off"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Percentage Discount</option>
              <option>Fixed Amount</option>
              <option>Buy One Get One</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
            <input
              type="number"
              placeholder="20"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
            Create Promotion
          </button>
          <button 
            onClick={() => openAIAssistant('marketing')}
            className="bg-purple-100 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-200 transition-colors"
          >
            Get AI Suggestions
          </button>
        </div>
      </div>
    </div>
  );

  const renderCRM = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Relationship Management</h1>
            <p className="text-gray-600 mt-1">Manage customers, track engagement, and build relationships.</p>
          </div>
          <button 
            onClick={() => openAIAssistant('crm')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Bot className="w-4 h-4" />
            CRM AI
          </button>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">VIP Customers</h3>
            <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full">18</span>
          </div>
          <p className="text-sm text-gray-600">High-value customers with 8+ orders/month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Regular Customers</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">67</span>
          </div>
          <p className="text-sm text-gray-600">Loyal customers with 4+ orders/month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Occasional Buyers</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">134</span>
          </div>
          <p className="text-sm text-gray-600">Customers with 1-3 orders/month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">At Risk</h3>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">23</span>
          </div>
          <p className="text-sm text-gray-600">Haven't ordered in 30+ days</p>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Customer Database</h2>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search customers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Segment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Orders</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Total Spent</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Last Order</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Ahmad Rahman', email: 'ahmad@email.com', segment: 'VIP', orders: 24, spent: 'RM 1,247', lastOrder: '2 days ago' },
                { name: 'Siti Nurhaliza', email: 'siti@email.com', segment: 'Regular', orders: 12, spent: 'RM 456', lastOrder: '1 week ago' },
                { name: 'John Doe', email: 'john@email.com', segment: 'Occasional', orders: 3, spent: 'RM 89', lastOrder: '2 weeks ago' },
              ].map((customer, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{customer.name}</p>
                      <p className="text-sm text-gray-600">{customer.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      customer.segment === 'VIP' ? 'bg-gold-100 text-gold-800' :
                      customer.segment === 'Regular' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {customer.segment}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{customer.orders}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{customer.spent}</td>
                  <td className="py-3 px-4 text-gray-600">{customer.lastOrder}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'marketing':
        return renderMarketing();
      case 'customers':
        return renderCRM();
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {sidebarItems.find(item => item.id === activeSection)?.label}
            </h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <img src="/bluej-logo.png" alt="BlueJ" className="h-8" />
            <span className="text-xl font-bold text-gray-900">BlueJ</span>
          </div>
        </div>
        
        <nav className="px-4 pb-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors mb-1 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistant
        type={aiAssistantType}
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
      />
    </div>
  );
};

export default PartnerPortal;