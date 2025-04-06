//shadcn/ui
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

//react-icons
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="w-full max-w-lg p-8">
        <Card className="rounded-lg shadow-lg bg-gray-900 text-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-400">
              Login to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <form className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
              />
              <Input
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
              />
              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
              >
                Login
              </Button>
            </form>
            <Separator orientation="horizontal" className="bg-gray-700" />
            <Button className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-200 hover:bg-gray-700 rounded-md">
              <FcGoogle className="text-xl" />
              Continue with Google
            </Button>
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-indigo-500 hover:underline">
                Sign Up
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
