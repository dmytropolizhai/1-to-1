"use client"

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import Form from "next/form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Card, CardAction, CardContent, CardFooter } from "@/shared/components/ui/card";

const formSchema = z.object({
    nickname: z.string().min(3).max(20),
});

type FormSchemaValues = z.infer<typeof formSchema>

export function CreateUserForm() {
    const form = useForm<FormSchemaValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nickname: "",
        },
    });

    async function onSubmit(values: FormSchemaValues) {
        return new Promise(res => setTimeout(res, 4000))
    }

    return (
        <Form
            action="/api/users"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 justify-start items-center"
        >
            <Card>
                <CardContent>
                    <Controller
                        name="nickname"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Nickname</FieldLabel>
                                <Input
                                    placeholder="Enter your nickname"
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    aria-invalid={fieldState.invalid}
                                />
                                <FieldDescription>
                                    Enter your nickname. Must be unique
                                </FieldDescription>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Creating..." : "Create"}
                    </Button>
                </CardFooter>
            </Card>
        </Form>
    )
}