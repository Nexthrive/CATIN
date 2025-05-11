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

    <SidebarProvider className="w-fit bg-white">
      <AppSidebar />
      <main className="">
        
        {children}
      </main>
    </SidebarProvider>
  


    <div className="container bg-whit px-[72px]  font-[family-name:var(--font-poppins)] py-10">
        <div className="flex justify-between items-center">
            <div className="">
                <h1>Hello Admin!</h1>
                <p>Track the performance of Catin’s template at a glance!</p>
            </div>
            <div className="flex">
                <p>{new Date().toLocaleDateString('en-UK', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                }).replace(' ', ', ')}</p>
                <Image src='/Calender.svg' width={20} height={20} alt="calender"/>
            </div>
        </div>
      <Card className="border-0 bg-white shadow-none">
        <CardHeader className=" px-10 gap-0">
            <div className="flex items-center justify-between  border-[#E5E5EF] border-b-2 pb-4">

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
    <div className="min-h-svh bg-white min-w-[400px] border-l border-l-[#E5E5EF]">

    </div>
</div>
  )
}