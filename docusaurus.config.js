// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'demistify & simplify tech concepts',
   tagline: 'back to basix',
   url: 'https://nolo28mokgosi@github.io',
   // baseUrl: '/nolomokgosi-blog/',
   baseUrl: '/',
   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',
   favicon: 'img/fav.ico',
   organizationName: 'nolo28mokgosi', // Usually your GitHub org/user name.
   projectName: 'nolo28mokgosi.github.io', // Usually your repo name.
   deploymentBranch: 'gh-pages', //specify since my repo name has .github.io

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
            label: 'Nuggets',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.youtube.com/channel/UC3AEKSd1yyYn7W3XHF1lYWA',
            label: 'Vlog',
            position: 'left',
          },
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mini Docs',
            items: [
              {
                label: 'Nuggets',
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
