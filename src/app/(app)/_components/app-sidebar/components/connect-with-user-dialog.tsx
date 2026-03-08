import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { Plus } from "lucide-react";
import { CopyButton } from "@/shared/components/buttons/copy-button";
import { MyPublicId } from "./my-public-id";

export function ConnectWithUserDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-1" variant="ghost" size="icon" >
                    <Plus className="h-3.5 w-3.5 hover:text-primary transition-colors" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Connect with User
                    </DialogTitle>
                    <DialogDescription>
                        Enter the public ID to connect with the user
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}