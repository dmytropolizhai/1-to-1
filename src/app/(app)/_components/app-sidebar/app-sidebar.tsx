import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import { RecentChats } from "./components/recent-chats"
import { getChats } from "@/data/chats/actions"
import { getMe } from "@/data/users/actions"
import { ChatList } from "./components/chat-list"
import { MyPublicId } from "./components/my-public-id"
import { SidebarHeaderCustom } from "./components/sidebar-header-custom"
import { SidebarSearch } from "./components/sidebar-search"
import { SidebarUser } from "./components/sidebar-user"

export async function AppSidebar() {
    const [me, chats] = await Promise.all([getMe(), getChats()])

    if (!me) return null;

    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeaderCustom />

            <SidebarContent className="gap-0">
                <div className="mt-4">
                    <SidebarSearch />
                </div>

                <SidebarGroup>
                    <RecentChats />

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <ChatList chats={chats} />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border/50 p-3 bg-sidebar-accent/5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarUser />
                    </SidebarMenuItem>
                    <SidebarMenuItem className="mt-2 h-auto px-2 flex-row rounded-xl transition-all">
                        <MyPublicId />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}