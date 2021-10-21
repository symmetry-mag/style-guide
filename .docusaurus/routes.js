
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/blog',
  component: ComponentCreator('/blog','de8'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','60e'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','3f3'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','32a'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','1a8'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','868'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','412'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','815'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','23f'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','5cb'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','176'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','77c'),
  exact: true,
},
{
  path: '/guide-index',
  component: ComponentCreator('/guide-index','74a'),
  exact: true,
},
{
  path: '/references',
  component: ComponentCreator('/references','19e'),
  exact: true,
},
{
  path: '/some-principles-for-writing-about-people-with-dignity',
  component: ComponentCreator('/some-principles-for-writing-about-people-with-dignity','a3b'),
  exact: true,
},
{
  path: '/understanding-diversity-equity-and-inclusion',
  component: ComponentCreator('/understanding-diversity-equity-and-inclusion','b8e'),
  exact: true,
},
{
  path: '/writing-about-aging-and-disability',
  component: ComponentCreator('/writing-about-aging-and-disability','729'),
  exact: true,
},
{
  path: '/writing-about-culture-ethnicity-and-race',
  component: ComponentCreator('/writing-about-culture-ethnicity-and-race','b9e'),
  exact: true,
},
{
  path: '/writing-about-gender-sex-and-sexual-orientation',
  component: ComponentCreator('/writing-about-gender-sex-and-sexual-orientation','b81'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
