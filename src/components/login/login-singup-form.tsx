'use client'

import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import styles from './login-form.module.css';
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import userPost from "@/actions/user-post";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Sending...</Button>
            ) : (
                <Button disabled={pending}>Sign up</Button>
            )}
        </>
    )
}

export default function LoginSignupForm() {
    const [state, action] = useFormState(userPost, {
        ok: false,
        error: '',
        data: null,
    });

    React.useEffect(() => {
        if (state.ok) {
            window.location.href = '/account';
        }
    }, [state.ok]);

    return (
        <>
            <form action={action} className={styles.form}>
                <Input label="Username" name="username" type="text" />
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
        </>
    )
}