export default function resolveProductionUrl(document) {
  return `https://thefullbodylab.vercel.app/${document.slug.current}`;
}
