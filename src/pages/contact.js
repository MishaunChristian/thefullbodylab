import Head from 'next/head';
import Layout from '../components/layout';
import { groq } from 'next-sanity';
import { querySanity, usePreviewSubscription } from '../lib/sanity';
import Hero from '../components/hero';
import StyledMarkdown from '../components/styledMarkdown';

const contactQuery = groq`*[_type == "contactPage"][0]{
  title,
  header,
  eyebrow,
  body,
}`;

const metaQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description
}`;

export default function Contact({ metaData, initialData, preview }) {
  const { data } = usePreviewSubscription(contactQuery, { initialData, enabled: preview });
  return (
    <Layout title={data.title} metaData={metaData}>
      <Hero data={data} />
      <section className="fblSection flexBetween">
        <div className="copyBlock">
          <StyledMarkdown>{data.body}</StyledMarkdown>
        </div>
        <div className="linkBlock">
          <p>
            <span role="presentation" className="emoji">
              ✉️
            </span>
            <a className="textLink" href="https://calendly.com/thefullbodylab/discovery-call">
              Schedule a call
            </a>
          </p>
          <p>
            <span role="presentation" className="emoji">
              📱
            </span>
            <a className="textLink" href="mailto:mishaun@thefullbodylab.com">
              Email me
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps({ preview = false }) {
  const data = await querySanity(contactQuery);
  const metaData = await querySanity(metaQuery);

  return {
    props: {
      initialData: data,
      metaData,
      preview
    }
  };
}
