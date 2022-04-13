import classes from "./Navbar.module.css";
import Link from "next/link";
import { FaSearch } from 'react-icons/fa';
import * as S from "../styles";

export default function Navbar() {
  return (
    <header className={classes.navbar}>
      <nav className={classes.menu} >
        <ul className={classes.menuItems}>
          <li className={classes.logo}>
            <Link href="/" >
                TMDB
            </Link>
          </li>
          <li>
            <Link href="/">Movies</Link>
          </li>
          <li style={{display: 'flex'}}>
            <Link href="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link href="/people">People</Link>
          </li>
          <li>
            <Link href="/more">More</Link>
          </li>
        </ul>
      </nav>

      <nav className={classes.settingsMenu}>
      <S.NavBar>
          <ul className={classes.settingMenuItems}>
            <li>
                <Link href="/" >
                    <a><b>+</b></a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={classes.squareBox}>
                        <p className={classes.squareText}>EN</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">Login</Link>
            </li>
            <li>
                <Link href="/">JoinTMDb</Link>
            </li>
            <li>
                <Link href="/">
                    <a><FaSearch /></a>
                </Link>
            </li>
          </ul>
          </S.NavBar>
      </nav>
    </header>
  );
};
