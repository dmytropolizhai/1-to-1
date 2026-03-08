import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { Plus } from "lucide-react";
import { CopyButton } from "@/shared/components/buttons/copy-button";
import { MyPublicId } from "./my-public-id";

import { SidebarInput } from "@/shared/components/ui/sidebar"

export function ConnectWithUserDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex items-center size-6 text-muted-foreground/50 hover:text-primary hover:bg-primary/10 transition-all rounded-md" variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Connect with User</DialogTitle>
                    <DialogDescription className="text-muted-foreground/70">
                        Enter a unique public ID to start a new private conversation.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">User Public ID</span>
                        <SidebarInput
                            placeholder="e.g. 123456"
                            className="h-12 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl px-4 text-base"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3 font-semibold">
                    <Button variant="ghost" className="rounded-xl px-6">Cancel</Button>
                    <Button className="rounded-xl px-8 shadow-lg shadow-primary/20">Send Request</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}