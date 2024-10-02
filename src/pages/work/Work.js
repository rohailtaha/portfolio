import React, { Fragment } from 'react';
import { HEADER_HEIGHT, PROJECTS } from '../../utils/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DotIcon } from '../../components/icons';
import BreadCrumbs from '../../components/BreadCrumbs';

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
            <div className="grid grid-cols-2 gap-x-7 gap-y-9 mt-7">
              {Object.keys(PROJECTS).map(projectSlug => {
                const project = PROJECTS[projectSlug];
                return (
                  <div className="space-y-4" key={project.name}>
                    <a
                      href={`/work/${projectSlug}`}
                      className="bg-primary rounded-xl h-[230px] block"
                    ></a>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
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
                        <span className="px-2 py-0.5 font-medium bg-purple-300 rounded-full text-primary">
                          {'2023'}
                        </span>
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
