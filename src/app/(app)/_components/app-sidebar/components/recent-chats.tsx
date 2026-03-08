import { SidebarGroupLabel } from "@/shared/components/ui/sidebar";
import { ConnectWithUserDialog } from "./connect-with-user-dialog";

export function RecentChats() {
    return (
        <SidebarGroupLabel className="flex items-center justify-between px-4 mt-6 mb-2 group-data-[collapsible=icon]:hidden">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 leading-none">Recent Conversations</span>
            <ConnectWithUserDialog />
        </SidebarGroupLabel>
    )
}