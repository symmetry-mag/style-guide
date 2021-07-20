const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Symmetry Style Guide',
  tagline: 'Writing about people with dignity',
  url: 'https://github.com/symmetry-mag',
  baseUrl: '/style-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'symmetry-mag', // Usually your GitHub org/user name.
  projectName: 'style-guide', // Usually your repo name.
  themeConfig: {
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-KK19VBQ13M',
    },
    algolia: {
      apiKey: '1fbaabd095088b8d662e3ce747591964',
      indexName: 'symmetry-mag',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      // appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
    },
    navbar: {  
      title: 'Symmetry Style Guide: Writing about people with dignity',
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Copyright © 2021 Symmetry Magazine',
              href: 'https://www.symmetrymagazine.org/',
            },
          ],
        },
        {
          items: [
            {
              label: 'Terms of Use',
              href: 'https://www.symmetrymagazine.org/terms',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Symmetry Magazine`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/symmetry-mag/style-guide/tree/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
