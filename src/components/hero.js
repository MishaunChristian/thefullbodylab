import $ from './hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={$.hero}>
      <div className="fblSection">
        <p className="fblTextSmall">{data.eyebrow}</p>
        <h1 className={$.title}>{data.header}</h1>
      </div>
    </section>
  );
}
