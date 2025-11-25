import { Metadata } from "next";
import styles from "./my-account.module.css";
import { User } from "@/actions/user-get";
import Image from "next/image";

export const metadata: Metadata = {
    title: "My Account",
};

export default function MyAccount({ user }: { user: User }) {
    return (
        <section className={styles.container}>
            <div className={styles.card}>

                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <Image
                            src={"/assets/user.svg"}
                            alt='User Avatar'
                            width={90}
                            height={90}
                            priority />
                    </div>

                    <div className={styles.userInfo}>
                        <h1>{user?.nome}</h1>
                        <p className={styles.username}>@{user?.username}</p>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.item}>
                        <p className={styles.label}>Email</p>
                        <p className={styles.value}>{user?.email}</p>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.label}>Account ID</p>
                        <p className={styles.value}>{user?.id}</p>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.label}>Status</p>
                        <p className={styles.statusActive}>Active</p>
                    </div>
                </div>

                <p className={styles.footer}>
                    Last update — {new Date().toLocaleDateString()}
                </p>
            </div>
        </section>
    );
}
