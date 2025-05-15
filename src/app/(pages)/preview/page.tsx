"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
export default function Home() {
  const bottomNavRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    gsap.set(bottomNavRef.current, {
      y: 100,
      autoAlpha: 0,
    });
    gsap.to(bottomNavRef.current, {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);
  return (
    <div className="font-outfit  h-full">
      {/* <header>
        <nav className="">
          <div className="flex  fixed  w-full flex-row py-16 justify-between px-4">
             <Sheet>
              <SheetTrigger>
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
            <Image src="/Catin.svg" width={48} height={48} alt="Logo" />
            <button>
              <Avatar>
                <AvatarImage src="/Profile.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </nav>
      </header> */}
      <main className="flex justify-center relative h-full items-center px-4 flex-col">
        <p>Invitation Design</p>
        <div
          ref={bottomNavRef}
          style={{ visibility: "hidden" }}
          className="bg-lightblack-100 absolute flex justify-between items-center bottom-8 w-[90%] rounded-xl pl-4 pr-6 py-4"
        >
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="bg-[#FFFFFF] hover:text-white text-xs font-poppins font-medium text-black group"
            >
              <Link href={"/customize"}>
                Make it yours
                <Image
                  src="/ArrowThing.svg"
                  width={12}
                  height={9}
                  alt="ArrowDirection"
                  className="group-hover:[filter:brightness(0)_invert(1)]"
                />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent group"
              size="icon"
            >
              <Image
                src="/cart.svg"
                width={18}
                height={16}
                alt="CartIcon"
                className="group-hover:[filter:brightness(100)_invert(1)]"
              />
            </Button>
          </div>
          <div className="">
            <Image
              src="/CatinWhite.svg"
              width={24}
              height={24}
              alt="CatinWhiteIcon"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
