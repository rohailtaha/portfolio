import React from 'react';

function Header() {
  return (
    <header className="fixed w-full py-6 bg-white shadow-sm border-b z-[1] responsive-pad">
      <nav className="mx-auto font-medium max-content-w flex-c gap-x-16 text-text-primary">
        <a href="/" className="text-lg font-bold text-primary">
          Rohail Taha
        </a>
        <div className="flex-c gap-x-8">
          <a href="/">Work</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
