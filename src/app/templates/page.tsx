"use client"
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppSidebar2 } from "@/components/app-sidebar2"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import WeddingTemplateAdminCard from "@/components/WedingTemplateAdminCard";
type TemplateData = {
    id: string;
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
  

export default function AdminPage() {
  const [filters, setFilters] = useState({
    productSales: true,
    subscriptionSales: true,
    otherSales: true
  });
  const templateData: TemplateData[] = [
    {
      id: "template1",
      title: "Minang X Jepang",
      imagePath: "300x400.svg",
      createdAt: new Date("2023-03-15"),
      usageCount: 128,
      linkTo: "/preview",
      stars: 4.5,
      downloads: 1000,
      price: "45.0k",
      successRate: 8.2
    },
    {
        id: "template2",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },
      {
        id: "template3",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },{
        id: "template4",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },{
        id: "template5",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },{
        id: "template6",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },{
        id: "template7",
        title: "Minang X Jepang",
        imagePath: "300x400.svg",
        createdAt: new Date("2023-03-15"),
        usageCount: 128,
        linkTo: "/preview",
        stars: 4.5,
        downloads: 1000,
        price: "45.0k",
        successRate: 8.2
      },
      
  ];
  const toggleFilter = (filterName: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <div className="flex justify-between">
      <SidebarProvider className="w-fit">
        <AppSidebar />
      </SidebarProvider>
      
      <div className="flex  xl:hidden fixed inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-900">Screen Size Notice</h2>
          <p className="mt-2 text-gray-600">This content cannot be viewed on this screen size</p>
        </div>
      </div>
      <div className={`container bg-[#F8F8F8] px-2 pl-7 py-[54px] gap-8 flex flex-col font-poppins`}>
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h1 className="leading-10 tracking-tighter font-bold text-[40px]">Template</h1>
                <p className="leading-8 text-base font-normal text-[#848484]">Add, edit, and delete your template</p>
            </div>
            <div className="flex items-center gap-2">
                <Button className="rounded-4xl cursor-pointer px-10 py-6">+ Add Template</Button>
            </div>
        </div>
        <div className="grid grid-cols-5 gap-[25px] font-poppins">
        {templateData.map((template) => (
            <WeddingTemplateAdminCard
              key={template.id}
              title={template.title}
              imagePath={template.imagePath}
              createdAt={template.createdAt}
              usageCount={template.usageCount}
              linkTo={template.linkTo}
              stars={template.stars}
              downloads={template.downloads}
              price={template.price}
              successRate={template.successRate}
            />
          ))}
    </div>
    </div>

    <SidebarProvider className="w-[-100%]">
        
        <SidebarTrigger 
        className="w-[-100%] ml-auto rotate-180" 
        />
        <AppSidebar2 side="right" />
        
    </SidebarProvider>
    </div>
  )
}