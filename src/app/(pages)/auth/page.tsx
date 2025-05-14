"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] h-full font-poppins">
      <div className="w-full max-w-6xl flex rounded-2xl shadow-lg bg-washedC-100 p-4 h-[80%] outline-[2.5px] outline-greyC-100 gap-7">
        {/* Left Section */}
        <div className="w-[45%] bg-sky-300 rounded-xl p-12 flex flex-col shadow">
          <Image src="/Catin.svg" width={48} height={48} alt="Logo" className="md:ml-0" />
          <div className="flex-grow flex flex-col justify-start">
            <h2 className="text-4xl font-bold mb-4 mt-40">
              Create your<br />
              Invitations now...
            </h2>
            <p className="text-gray-700 ">
              Discover betfully crafted templates today
            </p>

            <div className="bg-sky-200/50 p-6 rounded-xl mb-8 mt-25 h-[30%] flex flex-col justify-between w-[75%] self-center">
              <p className="italic">"some testimony"</p>
              <p className="mt-4">- someguy</p>
            </div>

            <div className="flex gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-1">Login</h2>
          <p className="text-gray-600 mb-8">
            Don't have an account?
            <Link href="/signup" className="text-sky-500 ml-1 hover:underline">
              Sign up
            </Link>
          </p>

          <form className="space-y-6 flex flex-col items-center w">
            <div className="w-full">
              <label className="block text-sm mb-2 text-greyerC-100">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-3 pl-10 outline outline-greyC-100 rounded focus:outline-none focus:ring-2 focus:ring-sky-300"
                  placeholder="someweddingorganizer@yahoo.com"
                />
                <i className='bx bx-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-sm mb-2 text-greyerC-100">Passphrase</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 pl-10 pr-10 outline outline-greyC-100 rounded focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <i className='bx bx-lock-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'></i>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bx ${showPassword ? 'bx-hide' : 'bx-show'} text-xl flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-3/5 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-10"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}