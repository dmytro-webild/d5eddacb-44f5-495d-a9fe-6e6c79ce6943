"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';

const navItems = [
  {
    name: "Home",    id: "home",    href: "/"
  },
  {
    name: "Services", id: "services", href: "/services"
  },
  {
    name: "Portfolio",    id: "portfolio",    href: "/portfolio"
  },
  {
    name: "About",    id: "about",    href: "/about"
  }
];

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="blurBottom"
      cardStyle="inset"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Webbing Studios" navItems={navItems} />
      </div>

      <div id="services" data-section="services">
        <PricingCardNine
          title="Professional Web Design Packages"
          description="Choose the perfect package to elevate your business with a stunning, high-performance website designed for credibility and growth."
          plans={[
            {
              id: "starter",              title: "Starter Professional",              price: "$1,500",              period: "One-Time",              features: [
                "Custom 3-Page Website (Home, Services, Contact)",                "Responsive Design (Desktop & Mobile)",                "Basic SEO Optimization",                "Secure Contact Form Integration",                "Professional Copywriting Support",                "1-Hour Training Session for Content Updates",                "Standard SSL Certificate"
              ],
              button: {
                text: "Get Started",                href: "/contact"
              },
            },
            {
              id: "growth",              title: "Growth Catalyst",              price: "$3,000",              period: "One-Time",              features: [
                "Up to 8-Page Custom Website",                "Advanced SEO Strategy & Implementation",                "Integrated Blog / News Section",                "CRM Integration (e.g., Mailchimp)",                "High-Quality Stock Photography Curation",                "2-Hour Training & Ongoing Email Support (1 Month)",                "Premium SSL Certificate",                "Basic Analytics Setup (Google Analytics)"
              ],
              button: {
                text: "Grow My Business",                href: "/contact"
              },
            },
            {
              id: "premium",              title: "Premium Enterprise",              price: "$5,500+",              period: "One-Time",              features: [
                "Unlimited Custom Pages",                "Comprehensive SEO Audit & Strategy",                "E-commerce or Booking System Integration",                "Custom Feature Development",                "Brand Photography & Videography Coordination",                "Dedicated Account Manager & Priority Support",                "Advanced Analytics & Reporting Dashboard",                "Enhanced Security Features",                "Monthly Performance Review"
              ],
              button: {
                text: "Request a Quote",                href: "/contact"
              },
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Webbing Studios"
          leftLink={{
            text: "Privacy Policy",            href: "#"}}
          rightLink={{
            text: "Terms of Service",            href: "#"}}
        />
      </div>
    </ThemeProvider>
  );
}