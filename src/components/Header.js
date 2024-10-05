import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, HamburgerIcon } from './icons';
import MobileMenu from './MobileMenu';

const borderClasses = ['shadow-sm', 'border-b'];

function Header() {
  const scroll = useRef(0);
  const headerElement = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="fixed w-full py-6 bg-white z-[1] responsive-pad"
    >
      <div className="mx-auto font-medium flex-cb max-content-w text-text-primary">
        <div className="w-full flex-c sm:justify-between md:justify-start gap-x-24">
          <a href="/" className="text-lg font-bold text-primary">
            Rohail Taha
          </a>
          <nav className="items-center hidden gap-x-8 sm:flex">
            <a href="/work">Work</a>
            <a href="/#about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <button
          type="button"
          className="sm:hidden"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {!isMobileMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
        </button>
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    </header>
  );
}

export default Header;
