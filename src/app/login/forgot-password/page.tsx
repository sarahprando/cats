import LoginForgotForm from "@/components/login/login-forgot-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Forgot Password | Cats',
    description: 'Reset your password',
};

export const dynamic = 'force-dynamic';

export default async function ForgotPasswordPage() {
    return (
        <div className="animeLeft">
            <h1 className="title">Forgot your password?</h1>
            <LoginForgotForm />
        </div>
    )
}