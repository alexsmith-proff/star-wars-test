import { FC, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/context"
import { navMenu } from "../../config/navMenu"

import s from './Header.module.scss'

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    const navigationIndex = useContext(Context)

    const handleHomeClick = () => {
        navigationIndex.setNavIndexActive(0)
    }

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerWrap}>
                    <Link to={'/'} onClick={handleHomeClick}>
                        <img src="logo.png" alt="logo" />
                    </Link>
                    <nav className={s.nav}>
                        {
                            navMenu.map((item, index) => <Link className={s.navItem + ' ' + (navigationIndex.navIndexActive === index ? s.active : '')} to={item.link} onClick={() => navigationIndex.setNavIndexActive(index)} key={index}>{item.text}</Link>)
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
