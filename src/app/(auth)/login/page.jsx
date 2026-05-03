"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Card } from '@heroui/react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

const LogInPage = () => {
    const router = useRouter();

    // const tostfyhandle = () => {
    //      toast.success("Login successful!", { position: "top-center" });
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({ email, password });
        if(!error){
            toast.success("Login successful!", { position: "top-center" });
            router.push("/");
        }else{
            toast.error(error.message || "Login failed!", { position: "top-center" });
        }
    };

    const handleGooglesignIn = async () => {
       const {error} = await authClient.signIn.social({
             provider: "google" });
             if(!error){
                toast.success("Google Login successful!", {position: "top-center" });
                router.push("/")
             }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="border w-full max-w-md py-10 px-4 sm:px-8 flex flex-col items-center">
                <div className="mb-8">
                    <h1 className="text-center text-2xl font-bold">Log In</h1>
                </div>

                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
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

                    <Button type="submit" className="w-full" >
                        <Check />
                        Log In
                    </Button>

                    <p className="text-sm font-bold text-center">
                        Don't have an account?{" "}
                        <Link href="/singup">
                            <span className="text-blue-500">Sign Up</span>
                        </Link>
                    </p>
                </Form>

                <p className="text-lg text-center font-bold my-4">OR CONTINUE WITH</p>

                <Button onClick={handleGooglesignIn} variant="primary" className="w-full">
                    <GrGoogle /> Sign In with Google
                </Button>   
            </Card>
        </div>
    );
};

export default LogInPage;