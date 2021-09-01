import { groq } from 'next-sanity';
import Header from '../components/header';
import Footer from '../components/footer';
import Meta from '../components/meta';
import { PopupWidget } from 'react-calendly';
import Session from '../components/session';

export default function Layout({ children, title, metaData }) {
  return (
    <>
      <Meta title={title} data={metaData}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Meta>
      <Header />
      <main>{children}</main>
      <PopupWidget
        url="https://calendly.com/thefullbodylab/discovery-call"
        pageSettings={{
          primaryColor: '7d9b93',
          textColor: '4d5055'
        }}
      />
      <Session />
      <Footer />
    </>
  );
}
