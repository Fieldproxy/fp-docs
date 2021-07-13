const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fieldproxy Docs",
  tagline: "Documentation for you workflows",
  url: "https://fieldproxy.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Fieldproxy", // Usually your GitHub org/user name.
  projectName: "fp-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "FP Docs",
      logo: {
        alt: "Fieldproxy Logo",
        src: "img/icon.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "FAQ",
        },
        // { to: "/faq", label: "FAQ", position: "left" },
        // { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/snippt/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/fieldproxy/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/fieldproxy",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Fieldproxy/fp-docs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fieldproxy. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [ 
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/Fieldproxy/fp-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   "https://github.com/Fieldproxy/fp-docs/edit/main/blog/",
        },
      
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
