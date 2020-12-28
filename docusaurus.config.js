module.exports = {
  title: 'NodeArch',
  tagline: 'Node.JS Backend framework',
  url: 'https://nodearch.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bluemax-io', // Usually your GitHub org/user name.
  projectName: 'nodearch.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NodeArch',
      logo: {
        alt: 'NodeArch Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/bluemax-io/nodearch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '9dc08abad50261f977efb2dd8a1fcc8b',
      indexName: 'nodearch',
      contextualSearch: true,
      searchParameters: {},
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Get Started',
              to: 'docs/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/nodearch',
            },
            {
              label: 'Slack',
              href: 'https://nodearch.slack.com',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bluemax-io/nodearch',
            },
            {
              label: 'Author',
              to: 'https://github.com/ahmedali7o1',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NodeArch, Inc. Built with Docusaurus.`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bluemax-io/nodearch.io/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/nodearch/nodearch.github.io/edit/source/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
