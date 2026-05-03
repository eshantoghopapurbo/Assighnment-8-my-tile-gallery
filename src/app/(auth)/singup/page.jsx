"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Card } from '@heroui/react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SingUp = () => {
  const router = useRouter();

  const tostfyhandle = () => {
    toast.success("Sign up successful!", { position: "top-center" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({ email, password, name, image });
    if (!error) router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="border w-full max-w-md py-10 px-4 sm:px-8 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-base font-medium mt-1">Join us today! Please enter your details.</p>
        </div>

        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            className="w-full"
            validate={(value) => {
              if (value.length < 3) return "Name must be at least 3 characters";
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="image"
            className="w-full"
            validate={(value) => {
              if (value.length < 3) return "Image must be a valid URL";
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/avatar.png" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter Your Email" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[0-9]/.test(value)) return "Password must contain at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className="w-full" />
            <Description>Must be at least 8 characters with 1 number</Description>
            <FieldError />
          </TextField>

          <Button type="submit" className="w-full" onClick={tostfyhandle}>
            <Check />
            Sign Up
          </Button>

          <p className="text-sm font-bold text-center">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-500">Login</span>
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default SingUp;