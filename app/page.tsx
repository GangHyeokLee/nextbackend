import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>notice board</h1>
      <Link href='/write' className={styles.button} >write</Link>
    </main>
  );
}
