"use client"

import { Search } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/shared/components/ui/sidebar"
import { useState } from "react"

export function SidebarSearch() {
    const [query, setQuery] = useState("")

    return (
        <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within/relative:text-primary" />
                <SidebarInput
                    placeholder="Search chats..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-9 bg-sidebar-accent/30 border-none focus-visible:ring-1 focus-visible:ring-primary/30 transition-all placeholder:text-muted-foreground/40 h-10 rounded-xl"
                />
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
