import React from 'react';
import 'boxicons';

export default function Footer() {
  const socials = [
    {
      href: 'https://www.facebook.com/dianidreams',
      name: 'meta',
    },
    {
      href: 'https://www.instagram.com/dianidreams',
      name: 'instagram',
    },
    {
      href: 'https://www.twitter.com/dianidreams',
      name: 'twitter',
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
                  <box-icon type="logo" name={soc.name}></box-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
