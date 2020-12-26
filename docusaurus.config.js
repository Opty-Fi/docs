const githubOrgUrl = "https://github.com/Opty-Fi"
const domain = "https://www.opty.fi/"
const customFields = {
  copyright: `Copyright © ${new Date().getFullYear()} OptyFi, Inc. Built with Docusaurus.`,
  description:
    "Auto-shift your DeFi assets into the highest-yield strategiesmatching your risk appetite",
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/Opty-Fi`,
  docsUrl: domain,
  twitterUrl: domain,
  redditUrl: domain,
  discordUrl: domain,
  documentationUrl: domain,
  forumUrl: domain,
  whitePaperUrl: domain,
  version: "5.0.5",
}

module.exports = {
  title: "OptyFi",
  tagline:
    "Auto-shift your DeFi assets into the highest-yield strategiesmatching your risk appetite",
  url: domain,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "OptyFi", // Usually your GitHub org/user name.
  projectName: "optyfi", // Usually your repo name.
  customFields,
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
        alt: "Optyfi",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "About",
          position: "left",
          items: [
            {
              label: "Strategies",
              href: customFields.documentationUrl,
            },
            {
              label: "Protocol",
              href: customFields.githubOrgUrl,
            },
            {
              label: "OptyFi Labs",
              href: customFields.whitePaperUrl,
            },
          ],
        },
        {
          label: "Governance",
          position: "left",
          items: [
            {
              label: "OPTY Token",
              href: customFields.forumUrl,
            },
            {
              label: "Forum",
              href: customFields.forumUrl,
            },
            {
              label: "Voting App",
              href: customFields.documentationUrl,
            },
          ],
        },
        {
          label: "Technical",
          position: "left",
          items: [
            {
              label: "Whitepaper",
              href: customFields.whitePaperUrl,
            },
            {
              label: "Documentation",
              href: customFields.documentationUrl,
            },
            {
              label: "Audit",
              href: customFields.redditUrl,
            },
            {
              label: "Github",
              href: customFields.githubOrgUrl,
            },
          ],
        },
        {
          label: "Connect",
          position: "left",
          items: [
            {
              label: "Discord",
              href: customFields.discordUrl,
            },
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
            {
              label: "Reddit",
              href: customFields.redditUrl,
            },
            {
              label: "Email",
              href: customFields.redditUrl,
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Strategies",
              href: customFields.documentationUrl,
            },
            {
              label: "Protocol",
              href: customFields.githubOrgUrl,
            },
            {
              label: "OptyFi Labs",
              href: customFields.whitePaperUrl,
            },
          ],
        },
        {
          title: "Governance",
          items: [
            {
              label: "OPTY Token",
              href: customFields.forumUrl,
            },
            {
              label: "Forum",
              href: customFields.forumUrl,
            },
            {
              label: "Voting App",
              href: customFields.documentationUrl,
            },
          ],
        },
        {
          title: "Technical",
          items: [
            {
              label: "Whitepaper",
              href: customFields.whitePaperUrl,
            },
            {
              label: "Documentation",
              href: customFields.documentationUrl,
            },
            {
              label: "Audit",
              href: customFields.redditUrl,
            },
            {
              label: "Github",
              href: customFields.githubOrgUrl,
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Discord",
              href: customFields.discordUrl,
            },
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
            {
              label: "Reddit",
              href: customFields.redditUrl,
            },
            {
              label: "Email",
              href: customFields.redditUrl,
            },
          ],
        },
      ],
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
          customCss: [require.resolve("./src/scss/global.scss")],
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
}
