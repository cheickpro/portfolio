"use client";

import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`
    fixed inset-x-0 top-0 z-50
    transition-all duration-300
    backdrop-blur-xl
    ${
      scrolled
        ? "bg-white/90 shadow-lg dark:bg-slate-950/90"
        : "bg-white/40 dark:bg-slate-950/40"
    }
  `}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <NavbarActions />

        <MobileMenu />
      </Container>
    </header>
  );
}