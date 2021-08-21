import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { page } from './documents/page';
import { faqBlock } from './objects/faq-block';
import { faqPage } from './documents/faq-page';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([page, faqBlock, faqPage]),
});
