"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WeddingTemplateCard from "@/components/WeddingTemplateCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type TemplateData = {
  id: string;
  title: string;
  imagePath: string;
  createdAt: Date;
  usageCount: number;
  linkTo: string;
};

export default function ContohPage() {

  const [activeButton, setActiveButton] = useState("All");


  const [searchTerm, setSearchTerm] = useState("");


  const templateData: TemplateData[] = [
    {
      id: "template1",
      title: "Minang X Jepang",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-03-15"),
      usageCount: 128,
      linkTo: "/preview",
    },
    {
      id: "template2",
      title: "Minang X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-01-15"),
      usageCount: 18,
      linkTo: "/preview",
    },
    {
      id: "template3",
      title: "Minang X Korea",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-03-15"),
      usageCount: 328,
      linkTo: "/preview",
    },
    {
      id: "template4",
      title: "Cina X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-02-15"),
      usageCount: 528,
      linkTo: "/preview",
    },
    {
      id: "template5",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template6",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template7",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template8",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template9",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template10",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template11",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
    {
      id: "template12",
      title: "Jawa X Sunda",
      imagePath: "WeddingTemplate.jpg",
      createdAt: new Date("2023-05-15"),
      usageCount: 1028,
      linkTo: "/preview",
    },
  ];
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const underline = underlineRef.current;
    if (!menu || !underline) return; 

    const links = Array.from(menu.querySelectorAll('a'));

    const activeLink = links.find(link => link.getAttribute('href') === pathname) || links[0];

    const moveLineTo = (el:any) => {
      const rect = el.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();

      underline.style.width = rect.width + 8 + 'px'; 
      underline.style.left = rect.left - menuRect.left - 3 + 'px';  
    };

    moveLineTo(activeLink);

    links.forEach(link => {
      link.addEventListener('mouseenter', () => moveLineTo(link));
    });

    menu.addEventListener('mouseleave', () => moveLineTo(activeLink));
  }, [pathname]);
  // This function filters templates based on the active button category
  const filterByCategory = (templates: TemplateData[]) => {
    switch (activeButton) {
      case "Popular":
        return [...templates].sort((a, b) => b.usageCount - a.usageCount);
      case "New Designs":
        return [...templates].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
      default:
        return templates;
    }
  };

  // This function filters templates based on search term
  const filterBySearch = (templates: TemplateData[]) => {
    if (!searchTerm.trim()) return templates; // If search is empty, return all templates

    return templates.filter((template) =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Combine both filters: first filter by search, then by category
  const getFilteredTemplates = () => {
    const searchFiltered = filterBySearch(templateData);
    return filterByCategory(searchFiltered);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="font-outfit">
     <header>
        <nav>
          <div className="flex flex-row py-16 justify-between px-4 md:px-12 lg:px-24">
            <div className="flex md:hidden items-center">
              <Sheet>
                <SheetTrigger className="md:hidden">
                  <Image src="/Hamburger.svg" width={32} height={24} alt="Logo" /> 
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="flex flex-col gap-10">
                    <SheetTitle className="text-2xl font-bold">CATIN</SheetTitle>
                    <SheetDescription className="flex flex-col gap-4">
                      <Link className="font-medium text-xl text-black" href="/">
                        Home
                      </Link>

                      <Link
                        className="font-medium text-xl text-black"
                        href="/design"
                      >
                        Designs
                      </Link>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

            </div>
            <div className="flex items-center">
              <div className="flex">
              <Image src="/Catin.svg" width={48} height={48} alt="Logo" className="md:ml-0" />
             
              </div>
              <div className="hidden md:block h-6 w-[1.2px] bg-blackC-100 mx-6"></div>
              <div
              className="relative hidden md:flex items-center space-x-8"
              ref={menuRef}
              >
                <Link
                  className={`font-normal text-base ${
                    pathname === '/' ? 'text-sky-600' : 'text-blackC-100'
                  } hover:text-gray-600 transition-colors`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`font-normal text-base ${
                    pathname === '/design' ? 'text-sky-600' : 'text-blackC-100'
                  } hover:text-gray-600 transition-colors`}
                  href="/design"
                >
                  Designs
                </Link>
                <Link
                  className={`font-normal text-base ${
                    pathname === '/invitation' ? 'text-sky-600' : 'text-blackC-100'
                  } hover:text-gray-600 transition-colors`}
                  href="/invitation"
                >
                  Active Invitations
                </Link>

                <div
                  ref={underlineRef}
                  className="absolute bottom-0 h-[3px] bg-sky-400 transition-all duration-300"
                />
              </div>
            </div>
            <div className="font-poppins flex gap-4">
              {/* <Avatar>
                <AvatarImage src="/Profile.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              <Button className="px-9 text-base leading-3 py-6  rounded-[21px]">
                <p>Sign Up</p>
              </Button>
              <Button variant={"outline"} className="text-blueC-100 px-9 text-base leading-3 py-6  rounded-[21px] border-blueC-100 border-[1.5px]">
                Login
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex px-4 sm:px-24">
        <div className="flex flex-col  w-full gap-6">
          <div className="">
            <h1 className="font-semibold text-blackC-100 text-left text-[32px] tracking-tight leading-none ">
              It’s simple
            </h1>
            <h1 className="font-semibold text-blackC-100 text-left text-[32px] tracking-tight leading-none ">
              Pick. Design. Send.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="flex items-center overflow-hidden py-1 px-2 font-poppins rounded-full bg-[#FFFFFF] shadow-[0px_2px_10px_2px_rgba(0,0,0,0.05)]">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="flex-1 border-0 bg-transparent shadow-none placeholder:text-[#BDBDBD] placeholder:leading-3 text-xs focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="mr-1 h-9 w-9 rounded-full"
                  aria-label="Search"
                >
                  <Image src="Search.svg" width={15} height={15} alt="search" />
                </Button>
              </div>
            </div>
            <div className="flex gap-5">
              <Button
                className={
                  activeButton === "All"
                    ? "bg-blueC-100 rounded-xl px-3 py-2 text-black hover:bg-blueC-100/70"
                    : "rounded-xl hover:bg-zinc-500/30 px-3 py-2"
                }
                variant={activeButton === "All" ? "default" : "ghost"}
                onClick={() => handleButtonClick("All")}
              >
                All
              </Button>
              <Button
                className={
                  activeButton === "Popular"
                    ? "bg-blueC-100 rounded-xl px-3 py-2 text-black hover:bg-blueC-100/70"
                    : "rounded-xl hover:bg-zinc-500/30 px-3 py-2"
                }
                variant={activeButton === "Popular" ? "default" : "ghost"}
                onClick={() => handleButtonClick("Popular")}
              >
                Popular
              </Button>
              <Button
                className={
                  activeButton === "New Designs"
                    ? "bg-blueC-100 rounded-xl px-3 py-2 text-black hover:bg-blueC-100/70"
                    : "rounded-xl hover:bg-zinc-500/30 px-3 py-2"
                }
                variant={activeButton === "New Designs" ? "default" : "ghost"}
                onClick={() => handleButtonClick("New Designs")}
              >
                New Designs
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="flex px-4 sm:px-24 lg:w-full mt-6">
        <div className="grid grid-cols-2 mx-auto  sm:flex sm:flex-wrap sm:justify-start  gap-6 md:gap-8 lg:gap-10">
          {getFilteredTemplates().map((template) => (
            <WeddingTemplateCard
              key={template.id}
              title={template.title}
              imagePath={template.imagePath}
              createdAt={template.createdAt}
              usageCount={template.usageCount}
              linkTo={template.linkTo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
