import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { groq } from 'next-sanity';
import { querySanity, usePreviewSubscription } from '../lib/sanity';
import ReactMarkdown from 'react-markdown';

const aboutMeQuery = groq`*[_type == "aboutMePage"][0]{
  title,
  header,
  eyebrow,
  approachHead,
  approach,
  goalHead,
  goal,
  certificationHead,
  certification,
  backgroundHead,
  background,
}`;

const metaQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description
}`;

export default function AboutMe({ metaData, initialData, preview }) {
  const { data } = usePreviewSubscription(aboutMeQuery, { initialData, enabled: preview });
  return (
    <Layout title={data.title} metaData={metaData}>
      <Hero data={data} />
      <section className="fblSection flexBetween">
        <div className="copyBlock">
          <h2 className="fblTextMedium">{data.approachHead}</h2>
          <ReactMarkdown>{data.approach}</ReactMarkdown>
          If this sounds, blah blah blah,{' '}
          <a className="textLink" href="mailto:mishaun@thefullbodylab.com">
            schedule a 20-min discovery session
          </a>
        </div>
        <div className="copyBlock">
          <h2 className="fblTextMedium">{data.certificationHead}</h2>
          <ReactMarkdown>{data.certification}</ReactMarkdown>

          <h2 className="fblTextMedium">{data.goalHead}</h2>
          <ReactMarkdown>{data.goal}</ReactMarkdown>
        </div>
      </section>
      <section>
        <p className="fblTextQuote">
          My interest in a holistic approach to healing started as I watched my dad struggle with
          type II diabetes.
        </p>
      </section>
      <section className="fblSection flexBetween">
        <div className="copyBlock">
          <h2 className="fblTextMedium">{data.backgroundHead}</h2>
          <ReactMarkdown>{data.background}</ReactMarkdown>
          {/* If this sounds, blah blah blah,{' '}
          <a className="textLink" href="mailto:mishaun@thefullbodylab.com">
            schedule a 20-min discovery session
          </a> */}
        </div>
      </section>
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
