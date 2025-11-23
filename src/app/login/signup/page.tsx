import { Metadata } from "next";
import LoginSignupForm from "../../../components/login/login-singup-form";

export const metadata: Metadata = {
    title: 'Signup | Cats',
    description: 'Create a new account',
};

export default async function SignupPage() {
    return (
        <div className="animeLeft">
            <h1 className="title">Signup</h1>
            <LoginSignupForm />
        </div>
    )
}