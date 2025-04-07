"use client";
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
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/");
      toast.success("Login successful");
    } else if (res?.status === 401) {
      setError("Invalid email or password");
      setPending(false);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

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
            {error && (
              <div className="flex items-center justify-center mt-4 bg-red-500 text-white p-2 rounded-md">
                <TriangleAlert className="mr-2" />
                {error}
              </div>
            )}
          </CardHeader>
          <CardContent className="grid gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                disabled={pending}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                disabled={pending}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
                disabled={pending}
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
