"use client"
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppSidebar2 } from "@/components/app-sidebar2"
import { useState, useEffect } from "react"

// Sample data - replace with your actual data
const data = [
  { month: "JAN", productSales: 30000, subscriptionSales: 20000, otherSales: 40000 },
  { month: "FEB", productSales: 500000, subscriptionSales: 50000, otherSales: 500000 },
  { month: "MAR", productSales: 1000000, subscriptionSales: 300000, otherSales: 200000 },
  { month: "APR", productSales: 300000, subscriptionSales: 5000000, otherSales: 100000 },
  { month: "MAY", productSales: 200000, subscriptionSales: 300000, otherSales: 70000 },
  { month: "JUN", productSales: 300000, subscriptionSales: 300000, otherSales: 80000 },
  { month: "JUL", productSales: 10000, subscriptionSales: 100000, otherSales: 50000 },
  { month: "AUG", productSales: 50000, subscriptionSales: 50000, otherSales: 40000 },
  { month: "SEP", productSales: 500000, subscriptionSales: 100000, otherSales: 200000 },
  { month: "OCT", productSales: 400000, subscriptionSales: 400000, otherSales: 300000 },
  { month: "NOV", productSales: 30000, subscriptionSales: 800000, otherSales: 100000 },
  { month: "DEC", productSales: 10000, subscriptionSales: 300000, otherSales: 30000 },
]

export default function AdminPage() {
  const [filters, setFilters] = useState({
    productSales: true,
    subscriptionSales: true,
    otherSales: true
  });
  
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
      <div className={`container bg-[#F8F8F8] px-5 pl-7 py-[54px] gap-8 flex flex-col font-poppins`}>
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h1 className="leading-10 tracking-tighter font-bold text-[40px]">Hello Admin!</h1>
                <p className="leading-8 text-base font-normal text-[#848484]">Track the performance of Catin's template at a glance!</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="leading-8 font-medium text-base">{new Date().toLocaleDateString('en-UK', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                }).replace(' ', ', ')}</p>
                <div  className="bg-[#E8E8E8] p-3 rounded-full">

                <Image  src='/Calender.svg' width={24} height={24} className="h-6" alt="calender"/>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="text-card-foreground flex flex-col  rounded-xl ">
            <div className="flex flex-col gap-3">
              <div className="flex gap-6 justify-around">
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] bg-white shadow-soft border-whiteC-100 rounded-md">
                  <p className="text-greyC-100 leading-[21px] text-sm  font-normal">Total Revenue</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-blackC-100">Rp. 2.5M</h1>
                  <div className="flex items-start gap-3">
                  <Image src="/UpGreen.svg" className="pt-1.5" width={8} height={4} alt="UpGreen"/>
                  <p className="text-successC-100 leading-[21px] font-normal text-sm">12.5%</p>
                  </div>
                </div>
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] bg-white shadow-soft border-whiteC-100 rounded-md">
                  <p className="text-greyC-100 leading-[21px] text-sm  font-normal">Total Users</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-blackC-100">12,500</h1>
                  <div className="flex items-start gap-3">
                  <Image src="/UpGreen.svg" className="pt-1.5" width={8} height={4} alt="UpGreen"/>
                  <p className="text-successC-100 leading-[21px] font-normal text-sm">12.5%</p>
                  
                  </div>
                </div>
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] bg-white shadow-soft border-whiteC-100 rounded-md">
                  <p className="text-greyC-100 leading-[21px] text-sm  font-normal">Total Orders</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-blackC-100">8,900</h1>
                  <div className="flex items-end gap-3">
                  <Image src="/DownRed.svg" className="pb-2" width={8} height={4} alt="DownRed"/>
                  <p className="text-dangerC-100 leading-[21px] font-normal text-sm">3.1%</p>
                  </div>
                
                </div>
              </div>
              <div className="flex gap-6">
                <div className="border p-[24px] flex flex-col gap-6 w-[80%] bg-white shadow-soft border-whiteC-100 rounded-md">
                  <div className="flex items-center justify-between">
                    <h1 className="leading-7 font-semibold text-[18px] text-blackC-100">Recent Orders</h1>
                    <p className="text-[#4318D1] font-normal text-sm leading-[21px]">View All</p>
                  </div>
                  <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src="/40PXTemplate.svg" className="" width={40} height={40} alt="Template"/>
                      <div className="">
                        <p className="text-blackC-100 leading-[21px] font-medium text-sm">Premium Template</p>
                        <p className="text-greyC-100 leading-[18px] font-normal text-xs">2 minutes ago</p>
                      </div>
                    </div>
                    <p className="text-blackC-100 leading-[21px] font-medium text-sm">Rp. 974k</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src="/40PXTemplate.svg" className="" width={40} height={40} alt="Template"/>
                      <div className="">
                        <p className="text-blackC-100 leading-[21px] font-medium text-sm">Basic Template</p>
                        <p className="text-greyC-100 leading-[18px] font-normal text-xs">5 minutes ago</p>
                      </div>
                    </div>
                    <p className="text-blackC-100 leading-[21px] font-medium text-sm">Rp. 479k</p>
                  </div>
                  </div>
                  
                </div>
      
                <div className="border p-[24px] flex flex-col gap-6 w-[80%] bg-white shadow-soft border-whiteC-100 rounded-md">
                <div className="flex items-center justify-between">
                  <h1 className="leading-7 font-semibold text-[18px] text-blackC-100">Recent Users</h1>
                  <p className="text-[#4318D1] font-normal text-sm leading-[21px]">View All</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <Image src="/40PXTemplate.svg" className="rounded-full" width={40} height={40} alt="Template"/>
                    <div className="">
                      <p className="text-blackC-100 leading-[21px] font-medium text-sm">John Smith</p>
                      <p className="text-greyC-100 leading-[18px] font-normal text-xs">Premium User</p>
                    </div>
                  </div>
                  <p className="text-successC-100 leading-[21px] font-medium text-sm">Active</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <Image src="/40PXTemplate.svg" className="rounded-full" width={40} height={40} alt="Template"/>
                    <div className="">
                      <p className="text-blackC-100 leading-[21px] font-medium text-sm">Sarah Johnson</p>
                      <p className="text-greyC-100 leading-[18px] font-normal text-xs">Basic User</p>
                    </div>
                  </div>
                  <p className="text-successC-100 leading-[21px] font-medium text-sm">Active</p>
                </div>
                </div>
                
              </div>
              </div>
            </div>
          </div>
          <Card className="border-0 bg-white  shadow-soft">
            <CardHeader className=" px-10 gap-0">
                <div className="flex items-center justify-between  border-whiteC-100 border-b-2 pb-3">
                  <div className="flex  flex-col">
                    <CardTitle className="text-[18px] text-greyC-100 leading-5 font-normal tracking-normal">Statistics</CardTitle>
                    <CardDescription className="text-[22px] text-blackC-100 font-semibold leading-7">Sales report</CardDescription>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => toggleFilter('productSales')}
                      className={`flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border ${filters.productSales ? 'border-[#962DFF] bg-[#962DFF]/10' : 'border-whiteC-100 bg-white'}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#962DFF]" />
                      <span className="text-xs text-blackC-100 leading-3.5">Product sales</span>
                    </button>
                    <button 
                      onClick={() => toggleFilter('subscriptionSales')}
                      className={`flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border ${filters.subscriptionSales ? 'border-[#FF718B] bg-[#FF718B]/10' : 'border-whiteC-100 bg-white'}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FF718B]" />
                      <span className="text-xs text-blackC-100 leading-3.5">Subscription sales</span>
                    </button>
                    <button 
                      onClick={() => toggleFilter('otherSales')}
                      className={`flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border ${filters.otherSales ? 'border-[#93AAFD] bg-[#93AAFD]/10' : 'border-whiteC-100 bg-white'}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#93AAFD]" />
                      <span className="text-xs text-blackC-100 leading-3.5">Other sales</span>
                    </button>
                  </div>
                </div>
            </CardHeader>
            
            <CardContent className="p-0">
        
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid   horizontal={true} 
                    vertical={false}  strokeDasharray="3 3" 
                    />
                    <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    />
                    <YAxis
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 'dataMax']} 
                    tickCount={10} 
                    tickFormatter={(value) => {
                        if (value >= 1000000) return `${value/1000000}m`;
                        if (value >= 1000) return `${value/1000}k`;
                        return value.toString();
                    }}
                    />

                    <Tooltip 
                    formatter={(value: number) => new Intl.NumberFormat('en').format(value)}
                    />
                    
                    {filters.productSales && (
                      <Line
                        type="monotone"
                        dataKey="productSales"
                        stroke="#962DFF"
                        strokeWidth={3}
                        dot={false}
                        strokeDasharray="20 8"
                        activeDot={{ r: 8 }}
                      />
                    )}
                    {filters.subscriptionSales && (
                      <Line
                        type="monotone"
                        dataKey="subscriptionSales"
                        stroke="#FF718B"
                        strokeWidth={3}
                        dot={false}
                        strokeDasharray="20 8"
                        activeDot={{ r: 8 }}
                      />
                    )}
                    {filters.otherSales && (
                      <Line
                        type="monotone"
                        dataKey="otherSales"
                        stroke="#93AAFD"
                        strokeWidth={3}
                        dot={false}
                        strokeDasharray="20 8"
                        activeDot={{ r: 8 }}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
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