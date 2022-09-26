import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f93'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '307'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '199'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd45'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c49'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b2e'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '968'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e74'),
    exact: true
  },
  {
    path: '/blog/buildrightthingright',
    component: ComponentCreator('/blog/buildrightthingright', '5f9'),
    exact: true
  },
  {
    path: '/blog/businesscapabilities',
    component: ComponentCreator('/blog/businesscapabilities', 'ad8'),
    exact: true
  },
  {
    path: '/blog/businesscapabilitiesinaction',
    component: ComponentCreator('/blog/businesscapabilitiesinaction', 'e2b'),
    exact: true
  },
  {
    path: '/blog/createC4diagrams',
    component: ComponentCreator('/blog/createC4diagrams', 'ed2'),
    exact: true
  },
  {
    path: '/blog/entanglement',
    component: ComponentCreator('/blog/entanglement', '089'),
    exact: true
  },
  {
    path: '/blog/introductiontoc4',
    component: ComponentCreator('/blog/introductiontoc4', '046'),
    exact: true
  },
  {
    path: '/blog/orchestrationvschoreography',
    component: ComponentCreator('/blog/orchestrationvschoreography', '899'),
    exact: true
  },
  {
    path: '/blog/sequencediagramonc4',
    component: ComponentCreator('/blog/sequencediagramonc4', '629'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '77e'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', '417'),
    exact: true
  },
  {
    path: '/blog/tags/business-architecture',
    component: ComponentCreator('/blog/tags/business-architecture', 'e1b'),
    exact: true
  },
  {
    path: '/blog/tags/c-4',
    component: ComponentCreator('/blog/tags/c-4', '472'),
    exact: true
  },
  {
    path: '/blog/tags/design',
    component: ComponentCreator('/blog/tags/design', '02f'),
    exact: true
  },
  {
    path: '/blog/tags/diagramming',
    component: ComponentCreator('/blog/tags/diagramming', 'bff'),
    exact: true
  },
  {
    path: '/blog/tags/domain-driven-design',
    component: ComponentCreator('/blog/tags/domain-driven-design', 'a83'),
    exact: true
  },
  {
    path: '/blog/tags/modelling',
    component: ComponentCreator('/blog/tags/modelling', '9d5'),
    exact: true
  },
  {
    path: '/blog/tags/planning',
    component: ComponentCreator('/blog/tags/planning', '902'),
    exact: true
  },
  {
    path: '/blog/tags/strategy',
    component: ComponentCreator('/blog/tags/strategy', '241'),
    exact: true
  },
  {
    path: '/blog/understandingboundaries',
    component: ComponentCreator('/blog/understandingboundaries', '4cb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '767'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ea6'),
    routes: [
      {
        path: '/docs/azure/azure_static_site',
        component: ComponentCreator('/docs/azure/azure_static_site', 'd43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/azure/first_azure_pipeline',
        component: ComponentCreator('/docs/azure/first_azure_pipeline', 'c3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/sidecarpattern',
        component: ComponentCreator('/docs/design-patterns/sidecarpattern', 'e15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/engineering/dependencyinjectiononfunctions',
        component: ComponentCreator('/docs/engineering/dependencyinjectiononfunctions', 'd6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/engineering/expodeployment',
        component: ComponentCreator('/docs/engineering/expodeployment', '385'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/engineering/jwttokenvalidationonazurefunction',
        component: ComponentCreator('/docs/engineering/jwttokenvalidationonazurefunction', '865'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/microsoft-azure-well-architected-framework/introduction',
        component: ComponentCreator('/docs/microsoft-azure-well-architected-framework/introduction', 'd0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/microsoft-azure-well-architected-framework/Reliability',
        component: ComponentCreator('/docs/microsoft-azure-well-architected-framework/Reliability', '61f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/CAP Theorem',
        component: ComponentCreator('/docs/nuggets-design/CAP Theorem', 'a9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7dd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
