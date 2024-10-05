import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
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
          <section className="mt-10 space-y-7">
            <h1 className="text-3xl font-bold">Work</h1>
            <Projects projects={Object.keys(PROJECTS)} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
