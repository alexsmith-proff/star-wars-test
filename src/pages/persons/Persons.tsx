import { FC, useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import Filter from '../../components/Filter/Filter';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Pagination from '../../components/Pagination/Pagination';
import PeoplesList from '../../components/PeoplesList/PeoplesList';
import { IPerson } from '../../interfaces/interfaces';

import s from './Persons.module.scss'

interface PersonsProps { }

const Persons: FC<PersonsProps> = ({ }) => {
    const [peopleCount, setPeapleCount] = useState<number>(0)
    const [people, setPeople] = useState<IPerson[]>([])
    const [currentPerson, setCurrentPerson] = useState<IPerson>(null)
    const [isVisibleModalWindow, setIsVisibleModalWindow] = useState<boolean>(false)
    const [isloading, setIsloading] = useState<boolean>(true)
    const [filterEyeColor, setFilterEyeColor] = useState<string>('all')
    const [paginationPage, setPaginationPageg] = useState<number>(0)

    const fetchData = async (page: number) => {
        setIsloading(true)
        const res = await axiosInstance.get(`/api/people/?page=${page}`)
        setPeapleCount(res.data.count)
        setPeople(res.data.results)
        setIsloading(false)
        console.log(res.data.results);
        
    }

    const handleClickToPerson = (pers: IPerson) => {
        setCurrentPerson(pers)
        setIsVisibleModalWindow(true)
    }

    const handleCloseModalWindow = () => {
        setIsVisibleModalWindow(false)
    }

    const paginationonClickPage = (page: number) => {
        fetchData(page + 1)
        setPaginationPageg(page)
    }

    const filterChangeEyeColor = (color: string) => {
        setFilterEyeColor(color)
    }

    useEffect(() => {
        fetchData(1)
    }, [])


    return (
        <section className={s.persons}>
            <div className="container">
                <div className={s.language}>language: en</div>
                {
                    isloading ?
                        <div className={s.loading}>Loading...</div>
                        :
                        <>
                            <div className={s.title}>{peopleCount} <span>Peoples</span> for you to choose your favorite</div>
                            <Filter filterEyeColor={filterEyeColor} onSelect={filterChangeEyeColor} />
                            <PeoplesList people={people} filter={filterEyeColor} clickToPerson={handleClickToPerson} />
                            {
                                isVisibleModalWindow && <ModalWindow person={currentPerson} closeWindow={handleCloseModalWindow}/>
                            }
                            <Pagination pageCount={Math.ceil(peopleCount / 10)} currentPage={paginationPage} pageOnClick={paginationonClickPage} />
                        </>
                }
            </div>
        </section>
    );
}

export default Persons;
