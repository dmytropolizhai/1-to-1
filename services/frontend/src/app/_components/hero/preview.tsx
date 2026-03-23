




function ChatBubble({
    children,
    align = "left",
}: {
    children: React.ReactNode;
    align?: "left" | "right";
}) {
    const isRight = align === "right";

    return (
        <div
            className={[
                "max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow",
                isRight
                    ? "ml-auto rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md bg-background text-foreground",
            ].join(" ")}
        >
            {children}
        </div>
    );
}

function FloatingCard({
    title,
    subtitle,
    className,
}: {
    title: string;
    subtitle: string;
    className?: string;
}) {
    return (
        <div
            className={`absolute hidden rounded-2xl border bg-background p-4 shadow-lg md:block ${className ?? ""}`}
        >
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
    );
}


export function HeroPreview() {
    return (
        <div className="relative">
            <div className="rounded-3xl border bg-background/80 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-muted p-6">
                    <div className="space-y-4">
                        <ChatBubble align="right">
                            Hey, I’ve been looking for a more personal way to connect online.
                        </ChatBubble>

                        <ChatBubble>
                            This is exactly that — private, simple, and focused on real
                            conversations.
                        </ChatBubble>

                        <ChatBubble align="right">
                            That feels so much better than noisy group apps.
                        </ChatBubble>
                    </div>
                </div>
            </div>

            <FloatingCard
                title="Meaningful chats"
                subtitle="Designed for genuine connection"
                className="-bottom-6 -left-6"
            />

            <FloatingCard
                title="Clean experience"
                subtitle="No clutter, just conversation"
                className="-right-6 -top-6"
            />
        </div>
    );
}