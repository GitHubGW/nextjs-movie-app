import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import styles from "./nav.module.css";

const Nav = () => {
  const router: NextRouter = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active : "transparent"}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={`${styles.link} ${router.pathname === "/about" ? styles.active : "transparent"}`}>About</a>
      </Link>
    </nav>
  );
};

export default Nav;
