import { FC, useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import PeoplesList from '../../components/PeoplesList/PeoplesList';
import { IPeaple } from '../../interfaces/interfaces';

import s from './Persons.module.scss'

interface PersonsProps { }

const Persons: FC<PersonsProps> = ({ }) => {
    const [peopleCount, setPeapleCount] = useState<number>(0)
    const [people, setPeople] = useState<IPeaple[]>([])
    const [isloading, setIsloading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true)
            const res = await axiosInstance.get('/api/people/?page=9')
            setPeapleCount(res.data.count)
            setPeople(res.data.results)
            console.log(res.data)
            setIsloading(false)
        }
        fetchData()
    }, [])

    return (
        <section className={s.persons}>
            <div className="container">
                <div className={s.language}>language: en</div>
                {
                    isloading ?
                        <div className={s.loading}>Загрузка...</div>
                        :
                        <>
                            <div className={s.title}>{peopleCount} <span>Peoples</span> for you to choose your favorite</div>                        <Filter />
                            <PeoplesList peoples={people} />
                            <Pagination />
                        </>

                }
            </div>
        </section>
    );
}

export default Persons;
