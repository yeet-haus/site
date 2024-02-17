import { links } from '../data';

function Footer() {
  return (
    <footer className="yeeter-section gap-5 w-full mt-16">
      {links.map(({ title, link, isExternal }, index) => (
        <a
          key={index}
          href={link}
          className="yeeter-link"
          {...(isExternal && { target: '_blank', rel: 'noreferrer noopener' })}
        >
          {title}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
