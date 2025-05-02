"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Toaster } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const fromSchema = z.object({
  groomFullName: z.string(),
  groomName: z.string(),
  groomFatherName: z.string(),
  groomMotherName: z.string(),
  brideFullName: z.string(),
  brideName: z.string(),
  brideFatherName: z.string(),
  brideMotherName: z.string(),
  adress: z.string(),
  location: z.string(),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      groomFullName: "",
      groomName: "",
      groomFatherName: "",
      groomMotherName: "",
      brideFullName: "",
      brideName: "",
      brideFatherName: "",
      brideMotherName: "",
      adress: "",
      location: "",
    },
  });

  function onSubmit(data: z.infer<typeof fromSchema>) {
    console.log(data);
    setTimeout(() => {
      toast.success("Success", {
        description: "Personalization was a success",
        duration: 2000,
      });
    }, 100);
  }

  return (
    <div className="font-[family-name:var(--font-outfit)]  h-full">
      <header>
        <nav className="">
          <div className="flex w-full flex-row py-16 justify-between px-4">
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
      <main className="flex justify-center h-full items-center px-4 gap-5 flex-col">
        <div className="flex gap-4 p-4 items-center bg-white border-[0.5px] border-[#D3D3D3] rounded-md w-full shadow-[0_4px_30px_2px_rgba(0,0,0,0.04)]">
          <div className="w-[52px] h-[52px] rounded-md bg-[#D9D9D9]"></div>
          <div className="font-[family-name:var(--font-poppins)]">
            <p className="italic text-[8px] leading-2 text-[#ABA8A8]">
              Customizing
            </p>
            <h4 className="leading-4 text-xs font-semibold">
              Sleek & Moderen Javanese
            </h4>
          </div>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4 p-6 justify-center flex-col bg-white border-[0.5px] border-[#D3D3D3] rounded-md w-full shadow-[0_4px_30px_2px_rgba(0,0,0,0.04)]">
            <div className="">
              <h1>Groom's Data</h1>
            </div>
            <div className="">
              <Form {...form}>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-5  gap-3 grid-rows-1 ">
                    <div className="col-span-3">
                      <FormField
                        control={form.control}
                        name="groomFullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                required
                                placeholder="Full Name"
                                className="border-t-0 border-x-0 focus-visible:ring-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="groomName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                required
                                placeholder="Name"
                                className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="groomFatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Father's Name"
                            className="border-t-0 border-x-0 focus-visible:ring-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="groomMotherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Mother's Name"
                            className="border-t-0 border-x-0 focus-visible:ring-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="flex gap-4 p-6 justify-center flex-col bg-white border-[0.5px] border-[#D3D3D3] rounded-md w-full shadow-[0_4px_30px_2px_rgba(0,0,0,0.04)]">
            <div className="">
              <h1>Brides's Data</h1>
            </div>
            <div className="">
              <Form {...form}>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-5  gap-3 grid-rows-1 ">
                    <div className="col-span-3">
                      <FormField
                        control={form.control}
                        name="brideFullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                required
                                placeholder="Full Name"
                                className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="brideName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                required
                                placeholder="Name"
                                className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="brideFatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Father's Name"
                            className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="brideMotherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Mother's Name"
                            className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="flex gap-4 p-6 justify-center flex-col bg-white border-[0.5px] border-[#D3D3D3] rounded-md w-full shadow-[0_4px_30px_2px_rgba(0,0,0,0.04)]">
            <div className="">
              <h1>Event Data</h1>
            </div>
            <div className="">
              <Form {...form}>
                <div className="flex flex-col gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Venue"
                            className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="adress"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            placeholder="Address"
                            className="border-t-0 focus-visible:ring-0 border-x-0 shadow-none rounded-none border-[#171717] border-b-[0.5px] placeholder:text-[#A4A4A4] placeholder:italic text-xs p-2"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </div>
          </div>
          <Button type="submit" className="bg-[#10B981] hover:bg-[#0D9668]">
            Submit
          </Button>
          <Toaster
            richColors
            position="bottom-right"
            toastOptions={{
              style: { zIndex: 9999 },
              duration: 2000,
            }}
          />
        </form>
      </main>
    </div>
  );
}
