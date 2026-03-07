"use client"

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import Form from "next/form";
import { useState } from "react";

export function CreateUserForm() {
    const [nickname, setNickname] = useState<string>("");

    return (
        <Form
            action="/api/users"
            className="flex flex-row gap-2 justify-start items-center"
        >
            <Input placeholder="Enter your nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <Button type="submit">Create</Button>
        </Form>
    )
}