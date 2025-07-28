import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shirt, 
  UtensilsCrossed, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  Plus, 
  Minus,
  Calendar,
  Truck,
  Home,
  User,
  CreditCard,
  CheckCircle,
  Package,
  Weight,
  Timer,
  Star
} from 'lucide-react';

// Laundry Order Flow
export const LaundryOrderFlow = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    services: [],
    weight: 0,
    pickupTime: '',
    deliveryAddress: '',
    paymentMethod: '',
    specialInstructions: ''
  });

  const laundryServices = [
    { id: 1, name: 'Wash & Fold', price: 6.00, unit: 'per kg', time: '24-48 hours' },
    { id: 2, name: 'Dry Cleaning', price: 12.00, unit: 'per item', time: '2-3 days' },
    { id: 3, name: 'Ironing Service', price: 3.00, unit: 'per item', time: '24 hours' },
    { id: 4, name: 'Express Service', price: 10.00, unit: 'per kg', time: 'Same day' }
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const addService = (service) => {
    setOrderData(prev => ({
      ...prev,
      services: [...prev.services, { ...service, quantity: 1 }]
    }));
  };

  const removeService = (serviceId) => {
    setOrderData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== serviceId)
    }));
  };

  const calculateTotal = () => {
    return orderData.services.reduce((total, service) => {
      const basePrice = service.unit === 'per kg' ? service.price * orderData.weight : service.price * service.quantity;
      return total + basePrice;
    }, 0) + 2; // RM2 transaction fee
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shirt className="h-5 w-5" />
                <span>Select Services</span>
              </CardTitle>
              <CardDescription>Choose the laundry services you need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {laundryServices.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{service.name}</h4>
                      <p className="text-sm text-gray-600">RM {service.price.toFixed(2)} {service.unit}</p>
                      <p className="text-xs text-gray-500">{service.time}</p>
                    </div>
                    <Button
                      variant={orderData.services.find(s => s.id === service.id) ? 'default' : 'outline'}
                      onClick={() => orderData.services.find(s => s.id === service.id) ? removeService(service.id) : addService(service)}
                    >
                      {orderData.services.find(s => s.id === service.id) ? 'Remove' : 'Add'}
                    </Button>
                  </div>
                ))}
              </div>
              
              {orderData.services.some(s => s.unit === 'per kg') && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <label className="block text-sm font-medium mb-2">
                    <Weight className="h-4 w-4 inline mr-1" />
                    Estimated Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={orderData.weight}
                    onChange={(e) => setOrderData(prev => ({ ...prev, weight: parseInt(e.target.value) || 0 }))}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter weight in kg"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Pickup Schedule</span>
              </CardTitle>
              <CardDescription>When would you like us to pick up your items?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border rounded-lg"
                    onChange={(e) => setOrderData(prev => ({ ...prev, pickupDate: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time Slot</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setOrderData(prev => ({ ...prev, pickupTime: slot }))}
                        className={`p-3 border rounded-lg text-left transition-colors ${
                          orderData.pickupTime === slot 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <Clock className="h-4 w-4 inline mr-2" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Delivery Address</span>
              </CardTitle>
              <CardDescription>Where should we deliver your clean items?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Address</label>
                  <textarea
                    rows={3}
                    value={orderData.deliveryAddress}
                    onChange={(e) => setOrderData(prev => ({ ...prev, deliveryAddress: e.target.value }))}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter your complete address including unit number, building name, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Special Instructions (Optional)</label>
                  <textarea
                    rows={2}
                    value={orderData.specialInstructions}
                    onChange={(e) => setOrderData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Any special handling instructions, gate codes, etc."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment & Confirmation</span>
              </CardTitle>
              <CardDescription>Review your order and choose payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3">Order Summary</h4>
                  <div className="space-y-2">
                    {orderData.services.map((service) => (
                      <div key={service.id} className="flex justify-between text-sm">
                        <span>{service.name} {service.unit === 'per kg' ? `(${orderData.weight}kg)` : `(${service.quantity} items)`}</span>
                        <span>RM {(service.unit === 'per kg' ? service.price * orderData.weight : service.price * service.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm">
                      <span>Transaction Fee</span>
                      <span>RM 2.00</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-medium">
                      <span>Total</span>
                      <span>RM {calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h4 className="font-medium mb-3">Payment Method</h4>
                  <div className="space-y-2">
                    {['FPX Online Banking', 'Credit/Debit Card', 'QR Pay (DuitNow)', 'Cash on Pickup'].map((method) => (
                      <button
                        key={method}
                        onClick={() => setOrderData(prev => ({ ...prev, paymentMethod: method }))}
                        className={`w-full p-3 border rounded-lg text-left transition-colors ${
                          orderData.paymentMethod === method 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3, 4].map((stepNum) => (
          <div key={stepNum} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= stepNum ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {stepNum}
            </div>
            {stepNum < 4 && (
              <div className={`w-16 h-1 mx-2 ${step > stepNum ? 'bg-primary' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {renderStep()}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          Previous
        </Button>
        
        {step < 4 ? (
          <Button 
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 1 && orderData.services.length === 0) ||
              (step === 2 && !orderData.pickupTime) ||
              (step === 3 && !orderData.deliveryAddress)
            }
          >
            Next
          </Button>
        ) : (
          <Button 
            onClick={() => onComplete(orderData)}
            disabled={!orderData.paymentMethod}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Place Order
          </Button>
        )}
      </div>
    </div>
  );
};

// F&B Order Flow
export const FnBOrderFlow = ({ onComplete }) => {
  const [orderType, setOrderType] = useState('delivery'); // delivery, pickup, dine-in
  const [selectedItems, setSelectedItems] = useState([]);
  const [reservationDetails, setReservationDetails] = useState({
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const menuItems = [
    { id: 1, name: 'Nasi Lemak Special', price: 12.50, category: 'Main Course', description: 'Traditional coconut rice with sambal, anchovies, peanuts, and fried chicken' },
    { id: 2, name: 'Char Kway Teow', price: 10.00, category: 'Main Course', description: 'Stir-fried flat rice noodles with prawns, Chinese sausage, and bean sprouts' },
    { id: 3, name: 'Teh Tarik', price: 3.50, category: 'Beverages', description: 'Traditional pulled milk tea' },
    { id: 4, name: 'Cendol', price: 5.00, category: 'Desserts', description: 'Shaved ice with coconut milk, palm sugar, and green rice flour jelly' }
  ];

  const addToOrder = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    if (existingItem) {
      setSelectedItems(prev => prev.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setSelectedItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setSelectedItems(prev => prev.filter(i => i.id !== itemId));
    } else {
      setSelectedItems(prev => prev.map(i => 
        i.id === itemId ? { ...i, quantity: newQuantity } : i
      ));
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 2;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Order Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Order Type</CardTitle>
          <CardDescription>How would you like to enjoy your meal?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { type: 'delivery', icon: Truck, title: 'Delivery', description: 'Delivered to your location' },
              { type: 'pickup', icon: Package, title: 'Pickup', description: 'Collect from restaurant' },
              { type: 'dine-in', icon: UtensilsCrossed, title: 'Dine-in', description: 'Reserve a table' }
            ].map(({ type, icon: Icon, title, description }) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  orderType === type ? 'border-primary bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dine-in Reservation */}
      {orderType === 'dine-in' && (
        <Card>
          <CardHeader>
            <CardTitle>Table Reservation</CardTitle>
            <CardDescription>Reserve your table for the perfect dining experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={reservationDetails.date}
                  onChange={(e) => setReservationDetails(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <select
                  value={reservationDetails.time}
                  onChange={(e) => setReservationDetails(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select time</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Number of Guests</label>
                <select
                  value={reservationDetails.guests}
                  onChange={(e) => setReservationDetails(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                  className="w-full p-2 border rounded-lg"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <input
                  type="text"
                  value={reservationDetails.specialRequests}
                  onChange={(e) => setReservationDetails(prev => ({ ...prev, specialRequests: e.target.value }))}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Birthday, anniversary, etc."
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Menu Items */}
      <Card>
        <CardHeader>
          <CardTitle>Menu</CardTitle>
          <CardDescription>Select your favorite dishes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="font-medium text-primary">RM {item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {selectedItems.find(i => i.id === item.id) ? (
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, selectedItems.find(i => i.id === item.id).quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">
                        {selectedItems.find(i => i.id === item.id).quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, selectedItems.find(i => i.id === item.id).quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => addToOrder(item)}>
                      Add to Order
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      {selectedItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {selectedItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>RM {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span>Transaction Fee</span>
                <span>RM 2.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-medium">
                <span>Total</span>
                <span>RM {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <Button 
              className="w-full mt-4 bg-green-600 hover:bg-green-700"
              onClick={() => onComplete({ orderType, selectedItems, reservationDetails, total: calculateTotal() })}
              disabled={selectedItems.length === 0 || (orderType === 'dine-in' && (!reservationDetails.date || !reservationDetails.time))}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              {orderType === 'dine-in' ? 'Reserve Table & Order' : 'Place Order'}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Retail Order Flow
export const RetailOrderFlow = ({ onComplete }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderType, setOrderType] = useState('delivery');

  const products = [
    { id: 1, name: 'Organic Honey', price: 25.00, category: 'Food', stock: 15, variants: ['250ml', '500ml', '1L'] },
    { id: 2, name: 'Handmade Soap', price: 8.50, category: 'Personal Care', stock: 30, variants: ['Lavender', 'Rose', 'Mint'] },
    { id: 3, name: 'Cotton T-Shirt', price: 35.00, category: 'Clothing', stock: 20, variants: ['S', 'M', 'L', 'XL'] },
    { id: 4, name: 'Ceramic Mug', price: 15.00, category: 'Home & Living', stock: 25, variants: ['Blue', 'White', 'Green'] }
  ];

  const addToCart = (product, variant = null) => {
    const existingItem = selectedProducts.find(p => p.id === product.id && p.selectedVariant === variant);
    if (existingItem) {
      setSelectedProducts(prev => prev.map(p => 
        p.id === product.id && p.selectedVariant === variant 
          ? { ...p, quantity: p.quantity + 1 } 
          : p
      ));
    } else {
      setSelectedProducts(prev => [...prev, { 
        ...product, 
        quantity: 1, 
        selectedVariant: variant || product.variants[0] 
      }]);
    }
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity === 0) {
      setSelectedProducts(prev => prev.filter(p => !(p.id === productId && p.selectedVariant === variant)));
    } else {
      setSelectedProducts(prev => prev.map(p => 
        p.id === productId && p.selectedVariant === variant 
          ? { ...p, quantity: newQuantity } 
          : p
      ));
    }
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0) + 2;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Order Type */}
      <Card>
        <CardHeader>
          <CardTitle>Fulfillment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { type: 'delivery', icon: Truck, title: 'Delivery', description: 'Delivered to your address' },
              { type: 'pickup', icon: Package, title: 'Pickup', description: 'Collect from store' }
            ].map(({ type, icon: Icon, title, description }) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  orderType === type ? 'border-primary bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Products */}
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Browse our available products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="font-medium text-primary">RM {product.price.toFixed(2)}</p>
                  </div>
                  <Badge variant="outline">{product.stock} in stock</Badge>
                </div>

                {/* Variants */}
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-2">Options:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <Badge key={variant} variant="secondary" className="cursor-pointer">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex items-center justify-between">
                  <select className="p-2 border rounded text-sm">
                    {product.variants.map((variant) => (
                      <option key={variant} value={variant}>{variant}</option>
                    ))}
                  </select>
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shopping Cart */}
      {selectedProducts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Shopping Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedProducts.map((product, index) => (
                <div key={`${product.id}-${product.selectedVariant}`} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.selectedVariant}</p>
                    <p className="text-sm font-medium text-primary">RM {product.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(product.id, product.selectedVariant, product.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{product.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(product.id, product.selectedVariant, product.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>RM {(calculateTotal() - 2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Transaction Fee:</span>
                  <span>RM 2.00</span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Total:</span>
                  <span>RM {calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => onComplete({ orderType, selectedProducts, total: calculateTotal() })}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default { LaundryOrderFlow, FnBOrderFlow, RetailOrderFlow };