import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '020'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a9d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '49b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ff4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ab1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '186'),
    exact: true
  },
  {
    path: '/blog/architecturedecisionrecords',
    component: ComponentCreator('/blog/architecturedecisionrecords', 'd7d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b28'),
    exact: true
  },
  {
    path: '/blog/buildrightthingright',
    component: ComponentCreator('/blog/buildrightthingright', 'c78'),
    exact: true
  },
  {
    path: '/blog/businesscapabilities',
    component: ComponentCreator('/blog/businesscapabilities', '8aa'),
    exact: true
  },
  {
    path: '/blog/businesscapabilitiesinaction',
    component: ComponentCreator('/blog/businesscapabilitiesinaction', '7a1'),
    exact: true
  },
  {
    path: '/blog/createC4diagrams',
    component: ComponentCreator('/blog/createC4diagrams', 'fa8'),
    exact: true
  },
  {
    path: '/blog/entanglement',
    component: ComponentCreator('/blog/entanglement', '2a0'),
    exact: true
  },
  {
    path: '/blog/introductiontoc4',
    component: ComponentCreator('/blog/introductiontoc4', '7bf'),
    exact: true
  },
  {
    path: '/blog/orchestrationvschoreography',
    component: ComponentCreator('/blog/orchestrationvschoreography', '262'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '9bf'),
    exact: true
  },
  {
    path: '/blog/sequencediagramonc4',
    component: ComponentCreator('/blog/sequencediagramonc4', '754'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '3b0'),
    exact: true
  },
  {
    path: '/blog/tags/adr',
    component: ComponentCreator('/blog/tags/adr', '5c9'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', 'c89'),
    exact: true
  },
  {
    path: '/blog/tags/architecture/page/2',
    component: ComponentCreator('/blog/tags/architecture/page/2', '47e'),
    exact: true
  },
  {
    path: '/blog/tags/business-architecture',
    component: ComponentCreator('/blog/tags/business-architecture', 'b4d'),
    exact: true
  },
  {
    path: '/blog/tags/c-4',
    component: ComponentCreator('/blog/tags/c-4', 'f8f'),
    exact: true
  },
  {
    path: '/blog/tags/design',
    component: ComponentCreator('/blog/tags/design', 'ad7'),
    exact: true
  },
  {
    path: '/blog/tags/design/page/2',
    component: ComponentCreator('/blog/tags/design/page/2', '9ff'),
    exact: true
  },
  {
    path: '/blog/tags/diagramming',
    component: ComponentCreator('/blog/tags/diagramming', 'bf0'),
    exact: true
  },
  {
    path: '/blog/tags/domain-driven-design',
    component: ComponentCreator('/blog/tags/domain-driven-design', '5a5'),
    exact: true
  },
  {
    path: '/blog/tags/modelling',
    component: ComponentCreator('/blog/tags/modelling', 'a1b'),
    exact: true
  },
  {
    path: '/blog/tags/planning',
    component: ComponentCreator('/blog/tags/planning', '2cf'),
    exact: true
  },
  {
    path: '/blog/tags/solutions-architecture',
    component: ComponentCreator('/blog/tags/solutions-architecture', '40b'),
    exact: true
  },
  {
    path: '/blog/tags/strategy',
    component: ComponentCreator('/blog/tags/strategy', 'e6a'),
    exact: true
  },
  {
    path: '/blog/understandingboundaries',
    component: ComponentCreator('/blog/understandingboundaries', '346'),
    exact: true
  },
  {
    path: '/blog/valuestreaminaction',
    component: ComponentCreator('/blog/valuestreaminaction', 'cc2'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '1be'),
    exact: true
  },
  {
    path: '/docs/tags/enterprise-architecture',
    component: ComponentCreator('/docs/tags/enterprise-architecture', '2a0'),
    exact: true
  },
  {
    path: '/docs/tags/solution-architecture',
    component: ComponentCreator('/docs/tags/solution-architecture', '4e5'),
    exact: true
  },
  {
    path: '/docs/tags/technology-strategy',
    component: ComponentCreator('/docs/tags/technology-strategy', 'c7a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a0d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b02'),
    routes: [
      {
        path: '/docs/architecture/AI Agents',
        component: ComponentCreator('/docs/architecture/AI Agents', '284'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/design-patterns/sidecarpattern',
        component: ComponentCreator('/docs/architecture/design-patterns/sidecarpattern', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/Enterprise Architecture 101',
        component: ComponentCreator('/docs/architecture/Enterprise Architecture 101', 'e9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/Focus Cycle',
        component: ComponentCreator('/docs/architecture/Focus Cycle', '884'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/aicontextcompression',
        component: ComponentCreator('/docs/development/aicontextcompression', 'c70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/azure/azure_static_site',
        component: ComponentCreator('/docs/development/azure/azure_static_site', '5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/azure/first_azure_pipeline',
        component: ComponentCreator('/docs/development/azure/first_azure_pipeline', '9d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/azure/jwttokenvalidationonazurefunction',
        component: ComponentCreator('/docs/development/azure/jwttokenvalidationonazurefunction', '081'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/azure/websiteOnAzureContainerisedApps',
        component: ComponentCreator('/docs/development/azure/websiteOnAzureContainerisedApps', 'c5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/dependencyinjectiononfunctions',
        component: ComponentCreator('/docs/development/dependencyinjectiononfunctions', '379'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/development/react native/expodeployment',
        component: ComponentCreator('/docs/development/react native/expodeployment', '95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '200'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
