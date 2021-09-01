import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Packages from '../components/packages';
import Goals from '../components/goals';
import { groq } from 'next-sanity';
import { querySanity, usePreviewSubscription } from '../lib/sanity';
import Link from 'next/link';

const servicesQuery = groq`*[_type == "servicesPage"][0]{
  title,
  header,
  eyebrow,
  packages[],
  goalsHeader,
  goalsList[],
}`;

const metaQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description
}`;

export default function services({ metaData, initialData, preview }) {
  const { data } = usePreviewSubscription(servicesQuery, { initialData, enabled: preview });
  return (
    <Layout title={data.title} metaData={metaData}>
      <div>
        <Hero data={data} />
        <Goals data={data} />
        <Packages data={data.packages} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await querySanity(servicesQuery);
  const metaData = await querySanity(metaQuery);

  return {
    props: {
      initialData: data,
      metaData,
      preview
    }
  };
}
