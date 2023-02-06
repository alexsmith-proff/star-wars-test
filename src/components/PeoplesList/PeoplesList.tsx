import { FC } from "react"
import { IPerson } from "../../interfaces/interfaces"
import People from "../People/People"

import s from './PeoplesList.module.scss'


interface PeoplesListProps { 
    people: IPerson[]
    filter: string
    clickToPerson: (person: IPerson) => void
 }

// Не нашел api, который позволяет получить всех людей (82 человека), поэтому сделал фильтрацию на странице пагинации

const PeoplesList: FC<PeoplesListProps> = ({ people, filter, clickToPerson }) => {
    return (
        <ul className={s.list}>
            {
                filter === 'all' ? people.map((person, index) => <People person={person} clickToPerson={clickToPerson} key={index} />)
                :
                people.filter((person) => person.eye_color === filter).map((person, index) => <People person={person} clickToPerson={clickToPerson} key={index} />)
            }
        </ul>
    )
}

export default PeoplesList