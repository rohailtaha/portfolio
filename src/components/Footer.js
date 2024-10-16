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
    <footer className="pb-8 text-sm responsive-pad text-text-muted">
      <div className="mx-auto space-y-4 text-center xs:space-y-0 xs:text-left max-content-w xs:flex-cb">
        <ul>
          <li>© 2024 Rohail Taha</li>
        </ul>
        <ul className="flex-cc gap-x-4">
          <li>
            <a href={GITHUB_PROFILE_LINK} aria-label="View my GitHub profile">
              <GithubIcon width="1.4rem" height="1.4rem" />
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_PROFILE_LINK}
              aria-label="View my LinkedIn profile"
            >
              <LinkedInIcon width="1.4rem" height="1.4rem" />
            </a>
          </li>
          <li>
            <a
              href={CODESANDBOX_PROFILE_LINK}
              aria-label="View my CodeSandbox profile"
            >
              <CodeSandboxIcon width="1.25rem" height="1.25rem" />
            </a>
          </li>
          <li>
            <a
              href={FRONTEND_MENTOR_PROFILE_LINK}
              aria-label="View my Frontend Mentor profile"
            >
              <FrontendMentorIcon width="1.25rem" height="1.25rem" />
            </a>
          </li>
          <li>
            <a href={CODEPEN_PROFILE_LINK} aria-label="View my CodePen profile">
              <CodePenIcon width="1.25rem" height="1.25rem" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
