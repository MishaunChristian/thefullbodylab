import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
