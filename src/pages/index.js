import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { querySanity, usePreviewSubscription } from '../lib/sanity';
import { groq } from 'next-sanity';
import Triptych from '../components/triptych';
import Intro from '../components/intro';
import Testimonial from '../components/testimonial';
const homeQuery = groq`*[_type == "homePage"][0]{
  title,
  header,
  eyebrow,
  teaser[] {
    ...,
    image {
      asset->
    }
  },
  introHeader,
  introCopy,
  testimonialName,
  testimonialQuotation,
}`;

const metaQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description
}`;

export default function Home({ metaData, initialData, preview }) {
  const { data } = usePreviewSubscription(homeQuery, { initialData, enabled: preview });
  return (
    <Layout title={data.title} metaData={metaData}>
      <Hero className="bgSage" data={data} />
      <Intro data={data} />
      <Triptych data={data.teaser} />
      <Testimonial data={data} />
    </Layout>
  );
}
export async function getStaticProps({ preview = false }) {
  const data = await querySanity(homeQuery);
  const metaData = await querySanity(metaQuery);

  return {
    props: {
      initialData: data,
      metaData,
      preview
    }
  };
}
