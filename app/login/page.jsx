"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/navbar";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
export default function login() {
  return (
    <main className="bg-white  text-black">
      <Navbar />
      <div className="h-100 flex items-center justify-center my-20">
        <div
          className="flex flex-col justify-center items-center gap-5 border-2 p-5 
            rounded-xl border-black  shadow-black shadow-lg"
        >
          <h1 className="text-4xl font-bold text-slate-600">Sign in</h1>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Email or Username"
                className="w-96"
              />
              <Input
                type="password"
                label="Password"
                labelPlacement="outside"
                placeholder="Enter password"
              />
              <Checkbox>Keep me signed in. </Checkbox>
              <Button color="primary">Sign In</Button>
              <Link href="/forgot" className="text-slate-500">
                Forgot your username or password?
              </Link>
              <Link href="/register" className="text-slate-500">
                Don't have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </main>
  );
}