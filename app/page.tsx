import Link from "next/link";
import styles from './page.module.css'



export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`);
  const data = await response.json();
  console.log(data);
  return (
    <main className={styles.main}>
      <h1>notice board</h1>
      <Link href='/write' className={styles.button} >write</Link>
      {
        data.data.notices.map((notice) => (
          <>
            <h1>{notice.title}</h1>
            <p>{notice.body} </p>
          </>
        ))
      }
    </main>
  );
}
