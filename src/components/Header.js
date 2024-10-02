import React, { useEffect, useRef } from 'react';
import { ChatIcon } from './icons';

const borderClasses = ['shadow-sm', 'border-b'];

function Header() {
  const scroll = useRef(0);
  const headerElement = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!headerElement.current) {
        headerElement.current = document.getElementById('header');
      }
      const header = headerElement.current;
      scroll.current = window.scrollY;
      if (scroll.current === 0) {
        header?.classList.remove(...borderClasses);
      } else {
        header?.classList.add(...borderClasses);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed w-full py-4 bg-white z-[1] responsive-pad"
    >
      <div className="mx-auto font-medium flex-b max-content-w text-text-primary">
        <nav className="flex-c gap-x-16">
          <a href="/" className="text-lg font-bold text-primary">
            Rohail Taha
          </a>
          <div className="flex-c gap-x-8">
            <a href="/work">Work</a>
            <a href="/#about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        <a
          href="/contact"
          className="px-4 py-2 border-2 rounded-full border-text-primary flex-cb gap-x-1 text-text-primary"
        >
          <ChatIcon /> <span>Let&apos;s talk</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
