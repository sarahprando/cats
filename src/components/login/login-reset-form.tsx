'use client'

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from './login-form.module.css';
import passwordReset from "@/actions/password-reset";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Resetting...</Button>
            ) : (
                <Button disabled={pending}>Reset Password</Button>
            )}
        </>
    )
}

export default function LoginResetForm({ keyToken, login }: { keyToken: string; login: string }) {
    const [state, action] = useFormState(passwordReset, {
        ok: false,
        error: '',
        data: null,
    });

    return (
        <>
            <form action={action} className={styles.form}>
                <Input label="New Password" name="password" type="password" />
                <input type="hidden" name="key" value={keyToken || ''} />
                <input type="hidden" name="login" value={login || ''} />
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
        </>
    )
}