import React from 'react';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';

function ContactSection() {
  return (
    <section className="mx-auto mt-10 max-content-w">
      <SectionHeading>Get in touch</SectionHeading>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
