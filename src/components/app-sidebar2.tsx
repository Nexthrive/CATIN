import { Bell, X } from "lucide-react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

export function AppSidebar2({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} side="right"  className=" h-full bg-white font-poppins">
      <SidebarContent className="bg-white h-full ">
        <SidebarGroup className="bg-white h-full  p-0">
          <div className="flex justify-between items-center py-6 px-6 border-b border-whiteC-100">
            <div className="flex items-center gap-3">
              <div className="bg-[#4318D1] p-2 flex h-fit w-fit rounded-md justify-center">
                <Bell size={15} color="white" />
              </div>
              <SidebarGroupLabel className="font-poppins text-blueC-600 leading-[30px] font-bold text-xl">
                Notifications
              </SidebarGroupLabel>
            </div>
          </div>
          
          <SidebarGroupContent className="p-4 overflow-auto h-[calc(100vh-80px)]">
            <div className="space-y-4">
              <div className="p-4 border border-whiteC-100 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Image src="/CatinAdminLogo.svg" width={15} height={15} alt="Notification" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blueC-600">New order received</h3>
                    <p className="text-grayC-300 text-xs">Premium template purchased</p>
                    <p className="text-xs text-grayC-300 mt-1">2 minutes ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-whiteC-100 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Image src="/CatinAdminLogo.svg" width={15} height={15} alt="Notification" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blueC-600">New user registered</h3>
                    <p className="text-grayC-300 text-xs">John Smith joined Catin</p>
                    <p className="text-xs text-grayC-300 mt-1">15 minutes ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-whiteC-100 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Image src="/CatinAdminLogo.svg" width={15} height={15} alt="Notification" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blueC-600">System update</h3>
                    <p className="text-grayC-300 text-xs">New templates available</p>
                    <p className="text-xs text-grayC-300 mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-whiteC-100 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Image src="/CatinAdminLogo.svg" width={15} height={15} alt="Notification" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blueC-600">Payment failed</h3>
                    <p className="text-grayC-300 text-xs">Please update your payment method</p>
                    <p className="text-xs text-grayC-300 mt-1">3 hours ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-whiteC-100 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Image src="/CatinAdminLogo.svg" width={15} height={15} alt="Notification" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blueC-600">Subscription renewal</h3>
                    <p className="text-grayC-300 text-xs">Your subscription will renew in 3 days</p>
                    <p className="text-xs text-grayC-300 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}


