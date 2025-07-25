import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BarChart3, 
  Package, 
  Users, 
  Star, 
  TrendingUp, 
  DollarSign,
  ShoppingCart,
  Clock,
  Settings,
  Plus,
  Eye,
  Edit,
  Filter,
  Search,
  Download,
  Bell,
  Menu,
  X,
  Home,
  Truck,
  CreditCard,
  Target,
  Gift,
  BarChart,
  Wallet,
  Store,
  UserCheck,
  Calendar,
  Phone
} from 'lucide-react';

const PartnerPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Revenue', value: 'RM 12,450', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Orders Today', value: '24', change: '+8%', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Customer Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-yellow-600' },
    { title: 'Active Products', value: '156', change: '+5', icon: Package, color: 'text-purple-600' }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Ahmad Rahman', service: 'Wash & Fold (3kg)', status: 'Processing', amount: 'RM 18.00', time: '2 hours ago' },
    { id: '#ORD-002', customer: 'Siti Nurhaliza', service: 'Dry Cleaning (2 items)', status: 'Ready', amount: 'RM 25.00', time: '4 hours ago' },
    { id: '#ORD-003', customer: 'Lim Wei Ming', service: 'Ironing Service', status: 'Delivered', amount: 'RM 12.00', time: '6 hours ago' },
    { id: '#ORD-004', customer: 'Fatimah Ali', service: 'Express Wash (5kg)', status: 'Pickup', amount: 'RM 35.00', time: '1 day ago' }
  ];

  const quickActions = [
    { title: 'Add Product', icon: Plus, color: 'bg-blue-500 hover:bg-blue-600', action: () => setActiveTab('products') },
    { title: 'View Orders', icon: Eye, color: 'bg-green-500 hover:bg-green-600', action: () => setActiveTab('orders') },
    { title: 'Marketing', icon: Target, color: 'bg-purple-500 hover:bg-purple-600', action: () => setActiveTab('marketing') },
    { title: 'Analytics', icon: BarChart, color: 'bg-orange-500 hover:bg-orange-600', action: () => setActiveTab('analytics') },
    { title: 'Wallet', icon: Wallet, color: 'bg-indigo-500 hover:bg-indigo-600', action: () => setActiveTab('wallet') },
    { title: 'Settings', icon: Settings, color: 'bg-gray-500 hover:bg-gray-600', action: () => setActiveTab('settings') }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'orders', label: 'Order Management', icon: ShoppingCart },
    { id: 'products', label: 'Products & Menu', icon: Package },
    { id: 'booking', label: 'Booking Management', icon: Calendar, badge: 'Pro' },
    { id: 'customers', label: 'CRM', icon: Users, badge: 'Pro' },
    { id: 'marketing', label: 'Marketing Tools', icon: Target },
    { id: 'delivery', label: 'Delivery & Logistics', icon: Truck },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'wallet', label: 'Vendor Wallet', icon: Wallet },
    { id: 'website', label: 'Mini Website', icon: Store },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {stat.change}
                        </p>
                      </div>
                      <div className="p-3 rounded-full bg-gray-50">
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Quick Actions</span>
                </CardTitle>
                <CardDescription>Frequently used tools and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`${action.color} text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className="h-6 w-6" />
                        <span className="text-sm font-medium">{action.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Latest customer orders and their status</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={order.status === 'Delivered' ? 'default' : order.status === 'Ready' ? 'secondary' : 'outline'}
                          className={
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Ready' ? 'bg-green-100 text-green-800' :
                            order.status === 'Pickup' ? 'bg-blue-100 text-blue-800' : ''
                          }
                        >
                          {order.status}
                        </Badge>
                        <p className="text-sm font-medium text-primary mt-1">{order.amount}</p>
                        <p className="text-xs text-gray-500">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'marketing':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary">Marketing Tools</h2>
                <p className="text-gray-600">Create vouchers, promotions, and track campaign performance</p>
              </div>
              <Button className="bg-primary hover:bg-primary-dark">
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            {/* Marketing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Vouchers</p>
                      <p className="text-2xl font-bold text-primary">8</p>
                    </div>
                    <Gift className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Redemptions</p>
                      <p className="text-2xl font-bold text-primary">142</p>
                    </div>
                    <Target className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue Impact</p>
                      <p className="text-2xl font-bold text-primary">RM 2,340</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Voucher Management */}
            <Card>
              <CardHeader>
                <CardTitle>Voucher Management</CardTitle>
                <CardDescription>Create and manage discount vouchers for your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">New Customer 20% Off</h4>
                      <p className="text-sm text-gray-600">Valid until Dec 31, 2025 • Used 45 times</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Weekend Special RM5 Off</h4>
                      <p className="text-sm text-gray-600">Valid weekends only • Used 23 times</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'customers':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary">Customer Relationship Management</h2>
                <p className="text-gray-600">Manage customer data, segments, and engagement</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button className="bg-primary hover:bg-primary-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Customer
                </Button>
              </div>
            </div>

            {/* CRM Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Customers</p>
                      <p className="text-2xl font-bold text-primary">1,247</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active This Month</p>
                      <p className="text-2xl font-bold text-primary">342</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
                      <p className="text-2xl font-bold text-primary">RM 28</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Retention Rate</p>
                      <p className="text-2xl font-bold text-primary">78%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Customer Database</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search customers..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Ahmad Rahman', email: 'ahmad@email.com', orders: 12, spent: 'RM 340', lastOrder: '2 days ago', segment: 'VIP' },
                    { name: 'Siti Nurhaliza', email: 'siti@email.com', orders: 8, spent: 'RM 220', lastOrder: '1 week ago', segment: 'Regular' },
                    { name: 'Lim Wei Ming', email: 'lim@email.com', orders: 15, spent: 'RM 450', lastOrder: '3 days ago', segment: 'VIP' },
                    { name: 'Fatimah Ali', email: 'fatimah@email.com', orders: 5, spent: 'RM 140', lastOrder: '2 weeks ago', segment: 'New' }
                  ].map((customer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium">{customer.orders}</p>
                          <p className="text-gray-500">Orders</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{customer.spent}</p>
                          <p className="text-gray-500">Spent</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{customer.lastOrder}</p>
                          <p className="text-gray-500">Last Order</p>
                        </div>
                        <Badge 
                          variant={customer.segment === 'VIP' ? 'default' : customer.segment === 'Regular' ? 'secondary' : 'outline'}
                        >
                          {customer.segment}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'booking':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary">Booking Management</h2>
                <p className="text-gray-600">Manage appointments, schedules, and staff availability</p>
              </div>
              <Button className="bg-primary hover:bg-primary-dark">
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>

            {/* Booking Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Today's Bookings</p>
                      <p className="text-2xl font-bold text-primary">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Week</p>
                      <p className="text-2xl font-bold text-primary">67</p>
                    </div>
                    <Clock className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                      <p className="text-2xl font-bold text-primary">94%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold text-primary">RM 3,240</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Upcoming appointments and bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: '09:00 AM', service: 'Hair Cut & Styling', customer: 'Sarah Ahmad', duration: '45 min', staff: 'Aisha' },
                    { time: '10:30 AM', service: 'Facial Treatment', customer: 'Lim Mei Ling', duration: '60 min', staff: 'Fatimah' },
                    { time: '02:00 PM', service: 'Manicure & Pedicure', customer: 'Priya Sharma', duration: '90 min', staff: 'Aisha' },
                    { time: '04:00 PM', service: 'Massage Therapy', customer: 'Ahmad Zaki', duration: '60 min', staff: 'Rahman' }
                  ].map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">{booking.time}</p>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">Customer: {booking.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{booking.duration}</p>
                        <p className="text-sm text-gray-600">Staff: {booking.staff}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600">This feature is under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img src="/bluej-logo.png" alt="BlueJ" className="h-8" />
            <span className="text-lg font-semibold text-primary">Partner Portal</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
              >
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="text-xl font-semibold text-primary capitalize">
                {activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default PartnerPortal;