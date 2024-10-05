import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { GithubIcon, ViewProjectIcon } from '../../components/icons';
import { HEADER_HEIGHT, PROJECTS } from '../../utils/constants';

const breadCrumbLinks = [
  { href: '/', name: 'Home' },
  { href: '/work', name: 'Work' },
];

function Work() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-32 mx-auto max-content-w">
          <BreadCrumbs links={breadCrumbLinks} />
          <section className="mt-10">
            <h1 className="text-3xl font-bold">Work</h1>
            <div className="grid md:grid-cols-2 gap-x-7 gap-y-9 mt-7">
              {Object.keys(PROJECTS).map(projectSlug => {
                const project = PROJECTS[projectSlug];
                return (
                  <div className="space-y-4" key={project.name}>
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
                          {project.skills.slice(0, 3).map(skill => {
                            return (
                              <li
                                key={skill}
                                className="px-3 py-1 text-xs font-medium bg-purple-100 rounded-full text-primary"
                              >
                                {skill}
                              </li>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
