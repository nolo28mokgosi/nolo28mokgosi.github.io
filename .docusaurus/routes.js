import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ae0'),
    exact: true
  },
  {
    path: '/blog/architecturedecisionrecords',
    component: ComponentCreator('/blog/architecturedecisionrecords', '62b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/buildrightthingright',
    component: ComponentCreator('/blog/buildrightthingright', 'f66'),
    exact: true
  },
  {
    path: '/blog/businesscapabilities',
    component: ComponentCreator('/blog/businesscapabilities', 'de2'),
    exact: true
  },
  {
    path: '/blog/businesscapabilitiesinaction',
    component: ComponentCreator('/blog/businesscapabilitiesinaction', 'f81'),
    exact: true
  },
  {
    path: '/blog/createC4diagrams',
    component: ComponentCreator('/blog/createC4diagrams', 'c9b'),
    exact: true
  },
  {
    path: '/blog/entanglement',
    component: ComponentCreator('/blog/entanglement', '899'),
    exact: true
  },
  {
    path: '/blog/introductiontoc4',
    component: ComponentCreator('/blog/introductiontoc4', '11f'),
    exact: true
  },
  {
    path: '/blog/orchestrationvschoreography',
    component: ComponentCreator('/blog/orchestrationvschoreography', '56c'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', 'fa3'),
    exact: true
  },
  {
    path: '/blog/sequencediagramonc4',
    component: ComponentCreator('/blog/sequencediagramonc4', '22b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/adr',
    component: ComponentCreator('/blog/tags/adr', '06e'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', '149'),
    exact: true
  },
  {
    path: '/blog/tags/architecture/page/2',
    component: ComponentCreator('/blog/tags/architecture/page/2', '866'),
    exact: true
  },
  {
    path: '/blog/tags/business-architecture',
    component: ComponentCreator('/blog/tags/business-architecture', '0c6'),
    exact: true
  },
  {
    path: '/blog/tags/c-4',
    component: ComponentCreator('/blog/tags/c-4', '9c4'),
    exact: true
  },
  {
    path: '/blog/tags/design',
    component: ComponentCreator('/blog/tags/design', 'afb'),
    exact: true
  },
  {
    path: '/blog/tags/design/page/2',
    component: ComponentCreator('/blog/tags/design/page/2', 'e9e'),
    exact: true
  },
  {
    path: '/blog/tags/diagramming',
    component: ComponentCreator('/blog/tags/diagramming', '63a'),
    exact: true
  },
  {
    path: '/blog/tags/domain-driven-design',
    component: ComponentCreator('/blog/tags/domain-driven-design', '2a3'),
    exact: true
  },
  {
    path: '/blog/tags/modelling',
    component: ComponentCreator('/blog/tags/modelling', '4b7'),
    exact: true
  },
  {
    path: '/blog/tags/planning',
    component: ComponentCreator('/blog/tags/planning', '947'),
    exact: true
  },
  {
    path: '/blog/tags/solutions-architecture',
    component: ComponentCreator('/blog/tags/solutions-architecture', '00d'),
    exact: true
  },
  {
    path: '/blog/tags/strategy',
    component: ComponentCreator('/blog/tags/strategy', 'e18'),
    exact: true
  },
  {
    path: '/blog/understandingboundaries',
    component: ComponentCreator('/blog/understandingboundaries', '836'),
    exact: true
  },
  {
    path: '/blog/valuestreaminaction',
    component: ComponentCreator('/blog/valuestreaminaction', 'eda'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '90b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'dfe'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/enterprise-architecture',
            component: ComponentCreator('/docs/tags/enterprise-architecture', 'c4f'),
            exact: true
          },
          {
            path: '/docs/tags/solution-architecture',
            component: ComponentCreator('/docs/tags/solution-architecture', '79e'),
            exact: true
          },
          {
            path: '/docs/tags/technology-strategy',
            component: ComponentCreator('/docs/tags/technology-strategy', 'f42'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fdd'),
            routes: [
              {
                path: '/docs/architecture/AI Agents',
                component: ComponentCreator('/docs/architecture/AI Agents', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/design-patterns/sidecarpattern',
                component: ComponentCreator('/docs/architecture/design-patterns/sidecarpattern', '1be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Enterprise Architecture 101',
                component: ComponentCreator('/docs/architecture/Enterprise Architecture 101', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Focus Cycle',
                component: ComponentCreator('/docs/architecture/Focus Cycle', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/aicontextcompression',
                component: ComponentCreator('/docs/development/aicontextcompression', 'a82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/azure/azure_static_site',
                component: ComponentCreator('/docs/development/azure/azure_static_site', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/azure/first_azure_pipeline',
                component: ComponentCreator('/docs/development/azure/first_azure_pipeline', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/azure/jwttokenvalidationonazurefunction',
                component: ComponentCreator('/docs/development/azure/jwttokenvalidationonazurefunction', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/azure/websiteOnAzureContainerisedApps',
                component: ComponentCreator('/docs/development/azure/websiteOnAzureContainerisedApps', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/dependencyinjectiononfunctions',
                component: ComponentCreator('/docs/development/dependencyinjectiononfunctions', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/react native/expodeployment',
                component: ComponentCreator('/docs/development/react native/expodeployment', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
