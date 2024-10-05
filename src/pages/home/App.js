import React, { Fragment } from 'react';
import '../../styles/globals.css';
import { HEADER_HEIGHT, PROJECTS } from '../../utils/constants';
import SectionHeading from '../../components/SectionHeading';
import Footer from '../../components/Footer';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon';
import Header from '../../components/Header';
import { DotIcon, ViewProjectIcon } from '../../components/icons';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import {
  CODESANDBOX_PROFILE_LINK,
  GITHUB_PROFILE_LINK,
  LINKEDIN_PROFILE_LINK,
} from '../../utils/constants';
import {
  CodeSandboxIcon,
  GithubIcon,
  LinkedInIcon,
} from '../../components/icons';

const EXPERIENCES = [
  {
    company: 'JFreaks Software Sol.',
    title: 'FullStack Developer',
    start: 'Feb 2024',
    end: 'Now',
  },
  {
    company: 'ThinkSoft',
    title: 'FullStack Developer',
    start: 'Jan 2022',
    end: 'Jan 2024',
  },
];

const EDUCATION = [
  {
    institution: 'National University of Sciences and Technology',
    degree: 'BSCS',
    start: '2019',
    end: '2023',
  },
  {
    institution: 'Madina College',
    degree: 'Intermediate',
    start: '2017',
    end: '2019',
  },
  {
    institution: 'Allied Schools',
    degree: 'Matriculation',
    start: '2015',
    end: '2017',
  },
];

const SKILLS = {
  frontend: [
    'Next.js',
    'React.js',
    'TailwindCSS',
    'HTML/CSS',
    'JavaScript',
    'Typescript',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Firebase',
  ],
  other: ['Docker', 'Figma'],
};

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <section className="pt-32 pb-32 mx-auto max-content-w">
          <div className="grid items-center grid-cols-[1fr,auto] grow">
            <div>
              <h1 className="text-6xl font-bold">
                Hi, I&apos;m <br></br>
                <span className="text-primary"> Rohail Taha </span>
              </h1>
              <p className="mt-5 text-xl">
                A Full Stack Developer Crafting Elegant Solutions for the Web.
              </p>
            </div>
            <ul className="mt-8 space-y-4 justify-self-end">
              <li>
                <a href={GITHUB_PROFILE_LINK}>
                  <GithubIcon width="1.75rem" height="1.75rem" />
                </a>
              </li>
              <li>
                <a href={LINKEDIN_PROFILE_LINK}>
                  <LinkedInIcon width="1.75rem" height="1.75rem" />
                </a>
              </li>
              <li>
                <a href={CODESANDBOX_PROFILE_LINK}>
                  <CodeSandboxIcon width="1.75rem" height="1.75rem" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="work" className="pt-16 mx-auto max-content-w">
          <div className="flex-cb">
            <SectionHeading>Selected Work</SectionHeading>
            <div>
              <a
                href="/work"
                className="px-4 py-2 font-medium border-2 rounded-full flex-c gap-x-2 border-text-primary text-text-primary"
              >
                <span className="text-sm"> Show all projects</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-9 mt-7">
            {Object.keys(PROJECTS)
              .slice(0, 4)
              .map(projectSlug => {
                const project = PROJECTS[projectSlug];
                return (
                  <div className="space-y-4" key={projectSlug}>
                    <a
                      href={`/work/${projectSlug}`}
                      className="block border h-[212px]"
                    >
                      <img
                        src={`/${project.image.small}`}
                        className="w-full h-full"
                      />
                    </a>
                    <div className="space-y-2">
                      <div className="flex-cb">
                        <h3 className="text-lg font-semibold">
                          {project.name}
                        </h3>
                        <div className="font-medium flex-c gap-x-2">
                          {project.codeLink && (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={project.codeLink}
                            >
                              <GithubIcon />
                            </a>
                          )}
                          {project.viewLink && (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={project.viewLink}
                            >
                              <ViewProjectIcon />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-sm flex-cb">
                        <ul className="flex-c gap-x-[3px]">
                          {project.skills.slice(0, 3).map((skill, index) => {
                            const isLastItem =
                              index === project.skills.length - 1 ||
                              index === 2;
                            return (
                              <Fragment key={skill}>
                                <li>{skill}</li>
                                {!isLastItem && (
                                  <li>
                                    <DotIcon />
                                  </li>
                                )}
                              </Fragment>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <section id="about" className="pt-32 mx-auto max-content-w">
          <SectionHeading>Bio</SectionHeading>
          <div className="grid justify-between grid-cols-[1.4fr_1fr] mt-7 gap-x-24">
            <div>
              <div className="space-y-3 text-text-primary">
                <p>
                  I am a Full Stack Developer with over 2.5 years of experience
                  creating user-friendly applications. I have a strong
                  understanding of software development best practices. I love
                  collaborating with individuals to create fantastic digital
                  products.
                </p>
                <p>
                  My background in Computer Science, helps me understand and
                  solve complex problems. In addition to my development
                  expertise, I have hands-on team management experience, having
                  led multiple projects and mentored junior developers.
                </p>
                <p>
                  In my free time, you&apos;ll usually find me building side
                  projects and learning new topics to enhance my engineering
                  skills.
                </p>
              </div>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center px-5 py-3 font-semibold text-white rounded-full gap-x-2 mt-7 bg-primary"
              >
                <span>Download my resume</span>
                <span className="block w-[24px] h-[24px] bg-white rounded-full flex-cc text-primary">
                  <ArrowDownIcon />
                </span>{' '}
              </a>
            </div>
            <div>
              <div className="px-2 pt-2 text-center -rotate-[6deg] -translate-y-10 bg-white border shadow-lg w-fit">
                <img
                  src="/me.png"
                  className="bg-white w-[219px] h-[306px]"
                ></img>
                <span className="inline-block my-1 italic">This is me!</span>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-32 mx-auto max-content-w">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <SectionHeading>Work Experience</SectionHeading>
              <ul className="mt-10 space-y-6">
                {EXPERIENCES.map(experience => {
                  return (
                    <li className="pb-6 border-b" key={experience.company}>
                      <h3 className="text-lg font-bold">{experience.title}</h3>
                      <div className="text-sm font-medium flex-cb gap-x-4">
                        <span>{experience.company}</span>
                        <span>
                          {experience.start} - {experience.end}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <SectionHeading>Education</SectionHeading>
              <ul className="mt-10 space-y-6">
                {EDUCATION.map(education => {
                  return (
                    <li className="pb-6 border-b" key={education.institution}>
                      <h3 className="text-lg font-bold">{education.degree}</h3>
                      <div className="text-sm font-medium flex-cb gap-x-4">
                        <span>{education.institution}</span>
                        <span className="text-nowrap">
                          {education.start} - {education.end}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="pt-16 pb-32 mx-auto max-content-w">
          <SectionHeading>Tech Stack</SectionHeading>
          <div className="grid grid-cols-3 font-medium gap-x-16 mt-7 text-text-primary">
            <div>
              <h3 className="text-text-secondary">Frontend</h3>
              <ul className="mt-4 flex flex-col gap-y-4 flex-wrap max-h-[250px]">
                {SKILLS.frontend.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-text-secondary">Backend</h3>
              <ul className="mt-4 flex flex-col gap-y-4 flex-wrap max-h-[250px]">
                {SKILLS.backend.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-text-secondary">Other</h3>
              <ul className="mt-4 flex flex-col gap-y-4 flex-wrap max-h-[250px]">
                {SKILLS.other.map(skill => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
