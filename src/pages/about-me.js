import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { groq } from 'next-sanity';
import { querySanity, usePreviewSubscription } from '../lib/sanity';

const aboutMeQuery = groq`*[_type == "aboutMePage"][0]{
  title,
  header,
  eyebrow,
}`;

const metaQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description
}`;

export default function AboutMe({ metaData, initialData, preview }) {
  const { data } = usePreviewSubscription(aboutMeQuery, { initialData, enabled: preview });
  return (
    <Layout title={data.title} metaData={metaData}>
      <div>
        <Hero data={data} />
      </div>
      {/* https://codepen.io/liborgabrhel/pen/Ljzwxe */}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await querySanity(aboutMeQuery);
  const metaData = await querySanity(metaQuery);

  return {
    props: {
      initialData: data,
      metaData,
      preview
    }
  };
}
