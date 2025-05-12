"use client"
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return (
<div className="flex bg-white">

    <SidebarProvider className="w-[280px] bg-white">
      <AppSidebar />
      <main className="w-[280px]">
        {children}
      </main>
    </SidebarProvider>
  


    <div className="container bg-[#F8F8F8] px-8 py-[54px] gap-8 flex flex-col font-[family-name:var(--font-poppins)] ">
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h1 className="leading-10 tracking-tighter font-bold text-[40px]">Hello Admin!</h1>
                <p className="leading-8 text-base font-normal text-[#848484]">Track the performance of Catin’s template at a glance!</p>
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
        <div className="flex flex-col gap-5">
          <div className="text-card-foreground flex flex-col gap-6 p-8 rounded-xl  shadow-sm border-0 bg-white">
            <div className="flex flex-col gap-3">
              <div className="flex gap-6 justify-around">
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] border-[#E5E5EF] rounded-md">
                  <p className="text-[#9291A5] leading-[21px] text-sm  font-normal">Total Revenue</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-[#1E1B39]">Rp. 2.5M</h1>
                  <div className="flex items-start gap-3">
                  <Image src="/UpGreen.svg" className="pt-1.5" width={8} height={4} alt="UpGreen"/>
                  <p className="text-[#22C55E] leading-[21px] font-normal text-sm">12.5%</p>
                  </div>
                </div>
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] border-[#E5E5EF] rounded-md">
                  <p className="text-[#9291A5] leading-[21px] text-sm  font-normal">Total Users</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-[#1E1B39]">12,500</h1>
                  <div className="flex items-start gap-3">
                  <Image src="/UpGreen.svg" className="pt-1.5" width={8} height={4} alt="UpGreen"/>
                  <p className="text-[#22C55E] leading-[21px] font-normal text-sm">12.5%</p>
                  
                  </div>
                </div>
                <div className="border p-[25px] flex flex-col gap-2 w-[80%] border-[#E5E5EF] rounded-md">
                  <p className="text-[#9291A5] leading-[21px] text-sm  font-normal">Total Orders</p>
                  <h1 className="leading-12 font-semibold text-[32px] text-[#1E1B39]">8,900</h1>
                  <div className="flex items-end gap-3">
                  <Image src="/DownRed.svg" className="pb-2" width={8} height={4} alt="DownRed"/>
                  <p className="text-[#EF4444] leading-[21px] font-normal text-sm">3.1%</p>
                  </div>
                
                </div>
              </div>
              <div className="flex gap-6">
                <div className="border p-[24px] flex flex-col gap-6 w-[80%] border-[#E5E5EF] rounded-md">
                  <div className="flex items-center justify-between">
                    <h1 className="leading-7 font-semibold text-[18px] text-[#1E1B39]">Recent Orders</h1>
                    <p className="text-[#4318D1] font-normal text-sm leading-[21px]">View All</p>
                  </div>
                  <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src="/40PXTemplate.svg" className="" width={40} height={40} alt="Template"/>
                      <div className="">
                        <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">Premium Template</p>
                        <p className="text-[#9291A5] leading-[18px] font-normal text-xs">2 minutes ago</p>
                      </div>
                    </div>
                    <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">Rp. 974k</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src="/40PXTemplate.svg" className="" width={40} height={40} alt="Template"/>
                      <div className="">
                        <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">Basic Template</p>
                        <p className="text-[#9291A5] leading-[18px] font-normal text-xs">5 minutes ago</p>
                      </div>
                    </div>
                    <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">Rp. 479k</p>
                  </div>
                  </div>
                  
                </div>
      
                <div className="border p-[24px] flex flex-col gap-6 w-[80%] border-[#E5E5EF] rounded-md">
                <div className="flex items-center justify-between">
                  <h1 className="leading-7 font-semibold text-[18px] text-[#1E1B39]">Recent Users</h1>
                  <p className="text-[#4318D1] font-normal text-sm leading-[21px]">View All</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <Image src="/40PXTemplate.svg" className="rounded-full" width={40} height={40} alt="Template"/>
                    <div className="">
                      <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">John Smith</p>
                      <p className="text-[#9291A5] leading-[18px] font-normal text-xs">Premium User</p>
                    </div>
                  </div>
                  <p className="text-[#22C55E] leading-[21px] font-medium text-sm">Active</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <Image src="/40PXTemplate.svg" className="rounded-full" width={40} height={40} alt="Template"/>
                    <div className="">
                      <p className="text-[#1E1B39] leading-[21px] font-medium text-sm">Sarah Johnson</p>
                      <p className="text-[#9291A5] leading-[18px] font-normal text-xs">Basic User</p>
                    </div>
                  </div>
                  <p className="text-[#22C55E] leading-[21px] font-medium text-sm">Active</p>
                </div>
                </div>
                
              </div>
              </div>
            </div>
          </div>
          <Card className="border-0 bg-white">
            <CardHeader className=" px-10 gap-0">
                <div className="flex items-center justify-between  border-[#E5E5EF] border-b-2 pb-3">

            <div className="flex  flex-col">

            <CardTitle className="text-[18px] text-[#9291A5] leading-5 font-normal tracking-normal">Statistics</CardTitle>
            <CardDescription className="text-[22px] text-[#1E1B39] font-semibold leading-7">Sales report</CardDescription>
            </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border border-[#E5E5EF] bg-white">
                  <span className="w-2 h-2 rounded-full bg-[#962DFF]" />
                  <span className="text-xs text-[#1E1B39] leading-3.5">Product sales</span>
                </div>
                <div className="flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border border-[#E5E5EF] bg-white">
                  <span className="w-2 h-2 rounded-full bg-[#FF718B]" />
                  <span className="text-xs text-[#1E1B39] leading-3.5">Subscription sales</span>
                </div>
                <div className="flex items-center gap-2 pl-4 pr-3 py-2 rounded-md border border-[#E5E5EF] bg-white">
                  <span className="w-2 h-2 rounded-full bg-[#93AAFD]" />
                  <span className="text-xs text-[#1E1B39] leading-3.5">Other sales</span>
                </div>
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
                    vertical={false}  strokeDasharray="3 3" // This creates the dotted effect (3px dash, 3px gap)
                    />
                                    <XAxis 
                                    dataKey="month" 
                                    axisLine={false}
                                    tickLine={false}
                                    />
                    <YAxis
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 'dataMax']} // Slightly extend beyond max data
                    tickCount={10} // Request exactly 6 ticks
                    tickFormatter={(value) => {
                        if (value >= 1000000) return `${value/1000000}m`;
                        if (value >= 1000) return `${value/1000}k`;
                        return value.toString();
                    }}
                    />

                    <Tooltip 
                    formatter={(value: number) => new Intl.NumberFormat('en').format(value)}
                    />
                                
                    <Line
                      type="monotone"
                      dataKey="productSales"
                      stroke="#962DFF"
                      strokeWidth={3}
                      dot={false}
                      strokeDasharray="20 8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="subscriptionSales"
                      stroke="#FF718B"
                      strokeWidth={3}
                      dot={false}
                      strokeDasharray="20 8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="otherSales"
                      stroke="#93AAFD"
                      strokeWidth={3}
                      dot={false}
                      strokeDasharray="20 8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
    <div className="min-h-svh bg-white min-w-[380px] border-l border-l-[#E5E5EF]">

    </div>
</div>
  )
}