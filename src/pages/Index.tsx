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
      name: "Oggy's Basic Plan",
      basePrice: 999,
      description: "Perfect for small businesses, as simple as Oggy's daily routine!",
      features: [
        "1 Bot Integration (Like Oggy's Single Mission)",
        "Basic AI Features (Simple as Cat and Mouse)",
        "5 API Connections (Oggy's Friends Network)",
        "Email Support (Message in a Bottle)",
        "Basic Analytics (Oggy's Activity Tracker)",
        "Standard Response Time (Quick as a Cat!)"
      ]
    },
    {
      name: "Joey's Premium Plan",
      basePrice: 9999,
      description: "Advanced features as tricky as Joey's schemes!",
      features: [
        "3 Bot Integrations (Triple Trouble like the Cockroaches)",
        "Advanced AI Features (Clever as Joey's Plans)",
        "Unlimited API Connections (Like Endless Chase Scenes)",
        "24/7 Priority Support (Round-the-Clock Fun)",
        "Advanced Analytics (Cockroach Intelligence Center)",
        "Custom Training (Master Bob's Special Training)",
        "Priority Response Time (Fast as Lightning)"
      ]
    },
    {
      name: "Marky & Dee Dee's Enterprise Plan",
      price: "Custom",
      description: "Unlimited possibilities, as wild as Marky and Dee Dee's adventures!",
      features: [
        "Unlimited Bot Integrations (Whole House Coverage)",
        "Custom AI Solutions (Smart as the Whole Gang)",
        "Custom API Development (Kitchen to Rooftop Access)",
        "Dedicated Support Team (Like Jack, Bob, and Olivia)",
        "Enterprise Analytics (Full House Monitoring)",
        "Custom Training (Special Moves Included)",
        "Custom SLA (VIP Treatment)",
        "Dedicated Manager (Your Personal Bob)"
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
            BotifyX: Oggy's Bot Factory
          </h1>
          <p className="text-2xl text-primary">
            Where Bots are as Fun as Chasing Cockroaches!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#FF69B4] hover:bg-[#FF1493] text-white text-lg px-8 py-6 rounded-full animate-pulse"
            >
              Start the Chase Now!
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Oggy's Website Bots</h3>
              <p className="text-gray-600">Smart chatbots that chase your website visitors (in a good way!)</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Bot className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Joey's AI Bots</h3>
              <p className="text-gray-600">Clever AI bots that are as quick-witted as Joey!</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur shadow-xl transform hover:scale-105 transition-transform duration-300">
              <MessageSquareCode className="w-12 h-12 text-[#FF69B4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Marky's Telegram Bots</h3>
              <p className="text-gray-600">Telegram bots that deliver messages faster than Marky can run!</p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">
            Pick Your Adventure Plan!
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
                    Join the Adventure!
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