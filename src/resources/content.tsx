import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Himanshu",
  lastName: "Chauhan",
  name: `Himanshu Singh Chauhan`,
  role: "Frontend Developer",
  avatar: "/images/himanshu.jpeg",
  email: "himanshuchauhan85.hc@gmail.com",
  state: "Haryana, India",
  mobileNumber: "+91 9654801167",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Himanshu4234",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/himanshu_chauhan0107",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.webp",
  label: "Home",
  title: `${person.name} — Senior Frontend Engineer`,
  description: `${person.name} is a Senior Frontend Engineer & React Specialist with 3+ years of experience building scalable, high-performance web applications, React architectures, and enterprise design systems.`,
  headline: person.name,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Download</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          My Resume
        </Text>
      </Row>
    ),
    href: "/Himanshu-Singh-Chauhan-Resume.pdf",
  },
  subline: (
    <>
      Frontend Engineer with 3+ years of experience building scalable,
      high-performance web applications using React.js, Next.js, TypeScript,
      JavaScript, and modern web architecture.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} — About & Experience`,
  description: `${person.name} is a Senior Frontend Engineer & Developer from ${person.state}. Experience in React.js, Next.js, TypeScript, and enterprise product development.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  resume: {
    display: true,
    link: "/Himanshu-Singh-Chauhan-Resume.pdf",
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Download</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          My Resume
        </Text>
      </Row>
    ),
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Frontend Developer with 3+ years of experience building scalable,
        high-performance web applications. Proficient in React, TypeScript,
        JavaScript (ES6+), Redux, Context API, and TanStack Query. Skilled in
        creating responsive UIs, improving Core Web Vitals, SEO, and delivering
        clean, maintainable code.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Hocalwire Labs Pvt Ltd",
        timeframe: "Jan 2023 – Present",
        role: "Software Engineer",
        achievements: [
          <>
            Directed frontend architecture for 3 enterprise-level applications,
            reducing development time by 25% using modular React + Next.js
            components.
          </>,
          <>
            Developed responsive, pixel-perfect interfaces using Tailwind CSS
            and Figma designs.
          </>,
          <>
            Mentored junior developers and enforced best practices for React,
            TypeScript, and component patterns.
          </>,
          <>
            Optimized bundle size, lazy-loaded components, and implemented image
            compression—boosting Lighthouse scores by 35%.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "DAV Centenary College",
        description: <>Bachelor in Computer Science</>,
      },
      {
        name: "AD Senior Secondary School",
        description: <>Completed HSC & SSC</>,
      },
    ],
  },

  projects: {
    display: true,
    title: "Projects",
    projects: [
      {
        title: "Shopperce App & Admin",
        link: "https://shopperce.ai/",
        github: "https://github.com/Himanshu4234",
        description: (
          <>
            A customizable eCommerce platform enabling partners to create
            personalized storefronts. Built dynamic routing & theming using
            React + React Router. Admin dashboards allow sellers to manage
            orders, products, categories & analytics.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Vite", icon: "vite" },
          { name: "Typescript", icon: "typescript" },
          { name: "Tailwind", icon: "tailwind" },
        ],
        images: [],
      },
  
      {
        title: "LiveLaw — Legal News Platform",
        link: "https://www.livelaw.in/",
        github: "https://github.com/Himanshu4234",
        description: (
          <>
            Worked on LiveLaw, India’s leading legal journalism platform providing
            court news, case updates, and subscription-based premium legal content.
            Developed high-performance UI components, improved SEO structure,
            optimized rendering for article-heavy pages, and implemented dynamic,
            scalable layouts to support large volumes of daily news updates.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Typescript", icon: "typescript" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "React Router", icon: "reactrouter" },
        ],
        images: [],
      },
  
      {
        title: "NextLeap IT Solutions — Corporate Platform",
        link: "https://nextleapitsolutions.netlify.app/",
        github: "https://github.com/Himanshu4234",
        description: (
          <>
            Built a scalable IT services website using React + TypeScript.
            Implemented SEO strategies, improved TTFB by 30%, and created
            modular, API-driven pages with mobile-first design.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Typescript", icon: "typescript" },
          { name: "Tailwind", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Kiska Kitna Hisab — Expense Splitter & UPI Settle App",
        link: "https://kiskakitnahisab.netlify.app/",
        github: "https://github.com/Himanshu4234",
        description: (
          <>
            A full-stack Splitwise-inspired group expense tracker built with React, TypeScript,
            and Supabase backend (PostgreSQL database & Auth). Features itemised expense logging,
            Row Level Security (RLS), greedy debt simplification algorithms, and instant UPI payment link
            & QR code generation for 1-click settlements via Google Pay, PhonePe, and Paytm.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Supabase", icon: "database" },
          { name: "Typescript", icon: "typescript" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "Vite", icon: "vite" },
        ],
        images: [
          {
            src: "/images/projects/kiskakitnahisab/kiskakitnahisab-01.png",
            alt: "Kiska Kitna Hisab Application Screenshot",
            width: 1200,
            height: 675,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been working on recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
