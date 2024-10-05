import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  const { email, message, name, subject } = form;

  return (
    <form className="mt-8 space-y-3" onSubmit={handleFormSubmit}>
      <div className=" grid md:grid-cols-[1fr_auto] items-center gap-y-10 gap-x-10 lg:gap-x-20">
        <div className="space-y-3">
          <div className="space-y-3">
            <TextInput
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <TextInput
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              value={subject}
              required
              onChange={handleChange}
            />
            <div>
              <textarea
                required
                name="message"
                onChange={handleChange}
                placeholder="Message *"
                value={message}
                className="h-[200px] resize-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-500 shadow-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-3 font-semibold text-white rounded-full bg-primary"
          >
            Send Message
          </button>
        </div>

        <ul className="grid text-sm sm:grid-cols-2 md:grid-cols-1 gap-y-8">
          <li>
            <div> Email me </div>
            <div className="text-lg text-text-primary">
              {' '}
              taharohail77@gmail.com{' '}
            </div>
          </li>
          <li>
            <div> Call me </div>
            <div className="text-lg text-text-primary">+92 309010461</div>
          </li>
          <li>
            <div> Address </div>
            <div className="text-lg text-text-primary">Lahore, PAK</div>
          </li>
        </ul>
      </div>
    </form>
  );
}

function TextInput({
  placeholder = '',
  name,
  value,
  required = false,
  onChange,
}) {
  return (
    <div>
      <input
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-500"
        placeholder={required ? `${placeholder} *` : placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ContactForm;
