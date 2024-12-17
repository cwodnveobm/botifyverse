import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
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
    india: {
      currency: "₹",
      multiplier: 15,
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
      description: "Perfect for small businesses starting with workflow automation",
      features: [
        "2 Workflow Automations",
        "Basic Bot Integration",
        "5 API Connections",
        "Email Support",
        "Basic Analytics Dashboard",
        "Standard SLA"
      ]
    },
    {
      name: "Professional",
      basePrice: 9999,
      description: "Ideal for growing businesses requiring advanced automation",
      features: [
        "10 Workflow Automations",
        "Advanced Bot Integration",
        "Unlimited API Connections",
        "24/7 Priority Support",
        "Advanced Analytics",
        "Custom Bot Training",
        "Priority SLA"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Unlimited Workflow Automations",
        "Enterprise Bot Solutions",
        "Custom API Development",
        "Dedicated Support Team",
        "Enterprise Analytics Suite",
        "Custom AI Model Training",
        "Custom SLA Guarantee",
        "Dedicated Success Manager"
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
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-fadeIn">
            BotifyX
          </h1>
          <p className="text-xl text-gray-300">
            The Premium AI Automation Platform for Business Growth
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
            >
              Book a Consultation
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-xl font-semibold text-secondary mb-3">Workflow Automation</h3>
              <p className="text-gray-300">Custom workflow solutions that streamline your business processes</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-xl font-semibold text-secondary mb-3">Bot Integration</h3>
              <p className="text-gray-300">Advanced AI-powered bots that enhance customer engagement</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-xl font-semibold text-secondary mb-3">API Integration</h3>
              <p className="text-gray-300">Seamless connection with your existing systems and workflows</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          
          <div className="flex justify-center mb-8">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[200px] bg-white/5">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="worldwide">Worldwide (INR)</SelectItem>
                <SelectItem value="india">India (INR)</SelectItem>
                <SelectItem value="gcc">GCC (AED)</SelectItem>
                <SelectItem value="europe">Europe (EUR)</SelectItem>
                <SelectItem value="uk">UK (GBP)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {basePricingPlans.map((plan) => (
              <Card key={plan.name} className="bg-white/5 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary mb-6">
                    {typeof plan.basePrice === 'number' 
                      ? formatPrice(plan.basePrice, selectedRegion as keyof typeof regions)
                      : plan.price}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300">
                        <Check className="h-5 w-5 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
