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
          <div className="flex flex-row py-16 justify-between px-4">
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
      </header>
      <main className="flex mt-10  justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col gap-8">
          <h1 className="font-semibold text-[#171717] text-center text-[32px] tracking-tight leading-none max-w-[14ch]">
            The only tool you need to craft perfect wedding invitations!
          </h1>
          <Image
            src="/4Rectangles.svg"
            width={251}
            height={248}
            alt="WeddingRectangles"
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-black font-[family-name:var(--font-poppins)] font-medium leading-3">
              Catin is here to help you...
            </p>
            <Button
              className="rounded-full py-3 px-6 bg-[#171717] text-white font-[family-name:var(--font-poppins)] text-xs font-medium"
              asChild
            >
              <Link href={"/design"}>Explore designs</Link>
            </Button>
          </div>
        </div>
      </main>
      <section className="bg-accent-foreground mt-45 py-40 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[32px] text-white">
            How it{" "}
            <span className="underline decoration-[#6bcef5] decoration-2 underline-offset-4">
              works
            </span>{" "}
            ?
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-white text-xs max-w-[35ch] leading-5">
            Catin helps you make the perfect invitation in 3 simple steps,
            here’s how...
          </p>
        </div>
        <div className="font-[family-name:var(--font-poppins)]">
          <div className="flex items-center">
            <Image
              src="/Pick.svg"
              width={175}
              height={175}
              alt="PickWeddingDesign"
            />
            <div className="text-white flex flex-col gap-2 justify-center">
              <h2 className="font-semibold text-2xl">Pick !</h2>
              <p className="text-xs leading-5">
                Pick the design you like from the abundant of design that Catin
                offers
              </p>
            </div>
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/line1.svg"
              width={290.06}
              height={126}
              alt="DirectionalLine"
            />
          </div>
          <div className="flex items-center">
            <div className="">
              <div className="text-white flex flex-col gap-2 justify-center text-right">
                <h2 className="font-semibold text-2xl ">Customize !</h2>
                <p className="text-xs leading-5 max-w-[24ch]">
                  Customize the design, bla bla someting bla bla make it yours
                </p>
              </div>
            </div>
            <Image
              src="/Customize.svg"
              width={175}
              height={175}
              alt="CuztomizeWeddingDesign"
            />
          </div>
          <div className="">
            <Image
              className="mx-auto"
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
            />
            <div className="text-white flex flex-col gap-2 justify-center">
              <h2 className="font-semibold text-2xl">Order !</h2>
              <p className="text-xs leading-5">
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
