"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';

const assetMap = [
  {"id":"hero-carousel-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/modern-dark-themed-web-design-interface--1774244059970-99519def.png","alt":"Modern dark-themed web design interface, showcasing a clean, responsive layout with subtle, almost i"},
  {"id":"hero-carousel-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/close-up-of-a-dynamic-web-interface-on-m-1774244059641-4ed2aa16.png","alt":"Close-up of a dynamic web interface on multiple screens, showing data visualization and creative des"},
  {"id":"hero-carousel-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/abstract-web-design-concept-focusing-on--1774244059337-b7bad8cd.png","alt":"Abstract web design concept, focusing on connectivity and network. Dark, deep blue-purple tones with"},
  {"id":"hero-carousel-4","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/minimalist-web-design-wireframe-on-a-dar-1774244058886-12690566.png","alt":"Minimalist web design wireframe on a dark background, showcasing clean typography and spatial arrang"},
  {"id":"hero-carousel-5","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/futuristic-ui-dashboard-displaying-analy-1774244059562-1471f615.png","alt":"Futuristic UI dashboard displaying analytics data with sleek, dark visuals and vibrant data points. "},
  {"id":"hero-carousel-6","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/creative-web-development-concept-showing-1774244059005-0e109657.png","alt":"Creative web development concept, showing code snippets layered with abstract graphic elements. Dark"},
  {"id":"web-vs-social","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/a-side-by-side-comparison-illustrating-a-1774244060336-4e4504e0.png","alt":"A side-by-side comparison illustrating a stark contrast: on one side, a fleeting, chaotic, and tempo"},
  {"id":"portfolio-salon","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/modern-website-design-for-a-chic-hair-sa-1774244062228-87685ab4.png","alt":"Modern website design for a chic hair salon. Dark, elegant theme with golden accents, clean photogra"},
  {"id":"portfolio-restaurant","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/visually-striking-website-design-for-a-h-1774244060199-dda3e180.png","alt":"Visually striking website design for a high-end restaurant. Dark, moody ambiance with gourmet food p"},
  {"id":"portfolio-delivery","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/user-friendly-website-design-for-a-moder-1774244060435-58aa3926.png","alt":"User-friendly website design for a modern food delivery business. Dark mode interface with clear ord"},
  {"id":"portfolio-personal-brand","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/sophisticated-personal-brand-website-for-1774244059876-d03b4243.png","alt":"Sophisticated personal brand website for a creative professional. Dark, minimalist design with bold "},
  {"id":"testimonial-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/professional-headshot-of-a-female-salon--1774244058640-06b0f13b.png","alt":"Professional headshot of a female salon owner, smiling confidently. Dark, modern background. Studio "},
  {"id":"testimonial-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/professional-headshot-of-a-male-restaura-1774244059172-0002ddb6.png","alt":"Professional headshot of a male restaurant chef, with a warm, approachable smile. Dark, sophisticate"},
  {"id":"testimonial-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/professional-headshot-of-a-female-entrep-1774244059896-3f7d492b.png","alt":"Professional headshot of a female entrepreneur running a local service business. Confident, modern, "},
  {"id":"testimonial-4","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/professional-headshot-of-a-male-personal-1774244059414-6e452009.png","alt":"Professional headshot of a male personal brand coach or consultant. Engaging and trustworthy express"},
  {"id":"final-cta-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/abstract-digital-network-background-with-1774244059197-5e26128c.png","alt":"Abstract digital network background with subtle, glowing blue and purple lines forming an intricate,"},
  {"id":"portfolio-local-service","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/efficient-website-design-for-a-local-plu-1774244059763-6f160a0b.png","alt":"Efficient website design for a local plumbing service. Clean, dark theme with clear service offering"},
  {"id":"portfolio-real-estate","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/sleek-website-design-for-a-modern-real-e-1774244060157-5116c861.png","alt":"Sleek website design for a modern real estate agency. Dark, premium aesthetic with high-quality prop"},
  {"id":"about-studio","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/a-modern-sleek-web-design-studio-workspa-1774244059751-df707765.png","alt":"A modern, sleek web design studio workspace. Dark aesthetic with glowing screens displaying abstract"},
  {"id":"contact-illustration","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/abstract-illustration-representing-conne-1774244059291-1312d409.png","alt":"Abstract illustration representing connection and communication. Dark background with interconnected"}
];

const getAssetUrl = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  return asset ? asset.url : '';
};

const getAssetAlt = (id) => {
  const asset = assetMap.find((a) => a.id === id);
  if (asset && asset.alt) return asset.alt;
  return `Image for ${id}`;
};

const navItems = [
  {
    name: "Home",    id: "home",    href: "/"
  },
  {
    name: "Portfolio",    id: "portfolio",    href: "/portfolio"
  },
  {
    name: "About",    id: "about",    href: "/about"
  }
];

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Websites that captivate, inspire, and convert. Grow your business with a powerful online presence."
          description="Webbing Studios crafts custom, high-impact websites designed to attract more clients, establish trust, and professionalize your brand. Turn your online presence into a client magnet."
          background={{
            variant: "plain"}}
          leftCarouselItems={[
            {
              imageSrc: getAssetUrl("hero-carousel-1"),
              imageAlt: getAssetAlt("hero-carousel-1"),
            },
            {
              imageSrc: getAssetUrl("hero-carousel-2"),
              imageAlt: getAssetAlt("hero-carousel-2"),
            },
            {
              imageSrc: getAssetUrl("hero-carousel-3"),
              imageAlt: getAssetAlt("hero-carousel-3"),
            },
          ]}
          rightCarouselItems={[
            {
              imageSrc: getAssetUrl("hero-carousel-4"),
              imageAlt: getAssetAlt("hero-carousel-4"),
            },
            {
              imageSrc: getAssetUrl("hero-carousel-5"),
              imageAlt: getAssetAlt("hero-carousel-5"),
            },
            {
              imageSrc: getAssetUrl("hero-carousel-6"),
              imageAlt: getAssetAlt("hero-carousel-6"),
            },
          ]}
          buttons={[
            {
              text: "Get Your Website",              href: "/contact"}
          ]}
        />
      </div>

      <div id="about-social-media" data-section="about-social-media">
        <SplitAbout
          title="Your Business Deserves More Than Just Social Media."
          description="While social media is great for engagement, a professional website serves as your permanent, credible online home. It offers unparalleled control, professionalism, and conversion capabilities that social platforms simply can't match. Elevate your brand beyond fleeting trends."
          bulletPoints={[
            {
              title: "Professionalism & Credibility",              description: "Instantly establish authority and build trust with a dedicated online space that showcases your expertise."},
            {
              title: "Full Control & Ownership",              description: "Own your platform, content, and data without algorithm changes or platform restrictions."},
            {
              title: "Higher Conversion Rates",              description: "Guide visitors through a tailored journey designed to convert them into loyal customers."},
            {
              title: "Enhanced SEO & Visibility",              description: "Rank higher in search results, making it easier for new clients to discover your services organically."},
          ]}
          imageSrc={getAssetUrl("web-vs-social")}
          imageAlt={getAssetAlt("web-vs-social")}
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardNineteen
          title="Our Streamlined Path to Your Stunning Website"
          description="We make building your dream website straightforward and transparent, ensuring a smooth journey from concept to launch. Our collaborative approach puts your vision at the core."
          features={[
            {
              id: 1,
              tag: "Step 1",              title: "Discovery & Strategy",              subtitle: "Uncover Your Vision",              description: "We start by understanding your business, goals, target audience, and unique brand identity. This foundational step ensures every design choice is strategic."},
            {
              id: 2,
              tag: "Step 2",              title: "Design & Development",              subtitle: "Crafting Your Digital Presence",              description: "Our team crafts visually striking mockups and develops a responsive, high-performance website tailored to your specifications, integrating subtle, sophisticated elements."},
            {
              id: 3,
              tag: "Step 3",              title: "Launch & Growth",              subtitle: "Go Live & Thrive",              description: "After rigorous testing, we launch your site and provide ongoing support, empowering you with the tools to manage your online presence and continue growing."},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio-preview" data-section="portfolio-preview">
        <ProductCardThree
          title="Our Work: Websites That Deliver Real Results"
          description="Explore a selection of our recent projects that have empowered small businesses to thrive online, showcasing diverse industries and powerful designs that convert."
          products={[
            {
              id: "1",              name: "Hair Salon Website",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-salon"),
              imageAlt: getAssetAlt("portfolio-salon"),
            },
            {
              id: "2",              name: "Restaurant Ordering Site",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-restaurant"),
              imageAlt: getAssetAlt("portfolio-restaurant"),
            },
            {
              id: "3",              name: "Delivery Service Platform",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-delivery"),
              imageAlt: getAssetAlt("portfolio-delivery"),
            },
            {
              id: "4",              name: "Personal Brand Portfolio",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-personal-brand"),
              imageAlt: getAssetAlt("portfolio-personal-brand"),
            },
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Hear From Our Happy Clients"
          description="Don't just take our word for it. Our clients consistently praise our dedication to quality, impactful design, and tangible business growth. See how we've helped them succeed."
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@GlamourHub",              testimonial: "Webbing Studios transformed our online presence! Our new website is stunning, easy to navigate, and has significantly increased our bookings. Truly professional and impactful.",              rating: 5,
              imageSrc: getAssetUrl("testimonial-1"),
              imageAlt: getAssetAlt("testimonial-1"),
            },
            {
              id: "2",              name: "Chef Marco Rossi",              handle: "@TasteDelight",              testimonial: "The website Webbing Studios built for us perfectly captures our restaurant's essence. It's elegant, user-friendly, and has made online reservations a breeze. Highly recommend!",              rating: 5,
              imageSrc: getAssetUrl("testimonial-2"),
              imageAlt: getAssetAlt("testimonial-2"),
            },
            {
              id: "3",              name: "Emily Chen",              handle: "@LocalFixes",              testimonial: "Finally, a website that truly represents my brand! Webbing Studios understood my vision and delivered a site that looks premium and has brought in so many new local clients. Fantastic work!",              rating: 5,
              imageSrc: getAssetUrl("testimonial-3"),
              imageAlt: getAssetAlt("testimonial-3"),
            },
            {
              id: "4",              name: "David Lee",              handle: "@InnovateYou",              testimonial: "As a personal brand, my website is crucial. Webbing Studios created a sleek, modern, and high-converting platform that elevates my image and helps me connect with my audience.",              rating: 5,
              imageSrc: getAssetUrl("testimonial-4"),
              imageAlt: getAssetAlt("testimonial-4"),
            },
          ]}
          showRating={true}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <ContactSplit
          tag="Ready to Grow?"
          title="Let's Build Your Online Success Story"
          description="Take the first step towards a professional, high-converting website that truly represents your brand. Get in touch today for a free, no-obligation consultation and see what Webbing Studios can do for you."
          imageSrc={getAssetUrl("final-cta-image")}
          imageAlt={getAssetAlt("final-cta-image")}
          background={{
            variant: "plain"}}
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Your Website"
          termsText="By clicking Get Your Website you're confirming that you agree with our Terms and Conditions."
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