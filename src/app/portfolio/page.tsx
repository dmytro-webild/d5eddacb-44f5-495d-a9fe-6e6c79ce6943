"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
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
  },
  {
    name: "Contact",    id: "contact",    href: "/contact"
  }
];

export default function PortfolioPage() {
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

      <div id="portfolio-showcase" data-section="portfolio-showcase">
        <ProductCardThree
          title="Our Portfolio: Driving Success for Small Businesses"
          description="Explore how we craft bespoke websites that not only look stunning but also deliver measurable results, helping businesses like yours thrive online. Each project is a testament to our commitment to quality and client success."
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
            {
              id: "5",              name: "Local Service Business Site",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-local-service"),
              imageAlt: getAssetAlt("portfolio-local-service"),
            },
            {
              id: "6",              name: "Real Estate Agency Site",              price: "View Case Study",              imageSrc: getAssetUrl("portfolio-real-estate"),
              imageAlt: getAssetAlt("portfolio-real-estate"),
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
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