import React from 'react';
import { ChatIcon } from './icons';

function Header() {
  return (
    <header className="fixed w-full py-4 bg-white shadow-sm border-b z-[1] responsive-pad">
      <div className="mx-auto font-medium flex-b max-content-w text-text-primary">
        <nav className="flex-c gap-x-16">
          <a href="/" className="text-lg font-bold text-primary">
            Rohail Taha
          </a>
          <div className="flex-c gap-x-8">
            <a href="/">Work</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </nav>
        <a
          href="#contact"
          className="px-4 py-2 border-2 rounded-full border-text-primary flex-cb gap-x-1 text-text-primary"
        >
          <ChatIcon /> <span>Let&apos;s talk</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
