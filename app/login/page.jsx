"use client";

import { Button, Checkbox, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
export default function login(){
    return (
        <main className="min-h-screen bg-white text-black px-32 pt-20">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-4xl font-bold">Sign in</h1>
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
        </main>
    );
}