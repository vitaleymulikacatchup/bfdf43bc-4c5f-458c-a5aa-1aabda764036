"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "technology desk - Photo by Jakub Zerdzicki" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." }
];

export default function Home() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  const heroImage = assetMap.find(a => a.id === "hero-image");

  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={navItems} 
          brandName="SaaS Landing" 
          buttonText="Try Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Streamline Your Workflow"
            description="Optimize your tasks and boost productivity with our cutting-edge SaaS platform."
            imageSrc={heroImage?.url}
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "View Demo", href: "demo" },
            ]}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout 
            title="About Our Platform" 
            buttons={[{ text: "Get Started", href: "about" }]} 
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo 
            title="Pricing Plans" 
            plans={[
              { 
                id: "basic",
                badge: "Best Value",
                price: "$9.99/mo",
                subtitle: "Great for individuals",
                buttons: [{ text: "Select", href: "contact" }],
                features: ["Unlimited access", "Basic support"],
              },
              { 
                id: "pro",
                badge: "Most Popular",
                price: "$29.99/mo",
                subtitle: "Ideal for teams",
                buttons: [{ text: "Select", href: "contact" }],
                features: ["Premium features", "Priority support"],
              }
            ]} 
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter 
            tag="Newsletter" 
            title="Stay Updated" 
            description="Subscribe to our newsletter for the latest updates." 
            inputPlaceholder="Your email address" 
            buttonText="Subscribe" 
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }] },
              { items: [{ label: "About", href: "about" }] },
            ]}
            logoText="SaaS Landing"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}