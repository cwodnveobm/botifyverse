import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses starting with AI automation",
      features: [
        "1 AI Chatbot",
        "Basic Data Crawling",
        "5 API Integrations",
        "8/5 Support",
        "Monthly Analytics"
      ]
    },
    {
      name: "Professional",
      price: "$799",
      description: "Ideal for growing businesses requiring advanced automation",
      features: [
        "3 AI Chatbots",
        "Advanced Data Crawling",
        "Unlimited API Integrations",
        "24/7 Priority Support",
        "Real-time Analytics",
        "Custom Bot Training"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Unlimited AI Chatbots",
        "Enterprise Data Solutions",
        "Custom API Development",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom AI Model Training",
        "SLA Guarantee"
      ]
    }
  ];

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
              <h3 className="text-xl font-semibold text-secondary mb-3">Real-time Chatbots</h3>
              <p className="text-gray-300">Advanced AI-powered conversation agents that engage your customers 24/7</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-xl font-semibold text-secondary mb-3">Data Crawling</h3>
              <p className="text-gray-300">Automated data collection and analysis for informed decision making</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className="bg-white/5 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary mb-6">{plan.price}</div>
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