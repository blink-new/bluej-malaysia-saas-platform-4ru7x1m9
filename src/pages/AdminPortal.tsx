import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AdminPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">Admin Portal</CardTitle>
          <CardDescription>
            Platform management and controls
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-6">
            This is the internal admin portal for BlueJ team to manage vendors, 
            plans, and platform settings.
          </p>
          <Button className="bg-primary hover:bg-primary-dark">
            Access Restricted
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPortal;