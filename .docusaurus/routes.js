
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/style-guide/blog',
  component: ComponentCreator('/style-guide/blog','d9a'),
  exact: true,
},
{
  path: '/style-guide/blog/hello-world',
  component: ComponentCreator('/style-guide/blog/hello-world','8d3'),
  exact: true,
},
{
  path: '/style-guide/blog/hola',
  component: ComponentCreator('/style-guide/blog/hola','1bd'),
  exact: true,
},
{
  path: '/style-guide/blog/tags',
  component: ComponentCreator('/style-guide/blog/tags','70b'),
  exact: true,
},
{
  path: '/style-guide/blog/tags/docusaurus',
  component: ComponentCreator('/style-guide/blog/tags/docusaurus','e91'),
  exact: true,
},
{
  path: '/style-guide/blog/tags/facebook',
  component: ComponentCreator('/style-guide/blog/tags/facebook','1ca'),
  exact: true,
},
{
  path: '/style-guide/blog/tags/hello',
  component: ComponentCreator('/style-guide/blog/tags/hello','630'),
  exact: true,
},
{
  path: '/style-guide/blog/tags/hola',
  component: ComponentCreator('/style-guide/blog/tags/hola','112'),
  exact: true,
},
{
  path: '/style-guide/blog/welcome',
  component: ComponentCreator('/style-guide/blog/welcome','d37'),
  exact: true,
},
{
  path: '/style-guide/search',
  component: ComponentCreator('/style-guide/search','b4d'),
  exact: true,
},
{
  path: '/style-guide/',
  component: ComponentCreator('/style-guide/','1cc'),
  
  routes: [
{
  path: '/style-guide/',
  component: ComponentCreator('/style-guide/','2ca'),
  exact: true,
},
{
  path: '/style-guide/guide-index',
  component: ComponentCreator('/style-guide/guide-index','9af'),
  exact: true,
},
{
  path: '/style-guide/references',
  component: ComponentCreator('/style-guide/references','250'),
  exact: true,
},
{
  path: '/style-guide/some-principles-for-writing-about-people-with-dignity',
  component: ComponentCreator('/style-guide/some-principles-for-writing-about-people-with-dignity','8a6'),
  exact: true,
},
{
  path: '/style-guide/understanding-diversity-equity-and-inclusion',
  component: ComponentCreator('/style-guide/understanding-diversity-equity-and-inclusion','4b0'),
  exact: true,
},
{
  path: '/style-guide/writing-about-aging-and-disability',
  component: ComponentCreator('/style-guide/writing-about-aging-and-disability','4be'),
  exact: true,
},
{
  path: '/style-guide/writing-about-culture-ethnicity-and-race',
  component: ComponentCreator('/style-guide/writing-about-culture-ethnicity-and-race','59b'),
  exact: true,
},
{
  path: '/style-guide/writing-about-gender-sex-and-sexual-orientation',
  component: ComponentCreator('/style-guide/writing-about-gender-sex-and-sexual-orientation','9f9'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
