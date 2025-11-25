'use client';

import { useUser } from "@/context/user-context";
import MyAccount from "@/components/account/my-account";

export default function AccountPage() {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <MyAccount user={user} />
    </section>
  );
}
