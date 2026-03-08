"use client"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuAction } from "@/shared/components/ui/sidebar"
import { MoreHorizontal } from "lucide-react"

type Chat = {
    id: string,
    name: string,
    lastMessage: string,
    initial: string,
}

export function ChatList({ chats }: { chats: Chat[] }) {
    return (
        <SidebarMenu>
            {chats.map(chat => (
                <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton
                        tooltip={chat.name}
                        className="h-14 px-4 hover:bg-sidebar-accent/50 transition-all duration-200"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/10 to-primary/30 text-primary border border-primary/20 font-semibold text-sm">
                            {chat.initial}
                        </div>
                        <div className="flex flex-1 flex-col overflow-hidden text-left ml-2">
                            <span className="truncate font-semibold text-sm text-foreground/90">{chat.name}</span>
                            <span className="truncate text-xs text-muted-foreground mt-0.5">{chat.lastMessage}</span>
                        </div>
                    </SidebarMenuButton>
                    <SidebarMenuAction className="right-2 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                    </SidebarMenuAction>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}