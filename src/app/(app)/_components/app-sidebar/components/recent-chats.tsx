import { SidebarGroupLabel } from "@/shared/components/ui/sidebar";
import { ConnectWithUserDialog } from "./connect-with-user-dialog";

export function RecentChats() {
    return (
        <SidebarGroupLabel className="flex items-center justify-between px-4 mb-2 group-data-[collapsible=icon]:hidden">
            <span className="text-[11px] font-bold uppercase tracking-tight text-muted-foreground/60">Recent Chats</span>
            <ConnectWithUserDialog />
        </SidebarGroupLabel>
    )
}