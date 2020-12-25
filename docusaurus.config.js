module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://www.opty.fi/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    // colorMode: {
    //   defaultMode: "light",
    //   disableSwitch: false,
    //   respectPrefersColorScheme: true,
    // },
    hideableSidebar: true,
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          label: "Document",
          position: "left",
          items: [
            {
              label: "Documentation",
              href: "https://www.opty.fi/",
            },
            {
              label: "Github",
              href: "https://www.opty.fi/",
            },
            {
              label: "Whitepaper",
              href: "https://www.opty.fi/",
            },
          ],
        },
        {
          label: "Governance",
          position: "left",
          items: [
            {
              label: "Forum",
              href: "https://www.opty.fi/",
            },
            {
              label: "Documentation",
              href: "https://www.opty.fi/",
            },
          ],
        },
        {
          label: "Community",
          position: "left",
          items: [
            {
              label: "Discord",
              href: "https://www.opty.fi/",
            },
            {
              label: "Twitter",
              href: "https://www.opty.fi/",
            },
            {
              label: "Reddit",
              href: "https://www.opty.fi/",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        debug: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
}
