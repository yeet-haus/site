import { Link } from 'react-router-dom';
import { links } from '../data';

function Footer() {
  return (
    <footer className="yeeter-section gap-5 w-full mt-16">
      {links.map(({ title, link, isExternal }, index) =>
        isExternal ? (
          <a
            key={index}
            href={link}
            className="yeeter-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}
          </a>
        ) : (
          <Link
            key={index}
            to={link}
            className="yeeter-link"
          >
            {title}
          </Link>
        )
      )}
    </footer>
  );
}

export default Footer;
