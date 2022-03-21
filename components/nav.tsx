import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

const Nav = () => {
  const router: NextRouter = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
    </nav>
  );
};

export default Nav;
