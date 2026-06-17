"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  profile: any;
}

const Navbar = ({ profile }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-8 flex justify-between items-center">
      <Link href="/" className="text-lg font-black">
        {profile.name}
      </Link>
      <div className="hidden md:flex gap-8 text-primary/70 transition-colors ease-in-out">
        <Link href="/#projects" className="hover:text-primary md:font-medium">
          Projects
        </Link>
        <Link href="/#gallery" className="hover:text-primary md:font-medium">
          Gallery
        </Link>
        <Link href="/#about" className="hover:text-primary md:font-medium">
          About
        </Link>
        <Link href="/#contact" className="hover:text-primary md:font-medium">
          Contact
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <a
          href={`${profile.cv.asset.url}?dl=${profile.cv.asset.originalFilename}`}
          target="_blank"
        >
          <Button size="sm">Download CV</Button>
        </a>
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu />
        </Button>
      </div>
      {open && (
        <div className="md:hidden inset-0 fixed z-50 bg-background py-8 px-8">
          <div className="flex justify-end">
            <Button
              size="icon-lg"
              onClick={() => setOpen(false)}
              variant="ghost"
            >
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-8 text-2xl mt-16">
            <Link href="/#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/#gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
