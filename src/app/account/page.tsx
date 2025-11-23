'use client';

import React from "react";
import { useUser } from "@/context/user-context";

export default function AccountPage() {
   const {user} = useUser();
    return (
        <main>
            <h1>Conta: {user?.nome}</h1>
        </main>
    )
}