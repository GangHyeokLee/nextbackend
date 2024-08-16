import Link from "next/link";
import styles from './page.module.css'
import { Notice } from "@/src/types/Notice";
import { Notices } from "./components/Notices";



export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`);
  const data = await response.json();


  return (
    <main className={styles.main}>
      <h1>notice board</h1>
      <Link href='/write' className={styles.button} >write</Link>
      <Notices data={data.data.notices} />
    </main>
  );
}
