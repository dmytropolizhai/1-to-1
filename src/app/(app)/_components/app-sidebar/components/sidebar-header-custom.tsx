import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/shared/components/ui/sidebar"
import { MessageSquare, Circle } from "lucide-react"

export function SidebarHeaderCustom() {
    return (
        <SidebarHeader className="border-b border-sidebar-border/50 pb-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" className="hover:bg-transparent cursor-default">
                        <div className="flex items-center gap-1.5">
                            <Circle className="size-2 fill-green-500 text-green-500 animate-pulse" />
                            <span className="text-md uppercase font-bold text-muted-foreground/70 tracking-widest">Online</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}
