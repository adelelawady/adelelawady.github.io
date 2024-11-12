import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Have a question or want to work together? Send me a message!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;