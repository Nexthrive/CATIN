"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type WeddingTemplateCardProps = {
  title: string;
  imagePath: string;
  stars: number;
  downloads: number;
  price: string;
  successRate: number;
  createdAt: Date;
  usageCount: number;
  linkTo: string;
};

export default function WeddingTemplateAdminCard({
  title,
  stars,
  downloads,
  price,
  successRate,
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
    <div className="bg-whiteC-100 shadow-soft border-[#E5E5EF] rounded-[12px] border-1  transition-all duration-300 hover:shadow-lg hover:-translate-y-1  group">
    <div className="relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
        <Image src={`/${imagePath}`} className="rounded-tl-[12px] border-[#E5E5EF] border-1 rounded-tr-[12px] transition-transform duration-300 group-hover:scale-105" width={286} height={381} alt="#"/>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
            <Button className="bg-white hover:bg-whiteC-100 cursor-pointer h-fit p-3  rounded-md">
                    <Image src="/Pencil.svg" width={20} height={20} alt="Edit" />   
            </Button>
            <Button className="bg-white hover:bg-whiteC-100 cursor-pointer h-fit p-3  rounded-md">
                <Image src="/Trash.svg" width={20} height={20} alt="Edit" />
            </Button>
            </div>
        </div>
    </div>
    <div className="flex gap-[21px] flex-col p-4">
        <div className="flex flex-col gap-1 justify-center">
            <h4 className="text-base font-semibold leading-6 text-black-100">{title}</h4>
            <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                    <Image src="Star.svg" width={13} height={13} alt="reviewStar"/>
                    <p className="leading-[21px] text-sm text-greyerC-100">{stars}</p>
                </div>
                <p className="leading-[21px] text-sm text-greyerC-100">{downloads} downloads</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <h5 className="leading-[27px] text-[18px] font-semibold">Rp. {price}</h5>
            <div className="">
                <div className="flex items-start gap-2">
                    <Image src="/UpGreen.svg" className="pt-1.5" width={8} height={4} alt="UpGreen"/>
                    <p className="text-successC-100 leading-[21px] font-normal text-sm">{successRate}%</p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
