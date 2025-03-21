"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">Lux Salon</h2>
            <p className="text-neutral-400 mt-2">
              Elevating beauty with luxury and precision.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Book" className="text-neutral-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin Panel */}
          <div>
            <h3 className="text-lg font-semibold">Admin</h3>
            <p className="mt-3 text-neutral-400">Manage bookings & services.</p>
            <Link
              href="./Admin"
              className="inline-block mt-4 bg-white text-neutral-900 px-5 py-2 rounded-lg font-semibold hover:bg-neutral-300 transition-colors"
            >
              Admin Panel
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-neutral-500 text-sm">
         <p> © {new Date().getFullYear()} Lux Salon. All Rights Reserved. </p>
         <Link href="https://uditpantsportfolio.vercel.app/">Website by Udit Pant [Parikalpana IO]</Link>
        </div >
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-neutral-500 text-sm"></div>
      </div>
    </footer>
  );
}
