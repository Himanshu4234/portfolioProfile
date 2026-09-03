// @ts-ignore: side-effect import without type declarations
import "@once-ui-system/core/css/styles.css";
// @ts-ignore: side-effect import without type declarations
import "@once-ui-system/core/css/tokens.css";
// import "@/resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";

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
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <head>
        <meta name="google-site-verification" content="L5lW-LRoQ1QhXWIQn3-DCkvktkMga54qTacdsex-sIw" />
        <link rel="canonical" href={baseURL} />
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
                  "jobTitle": "Senior Frontend Engineer",
                  "url": baseURL,
                  "image": `${baseURL}/images/avatars.jpeg`,
                  "sameAs": [
                    "https://www.linkedin.com/in/himanshu-chauhan-6828b116a/",
                    "https://www.instagram.com/himanshu_chauhan0107",
                    "https://github.com/Himanshu4234"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Hocalwire Labs"
                  },
                  "knowsAbout": [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Redux",
                    "Tailwind CSS",
                    "SEO & Core Web Vitals"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": `${baseURL}/#website`,
                  "url": baseURL,
                  "name": "Himanshu Singh Chauhan Portfolio",
                  "description": "Official Portfolio Website of Himanshu Singh Chauhan - Senior Frontend Engineer",
                  "publisher": {
                    "@id": `${baseURL}/#person`
                  },
                  "hasPart": [
                    {
                      "@type": "WebPage",
                      "@id": `${baseURL}/about`,
                      "name": "About - Himanshu Singh Chauhan",
                      "url": `${baseURL}/about`
                    },
                    {
                      "@type": "WebPage",
                      "@id": `${baseURL}/work`,
                      "name": "Projects & Work - Himanshu Singh Chauhan",
                      "url": `${baseURL}/work`
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "@id": `${baseURL}/#projects`,
                  "name": "Featured Software Applications",
                  "itemListElement": [
                    {
                      "@type": "SoftwareApplication",
                      "name": "LiveLaw — Legal News Platform",
                      "url": "https://www.livelaw.in/",
                      "operatingSystem": "Web",
                      "applicationCategory": "NewsApplication"
                    },
                    {
                      "@type": "SoftwareApplication",
                      "name": "Shopperce AI — Multi-Tenant E-Commerce Platform",
                      "url": "https://shopperce.ai/",
                      "operatingSystem": "Web",
                      "applicationCategory": "BusinessApplication"
                    },
                    {
                      "@type": "SoftwareApplication",
                      "name": "NextLeap IT Solutions — Corporate Platform",
                      "url": "https://nextleapitsolutions.netlify.app/",
                      "operatingSystem": "Web",
                      "applicationCategory": "BusinessApplication"
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
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
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
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
