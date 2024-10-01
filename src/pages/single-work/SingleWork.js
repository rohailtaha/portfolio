import React from 'react';
import { HEADER_HEIGHT } from '../../utils/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import { DotIcon } from '../../components/icons/DotIcon';
import { TickIcon } from '../../components/icons';

function SingleWork({ project }) {
  console.log(project);
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-16 mx-auto max-content-w">
          <ul className="flex-c gap-x-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="font-bold underline">
              <a className="underline" href={window.location.href}>
                {project.name}
              </a>
            </li>
          </ul>
          <section className="mt-10">
            <div className="mt-8">
              {/* <img className="h-[454px] bg-primary rounded-xl" /> */}
              <div className="h-[454px] bg-primary rounded-xl" />
            </div>
            <div className="flex-cb mt-9">
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <span className="px-2 py-0.5 font-medium bg-purple-300 rounded-full text-primary">
                {'2023'}
              </span>
            </div>
            <div className="mt-6 text-sm">
              <h2 className="font-medium">Tech Stack</h2>
              <ul className="mt-2 flex-c">
                {project.skills.map((skill, index) => {
                  const isLastItem = index === project.skills.length - 1;
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
            </div>
            <div className="mt-16">
              <SectionHeading> Description</SectionHeading>
              <p className="mt-4">{project.description}</p>
            </div>
            <div className="mt-16">
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
