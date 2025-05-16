"use client"

import { usePathname } from "next/navigation"
import { LogOut, Hexagon, ImageIcon, Layers } from "lucide-react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    image: "/CatinAdminLogoOutline.svg",
  },
  {
    title: "Analytics",
    url: "#",
    image: "/AnalyticsIcon.svg",
  },
]

const items2 = [
  {
    title: "Templates",
    url: "/templates",
    image: "/ComponentIcon.svg",
  },
  {
    title: "Styles",
    url: "#",
    image: Hexagon,
  },
]

const items3 = [
  {
    title: "Images",
    url: "#",
    image: ImageIcon,
  },
  {
    title: "Icons",
    url: "#",
    image: Layers,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const renderItems = (items:any) =>
    items.map((item:any) => {
      const isActive = pathname === item.url
      return (
        <SidebarMenuItem   key={item.title} className={` rounded-sm px-3 py-[5px] ${isActive  ? "bg-[#E8E1FA]" :"hover:bg-zinc-400/40"}` }>
          <SidebarMenuButton className="p-0 hover:bg-transparent active:bg-transparent" asChild>
          <a href={item.url}>
              {typeof item.image === "string" ? (
                <Image src={item.image} width={20} height={20} alt={`${item.title} icon`} />
              ) : (
                <item.image size={20} />
              )}
            
              <span className={`font-medium text-sm leading-[21px]  ${item.active ? "text-[#4318D1]" :"text-[#615E83]"}`}>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )
    })
  return (
    
    <Sidebar side="left" className="fixed h-full  bg-washedC-100 border-r-[1.5px]  border-r-greyC-100 font-poppins">
      <SidebarContent className="bg-washedC-100 h-full block   border-greyC-100">
        <SidebarGroup className="bg-washedC-100 h-full block  p-0">
          <div className="flex justify-center py-[34px] px-[59px] border-b-greyC-100 border-b-[1.1px]">
            <Image src="/Catin.svg" className="" width={24} height={24} alt="CatinAdmin"/>
            <SidebarGroupLabel className="font-poppins text-black leading-[30px]  font-bold text-xl">
            Catin Admin</SidebarGroupLabel>
          </div>
          <div className="">
          <SidebarGroupContent className="p-4">
              <SidebarMenu className="gap-1">
                <p className="leading-[18px] ml-3 tracking-wider font-medium text-greyC-100 text-xs mb-1">MAIN</p>
                {renderItems(items)}

                <p className="leading-[18px] ml-3 tracking-wider font-medium text-greyC-100 mt-8 text-xs mb-1">DESIGN</p>
                {renderItems(items2)}

                <p className="leading-[18px] ml-3 tracking-wider font-medium text-greyC-100 mt-8 text-xs mb-1">ASSETS</p>
                {renderItems(items3)}
              </SidebarMenu>
            </SidebarGroupContent>
          <SidebarGroupContent 
          className="p-[29px] border-t border-t-whiteC-100 absolute bottom-0 w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
            <Image src="/40PXTemplate.svg" className="rounded-full" width={32} height={32} alt="Template"/>
            <div className="">
                <p className="text-blackC-100 leading-[21px] font-medium text-sm">Admin User</p>
                <p className="text-greyC-100 leading-[18px] font-normal text-xs">admin@catin.io</p>
              </div>
            </div>
            <a href="/logout">
            <LogOut/>
            </a>
            </div>
          </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
 
  )
}
