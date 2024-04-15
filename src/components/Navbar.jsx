"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="h-[10vh] sm:px-10 pr-4 flex items-center justify-between border-b bg-white z-30 sticky top-0 w-full nav ">
      {/* logo */}

      <Link href="/" className=" link">
        <Image
          src="/assets/logo_white.jpg"
          alt="logo"
          width={120}
          height={120}
          className="object-contain w-auto h-auto"
        />
      </Link>

      {/* menu */}
      <ul className="flex gap-6 items-center">
        <Link className="hidden sm:flex  link " href="#about">
          about
        </Link>
        <Link className="hidden sm:flex  link" href="#services">
          services
        </Link>
        <Link className="hidden sm:flex  link" href="#experiences">
          experiences
        </Link>
        <Link className="hidden sm:flex  link" href="#projects">
          projects
        </Link>
        <Link className="hidden sm:flex  link" href="/">
          blog
        </Link>
        <Link className="link " href="#contact">
          <Button name="Let's talk"/>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;