import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

import s from './NotFoundPage.module.scss'

interface NotFoundPageProps { }

const NotFoundPage: FC<NotFoundPageProps> = ({ }) => {
    const navigationIndex = useContext(Context)
    const navigate = useNavigate()

    const handleClickBtn = () => {
        navigationIndex.setNavIndexActive(0)
        navigate('/')
    }
    return (
        <section>
            <div className={s.img}>
                <img src="./notfound.png" alt="notfound" />
            </div>
            <div className={s.button}>
                <button className={s.btn} onClick={handleClickBtn}>Return</button>
            </div>
        </section>
    );
}

export default NotFoundPage;