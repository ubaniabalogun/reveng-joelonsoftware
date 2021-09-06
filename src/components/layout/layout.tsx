import React from "react";
import styles from "@/components/layout/layout.module.css";
import Image from "next/image";
import Link from "next/link";

function SidebarImage() {
  return (
    <div>
      <Link href="/about-me">
        <a>
          <Image
            src="/images/sidebar-profile.png"
            height={451}
            width={228}
            alt="Joel Spolsky Profile"
          ></Image>
        </a>
      </Link>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <header>
          <Link href="/">
            <a>JOEL ON SOFTWARE</a>
          </Link>
        </header>
        <h2>YOUR HOST</h2>
        <SidebarImage />
        <p>
          I’m Joel Spolsky, a software developer in New York City.{" "}
          <Link href="/about-me">
            <a style={{ color: "#aa0505" }}>More about me</a>
          </Link>
        </p>
      </div>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/ubaniabalogun">
          REVERSE ENGINEERED BY UBANI BALOGUN
        </a>
      </footer>
    </div>
  );
}
