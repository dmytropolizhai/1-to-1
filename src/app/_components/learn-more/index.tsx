import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export function LearnMoreSection() {
    const features = [
        {
            title: "Built for one-to-one",
            description:
                "No crowded feeds or noisy group spaces — just focused private conversations that feel personal.",
        },
        {
            title: "Simple and beautiful",
            description:
                "A clean interface that keeps attention on people, making every chat smooth, calm, and easy to follow.",
        },
        {
            title: "Meaningful connections",
            description:
                "Designed to help people move beyond short messages and create genuine, lasting relationships.",
        },
    ];

    return (
        <section id="learn-more" className="border-t bg-muted/30">
            <div className="container mx-auto px-6 py-24 md:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
                            Learn more
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            A better way to connect, one conversation at a time
                        </h2>

                        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                            Message is built for people who value privacy,
                            simplicity, and real connection. Every part of the
                            experience is designed to make one-to-one chatting
                            feel more natural and meaningful.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border bg-background p-6 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex justify-center">
                        <Button size="lg" className="rounded-xl px-8" asChild>
                            <Link href="/new">
                                Join now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}