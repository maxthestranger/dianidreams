import * as React from 'react';

export default function Footer() {
  const socials = [
    {
      href: 'https://www.facebook.com/dianidreams',
      name: 'bi-meta',
    },
    {
      href: 'https://www.instagram.com/dianidreams',
      name: 'bi-instagram',
    },
    {
      href: 'https://www.twitter.com/dianidreams',
      name: 'bi-twitter',
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-upper"></div>
        <div className="footer-lower">
          <p>
            &copy; Copyright {new Date().getFullYear()} Diani Dreams - All
            Rights Reserved.
          </p>
          <ul>
            {socials.map((soc, i) => (
              <li key={i}>
                <a href={soc.href}>
                  <i className={soc.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
