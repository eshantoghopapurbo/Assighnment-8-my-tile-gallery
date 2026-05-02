"use client";

import { User, ImagePlus, Sparkles } from "lucide-react"; // Modern Icons
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
export function UpdateUserModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image
        })
    }
    return (
        <Modal>
            {/* Trigger Button */}
            <Button variant="primary" className="w-full mt-20">Update Profile</Button>

            <Modal.Backdrop className="backdrop-blur-md">
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md border-none shadow-2xl rounded-[32px] bg-white overflow-hidden">
                        <Modal.Header className="flex flex-col gap-2 pt-8 px-8">
                            <Modal.Icon className="bg-indigo-50 text-indigo-600 p-3 rounded-2xl w-fit">
                                <Sparkles className="size-6" />
                            </Modal.Icon>
                            <Modal.Heading className="text-2xl font-black text-zinc-900 tracking-tight">
                                Update Profile
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-8 pt-4">
                            <Surface variant="default" className="border-none p-0">
                                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                                    {/* Name Field */}
                                    <TextField className="w-full" name="name" type="text">
                                        <Label className="text-sm font-bold text-zinc-700 mb-2 ml-1 flex items-center gap-2">
                                            <User className="size-4 text-zinc-400" /> Name
                                        </Label>
                                        <Input
                                            placeholder="Enter your name"
                                            className="h-12 border-2 border-zinc-100 rounded-xl px-4 focus:border-indigo-500 transition-all"
                                        />
                                    </TextField>

                                    {/* Image Field */}
                                    <TextField className="w-full" name="image" type="text">
                                        <Label className="text-sm font-bold text-zinc-700 mb-2 ml-1 flex items-center gap-2">
                                            <ImagePlus className="size-4 text-zinc-400" /> Profile Image URL
                                        </Label>
                                        <Input
                                            placeholder="Paste image link here"
                                            className="h-12 border-2 border-zinc-100 rounded-xl px-4 focus:border-indigo-500 transition-all"
                                        />
                                    </TextField>
                                    <Modal.Footer className="p-8 pt-2 flex gap-3">
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="flex-1 rounded-xl font-bold py-6 text-zinc-500"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="flex-[1.5] rounded-xl font-bold py-6 bg-zinc-900 text-white hover:bg-black shadow-lg"
                                        >
                                            Save Profile
                                        </Button>


                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}