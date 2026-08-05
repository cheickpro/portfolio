"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  ArrowUp
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="text-2xl font-bold">
              Cheick Mohamed Rachid
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              AI Researcher specializing in Deep Learning,
              Cybersecurity, Network Security and Intelligent Systems.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-4 font-semibold">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-4 font-semibold">
              Connect
            </h3>

            <div className="flex gap-4">

              <Link
                href="https://github.com/cheickpro/"
                target="_blank"
                className="rounded-xl border p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com/in/cheick-mohamed-rachid-6b9779173"
                target="_blank"
                className="rounded-xl border p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="mailto:2424481501@ogr.gumushane.edu.tr"
                className="rounded-xl border p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Mail />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 md:flex-row">

          <p>
            © {new Date().getFullYear()} Cheick Mohamed Rachid.
            All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}