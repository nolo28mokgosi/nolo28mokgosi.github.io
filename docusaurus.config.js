// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'back 2 basix',
   tagline: 'simplify-ing tech concepts',
   url: 'https://nolo28mokgosi@github.io',
   // baseUrl: '/nolomokgosi-blog/',
   baseUrl: '/',
   onBrokenLinks: 'throw',
   favicon: 'img/fav.ico',
   organizationName: 'nolo28mokgosi', // Usually your GitHub org/user name.
   projectName: 'nolo28mokgosi.github.io', // Usually your repo name.
   deploymentBranch: 'gh-pages', //specify since my repo name has .github.io

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-75LLZKB7VH',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '@nolomokgosi',
        logo: {
          alt: 'nolomokgosi',
          src: 'img/profile.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Toolbox',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mini Docs',
            items: [
              {
                label: 'Toolbox',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Learnings',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nolo28mokgosi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
