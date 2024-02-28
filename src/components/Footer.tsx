import { Link } from 'react-router-dom';
import { links } from '../data';

function Footer() {
  return (
    <footer className="yeeter-section py-8 gap-2 w-full mt-4 lg:mt-16">
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
          <Link key={index} to={link} className="yeeter-link">
            {title}
          </Link>
        )
      )}
    </footer>
  );
}

export default Footer;
