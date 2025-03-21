'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/Services', label: 'Services' },
        { href: '/Book', label: 'Book Appointment' },
        { href: '/About', label: 'About Us' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-bodoni text-2xl sm:text-3xl font-semibold tracking-wide text-neutral-900">
                    Luxe Salon
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            className={`
                                font-inter text-xs lg:text-sm tracking-wider uppercase 
                                ${pathname === item.href 
                                    ? 'text-neutral-900 font-semibold' 
                                    : 'text-neutral-600 hover:text-neutral-900'}
                                transition-colors duration-300
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link 
                        href="/Dashboard" 
                        className="
                            bg-neutral-900 text-white 
                            px-4 lg:px-6 py-2 rounded-full 
                            font-inter text-xs lg:text-sm tracking-wider uppercase
                            hover:bg-neutral-700 transition-colors duration-300
                        "
                    >
                        Dashboard
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`
                        block w-5 sm:w-6 h-0.5 bg-neutral-900 
                        transition-all duration-300 
                        ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}
                    `}></span>
                    <span className={`
                        block w-5 sm:w-6 h-0.5 bg-neutral-900 my-1.5 
                        transition-all duration-300 
                        ${isMenuOpen ? 'opacity-0' : ''}
                    `}></span>
                    <span className={`
                        block w-5 sm:w-6 h-0.5 bg-neutral-900 
                        transition-all duration-300 
                        ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}
                    `}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`
                    fixed inset-0 bg-white 
                    md:hidden flex flex-col 
                    justify-center items-center 
                    space-y-4 sm:space-y-6 z-40
                    transition-opacity duration-300
                    h-screen w-screen
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}>
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`
                                text-xl sm:text-2xl tracking-wider uppercase 
                                ${pathname === item.href 
                                    ? 'text-neutral-900 font-semibold' 
                                    : 'text-neutral-600'}
                                transition-colors duration-300
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link 
                        href="/Dashboard" 
                        onClick={() => setIsMenuOpen(false)}
                        className="
                            bg-neutral-900 text-white 
                            px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                            text-lg sm:text-xl tracking-wider uppercase
                            hover:bg-neutral-700 transition-colors duration-300
                            mt-4
                        "
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;