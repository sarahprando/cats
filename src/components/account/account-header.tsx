'use client';

import React from 'react';
import FeedIcon from '@/icons/feed-icon';
import EstatisticasIcon from '@/icons/estatisticas-icon';
import SairIcon from '@/icons/sair-icon';
import useMedia from '@/hooks/use-media';
import styles from './account-header.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';

function getTitle(pathname: string) {
    switch (pathname) {
        case '/account/posts':
            return 'Add Photos';
        case '/account/stats':
            return 'Statistics';
        default:
            return 'My Account';
    }
}

export default function AccountHeader() {
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const pathname = usePathname();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    const {setUser} = useUser();
    async function handleLogout() {
        await logout();
        setUser(null);
    }

    return (
        <header className={styles.header}>
            <h1 className="title">{getTitle(pathname)}</h1>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive
                        }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
                    }`}
            >
                <Link href="/account" className={pathname === '/account' ? 'active' : ''}>
                    <FeedIcon />
                    {mobile && 'My Photos'}
                </Link>
                <Link
                    href="/account/stats"
                    className={pathname === '/account/stats' ? 'active' : ''}
                >
                    <EstatisticasIcon />
                    {mobile && 'Statistics'}
                </Link>
                <button onClick={handleLogout}>
                    <SairIcon />
                    {mobile && 'Logout'}
                </button>
            </nav>
        </header>
    );
}