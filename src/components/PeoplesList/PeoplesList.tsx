import { FC } from "react"
import { IPeaple } from "../../interfaces/interfaces"
import People from "../People/People"

import s from './PeoplesList.module.scss'


interface PeoplesListProps { 
    peoples: IPeaple[]
 }

const PeoplesList: FC<PeoplesListProps> = ({ peoples }) => {
    return (
        <ul className={s.list}>
            {
                peoples.map((item, index) => <People peopleItem={item} key={index} />)
            }
        </ul>
    )
}

export default PeoplesList