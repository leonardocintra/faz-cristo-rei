import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'A Fazenda', href: '#about' },
    { name: 'Atividades', href: '#activities' },
    { name: 'Lazer', href: '#leisure' },
    { name: 'Família', href: '#family' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-sm shadow-sm border-b border-coffee-light/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold text-coffee-dark">
          Fazenda Cristo Rei
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-coffee-medium hover:text-orange-burnt transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-coffee-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-cream shadow-md md:hidden flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-coffee-medium hover:bg-coffee-light/10 hover:text-orange-burnt"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
