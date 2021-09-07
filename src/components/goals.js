import $ from './goals.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import StyledMarkdown from '../components/styledMarkdown';

export default function Packages({ data }) {
  return (
    <>
      <section className={classNames($.goals, 'fblSection flexAround')}>
        <h2 className={$.goalsHeader}>{data.goalsHeader}</h2>
        <ul className={classNames($.goalsContainer)}>
          {data.goalsList.map(goal => (
            <li key={goal} className={$.packageTile}>
              <p>{goal}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
