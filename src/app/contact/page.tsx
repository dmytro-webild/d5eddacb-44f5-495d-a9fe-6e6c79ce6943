"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from "next/link";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/", href: "/" },
    { name: "Services", id: "/services", href: "/services" },
    { name: "Portfolio", id: "/portfolio", href: "/portfolio" },
    { name: "About", id: "/about", href: "/about" },
    { name: "Contact", id: "/contact", href: "/contact" },
  ];

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

      <div id="contact-page" data-section="contact-page">
        <ContactSplit
          tag="Get in Touch"
          title="Start Your Project Today"
          description="Ready to transform your online presence? Fill out the form below, and we'll get back to you to discuss how Webbing Studios can craft a high-converting website to help your business grow and succeed online."
          inputPlaceholder="Your Name, Business Name, Email, Project Description"
          buttonText="Send Message"
          termsText="By clicking Send Message, you agree to our Privacy Policy and Terms of Service."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/abstract-illustration-representing-conne-1774244059291-1312d409.png"
          background={{ variant: "plain" }}
          mediaAnimation="opacity"
          mediaPosition="left"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Webbing Studios"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
