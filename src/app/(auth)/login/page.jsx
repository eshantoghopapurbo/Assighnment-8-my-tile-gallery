"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Card } from '@heroui/react';
import Link from "next/link";
import { useRouter } from "next/navigation";


const LogInPage = () => {
    const router =useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({email, password });


        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });
        console.log({ data, error });

        if (!error) {
            router.push("/")
        }
    };
    return (
        <Card className="border mx-auto w-150 py-20 mt-10 items-center">
            <div className="mb-10">
                <h1 className='text-center text-2xl font-bold'>Log In</h1>
            </div>
            <Form className="flex w-96 flex-col  gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2 col">
                    <Button type="submit" className="w-full">
                        <Check />
                        Log In
                    </Button>
                </div>
                <div className="flex items-center ">
                    <p className="text-xl font-bold"> Don't have an account? <Link href={"/singup"}><span className="text-blue-500">Sign Up</span></Link></p>
                </div>
            </Form>
        </Card>
    );
};

export default LogInPage;