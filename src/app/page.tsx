"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Home() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const rectangleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rectangles = rectangleRefs.current.filter(Boolean);
    
    gsap.from(rectangles, {
      y: 600,
      duration: 0.8,
      stagger: 0.25, 
      ease: "power2.out"
    });
  }, []);

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
            <div className="font-poppins hidden md:flex gap-4">
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
      <main className="flex justify-center items-center flex-col md:mt-16 lg:mt-10 w-full  lg:min-h-[657px]">
        <div className="flex justify-center  items-center relative flex-col gap-8 md:gap-12 lg:w-full lg:mx-10 lg:gap-0">
          <div className="flex flex-col lg:top-15  lg:relative items-center lg:items-center lg:w-1/2">
            <h1 className="font-medium text-blackC-100 text-center text-[32px] tracking-tight leading-none max-w-[14ch] md:text-4xl lg:max-w-[50ch] lg:leading-[88px] lg:text-[88px]  lg:text-center lg:text-nowrap">
              Pick. Customize. Send
            </h1>
            <div className="hidden lg:flex flex-col lg:gap-16 justify-center items-center  gap-4 mt-8 ">
              <p className="text-[#686868] font-poppins font-normal leading-6 max-w-[60ch] text-center md:text-base">
              From selecting your style to placing your order, create unique wedding invitations in just a few clicks. Let's get started!
              </p>
              <Button
                className="rounded-full lg:absolute lg:top-60 py-3 md:z-100 px-6 bg-blackC-100 text-white font-poppins text-xs font-medium md:text-base md:leading-3 md:py-7 md:px-10 md:rounded-[21px] hover:bg-gray-800 transition-colors"
                asChild
              >
                <Link href={"/design"}>Explore designs</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex opacity-[64%] justify-center relative">
              <div 
                ref={(el: HTMLDivElement | null) => { rectangleRefs.current[0] = el }}
                className="w-[318.67px] h-[558.6px] relative left-0 -bottom-75 rounded-[8px] bg-[#499ABB]"
              ></div>
              <div 
                ref={(el: HTMLDivElement | null) => { rectangleRefs.current[1] = el }}
                className="w-[318.67px] h-[558.6px] rounded-[8px] -left-20 -bottom-25 relative bg-blueC-100"
              ></div>
              <div 
                ref={(el: HTMLDivElement | null) => { rectangleRefs.current[2] = el }}
                className="w-[318.67px] h-[558.6px] rounded-[8px] absolute left-100 z-15 -bottom-100 bg-[#98E2FF]"
              ></div>
              <div 
                ref={(el: HTMLDivElement | null) => { rectangleRefs.current[3] = el }}
                className="w-[318.67px] h-[558.6px] rounded-[8px] relative -bottom-45 bg-[#63BDE1]"
              ></div>
            </div>
          <div className="lg:hidden ">
            <Image
              src="/4Rectangles.svg"
              width={251}
              height={248}
              alt="WeddingRectangles"
              className="md:w-[300px] md:h-[296px] lg:w-[400px] lg:h-[396px]"
            />
          </div>
          <div className=" flex lg:hidden flex-col justify-center items-center gap-4 lg:items-start">
              <p className="text-black font-poppins font-medium leading-3 md:text-lg">
                Catin is here to help you...
              </p>
              <Button
                className="rounded-full py-3 px-6 bg-blackC-100 text-white font-poppins text-xs font-medium md:text-sm md:py-4 md:px-8 hover:bg-gray-800 transition-colors"
                asChild
              >
                <Link href={"/design"}>Explore designs</Link>
              </Button>
            </div>
        </div>
      </main>
      <section className="bg-blackC-200 mt-20 lg:mt-0 md:relative md:z-100 py-40 px-4 md:px-12  lg:px-54 md:py-60 lg:py-80">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:max-w-none">
          <h2 className="font-semibold text-[32px] text-white md:text-4xl lg:text-6xl">
            How it{" "}
            <span className="underline decoration-blueC-100 decoration-2 underline-offset-4 lg:decoration-4">
              works
            </span>{" "}
            ?
          </h2>
          <p className="font-poppins text-white text-xs max-w-[35ch] leading-5 md:text-sm md:max-w-[45ch] lg:text-xl lg:max-w-[60ch]">
            Catin helps you make the perfect invitation in 3 simple steps,
            here's how...
          </p>
        </div>
        <div className="font-poppins mt-12 md:mt-16 lg:mt-24 w-full">
          <div className="flex items-center">
            <Image
              src="/Pick.svg"
              width={175}
              height={175}
              alt="PickWeddingDesign"
              className="md:w-[225px] md:h-[225px] lg:w-[275px] lg:h-[275px]"
            />
            <div className="text-white flex flex-col gap-2 justify-center md:gap-4 lg:gap-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl">Pick !</h2>
              <p className="text-xs leading-5 md:text-sm lg:text-lg lg:max-w-[35ch]">
                Pick the design you like from the abundant of design that Catin
                offers
              </p>
            </div>
          </div>
          
          <div>
            <Image
              className="mx-auto md:w-[350px] lg:w-[400px]"
              src="/line1.svg"
              width={290.06}
              height={126}
              alt="DirectionalLine"
            />
          </div>
          
          <div className="flex items-center md:justify-end">
            <div className="text-white flex flex-col gap-2 text-right justify-center md:gap-4 lg:gap-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl">Customize !</h2>
              <p className="text-xs leading-5 md:text-sm lg:text-lg lg:max-w-[35ch]">
                Customize the design, bla bla someting bla bla make it yours
              </p>
            </div>
            <Image
              src="/Customize.svg"
              width={175}
              height={175}
              alt="CustomizeWeddingDesign"
              className="md:w-[225px] md:h-[225px] lg:w-[275px] lg:h-[275px]"
            />
          </div>
          
          <div>
            <Image
              className="mx-auto md:w-[350px] lg:w-[400px]"
              src="/line2.svg"
              width={290.06}
              height={126}
              alt="DirectionalLine2"
            />
          </div>
          
          <div className="flex items-center">
            <Image
              src="/Order.svg"
              width={175}
              height={175}
              alt="OrderWeddingDesign"
              className="md:w-[225px] md:h-[225px] lg:w-[275px] lg:h-[275px]"
            />
            <div className="text-white flex flex-col gap-2 justify-center md:gap-4 lg:gap-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl">Order !</h2>
              <p className="text-xs leading-5 md:text-sm lg:text-lg lg:max-w-[35ch]">
                Pick the design you like from the abundant of design that Catin
                offers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
