
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
    component: ComponentCreator('/blog','abe'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/bicep-modules-variables',
    component: ComponentCreator('/blog/bicep-modules-variables','c18'),
    exact: true
  },
  {
    path: '/blog/introduction-to-bicep',
    component: ComponentCreator('/blog/introduction-to-bicep','772'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/azure',
    component: ComponentCreator('/blog/tags/azure','525'),
    exact: true
  },
  {
    path: '/blog/tags/bicep',
    component: ComponentCreator('/blog/tags/bicep','6ea'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','3d7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','e85'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','47e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','856'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-azure/manage-docs-versions',
        component: ComponentCreator('/docs/nuggets-azure/manage-docs-versions','85e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-azure/translate-your-site',
        component: ComponentCreator('/docs/nuggets-azure/translate-your-site','6c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/congratulations',
        component: ComponentCreator('/docs/nuggets-design/congratulations','53e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/create-a-blog-post',
        component: ComponentCreator('/docs/nuggets-design/create-a-blog-post','179'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/create-a-document',
        component: ComponentCreator('/docs/nuggets-design/create-a-document','b5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/create-a-page',
        component: ComponentCreator('/docs/nuggets-design/create-a-page','792'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/deploy-your-site',
        component: ComponentCreator('/docs/nuggets-design/deploy-your-site','a79'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/nuggets-design/markdown-features',
        component: ComponentCreator('/docs/nuggets-design/markdown-features','84c'),
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
