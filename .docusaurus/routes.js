import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hemihex/blog',
    component: ComponentCreator('/hemihex/blog', 'dcb'),
    exact: true
  },
  {
    path: '/hemihex/blog/archive',
    component: ComponentCreator('/hemihex/blog/archive', '207'),
    exact: true
  },
  {
    path: '/hemihex/blog/authors',
    component: ComponentCreator('/hemihex/blog/authors', '5e6'),
    exact: true
  },
  {
    path: '/hemihex/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/hemihex/blog/authors/all-sebastien-lorber-articles', 'ce8'),
    exact: true
  },
  {
    path: '/hemihex/blog/authors/yangshun',
    component: ComponentCreator('/hemihex/blog/authors/yangshun', 'b0e'),
    exact: true
  },
  {
    path: '/hemihex/blog/first-blog-post',
    component: ComponentCreator('/hemihex/blog/first-blog-post', 'c0e'),
    exact: true
  },
  {
    path: '/hemihex/blog/long-blog-post',
    component: ComponentCreator('/hemihex/blog/long-blog-post', '6e3'),
    exact: true
  },
  {
    path: '/hemihex/blog/mdx-blog-post',
    component: ComponentCreator('/hemihex/blog/mdx-blog-post', 'c87'),
    exact: true
  },
  {
    path: '/hemihex/blog/tags',
    component: ComponentCreator('/hemihex/blog/tags', '929'),
    exact: true
  },
  {
    path: '/hemihex/blog/tags/docusaurus',
    component: ComponentCreator('/hemihex/blog/tags/docusaurus', '0a0'),
    exact: true
  },
  {
    path: '/hemihex/blog/tags/facebook',
    component: ComponentCreator('/hemihex/blog/tags/facebook', '427'),
    exact: true
  },
  {
    path: '/hemihex/blog/tags/hello',
    component: ComponentCreator('/hemihex/blog/tags/hello', '47d'),
    exact: true
  },
  {
    path: '/hemihex/blog/tags/hola',
    component: ComponentCreator('/hemihex/blog/tags/hola', '689'),
    exact: true
  },
  {
    path: '/hemihex/blog/welcome',
    component: ComponentCreator('/hemihex/blog/welcome', 'ac4'),
    exact: true
  },
  {
    path: '/hemihex/markdown-page',
    component: ComponentCreator('/hemihex/markdown-page', 'abd'),
    exact: true
  },
  {
    path: '/hemihex/docs',
    component: ComponentCreator('/hemihex/docs', '45b'),
    routes: [
      {
        path: '/hemihex/docs',
        component: ComponentCreator('/hemihex/docs', 'b3b'),
        routes: [
          {
            path: '/hemihex/docs',
            component: ComponentCreator('/hemihex/docs', 'c84'),
            routes: [
              {
                path: '/hemihex/docs/category/tutorial---basics',
                component: ComponentCreator('/hemihex/docs/category/tutorial---basics', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/category/tutorial---extras',
                component: ComponentCreator('/hemihex/docs/category/tutorial---extras', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/intro',
                component: ComponentCreator('/hemihex/docs/intro', 'c64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/congratulations', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/create-a-blog-post', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/create-a-document', 'bbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/create-a-page', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/deploy-your-site', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/hemihex/docs/tutorial-basics/markdown-features', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/hemihex/docs/tutorial-extras/manage-docs-versions', '7ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hemihex/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/hemihex/docs/tutorial-extras/translate-your-site', 'da2'),
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
    path: '/hemihex/',
    component: ComponentCreator('/hemihex/', '43c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
