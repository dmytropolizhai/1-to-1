import { getMe } from "@/data/users/actions";
import { CopyButton } from "@/shared/components/buttons/copy-button";

export async function MyPublicId() {
    const me = await getMe();

    if (!me) {
        return null;
    }

    return (
        <div className="flex items-center gap-1">
            <span className="text-xs font-bold uppercase tracking-tight text-muted-foreground/60">My Public ID</span>
            <span className="text-xs font-bold uppercase tracking-tight text-muted-foreground/60">{me.id}</span>
            <CopyButton text={me.id.toString()} />
        </div>
    )
}