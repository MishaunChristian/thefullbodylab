import $ from './hero.module.css';

export default function Hero() {
  return (
    <section className={$.hero}>
      <div className="fblSection">
        <p className="fblTextSmall">{data.eyebrow}</p>
        <h1 className={$.title}>A supported experimentation lab for your health journey</h1>
      </div>
    </section>
  );
}
