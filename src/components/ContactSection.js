import React from 'react';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';

function ContactSection() {
  return (
    <section className="py-16 mx-auto max-content-w">
      <SectionHeading>Get in touch</SectionHeading>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
