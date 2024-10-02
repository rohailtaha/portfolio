import React from 'react';
import { HEADER_HEIGHT } from '../../utils/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import BreadCrumbs from '../../components/BreadCrumbs';

const breadCrumbLinks = [
  { href: '/', name: 'Home' },
  { href: '/contact', name: 'Contact' },
];

function Contact() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-32 mx-auto max-content-w">
          <BreadCrumbs links={breadCrumbLinks} />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
