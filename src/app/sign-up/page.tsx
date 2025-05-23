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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setPending(false);
      toast.success("User created");
      router.push("/sign-in");
    } else {
      setError(data.message);
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <div className="w-full max-w-lg p-8">
        <Card className="rounded-lg shadow-lg bg-gray-900 text-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-gray-400">
              Join our community and unlock your potential today.
            </CardDescription>
          </CardHeader>
          {!!error && (
            <div className="bg-destructive/50 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
              <TriangleAlert />
              <p>
                {error === "User already exists"
                  ? "User already exists. Please try signing in."
                  : error}
              </p>
            </div>
          )}
          <CardContent className="grid gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                disabled={pending}
                value={form.name}
                placeholder="Enter your username"
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
              />
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                disabled={pending}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                type="password"
                placeholder="Create a password"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                disabled={pending}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Input
                type="password"
                placeholder="Confirm your password"
                required
                className="rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                disabled={pending}
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              <Button
                type="submit"
                disabled={pending}
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
              >
                Sign Up
              </Button>
            </form>
            <Separator orientation="horizontal" className="bg-gray-700" />
            <Button className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-200 hover:bg-gray-700 rounded-md">
              <FcGoogle className="text-xl" />
              Continue with Google
            </Button>
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/sign-in" className="text-indigo-500 hover:underline">
                Sign In
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
