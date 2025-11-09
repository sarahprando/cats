import Link from "next/link";
import styles from './header.module.css'
import Image from "next/image";

export default async function Header() {
    const user = false;

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} href={'/'}>
                    <Image
                        src={"/assets/cats.svg"}
                        alt='Cats'
                        width={40}
                        height={30}
                        priority />
                </Link>
                {user ? (
                    <Link className={styles.login} href={'/account'}>
                        Cats
                    </Link>
                ) : (
                    <Link className={styles.login} href={'/login'}>
                        Login / Sign up
                    </Link>
                )}
            </nav>
        </header>
    )
}