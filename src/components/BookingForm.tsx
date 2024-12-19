import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingForm({ open, onOpenChange }: BookingFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xyzyqlzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Thank you! 🎉",
        description: "Thank you for your submission! We appreciate your trust in Thulika Bots. Our team will review your request and get back to you shortly. 😊",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again!",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#FF69B4]">Let's Build Your Bot!</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              required
              className="border-[#FF69B4] focus:ring-[#FF69B4]"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="border-[#FF69B4] focus:ring-[#FF69B4]"
              placeholder="john@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              required
              className="border-[#FF69B4] focus:ring-[#FF69B4]"
              placeholder="Company Inc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Tell Us About Your Project</Label>
            <Textarea
              id="message"
              name="message"
              required
              className="border-[#FF69B4] focus:ring-[#FF69B4]"
              placeholder="What kind of bot would you like to build?"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF69B4] hover:bg-[#FF1493] text-white rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Let's Get Started!"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}