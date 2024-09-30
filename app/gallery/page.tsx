import Link from "next/link";
import styles from "../page.module.css";

export default function Gallery() {
  return <div>
    <h1>Gallery</h1>

    <main className={styles.main}>
      <Link href="/gallery">/Gallery</Link>
      <Link href="/gallery/dynamic">/Gallery/dynamic</Link>
      <Link href="/gallery/static">/Gallery/static</Link>
    </main>

  </div>
}