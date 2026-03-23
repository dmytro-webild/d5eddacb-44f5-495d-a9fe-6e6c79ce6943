"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
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

export default function AboutPage() {
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

      <div id="about-us-section" data-section="about-us-section">
        <TextSplitAbout
          title="Empowering Small Businesses with Elite Online Presence"
          description={[
            "At Webbing Studios, we believe that every small business deserves a powerful, professional online presence to effectively compete in today's digital landscape. We're not just building websites; we're crafting digital foundations that embody professionalism and credibility.",            "Our focus is on helping local businesses, startups, and entrepreneurs stand out. We combine cutting-edge design with strategic functionality to create visually striking, high-converting websites that attract customers and drive growth.",            "We understand the unique challenges small businesses face, and we're dedicated to providing solutions that are not only beautiful but also practical, scalable, and built for long-term success. Partner with Webbing Studios to transform your online identity and achieve your business goals."
          ]}
          useInvertedBackground={true}
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