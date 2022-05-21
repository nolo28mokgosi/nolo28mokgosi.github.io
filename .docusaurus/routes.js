
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','7f8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/createC4diagrams',
    component: ComponentCreator('/blog/createC4diagrams','ce0'),
    exact: true
  },
  {
    path: '/blog/entanglement',
    component: ComponentCreator('/blog/entanglement','0eb'),
    exact: true
  },
  {
    path: '/blog/introductiontoc4',
    component: ComponentCreator('/blog/introductiontoc4','a76'),
    exact: true
  },
  {
    path: '/blog/sequencediagramonc4',
    component: ComponentCreator('/blog/sequencediagramonc4','3a0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture','8d4'),
    exact: true
  },
  {
    path: '/blog/tags/c-4',
    component: ComponentCreator('/blog/tags/c-4','79a'),
    exact: true
  },
  {
    path: '/blog/tags/design',
    component: ComponentCreator('/blog/tags/design','586'),
    exact: true
  },
  {
    path: '/blog/tags/diagramming',
    component: ComponentCreator('/blog/tags/diagramming','d3d'),
    exact: true
  },
  {
    path: '/blog/tags/domain-driven-design',
    component: ComponentCreator('/blog/tags/domain-driven-design','38a'),
    exact: true
  },
  {
    path: '/blog/tags/modelling',
    component: ComponentCreator('/blog/tags/modelling','131'),
    exact: true
  },
  {
    path: '/blog/understandingboundaries',
    component: ComponentCreator('/blog/understandingboundaries','80d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','7f7'),
    routes: [
      {
        path: '/docs/azure/first_azure_pipeline',
        component: ComponentCreator('/docs/azure/first_azure_pipeline','c3d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/sidecarpattern',
        component: ComponentCreator('/docs/design-patterns/sidecarpattern','e15'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/engineering/dependencyinjectiononfunctions',
        component: ComponentCreator('/docs/engineering/dependencyinjectiononfunctions','d6b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/engineering/jwttokenvalidationonazurefunction',
        component: ComponentCreator('/docs/engineering/jwttokenvalidationonazurefunction','865'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/microsoft-azure-well-architected-framework/introduction',
        component: ComponentCreator('/docs/microsoft-azure-well-architected-framework/introduction','d0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/microsoft-azure-well-architected-framework/Reliability',
        component: ComponentCreator('/docs/microsoft-azure-well-architected-framework/Reliability','61f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/CAP Theorem',
        component: ComponentCreator('/docs/nuggets-design/CAP Theorem','a9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
