import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import $ from './styledMarkdown.module.css';

import Link from 'next/link';

function MarkdownLink({ ...props }) {
  return <a className="intTextLink" {...props} />;
}

export default function StyledMarkdown({ className, children }) {
  return (
    <ReactMarkdown
      className={classnames($.reactMarkdown, className)}
      components={{
        a: MarkdownLink
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
