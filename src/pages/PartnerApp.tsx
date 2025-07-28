import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Bell, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Eye, 
  Home, 
  MapPin, 
  Package, 
  Phone, 
  Settings, 
  ShoppingCart, 
  Star, 
  Store, 
  TrendingUp, 
  User, 
  X,
  Play,
  Pause,
  BarChart3,
  Calendar,
  MessageCircle,
  Navigation,
  Truck,
  AlertCircle,
  CheckSquare,
  XCircle,
  Bot,
  Lightbulb
} from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

const PartnerApp = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [storeOpen, setStoreOpen] = useState(true);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const pendingOrders = [
    {
      id: '#ORD-001',
      customer: 'Ahmad Rahman',
      service: 'Wash & Fold (3kg)',
      amount: 'RM 18.00',
      time: '2 min ago',
      address: 'Jalan Ampang, KL',
      phone: '+60123456789',
      urgent: false
    },
    {
      id: '#ORD-002',
      customer: 'Siti Nurhaliza',
      service: 'Dry Cleaning (2 items)',
      amount: 'RM 25.00',
      time: '5 min ago',
      address: 'KLCC, KL',
      phone: '+60198765432',
      urgent: true
    },
    {
      id: '#ORD-003',
      customer: 'Lim Wei Ming',
      service: 'Express Wash (5kg)',
      amount: 'RM 35.00',
      time: '8 min ago',
      address: 'Bangsar, KL',
      phone: '+60187654321',
      urgent: false
    }
  ];

  const activeOrders = [
    {
      id: '#ORD-004',
      customer: 'Fatimah Ali',
      service: 'Ironing Service',
      amount: 'RM 12.00',
      status: 'Processing',
      estimatedCompletion: '2:30 PM',
      progress: 60
    },
    {
      id: '#ORD-005',
      customer: 'Chen Wei',
      service: 'Wash & Fold (4kg)',
      amount: 'RM 22.00',
      status: 'Ready for Pickup',
      estimatedCompletion: 'Ready',
      progress: 100
    }
  ];

  const todayStats = {
    orders: 12,
    revenue: 'RM 280',
    avgRating: 4.8,
    completionRate: '94%'
  };

  const renderOrders = () => (
    <div className="space-y-6">
      {/* Store Status */}
      <Card className={`border-l-4 ${storeOpen ? 'border-l-green-500' : 'border-l-red-500'}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${storeOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <div>
                <h3 className="font-semibold text-primary">Store Status</h3>
                <p className="text-sm text-gray-600">
                  {storeOpen ? 'Currently accepting orders' : 'Store is closed'}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setStoreOpen(!storeOpen)}
              variant={storeOpen ? 'outline' : 'default'}
              size="sm"
              className={storeOpen ? 'text-red-600 border-red-600 hover:bg-red-50' : 'bg-green-600 hover:bg-green-700'}
            >
              {storeOpen ? (
                <>
                  <Pause className="h-4 w-4 mr-1" />
                  Close Store
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Open Store
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pending Orders */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-primary">
            New Orders ({pendingOrders.length})
          </h3>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Requires Action
          </Badge>
        </div>
        
        <div className="space-y-3">
          {pendingOrders.map((order) => (
            <Card key={order.id} className={`${order.urgent ? 'ring-2 ring-red-200 bg-red-50' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-primary">{order.id}</h4>
                    {order.urgent && (
                      <Badge variant="default" className="bg-red-500 text-white text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{order.time}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer:</span>
                    <span className="font-medium">{order.customer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Service:</span>
                    <span className="font-medium">{order.service}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="font-bold text-primary">{order.amount}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{order.address}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Accept
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Decline
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Orders */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">
          In Progress ({activeOrders.length})
        </h3>
        
        <div className="space-y-3">
          {activeOrders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-primary">{order.id}</h4>
                  <Badge 
                    variant={order.status === 'Ready for Pickup' ? 'default' : 'secondary'}
                    className={order.status === 'Ready for Pickup' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                  >
                    {order.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer:</span>
                    <span className="font-medium">{order.customer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Service:</span>
                    <span className="font-medium">{order.service}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completion:</span>
                    <span className="font-medium">{order.estimatedCompletion}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{order.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {order.status === 'Processing' ? (
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <CheckSquare className="h-4 w-4 mr-1" />
                      Mark Ready
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Truck className="h-4 w-4 mr-1" />
                      Arrange Delivery
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Today's Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingCart className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{todayStats.orders}</p>
            <p className="text-sm text-gray-600">Orders Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{todayStats.revenue}</p>
            <p className="text-sm text-gray-600">Revenue Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{todayStats.avgRating}</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{todayStats.completionRate}</p>
            <p className="text-sm text-gray-600">Completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center justify-center space-y-1"
              onClick={() => setActiveTab('orders')}
            >
              <Package className="h-6 w-6" />
              <span className="text-sm">View Orders</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center justify-center space-y-1"
            >
              <Settings className="h-6 w-6" />
              <span className="text-sm">Store Settings</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center justify-center space-y-1"
            >
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-16 flex flex-col items-center justify-center space-y-1"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-sm">Messages</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { icon: CheckCircle, text: 'Order #ORD-001 completed', time: '5 min ago', color: 'text-green-500' },
              { icon: Bell, text: 'New order received', time: '12 min ago', color: 'text-blue-500' },
              { icon: Star, text: 'Received 5-star review', time: '1 hour ago', color: 'text-yellow-500' },
              { icon: DollarSign, text: 'Payment received RM 25.00', time: '2 hours ago', color: 'text-green-500' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <activity.icon className={`h-5 w-5 ${activity.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Store Hours */}
      <Card>
        <CardHeader>
          <CardTitle>Store Hours</CardTitle>
          <CardDescription>Manage your operating hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { day: 'Monday', hours: '9:00 AM - 6:00 PM', enabled: true },
              { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', enabled: true },
              { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', enabled: true },
              { day: 'Thursday', hours: '9:00 AM - 6:00 PM', enabled: true },
              { day: 'Friday', hours: '9:00 AM - 6:00 PM', enabled: true },
              { day: 'Saturday', hours: '10:00 AM - 4:00 PM', enabled: true },
              { day: 'Sunday', hours: 'Closed', enabled: false }
            ].map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-primary">{schedule.day}</p>
                  <p className="text-sm text-gray-600">{schedule.hours}</p>
                </div>
                <div className={`w-4 h-4 rounded-full ${schedule.enabled ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Control your notification preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: 'New Orders', description: 'Get notified when new orders arrive', enabled: true },
              { label: 'Order Updates', description: 'Updates on order status changes', enabled: true },
              { label: 'Customer Messages', description: 'Direct messages from customers', enabled: true },
              { label: 'Payment Notifications', description: 'Payment confirmations and updates', enabled: false },
              { label: 'Marketing Updates', description: 'BlueJ platform updates and promotions', enabled: false }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-primary">{setting.label}</p>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <div className={`w-12 h-6 rounded-full ${setting.enabled ? 'bg-primary' : 'bg-gray-300'} relative cursor-pointer transition-colors`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </div>
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
              <span className="text-lg font-semibold text-primary">Partner App</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowAIAssistant(true)}
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Lightbulb className="h-4 w-4" />
              </button>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto pb-20">
        <div className="p-4">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Home },
              { id: 'orders', label: 'Orders', icon: Package },
              { id: 'settings', label: 'Settings', icon: Settings }
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
                {tab.id === 'orders' && pendingOrders.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{pendingOrders.length}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistant
        type="tips"
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
      />
    </div>
  );
};

export default PartnerApp;