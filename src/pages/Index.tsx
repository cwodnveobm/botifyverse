import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Bot, Globe, MessageSquareCode } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PricingPlan {
  name: string;
  basePrice?: number;
  price?: string;
  description: string;
  features: string[];
}

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("worldwide");

  const regions = {
    worldwide: {
      currency: "₹",
      multiplier: 1,
      symbol: "INR"
    },
    gcc: {
      currency: "د.إ",
      multiplier: 52.5,
      symbol: "AED"
    },
    europe: {
      currency: "€",
      multiplier: 60,
      symbol: "EUR"
    },
    uk: {
      currency: "£",
      multiplier: 67.5,
      symbol: "GBP"
    }
  };

  const basePricingPlans: PricingPlan[] = [
    {
      name: "Basic Plan",
      basePrice: 999,
      description: "Perfect for small businesses starting with bot automation",
      features: [
        "1 Bot Integration",
        "Basic AI Features",
        "5 API Connections",
        "Email Support",
        "Basic Analytics",
        "Standard Response Time"
      ]
    },
    {
      name: "Premium Plan",
      basePrice: 9999,
      description: "Advanced features for growing businesses",
      features: [
        "3 Bot Integrations",
        "Advanced AI Features",
        "Unlimited API Connections",
        "24/7 Priority Support",
        "Advanced Analytics",
        "Custom Training",
        "Priority Response Time"
      ]
    },
    {
      name: "Custom Plan",
      price: "Custom",
      description: "Tailored solutions for enterprise needs",
      features: [
        "Unlimited Bot Integrations",
        "Custom AI Solutions",
        "Custom API Development",
        "Dedicated Support Team",
        "Enterprise Analytics",
        "Custom Training",
        "Custom SLA",
        "Dedicated Manager"
      ]
    }
  ];

  const formatPrice = (basePrice: number, region: keyof typeof regions) => {
    if (typeof basePrice !== 'number') return "Custom";
    const { currency, multiplier } = regions[region];
    const price = Math.round(basePrice * multiplier);
    return `${currency}${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFB6C1] to-[#87CEEB] text-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold text-primary animate-bounce">
            BotifyX
          </h1>
          <p className="text-2xl text-primary">
            Your Friendly Bot Development Partner!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#FF69B4] hover:bg-[#FF1493] text-white text-lg px-8 py-6 rounded-full animate-pulse"
            >
              Get Started Now!
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Website Bot Development</h3>
              <p className="text-gray-600">Smart chatbots that make your website interactive and engaging</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Bot className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">AI Bot Development</h3>
              <p className="text-gray-600">Advanced AI-powered bots for intelligent automation</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <MessageSquareCode className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Telegram Bot Development</h3>
              <p className="text-gray-600">Custom Telegram bots for enhanced engagement</p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">
            Choose Your Plan
          </h2>
          
          <div className="flex justify-center mb-8">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[200px] bg-white/90">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="worldwide">Worldwide (INR)</SelectItem>
                <SelectItem value="gcc">GCC (AED)</SelectItem>
                <SelectItem value="europe">Europe (EUR)</SelectItem>
                <SelectItem value="uk">UK (GBP)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {basePricingPlans.map((plan) => (
              <Card key={plan.name} className="bg-white/90 backdrop-blur border-none shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#FF69B4]">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-6">
                    {typeof plan.basePrice === 'number' 
                      ? formatPrice(plan.basePrice, selectedRegion as keyof typeof regions)
                      : plan.price}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-600">
                        <Check className="h-5 w-5 text-[#FF69B4]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-[#FF69B4] hover:bg-[#FF1493] text-white rounded-full"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <BookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;