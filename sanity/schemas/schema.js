import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { page } from './documents/page';
import { faqBlock } from './objects/faq-block';
import { faqPage } from './documents/faq-page';
import { homePage } from './documents/home-page';
import { aboutMePage } from './documents/about-me-page';
import { servicesPage } from './documents/services-page';
import { contactPage } from './documents/contact-page';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    faqBlock,
    faqPage,
    aboutMePage,
    servicesPage,
    homePage,
    contactPage
  ])
});
