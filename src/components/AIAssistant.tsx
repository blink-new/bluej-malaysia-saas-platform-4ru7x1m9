import React, { useState } from 'react';
import { X, Bot, Lightbulb, MessageCircle, TrendingUp } from 'lucide-react';

interface AIAssistantProps {
  type: 'marketing' | 'crm' | 'chatbot' | 'tips';
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ type, isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getConfig = () => {
    switch (type) {
      case 'marketing':
        return {
          title: 'Marketing AI Assistant',
          icon: <TrendingUp className="w-5 h-5" />,
          color: 'bg-purple-600',
          suggestions: [
            'Write a promo for weekend lunch specials',
            'When should I send promotions?',
            'Which customers should I target?',
            'Create a loyalty program message'
          ],
          placeholder: 'Ask me about marketing strategies, promotions, or customer targeting...'
        };
      case 'crm':
        return {
          title: 'CRM AI Intelligence',
          icon: <TrendingUp className="w-5 h-5" />,
          color: 'bg-blue-600',
          suggestions: [
            'Which customers are likely to churn?',
            'How to segment my customers?',
            'Create a re-engagement campaign',
            'Analyze customer behavior patterns'
          ],
          placeholder: 'Ask me about customer insights, segmentation, or retention strategies...'
        };
      case 'chatbot':
        return {
          title: 'Customer Support AI',
          icon: <MessageCircle className="w-5 h-5" />,
          color: 'bg-green-600',
          suggestions: [
            'What are your operating hours?',
            'Do you offer delivery?',
            'What services do you provide?',
            'How can I place an order?'
          ],
          placeholder: 'Ask me about services, pricing, or how to place an order...'
        };
      case 'tips':
        return {
          title: 'Operations AI Tips',
          icon: <Lightbulb className="w-5 h-5" />,
          color: 'bg-yellow-600',
          suggestions: [
            'How to prepare for lunch rush?',
            'What stock should I order?',
            'How to handle delivery delays?',
            'Optimize my prep schedule'
          ],
          placeholder: 'Ask me about operations, inventory, or business optimization...'
        };
    }
  };

  const config = getConfig();

  const handleSend = async (message?: string) => {
    const messageToSend = message || input;
    if (!messageToSend.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = '';
      
      switch (type) {
        case 'marketing':
          if (messageToSend.toLowerCase().includes('promo') || messageToSend.toLowerCase().includes('promotion')) {
            aiResponse = "🎯 Here's a compelling weekend lunch promo:\n\n'Weekend Lunch Special! 🍽️\nEnjoy 20% OFF all lunch combos this Saturday & Sunday!\nPerfect for family gatherings or a quick bite.\nValid 11AM-3PM only. Use code: WEEKEND20'\n\n💡 Best time to send: Friday 4PM when people plan their weekend.\n📱 Target: Customers who ordered lunch in the past 30 days.";
          } else if (messageToSend.toLowerCase().includes('when') || messageToSend.toLowerCase().includes('timing')) {
            aiResponse = "⏰ Optimal promotion timing:\n\n• Breakfast promos: Send at 7PM (night before)\n• Lunch specials: Send at 10AM same day\n• Dinner offers: Send at 2PM same day\n• Weekend specials: Send Friday 4-6PM\n\n📊 Your customers are most active on WhatsApp between 10AM-12PM and 6PM-8PM.";
          } else if (messageToSend.toLowerCase().includes('target') || messageToSend.toLowerCase().includes('customer')) {
            aiResponse = "🎯 Smart customer targeting:\n\n• VIP Customers (15%): Order 3+ times/month - Send premium offers\n• Regular Customers (35%): Order 1-2 times/month - Send variety promotions\n• Occasional Customers (40%): Haven't ordered in 30+ days - Send comeback offers\n• New Customers (10%): First-time buyers - Send welcome discounts\n\n💡 Focus on 'Occasional' segment - they have highest conversion potential!";
          } else {
            aiResponse = "I can help you create compelling promotions, optimize timing, and target the right customers. What specific marketing challenge are you facing?";
          }
          break;
          
        case 'crm':
          if (messageToSend.toLowerCase().includes('churn') || messageToSend.toLowerCase().includes('likely')) {
            aiResponse = "⚠️ Churn Risk Analysis:\n\n🔴 High Risk (12 customers):\n• Haven't ordered in 45+ days\n• Previously ordered 2+ times/month\n• Last order value decreased by 30%\n\n🟡 Medium Risk (28 customers):\n• Order frequency dropped 50%\n• Switched to smaller order sizes\n• No response to last 2 promotions\n\n💡 Action: Send personalized 'We miss you' message with 25% off their favorite items.";
          } else if (messageToSend.toLowerCase().includes('segment')) {
            aiResponse = "📊 Smart Customer Segmentation:\n\n🌟 VIP Champions (18 customers)\n• Avg order: RM45, Frequency: 8x/month\n• Action: Exclusive early access to new items\n\n💚 Loyal Regulars (67 customers)\n• Avg order: RM28, Frequency: 4x/month\n• Action: Loyalty points program\n\n🔄 Occasional Buyers (134 customers)\n• Avg order: RM22, Frequency: 1x/month\n• Action: Targeted promotions on favorite items\n\n🆕 New Customers (23 customers)\n• Action: Welcome series with menu highlights";
          } else {
            aiResponse = "I can analyze customer behavior, predict churn risk, and suggest retention strategies. What customer insights do you need?";
          }
          break;
          
        case 'chatbot':
          if (messageToSend.toLowerCase().includes('hours') || messageToSend.toLowerCase().includes('time')) {
            aiResponse = "🕐 Our Operating Hours:\n\nMonday - Friday: 10:00 AM - 10:00 PM\nSaturday - Sunday: 9:00 AM - 11:00 PM\n\n📞 For urgent inquiries outside hours, WhatsApp us and we'll respond first thing in the morning!\n\nIs there anything specific you'd like to order?";
          } else if (messageToSend.toLowerCase().includes('delivery')) {
            aiResponse = "🚚 Yes, we offer delivery!\n\n• Delivery radius: 10km from our location\n• Delivery fee: RM3-8 (based on distance)\n• Estimated time: 30-45 minutes\n• Minimum order: RM15\n\n📱 You can track your order in real-time once placed. Would you like to see our menu?";
          } else if (messageToSend.toLowerCase().includes('service') || messageToSend.toLowerCase().includes('what')) {
            aiResponse = "🧺 Our Laundry Services:\n\n• Wash & Fold: RM8/kg\n• Ironing Service: RM12/kg\n• Dry Cleaning: RM15-25/piece\n• Express Service: +50% (same day)\n• Pickup & Delivery: RM5\n\n✨ All services include fabric softener and quality guarantee. What service interests you?";
          } else {
            aiResponse = "Hi! I'm here to help with any questions about our services, pricing, or orders. How can I assist you today? 😊";
          }
          break;
          
        case 'tips':
          if (messageToSend.toLowerCase().includes('lunch') || messageToSend.toLowerCase().includes('rush')) {
            aiResponse = "🍽️ Lunch Rush Preparation Tips:\n\n⏰ 30 mins before (10:30 AM):\n• Pre-cook popular items (80% of orders)\n• Prep garnishes and sides\n• Check delivery rider availability\n\n📊 Your lunch peak: 12:15-1:30 PM\n• Expected orders: 45-60 (based on trends)\n• Top sellers: Nasi Lemak, Chicken Rice, Mee Goreng\n\n💡 Pro tip: Enable 'Busy Mode' to add 10 mins to delivery estimates during peak hours.";
          } else if (messageToSend.toLowerCase().includes('stock') || messageToSend.toLowerCase().includes('order')) {
            aiResponse = "📦 Smart Stock Recommendations:\n\n🔥 High Priority (order today):\n• Rice: 25kg (running low, high demand)\n• Chicken: 15kg (lunch rush essential)\n• Cooking oil: 5L (usage increased 30%)\n\n📊 Medium Priority (order this week):\n• Vegetables: Based on weekend demand\n• Spices: Curry powder, chili paste\n• Packaging: Takeaway containers\n\n💰 Cost optimization: Order rice in bulk (50kg) for 15% savings.";
          } else if (messageToSend.toLowerCase().includes('delay')) {
            aiResponse = "⏱️ Handling Delivery Delays:\n\n🚨 Immediate Actions:\n• WhatsApp customer with honest update\n• Offer 10% discount on current order\n• Provide accurate new ETA\n\n📱 Message template:\n'Hi [Name], your order is running 15 mins late due to high demand. We're adding a 10% discount and free dessert as an apology. New ETA: [Time]. Thank you for your patience!'\n\n🔄 Prevention: Enable auto-notifications when prep time exceeds 20 mins.";
          } else {
            aiResponse = "I can help optimize your operations, manage inventory, handle busy periods, and improve customer satisfaction. What operational challenge can I help with?";
          }
          break;
      }
      
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className={`${config.color} text-white p-4 rounded-t-xl flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            {config.icon}
            <h3 className="text-lg font-semibold">{config.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <Bot className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">How can I help you today?</p>
              <p className="text-sm">Try one of these suggestions:</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                  message.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length === 0 && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {config.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(suggestion)}
                  className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors border border-gray-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={config.placeholder}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`px-6 py-3 ${config.color} text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;