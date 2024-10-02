import React from 'react';
import {
  CODEPEN_PROFILE_LINK,
  CODESANDBOX_PROFILE_LINK,
  FRONTEND_MENTOR_PROFILE_LINK,
  GITHUB_PROFILE_LINK,
  LINKEDIN_PROFILE_LINK,
} from '../utils/constants';
import {
  CodePenIcon,
  CodeSandboxIcon,
  FrontendMentorIcon,
  GithubIcon,
  LinkedInIcon,
} from './icons';

function Footer() {
  return (
    <footer className="pt-4 pb-8 mt-4 text-sm responsive-pad text-text-muted">
      <div className="mx-auto max-content-w flex-cb">
        <ul className="flex-c gap-x-10">
          <li>© 2024 Rohail Taha</li>
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
          <li>
            <a href={CODESANDBOX_PROFILE_LINK}>
              <CodeSandboxIcon />
            </a>
          </li>
          <li>
            <a href={FRONTEND_MENTOR_PROFILE_LINK}>
              <FrontendMentorIcon />
            </a>
          </li>
          <li>
            <a href={CODEPEN_PROFILE_LINK}>
              <CodePenIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
