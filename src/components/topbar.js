"use client";

import Image from "next/image";
import { Button, Navbar } from "flowbite-react";

const TopBar = ({active}) => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <Image
          src="/logo.jpg"
          width={100}
          height={100}
          className="mr-3 h-12 w-12 min-h-2 min-w-2"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
          Only @
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={active === "home"}>Home</Navbar.Link>
        <Navbar.Link href="/about" active={active === "about"}>About</Navbar.Link>
        <Navbar.Link href="#" active={active === "services"}>Services</Navbar.Link>
        <Navbar.Link href="#" active={active === "pricing"}>Pricing</Navbar.Link>
        <Navbar.Link href="#" active={active === "contact"}>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar