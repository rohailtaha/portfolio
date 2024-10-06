import React, { useMemo } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SectionHeading from '../../components/SectionHeading';
import { GithubIcon, TickIcon, ViewProjectIcon } from '../../components/icons';
import { HEADER_HEIGHT } from '../../utils/constants';

function SingleWork({ project }) {
  const breadCrumbLinks = useMemo(() => {
    return [
      { href: '/', name: 'Home' },
      { href: '/work', name: 'Work' },
      { href: `/work/${project.slug}`, name: project.name },
    ];
  }, [project.name]);

  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-32 mx-auto max-content-w">
          <BreadCrumbs links={breadCrumbLinks} />
          <section className="mt-10">
            <div className="mt-8">
              <img
                src={`/assets/${project.image.large}`}
                className="border rounded-xl"
              />
            </div>
            <div className="flex-cb mt-9">
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <span className="px-2 py-0.5 font-medium bg-purple-200 rounded-full text-primary">
                {project.year}
              </span>
            </div>
            <div className="gap-2 mt-6 flex-cb">
              <div>
                <h2 className="font-medium">Tech Stack</h2>
                <ul className="flex-wrap gap-1 mt-2 text-sm flex-c">
                  {project.skills.map(skill => {
                    return (
                      <li
                        key={skill}
                        className="px-3 py-1 font-medium bg-purple-200 rounded-full text-primary"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="font-medium flex-c gap-x-3">
                {project.codeLink && (
                  <a target="_blank" rel="noreferrer" href={project.codeLink}>
                    <GithubIcon />
                  </a>
                )}
                {project.viewLink && (
                  <a target="_blank" rel="noreferrer" href={project.viewLink}>
                    <ViewProjectIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="max-w-[680px] mt-16">
              <SectionHeading> Description</SectionHeading>
              <p className="mt-4">{project.description}</p>
            </div>
            <div className="mt-16 max-w-[680px]">
              <SectionHeading> Highlights</SectionHeading>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight, index) => {
                  return (
                    <li key={index} className="flex-c gap-x-2">
                      <span className="text-primary">
                        <TickIcon width="1.5rem" height="1.5rem" />{' '}
                      </span>
                      <p>{highlight}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SingleWork;
