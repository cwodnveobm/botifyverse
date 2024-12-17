import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
      </div>
      
      <BookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;