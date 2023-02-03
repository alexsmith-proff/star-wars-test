import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { INav } from "../../interfaces/interfaces"

import s from './Header.module.scss'

interface HeaderProps { }


const navigation: INav[] = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Characters',
        link: '/persons'
    },
]

const Header: FC<HeaderProps> = () => {
    const [navIndexActive, setNavIndexActive] = useState<number>(0)
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerWrap}>
                    <Link to={'/'}>
                        <img src="logo.png" alt="logo" />
                    </Link>
                    <nav className={s.nav}>
                        {
                            navigation.map((item, index) => <Link className={s.navItem + ' ' + (navIndexActive === index ? s.active : '')} to={item.link} onClick={() => setNavIndexActive(index)} key={index}>{item.text}</Link>)
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
