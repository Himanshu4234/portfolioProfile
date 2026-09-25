// @ts-ignore: side-effect import without type declarations
import "@once-ui-system/core/css/styles.css";
// @ts-ignore: side-effect import without type declarations
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
  Flex,
  Meta,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { SplashScreen } from "@/components/common/SplashScreen";
import { FloatingDock } from "@/components/navigation/FloatingDock";
import { baseURL, fonts, style, dataStyle, home } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      data-theme="dark"
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <head>
        <meta name="google-site-verification" content="L5lW-LRoQ1QhXWIQn3-DCkvktkMga54qTacdsex-sIw" />
        <meta name="msvalidate.01" content="A59B0B7C6E0159491DF2EE8DF72E3486" />
        <link rel="canonical" href={baseURL} />
        
        {/* Core AI Discovery & LLMs.txt links */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Profile" />
        <link rel="author" href="https://github.com/Himanshu4234" />
        <link rel="me" href="https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/" />
        <link rel="me" href="https://github.com/Himanshu4234" />

        {/* Performance Preconnects for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />

        {/* Search Engine High-Ranking Keywords & Metadata */}
        <meta
          name="keywords"
          content="Himanshu Singh Chauhan, Himanshu Chauhan, Himanshu Chauhan Frontend, Senior Frontend Engineer, React Specialist, Next.js Developer, TypeScript Expert, Frontend Architect India, Hocalwire Labs, Kiska Kitna Hisab, Shopperce AI, LiveLaw Frontend, NextLeap IT Solutions, Web Developer Haryana, React.js Specialist, High Performance Web Apps, Core Web Vitals Specialist"
        />
        <meta name="author" content="Himanshu Singh Chauhan" />
        <meta name="creator" content="Himanshu Singh Chauhan" />
        <meta name="publisher" content="Himanshu Singh Chauhan" />
        <meta name="copyright" content="Himanshu Singh Chauhan" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="2 days" />

        {/* Explicit Site Name Metadata for Google Search */}
        <meta property="og:site_name" content="Himanshu Singh Chauhan" />
        <meta name="application-name" content="Himanshu Singh Chauhan Portfolio" />

        {/* Favicons & PWA Manifest for Mobile App Install */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Himanshu" />
        <meta name="theme-color" content="#070b14" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Search Engine & AI Crawler Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* OpenGraph Complete Tags */}
        <meta property="og:title" content="Himanshu Singh Chauhan — Senior Frontend Engineer & React Specialist" />
        <meta property="og:description" content="Official portfolio of Himanshu Singh Chauhan. Senior Frontend Engineer with 3+ years building production React, Next.js, and TypeScript architectures serving 1M+ active users." />
        <meta property="og:url" content={baseURL} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Himanshu" />
        <meta property="profile:last_name" content="Chauhan" />
        <meta property="profile:username" content="Himanshu4234" />
        <meta property="profile:gender" content="male" />
        <meta property="og:image" content={`${baseURL}/images/himanshu.jpeg`} />
        <meta property="og:image:secure_url" content={`${baseURL}/images/himanshu.jpeg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Himanshu Singh Chauhan - Senior Frontend Engineer" />

        {/* Twitter Complete Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Himanshu Singh Chauhan — Senior Frontend Engineer" />
        <meta name="twitter:description" content="Senior Frontend Engineer specializing in React.js, Next.js, and TypeScript. Building scalable architectures and high-performance UI systems." />
        <meta name="twitter:image" content={`${baseURL}/images/himanshu.jpeg`} />
        <meta name="twitter:image:alt" content="Himanshu Singh Chauhan" />

        {/* Comprehensive Linked Schema.org Knowledge Graph (Google AI Overviews, SearchGPT, Bing, Perplexity) */}
        <script
          type="application/ld+json"
          id="schema-architecture-graph"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${baseURL}/#person`,
                  "name": "Himanshu Singh Chauhan",
                  "givenName": "Himanshu",
                  "familyName": "Chauhan",
                  "additionalName": "HC",
                  "jobTitle": "Senior Frontend Engineer & React Specialist",
                  "description": "Senior Frontend Engineer with 3+ years of experience specializing in React.js, Next.js, TypeScript, and high-performance web architecture.",
                  "url": baseURL,
                  "image": `${baseURL}/images/himanshu.jpeg`,
                  "telephone": "+91 9654801167",
                  "email": "himanshuchauhan85.hc@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Haryana",
                    "addressCountry": "India"
                  },
                  "sameAs": [
                    baseURL,
                    "https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/",
                    "https://www.instagram.com/himanshu_chauhan0107",
                    "https://github.com/Himanshu4234"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Hocalwire Labs Pvt Ltd",
                    "url": "https://www.hocalwire.com/"
                  },
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "DAV Centenary College",
                    "description": "Bachelor in Computer Science"
                  },
                  "knowsAbout": [
                    "Frontend Engineering",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "Redux Toolkit",
                    "TanStack Query",
                    "Tailwind CSS",
                    "Supabase",
                    "RESTful APIs",
                    "Core Web Vitals Optimization",
                    "Design Systems Architecture",
                    "Vite"
                  ]
                },
                {
                  "@type": "Occupation",
                  "@id": `${baseURL}/#occupation`,
                  "name": "Senior Frontend Engineer",
                  "occupationalCategory": "15-1254.00",
                  "skills": "React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, Tailwind CSS, Core Web Vitals"
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${baseURL}/#profilepage`,
                  "url": baseURL,
                  "name": "Himanshu Singh Chauhan — Senior Frontend Engineer Portfolio",
                  "description": "Official portfolio of Himanshu Singh Chauhan, Senior Frontend Engineer specializing in React.js, Next.js, and TypeScript architectures.",
                  "inLanguage": "en-US",
                  "mainEntity": {
                    "@id": `${baseURL}/#person`
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": `${baseURL}/#website`,
                  "url": baseURL,
                  "name": "Himanshu Singh Chauhan Portfolio",
                  "description": "Official engineering portfolio of Himanshu Singh Chauhan, Senior Frontend Engineer.",
                  "inLanguage": "en-US",
                  "publisher": {
                    "@id": `${baseURL}/#person`
                  },
                  "hasPart": [
                    {
                      "@type": "WebPage",
                      "@id": `${baseURL}/about`,
                      "name": "About Himanshu Singh Chauhan",
                      "url": `${baseURL}/about`
                    },
                    {
                      "@type": "WebPage",
                      "@id": `${baseURL}/work`,
                      "name": "Projects by Himanshu Singh Chauhan",
                      "url": `${baseURL}/work`
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "@id": `${baseURL}/#projects`,
                  "name": "Featured Production Applications",
                  "itemListElement": [
                    {
                      "@type": "SoftwareApplication",
                      "position": 1,
                      "name": "Kiska Kitna Hisab — Split Expenses & UPI Settlement",
                      "url": "https://kiskakitnahisab.netlify.app/",
                      "applicationCategory": "FinanceApplication",
                      "operatingSystem": "Web",
                      "description": "Full-stack Splitwise-inspired group expense tracker with greedy debt simplification, Supabase PostgreSQL backend, and 1-click UPI QR and deep link settlement.",
                      "author": { "@id": `${baseURL}/#person` }
                    },
                    {
                      "@type": "SoftwareApplication",
                      "position": 2,
                      "name": "Shopperce AI — Multi-Tenant E-Commerce Platform",
                      "url": "https://shopperce.ai/",
                      "applicationCategory": "BusinessApplication",
                      "operatingSystem": "Web",
                      "description": "Multi-tenant e-commerce platform allowing enterprise partners to launch custom-branded storefronts with dynamic theme injection and admin analytics.",
                      "author": { "@id": `${baseURL}/#person` }
                    },
                    {
                      "@type": "SoftwareApplication",
                      "position": 3,
                      "name": "LiveLaw — India's Premier Legal News Platform",
                      "url": "https://www.livelaw.in/",
                      "applicationCategory": "NewsApplication",
                      "operatingSystem": "Web",
                      "description": "High-traffic legal journalism portal serving 1M+ active monthly readers, engineered with sub-second LCP and zero CLS.",
                      "author": { "@id": `${baseURL}/#person` }
                    },
                    {
                      "@type": "SoftwareApplication",
                      "position": 4,
                      "name": "NextLeap IT Solutions — Corporate Platform",
                      "url": "https://nextleapitsolutions.netlify.app/",
                      "applicationCategory": "BusinessApplication",
                      "operatingSystem": "Web",
                      "description": "Enterprise IT services corporate platform with optimized Time-To-First-Byte and responsive component architecture.",
                      "author": { "@id": `${baseURL}/#person` }
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": `${baseURL}/#faq`,
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is Himanshu Singh Chauhan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Himanshu Singh Chauhan is a Senior Frontend Engineer and React Specialist based in Haryana, India. With 3+ years of experience, he builds scalable production web platforms using React.js, Next.js, and TypeScript."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are Himanshu Singh Chauhan's key software projects?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "His notable projects include Kiska Kitna Hisab (a full-stack expense splitter with instant UPI settlement and Supabase backend), Shopperce AI (a multi-tenant e-commerce storefront system), LiveLaw (frontend performance engineering for 1M+ monthly readers), and NextLeap IT Solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What technologies does Himanshu Singh Chauhan work with?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Himanshu specializes in React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, TanStack Query, Tailwind CSS, Supabase (PostgreSQL), REST APIs, Vite, and Core Web Vitals optimization."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I contact Himanshu Singh Chauhan for hiring or projects?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can reach Himanshu directly via email at himanshuchauhan85.hc@gmail.com, phone at +91 9654801167, or via LinkedIn at https://www.linkedin.com/in/himanshu-singh-chauhan-6828b116a/."
                      }
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${baseURL}/#breadcrumbs`,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": baseURL
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "About",
                      "item": `${baseURL}/about`
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Projects",
                      "item": `${baseURL}/work`
                    }
                  ]
                }
              ]
            })
          }}
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  root.setAttribute('data-theme', 'dark');
                  localStorage.setItem('data-theme', 'dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ttr0v37ur9");`,
          }}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          backgroundColor: "#070b14",
          color: "#f8fafc",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Providers>
          {/* Opening Flash/Splash Screen Animation */}
          <SplashScreen />

          {/* Floating Vertical Dock Navigation */}
          <FloatingDock />

          {/* Top Bar Header */}
          <Header />

          {/* Main Full-Width Content Container */}
          <main
            style={{
              width: "100%",
              minHeight: "calc(100vh - 160px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <RouteGuard>{children}</RouteGuard>
          </main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </Flex>
  );
}
