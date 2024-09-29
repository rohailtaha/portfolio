import React from 'react';
import { GITHUB_PROFILE_LINK, LINKEDIN_PROFILE_LINK } from '../utils/constants';
import { GithubIcon, LinkedInIcon } from './icons';

function Footer() {
  return (
    <footer className="py-4 mt-4 responsive-pad text-text-muted">
      <div className="mx-auto max-content-w flex-cb">
        <ul className="text-sm flex-c gap-x-10">
          <li>2024 © Rohail Taha</li>
          <li>
            <a href="#work"> Work</a>{' '}
          </li>
          <li>
            <a href="#work"> About</a>{' '}
          </li>
          <li>
            <a href="#work"> Experience</a>{' '}
          </li>
          <li>
            <a href="#work"> Contact</a>{' '}
          </li>
        </ul>
        <ul className="flex-c gap-x-4">
          <li>
            <a href={GITHUB_PROFILE_LINK}>
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href={LINKEDIN_PROFILE_LINK}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
