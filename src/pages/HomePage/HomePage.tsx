import { FC } from 'react';
import { useNavigate } from 'react-router-dom'

import s from './HomePage.module.scss'

interface HomePageProps { }

const HomePage: FC<HomePageProps> = ({ }) => {
    const navigate = useNavigate()
    return (
        <section className={s.main}>
            <div className='container'>
                <div className={s.mainWrap}>
                    <div className={s.left}>
                        <h1 className={s.mainTitle}><span>Find</span> all your favorite <span>character</span></h1>
                        <p className={s.mainText}>You can find out all the information about your favorite characters</p>
                        <button className={s.btn} onClick={() => navigate('persons')}>See more...</button>
                    </div>
                    <div className={s.right}>
                        <img src="./yoda.png" alt="yoda" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
