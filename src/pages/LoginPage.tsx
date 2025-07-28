import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to partner portal
      window.location.href = '/partner';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-secondary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold">B</span>
            </div>
            <span className="text-2xl font-bold text-white">BlueJ</span>
            <Badge variant="secondary" className="bg-secondary text-secondary-dark">Malaysia</Badge>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-100">Access your partner portal</p>
        </div>

        {/* Login/Signup Card */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-primary">Get Started</CardTitle>
            <CardDescription>
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-accent hover:text-accent-dark">
                      Forgot password?
                    </a>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="Your Business Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+60 12-345 6789"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signupEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signupPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <label className="flex items-start space-x-2">
                      <input type="checkbox" className="rounded mt-1" required />
                      <span>
                        I agree to the{' '}
                        <a href="#" className="text-accent hover:text-accent-dark">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-accent hover:text-accent-dark">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Start Free Trial'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Need help?{' '}
                <a href="#" className="text-accent hover:text-accent-dark">
                  Contact Support
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Features */}
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm mb-4">Trusted by 500+ Malaysian businesses</p>
          <div className="flex justify-center space-x-6 text-blue-200 text-xs">
            <span>✓ 14-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;