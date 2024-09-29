import React from 'react';
import '../../styles/globals.css';
import { HEADER_HEIGHT } from '../../utils/constants';
import SectionHeading from '../../components/SectionHeading';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon';
import Header from '../../components/Header';

const PROJECTS = [
  {
    name: 'Startup, Inc',
    skills: ['Next.js', 'TailwindCSS', 'MongoDB'],
    year: 2023,
  },
  {
    name: 'Startup, Inc',
    skills: ['Next.js', 'TailwindCSS', 'MongoDB'],
    year: 2023,
  },
  {
    name: 'Startup, Inc',
    skills: ['Next.js', 'TailwindCSS', 'MongoDB'],
    year: 2023,
  },
  {
    name: 'Startup, Inc',
    skills: ['Next.js', 'TailwindCSS', 'MongoDB'],
    year: 2023,
  },
];

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
        <section className="pt-24 pb-16 mx-auto max-content-w">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">
              Building Robust Software Solutions that Enhance User Experience
            </h1>
            <p className="mt-5 text-xl">
              I&apos;m a fullstack web developer with 2.5+ years of professional
              experience.
            </p>
          </div>
        </section>
        <section className="py-16 mx-auto max-content-w">
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
            {PROJECTS.map(project => {
              return (
                <div className="space-y-4" key={project.name}>
                  <div className="bg-primary rounded-xl h-[230px]"></div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <div className="text-sm flex-cb">
                      <ul className="flex-c gap-x-2">
                        {project.skills.map(skill => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                      <span className="px-2 py-0.5 font-medium bg-purple-300 rounded-full text-primary">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-16 mx-auto max-content-w">
          <SectionHeading>Bio</SectionHeading>
          <div className="grid justify-between grid-cols-[1.2fr_1fr] mt-7 gap-x-24">
            <div>
              <div className="space-y-3 text-text-primary">
                <p>
                  For the past few years, I&apos;ve been working with various
                  startups, companies, and agencies.
                </p>
                <p>
                  I love collaborating with individuals to create fantastic
                  digital products while leveraging the latest technologies.
                </p>
                <p>
                  In my free time, you&apos;ll usually find me building side
                  projects and tackling frontend challenges to enhance my web
                  development skills.
                </p>
              </div>
              <a
                href="/"
                className="inline-block px-5 py-3 font-semibold text-white rounded-full mt-7 bg-primary"
              >
                <span>Download my resume</span>
                <span></span>{' '}
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
        <section className="py-16 mx-auto max-content-w">
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
        <section className="py-16 mx-auto max-content-w">
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
