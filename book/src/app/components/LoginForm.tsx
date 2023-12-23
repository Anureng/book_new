"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'


const LoginForm = () => {
    const [emailData, setEmailData] = useState("")
    const [passwordData, setPasswordData] = useState("")
    const { data } = useSession();
    const router = useRouter()

    const handleLoginData = async () => {
        const res = await signIn("credentials", {
            redirect: false,
            email: emailData,
            password: passwordData,
        });
        if (res?.error) {
            console.log(res.error);
        }
        if (res?.ok) {
            console.log(res.ok);
            router.push('/Book')
        }
    }
    return (
        <div className="flex items-center justify-center mt-10">

            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create User</CardTitle>
                    <CardDescription>Create a user with email and password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" value={emailData} onChange={(e) => setEmailData(e.target.value)} placeholder="Enter the email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Password">Password</Label>
                                <Input id="name" value={passwordData} onChange={(e) => setPasswordData(e.target.value)} placeholder="Enter the password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between flex-col">
                    <Button variant="outline" onClick={handleLoginData}>Submit</Button>
                    <p className="text-sm mt-4">Dont have Account. signUp page</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginForm



