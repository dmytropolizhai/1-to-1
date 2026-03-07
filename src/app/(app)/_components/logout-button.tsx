"use client"

import { logoutAction } from "@/data/users/actions"
import { Button } from "@/shared/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LogoutButton() {
    const router = useRouter()

    async function handleLogout() {
        await logoutAction()
        router.push("/login")
    }

    return (
        <Button
            variant="ghost"
            size="icon-xs"
            onClick={handleLogout}
            className="ml-auto hover:text-destructive group/logout"
        >
            <LogOut className="size-3.5 transition-colors group-hover/logout:text-destructive" />
        </Button>
    )
}