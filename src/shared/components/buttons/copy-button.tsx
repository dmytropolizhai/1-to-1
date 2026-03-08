"use client"

import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

type CopyButtonProps = ButtonProps & {
    text: string;
}

export function CopyButton({ text, ...props }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        toast.success("Public ID copied to clipboard")
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            {...props}
        >
            {copied ? (
                <Check className="h-4 w-4 text-green-500" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
        </Button>
    );
}