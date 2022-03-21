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
      <style jsx>{`
        nav {
          border: 3px solid blue;
        }
        a {
          text-decoration: none;
          color: black;
        }
        .active {
          color: crimson;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
