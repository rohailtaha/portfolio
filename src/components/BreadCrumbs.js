import React, { Fragment } from 'react';

function BreadCrumbs({ links }) {
  return (
    <ul className="flex-c gap-x-3">
      {links.map((link, index) => {
        const isLastLink = index === links.length - 1;
        return (
          <Fragment key={link.href}>
            <li className={isLastLink ? 'font-bold underline' : ''}>
              <a href={link.href}>{link.name}</a>
            </li>
            {!isLastLink && (
              <li>
                <span>/</span>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

export default BreadCrumbs;
