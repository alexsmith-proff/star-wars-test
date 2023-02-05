import { FC } from "react"
import { IPeaple } from "../../interfaces/interfaces"

import s from './People.module.scss'

interface PeopleProps {
    peopleItem: IPeaple
}

const People: FC<PeopleProps> = ({ peopleItem }) => {
    return(
        <li className={s.item}>
            <div className={s.name}>{peopleItem.name}</div>
            <div className={s.parameters}>
                <div className={s.parameter}>
                    <div className={s.parameterValue}>{peopleItem.height}</div>
                    <div className={s.parameterText}>height</div>
                </div>
                <div className={s.parameter}>
                    <div className={s.parameterValue}>{peopleItem.mass}</div>
                    <div className={s.parameterText}>mass</div>
                </div>
            </div>
            <div className={s.genderBirth}>
                <div className={s.gender}>{peopleItem.gender}</div>
                <div className={s.birth}>{peopleItem.birth_year}</div>
            </div>
        </li>
    )
}

export default People