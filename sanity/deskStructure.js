import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .schemaType('homePage')
        .title('Home')
        .icon(() => <strong>🏡</strong>)
        .child(
          S.document().schemaType('homePage').documentId('4d31aaf1-6b16-45a2-9b2e-ce0abeae1195')
        ),
      S.listItem()
        .schemaType('aboutMePage')
        .title('About Me')
        .icon(() => <strong>🐐</strong>)
        .child(
          S.document().schemaType('aboutMePage').documentId('65a5bc97-e5cb-4c15-93f5-ffd42f82bf06')
        ),
      S.listItem()
        .schemaType('servicesPage')
        .title('Services')
        .icon(() => <strong>🌿</strong>)
        .child(
          S.document()
            .schemaType('servicesPage')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('6608d942-2cb1-401e-8ea5-5ff1b4aad10a')
        ),
      S.listItem()
        .schemaType('faqPage')
        .title('FAQ')
        .icon(() => <strong>❓</strong>)
        .child(
          S.document().schemaType('faqPage').documentId('6fd17dd4-3e7a-43eb-8f9e-073499472ae4')
        ),
      S.listItem()
        .schemaType('contactPage')
        .title('Contact')
        .icon(() => <strong>✉️</strong>)
        .child(
          S.document().schemaType('contactPage').documentId('009e70b2-aa57-4614-b2fe-e3264351cf02')
        ),
      S.listItem()
        .schemaType('siteSettings')
        .title('Site Settings')
        .icon(() => <strong>⚙️</strong>)
        .child(S.document().schemaType('siteSettings'))
    ]);
