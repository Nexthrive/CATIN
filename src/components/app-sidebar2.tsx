import { LogOut,Hexagon, ImageIcon, Layers } from "lucide-react"
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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    image: "/CatinAdminLogoOutline.svg",
    active: true,
  },
  {
    title: "Analytics",
    url: "#",
    image: "/AnalyticsIcon.svg",
    active: false,

  },
 
 
]
const items2 = [
  {
    title: "Components",
    url: "#",
    image: "/ComponentIcon.svg",
    active: false,

  },
  {
    title: "Styles",
    url: "#",
    image: Hexagon,
    active: false,

  },
]

const items3 = [
  {
    title: "Images",
    url: "#",
    image: ImageIcon,
    active: false,

  },
  {
    title: "Icons",
    url: "#",
    image: Layers,
    active: false,

  },
]

export function AppSidebar2({...props}) {
  return (
    
    <Sidebar {...props} side="right" className="fixed h-full bg-white font-poppins">
      <SidebarContent className="bg-white h-full block">
        <SidebarGroup className="bg-white h-full block  p-0">
          <div className="flex py-8 pl-8 border-b">
            <div className="bg-[#4318D1] p-2 flex h-fit w-fit rounded-md justify-center">
              <Image src="/CatinAdminLogo.svg" className="" width={15} height={15} alt="CatinAdmin"/>
            </div>
            <SidebarGroupLabel className="font-poppins text-black leading-[30px] px-3 font-bold text-xl">
           Catin Admin</SidebarGroupLabel>
          </div>
          <div className="">
          <SidebarGroupContent className="p-4">
            <SidebarMenu className="gap-1">
              <p className="leading-[18px] ml-3 tracking-wider font-medium text-grayC-300 text-xs mb-1">MAIN</p>
              {items.map((item) => (
                <SidebarMenuItem className={item.active ? "bg-[#F5F1FF] rounded-sm pl-3 py-2 pr-2" : "pl-3 py-2 pr-2 rounded-sm hover:bg-zinc-400/40"} key={item.title}>
                  <SidebarMenuButton className="p-0 hover:bg-transparent " asChild>
                    <a href={item.url}>
                    
                        <Image src={item.image} width={20} height={20} alt={`${item.title} icon`} />
                    
                      <span className={item.active ? "font-medium text-sm leading-[21px] text-[#4318D1]" : "font-medium text-sm leading-[21px] text-[#615E83]"}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
               <p className="leading-[18px] ml-3 tracking-wider font-medium text-grayC-300 mt-8 text-xs mb-1">DESIGN</p>
              {items2.map((item2) => (
                 <SidebarMenuItem className={item2.active ? "bg-[#F5F1FF] rounded-sm pl-3 py-2 pr-2" : "pl-3 py-2 pr-2 rounded-sm hover:bg-zinc-400/40"} key={item2.title}>
                  <SidebarMenuButton className="p-0 hover:bg-transparent" asChild>
                    <a href={item2.url}>
                      {typeof item2.image === 'string' ? (
                        <Image src={item2.image} width={15} height={15} alt={`${item2.title} icon`} />
                      ) : (
                        <item2.image size={20} />
                      )}
                      <span>{item2.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
               <p className="leading-[18px] ml-3 tracking-wider font-medium text-grayC-300 mt-8 text-xs mb-1">ASSETS</p>
              {items3.map((item3) => (
                  <SidebarMenuItem className={item3.active ? "bg-[#F5F1FF] rounded-sm pl-3 py-2 pr-2" : "pl-3 py-2 pr-2 rounded-sm hover:bg-zinc-400/40"} key={item3.title}>
                  <SidebarMenuButton className="p-0 hover:bg-transparent" asChild>
                    <a href={item3.url}>
                      {typeof item3.image === 'string' ? (
                        <Image src={item3.image} width={15} height={15} alt={`${item3.title} icon`} />
                      ) : (
                        <item3.image size={20} />
                      )}
                      <span>{item3.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent 
          className="p-[29px] border-t border-t-whiteC-100 absolute bottom-0 w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
            <Image src="/40PXTemplate.svg" className="rounded-full" width={32} height={32} alt="Template"/>
            <div className="">
                <p className="text-blueC-600 leading-[21px] font-medium text-sm">Admin User</p>
                <p className="text-grayC-300 leading-[18px] font-normal text-xs">admin@catin.io</p>
              </div>
            </div>
            <LogOut/>
            </div>
          </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
 
  )
}
