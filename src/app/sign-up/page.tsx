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

const SignUp = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#000000]">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Join us today!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Username" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Sign Up</Button>
          </form>
          <Separator orientation="horizontal" />
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
