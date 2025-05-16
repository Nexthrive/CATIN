"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type WeddingTemplateCardProps = {
  title: string;
  imagePath: string;
  createdAt: Date;
  usageCount: number;
  linkTo: string;
};

export default function WeddingTemplateCard({
  title,
  imagePath,
  createdAt,
  usageCount,
  linkTo,
}: WeddingTemplateCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(createdAt);

  return (
    <div
      className="flex flex-col gap-6 md:gap-6 lg:gap-5"
      data-usage={usageCount}
      data-date={formattedDate}
    >
      <div
        style={{ backgroundImage: `url(/${imagePath})` }}
        className="relative bg-cover h-[282px] flex justify-center w-[168px]  lg:h-[350px] lg:w-[210px]"
      >
        <Button
          className="rounded-full absolute py-3 px-6 -bottom-4 mx-auto bg-lightblack-100 text-white font-poppins text-xs font-medium md:py-4 md:px-8 md:text-sm lg:py-5 lg:px-10 lg:text-sm"
          asChild
        >
          <Link href={linkTo}>Order Now</Link>
        </Button>
      </div>
      <div className="font-poppins">
        <p className="text-xs leading-3 text-center text-black md:text-sm md:leading-4 lg:text-sm lg:leading-5">{title}</p>
      </div>
    </div>
  );
}
