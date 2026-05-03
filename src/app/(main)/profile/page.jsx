
"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { Mail, ShieldCheck, User as UserIcon, Calendar, Camera, LockKeyhole } from 'lucide-react';
import Link from 'next/link';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-16 mb-6">
                            <div className="relative">
                                <div className="p-1 bg-white rounded-2xl shadow-lg">
                                    <Image
                                        src={user?.image}
                                        alt="Profile"
                                        width={120}
                                        height={120}
                                        className="rounded-xl object-cover border-2 border-white"
                                    />
                                </div>
                                <button className="absolute bottom-2 right-2 p-1.5 bg-white rounded-lg shadow-md border border-slate-100 hover:bg-slate-50 transition-colors">
                                    <Camera className="w-4 h-4 text-slate-600" />
                                </button>
                            </div>

                            <UpdateUserModal />
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                               {user?.name}
                               {user?.emailVerified && <ShieldCheck className="w-5 h-5 text-blue-500" />}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Left Column: Account Details */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <UserIcon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</p>
                                        <p className="text-slate-700 font-medium">{user?.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-50 rounded-lg">
                                        <Mail className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                                        <p className="text-slate-700 font-medium truncate">{user?.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-emerald-50 rounded-lg">
                                        <Calendar className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Joined Date</p>
                                        <p className="text-slate-700 font-medium">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">About Me</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Professional developer passionate about creating intuitive user experiences.
                                Always exploring new technologies and pushing the boundaries of web development.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider text-center">Account Status</h3>
                            <div className="flex flex-col items-center py-4">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                </div>
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                                    ACTIVE
                                </span>
                            </div>
                            <hr className="my-4 border-slate-100" />
                            <div className="text-center">
                                <p className="text-xs text-slate-400 italic">Last login: 2 hours ago</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;