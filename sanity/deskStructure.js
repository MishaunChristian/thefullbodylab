import S from '@sanity/desk-tool/structure-builder';

export default () => {
  S.list()
    .title('Pages')
    .items([
      S.listItem().title('FAQ Page').child(S.document().schemaType('faqPage').documentId('faqPage'))
    ]);
};
