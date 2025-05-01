"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WeddingTemplateCard from "@/components/WeddingTemplateCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TemplateData = {
  id: string;
  title: string;
  imagePath: string;
  createdAt: Date;
  usageCount: number;
  linkTo: string;
};

export default function ContohPage() {
  // Track which category button is active
  const [activeButton, setActiveButton] = useState("All");

  // Add state to track the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Your template data array
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
  ];

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
    <div className="font-[family-name:var(--font-outfit)]">
      <header>
        <nav>
          <div className="flex flex-row pt-16 pb-10 justify-between px-4">
            <button>
              <Image src="/Hamburger.svg" width={32} height={24} alt="Logo" />
            </button>
            <Image src="/Catin.svg" width={48} height={48} alt="Logo" />
            <button>
              <Avatar>
                <AvatarImage src="/Profile.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex px-4">
        <div className="flex flex-col  w-full gap-6">
          <div className="">
            <h1 className="font-semibold text-[#171717] text-left text-[32px] tracking-tight leading-none ">
              It’s simple
            </h1>
            <h1 className="font-semibold text-[#171717] text-left text-[32px] tracking-tight leading-none ">
              Pick. Design. Send.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="flex items-center overflow-hidden py-1 px-2 font-[family-name:var(--font-poppins)] rounded-full bg-[#FFFFFF] shadow-[0px_2px_10px_2px_rgba(0,0,0,0.05)]">
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
                    ? "bg-[#6BCEF5] rounded-xl px-3 py-2 text-black hover:bg-[#6BCEF5]/70"
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
                    ? "bg-[#6BCEF5] rounded-xl px-3 py-2 text-black hover:bg-[#6BCEF5]/70"
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
                    ? "bg-[#6BCEF5] rounded-xl px-3 py-2 text-black hover:bg-[#6BCEF5]/70"
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
      <section className="flex px-4 mt-6">
        <div className="grid grid-cols-2 gap-6 mx-auto h-full">
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
