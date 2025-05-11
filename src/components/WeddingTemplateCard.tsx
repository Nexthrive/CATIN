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
      className="flex flex-col gap-6"
      data-usage={usageCount}
      data-date={formattedDate}
    >
      <div
        style={{ backgroundImage: `url(/${imagePath})` }}
        className=" relative bg-cover h-[282px] flex justify-center w-[168px]"
      >
        <Button
          className="rounded-full absolute py-3 px-6 -bottom-4 mx-auto bg-[#171717] text-white font-[family-name:var(--font-poppins)] text-xs font-medium"
          asChild
        >
          <Link href={linkTo}>Order Now</Link>
        </Button>
      </div>
      <div className="font-[family-name:var(--font-poppins)] ">
        <p className="text-xs leading-3 text-center text-black">{title}</p>
      </div>
    </div>
  );
}
