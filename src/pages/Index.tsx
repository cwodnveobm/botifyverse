import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Bot, Globe, MessageSquareCode, Sparkles, Zap } from "lucide-react";
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
      name: "Starter",
      basePrice: 999,
      description: "Perfect for small businesses starting with automation",
      features: [
        "1 Bot Integration",
        "Basic Intelligence Features",
        "5 Service Connections",
        "Email Support",
        "Basic Analytics",
        "Standard Response Time"
      ]
    },
    {
      name: "Professional",
      basePrice: 9999,
      description: "Advanced features for growing businesses",
      features: [
        "3 Bot Integrations",
        "Advanced Intelligence Features",
        "Unlimited Service Connections",
        "24/7 Priority Support",
        "Advanced Analytics",
        "Custom Training",
        "Priority Response Time"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for enterprise needs",
      features: [
        "Unlimited Bot Integrations",
        "Custom Intelligence Solutions",
        "Custom Service Development",
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
    <div className="min-h-screen bg-gradient-to-b from-[#0A1A2F] to-[#1E3A8A] font-['Poppins']">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white animate-fadeIn">
              Thulika Bots
            </h1>
            <p className="text-2xl text-[#00F0FF] font-light">
              Crafting Intelligent Conversations
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#00F0FF] hover:bg-[#00D1E0] text-[#0A1A2F] text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <Sparkles className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
              <Bot className="w-12 h-12 text-[#00F0FF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">AI Bot Development</h3>
              <p className="text-gray-300">Intelligent chatbots powered by cutting-edge AI technology</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
              <MessageSquareCode className="w-12 h-12 text-[#00F0FF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Custom Integration</h3>
              <p className="text-gray-300">Seamless integration with your existing platforms</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
              <Zap className="w-12 h-12 text-[#00F0FF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Automation Solutions</h3>
              <p className="text-gray-300">Streamline your processes with intelligent automation</p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Choose Your Plan
          </h2>
          
          <div className="flex justify-center mb-8">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[200px] bg-white/10 text-white border-white/20">
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
              <Card key={plan.name} className="bg-white/10 backdrop-blur border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#00F0FF]">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-6">
                    {typeof plan.basePrice === 'number' 
                      ? formatPrice(plan.basePrice, selectedRegion as keyof typeof regions)
                      : plan.price}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300">
                        <Check className="h-5 w-5 text-[#00F0FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-[#00F0FF] hover:bg-[#00D1E0] text-[#0A1A2F] rounded-full"
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