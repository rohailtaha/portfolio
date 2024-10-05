import React from 'react';

export default function MobileMenu() {
  return (
    <div className="absolute top-[100%] sm:hidden responsive-pad pb-6 shadow-md left-0 right-0 bg-white">
      <nav className="grid divide-y">
        <a className="py-4" href="/work">
          Work
        </a>
        <a className="py-4" href="/#about">
          About
        </a>
        <a className="py-4" href="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
