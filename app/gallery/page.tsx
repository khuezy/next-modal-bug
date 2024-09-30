import Link from "next/link";
import styles from "../page.module.css";

export default function Gallery() {
  return <div>
    <h1>Gallery</h1>

    <main className={styles.main}>
      <Link href="/gallery">/gallery</Link>
      <Link href="/gallery/dynamic">/gallery/dynamic</Link>
      <Link href="/gallery/static">/gallery/static</Link>
    </main>

  </div>
}