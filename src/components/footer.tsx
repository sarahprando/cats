import Image from 'next/image'
import styles from './footer.module.css'

export default async function Footer() {

    return (
        <footer className={styles.footer}>
            <Image
                src={"/assets/cats-footer.svg"}
                alt="Cats Footer"
                width={30}
                height={24}
            />
            <p>Cats. All rights reserved.</p>
        </footer>
    )
}