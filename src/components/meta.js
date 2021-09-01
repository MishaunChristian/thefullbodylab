import Head from 'next/head';

export default function Meta({ data, title, children }) {
  return (
    <Head>
      <title>{title + ' 🌿 ' + data.title}</title>
      <meta name="description" content={data.description} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </Head>
  );
}
