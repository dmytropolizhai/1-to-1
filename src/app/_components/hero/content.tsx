import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

function HeroBadge() {
    return (
        <div className="mb-6 inline-flex items-center rounded-full border bg-background/70 px-4 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur">
            First in the world one-to-one chat app
        </div>
    );
}

function HeroActions() {
    return (
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="rounded-xl px-8">
                <Link href="/new">Become a member</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
                <Link href="#learn-more">Learn more</Link>
            </Button>
        </div>
    );
}

function HeroStats() {
    const stats = [
        { title: "1:1", subtitle: "Private chats" },
        { title: "Fast", subtitle: "Smooth experience" },
        { title: "Real", subtitle: "Meaningful connections" },
    ];

    return (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
            {stats.map((stat) => (
                <div key={stat.title}>
                    <span className="block text-2xl font-bold text-foreground">
                        {stat.title}
                    </span>
                    {stat.subtitle}
                </div>
            ))}
        </div>
    );
}


export function HeroContent() {
    return (
        <div className="text-center lg:text-left">
            <HeroBadge />

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Build deeper connections through{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    private one-to-one conversations
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                A beautifully simple space to connect, chat, and build real
                relationships without the noise of crowded social platforms.
            </p>

            <HeroActions />
            <HeroStats />
        </div>
    );
}
