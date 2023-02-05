import { FC, useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import Filter from '../../components/Filter/Filter';
import PeoplesList from '../../components/PeoplesList/PeoplesList';
import { IPeaple } from '../../interfaces/interfaces';

import s from './Persons.module.scss'

interface PersonsProps { }

const Persons: FC<PersonsProps> = ({ }) => {
    const [peopleCount, setPeapleCount] = useState<number>(0)
    const [peoples, setPeoples] = useState<IPeaple[]>([])
    const [isloading, setIsloading] = useState<boolean>(false)
    useEffect(() => {
        setIsloading(true)
        axiosInstance.get('/api/people/').then(res => {
            console.log(res.data);
            setPeapleCount(res.data.count)
            setPeoples(res.data.results)
        })
        console.log(peoples);
        setIsloading(false)
    }, [])

    console.log(peoples)

    return (
        <section className={s.persons}>
            <div className="container">
                <div className={s.language}>language: en</div>
                {
                    peoples.length > 0 ? <>
                        <div className={s.title}>{peopleCount} <span>Peoples</span> for you to choose your favorite</div>
                        <Filter />
                        <PeoplesList peoples={peoples} />
                    </>
                    :
                    <div className={s.loading}>Загрузка...</div>
                }
            </div>
        </section>
    );
}

export default Persons;
