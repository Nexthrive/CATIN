import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-outfit)]">
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
              <Image src="/Catin.svg" width={48} height={48} alt="Logo" className="md:ml-0" />
            
            <div className="hidden md:flex items-center space-x-8">
              <Link className="font-medium text-lg text-black hover:text-gray-600 transition-colors" href="/">
                Home
              </Link>
              <Link className="font-medium text-lg text-black hover:text-gray-600 transition-colors" href="/design">
                Designs
              </Link>
            </div>
            
            <button>
              <Avatar>
                <AvatarImage src="/Profile.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex mt-10 justify-center items-center flex-col md:mt-16 lg:mt-24">
        <div className="flex justify-center items-center flex-col gap-8 md:gap-12 lg:flex-row lg:w-full lg:mx-10 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h1 className="font-semibold text-[#171717] text-center text-[32px] tracking-tight leading-none max-w-[14ch] md:text-4xl lg:text-6xl lg:text-left lg:max-w-[30ch]">
              The only tool you need to craft perfect wedding invitations!
            </h1>
            <div className="flex flex-col justify-center items-center gap-4 mt-8 lg:items-start">
              <p className="text-black font-[family-name:var(--font-poppins)] font-medium leading-3 md:text-lg">
                Catin is here to help you...
              </p>
              <Button
                className="rounded-full py-3 px-6 bg-[#171717] text-white font-[family-name:var(--font-poppins)] text-xs font-medium md:text-sm md:py-4 md:px-8 hover:bg-gray-800 transition-colors"
                asChild
              >
                <Link href={"/design"}>Explore designs</Link>
              </Button>
            </div>
          </div>
          <div className=" ">
            <Image
              src="/4Rectangles.svg"
              width={251}
              height={248}
              alt="WeddingRectangles"
              className="md:w-[300px] md:h-[296px] lg:w-[400px] lg:h-[396px]"
            />
          </div>
        </div>
      </main>
      <section className="bg-accent-foreground mt-45 py-40 px-4 md:px-12 lg:px-24 md:py-60 lg:py-80">
        <div className="flex flex-col gap-4 md:gap-6 lg:max-w-5xl lg:mx-auto lg:text-center">
          <h2 className="font-semibold text-[32px] text-white md:text-4xl lg:text-7xl">
            How it{" "}
            <span className="underline decoration-[#6bcef5] decoration-2 underline-offset-4 lg:decoration-4">
              works
            </span>{" "}
            ?
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-white text-xs max-w-[35ch] leading-5 md:text-sm md:max-w-[45ch] lg:text-xl lg:max-w-none">
            Catin helps you make the perfect invitation in 3 simple steps,
            here's how...
          </p>
        </div>
        <div className="font-[family-name:var(--font-poppins)] mt-12 md:mt-16 lg:mt-24">
          {/* Mobile and Tablet Layout (unchanged) */}
          <div className="flex items-center md:max-w-2xl md:mx-auto lg:hidden">
            <Image
              src="/Pick.svg"
              width={175}
              height={175}
              alt="PickWeddingDesign"
              className="md:w-[225px] md:h-[225px]"
            />
            <div className="text-white flex flex-col gap-2 justify-center md:gap-4">
              <h2 className="font-semibold text-2xl md:text-3xl">Pick !</h2>
              <p className="text-xs leading-5 md:text-sm">
                Pick the design you like from the abundant of design that Catin
                offers
              </p>
            </div>
          </div>
          
          <div className="md:max-w-2xl md:mx-auto lg:hidden">
            <Image
              className="mx-auto md:w-[350px]"
              src="/line1.svg"
              width={290.06}
              height={126}
              alt="DirectionalLine"
            />
          </div>
          
          <div className="flex items-center md:max-w-2xl md:justify-end md:mx-auto lg:hidden">
            <div className="text-white flex flex-col gap-2 justify-center md:gap-4">
              <h2 className="font-semibold text-2xl md:text-3xl">Customize !</h2>
              <p className="text-xs leading-5 md:text-sm">
                Customize the design, bla bla someting bla bla make it yours
              </p>
            </div>
            <Image
              src="/Customize.svg"
              width={175}
              height={175}
              alt="OrderWeddingDesign"
              className="md:w-[225px] md:h-[225px]"
            />
          </div>
          
          <div className="md:max-w-2xl md:mx-auto lg:hidden">
            <Image
              className="mx-auto md:w-[350px]"
              src="/line2.svg"
              width={290.06}
              height={126}
              alt="DirectionalLine2"
            />
          </div>
          
          <div className="flex items-center md:max-w-2xl md:mx-auto lg:hidden">
            <Image
              src="/Order.svg"
              width={175}
              height={175}
              alt="OrderWeddingDesign"
              className="md:w-[225px] md:h-[225px]"
            />
            <div className="text-white flex flex-col gap-2 justify-center md:gap-4">
              <h2 className="font-semibold text-2xl md:text-3xl">Order !</h2>
              <p className="text-xs leading-5 md:text-sm">
                Pick the design you like from the abundant of design that Catin
                offers
              </p>
            </div>
          </div>
          
          {/* Desktop Layout (new) */}
          <div className="hidden lg:flex lg:justify-between lg:items-start lg:max-w-6xl lg:mx-auto">
            <div className="lg:flex lg:flex-col lg:items-center lg:w-1/3">
              <Image
                src="/Pick.svg"
                width={275}
                height={275}
                alt="PickWeddingDesign"
                className="lg:w-[275px] lg:h-[275px]"
              />
              <div className="text-white flex flex-col gap-4 justify-center text-center mt-6">
                <h2 className="font-semibold text-4xl">Pick !</h2>
                <p className="text-base max-w-[30ch]">
                  Pick the design you like from the abundant of design that Catin
                  offers
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Image
                src="/line1.svg"
                width={100}
                height={50}
                alt="DirectionalLine"
                className="rotate-90 mt-32"
              />
            </div>
            
            <div className="lg:flex lg:flex-col lg:items-center lg:w-1/3">
              <Image
                src="/Customize.svg"
                width={275}
                height={275}
                alt="CustomizeWeddingDesign"
                className="lg:w-[275px] lg:h-[275px]"
              />
              <div className="text-white flex flex-col gap-4 justify-center text-center mt-6">
                <h2 className="font-semibold text-4xl">Customize !</h2>
                <p className="text-base max-w-[30ch]">
                  Customize the design, bla bla someting bla bla make it yours
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Image
                src="/line2.svg"
                width={100}
                height={50}
                alt="DirectionalLine2"
                className="rotate-90 mt-32"
              />
            </div>
            
            <div className="lg:flex lg:flex-col lg:items-center lg:w-1/3">
              <Image
                src="/Order.svg"
                width={275}
                height={275}
                alt="OrderWeddingDesign"
                className="lg:w-[275px] lg:h-[275px]"
              />
              <div className="text-white flex flex-col gap-4 justify-center text-center mt-6">
                <h2 className="font-semibold text-4xl">Order !</h2>
                <p className="text-base max-w-[30ch]">
                  Pick the design you like from the abundant of design that Catin
                  offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
