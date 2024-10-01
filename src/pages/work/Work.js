import React from 'react';
import { HEADER_HEIGHT, PROJECTS } from '../../utils/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DotIcon } from '../../components/icons';

function Work() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-20 mx-auto max-content-w">
          <ul className="flex-c gap-x-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="font-bold underline">
              <a className="underline" href="/work">
                Work
              </a>
            </li>
          </ul>
          <section className="mt-10">
            <h1 className="text-3xl font-bold">Work</h1>
            <div className="grid grid-cols-2 gap-x-7 gap-y-9 mt-7">
              {Object.keys(PROJECTS).map(projectName => {
                const project = PROJECTS[projectName];
                return (
                  <div className="space-y-4" key={project.name}>
                    <div className="bg-primary rounded-xl h-[230px]"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <div className="text-sm flex-cb">
                        <ul className="flex-c">
                          {project.skills.slice(0, 3).map((skill, index) => {
                            const isLastItem = index === 2;
                            return (
                              <>
                                <li key={skill}>{skill}</li>
                                {!isLastItem && (
                                  <li key={skill}>
                                    <DotIcon />
                                  </li>
                                )}
                              </>
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
