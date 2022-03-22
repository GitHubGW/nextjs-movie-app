import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

const Nav = () => {
  const router: NextRouter = useRouter();

  return (
    <nav>
      <img src="/images/movie.png" alt="" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }
        img {
          max-width: 100px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
          margin: 0px 10px;
          margin-top: 20px;
        }
        .active {
          color: dodgerblue;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
