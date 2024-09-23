"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../../public/profile_picture.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <section className="navbar-section bg-[#2B2B2C] rounded-t relative">
      <div className="flex md:hidden justify-between items-center px-4 md:px-10 py-2">
        <div>
          <Image
            src={profile}
            alt="profile_picture"
            className="h-8 w-8 rounded-[50%] transition-all duration-200 ease-in-out cursor-pointer"
            onClick={handleOpenProfile}
          />
        </div>
        <Drawer>
          <DrawerTrigger>
            <span className="text-2xl cursor-pointer">
              <GiHamburgerMenu />
            </span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription>
                <ul className="space-y-4 text-xl font-regular">
                  <DrawerClose asChild>
                    <li>
                      <Link href="/">about</Link>
                    </li>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <li>
                      <Link href="/resume">resume</Link>
                    </li>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <li>
                      <Link href="/projects">projects</Link>
                    </li>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                  </DrawerClose>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button size="icon">
                  <span className="h-4 w-4">X</span>
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default Navbar;
