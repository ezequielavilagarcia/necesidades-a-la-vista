// import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Link href="/new-need">Nueva Necesidad</Link>
      <Link href="/needs">Necesidades</Link>
      <Link href="/user-profile">Mi Perfil</Link>
    </main>
  );
}
