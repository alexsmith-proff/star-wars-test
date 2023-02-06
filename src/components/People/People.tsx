import { FC, useState } from "react"
import { IPerson } from "../../interfaces/interfaces"
import ModalWindow from "../ModalWindow/ModalWindow"

import s from './People.module.scss'

interface PeopleProps {
    person: IPerson
    clickToPerson: (person: IPerson) => void
}

const People: FC<PeopleProps> = ({ person, clickToPerson }) => {
    return (
        <li className={s.item} onClick={() => clickToPerson(person)}>
            <div className={s.name}>{person.name}</div>
            <div className={s.parameters}>
                <div className={s.parameter}>
                    {
                        person.height !== 'unknown' &&
                        <>
                            <div className={s.parameterValue}>{person.height}</div>
                            <div className={s.parameterText}>height</div>
                        </>
                    }
                </div>
                <div className={s.parameter}>
                    {
                        person.mass !== 'unknown' &&
                        <>
                            <div className={s.parameterValue}>{person.mass}</div>
                            <div className={s.parameterText}>mass</div>
                        </>
                    }
                </div>
            </div>
            <div className={s.genderBirth}>
                {
                    person.gender !== 'n/a' && <div className={s.par + ' ' + (person.gender === 'male' ? s.male : person.gender === 'female' ? s.female : s.hermaphrodite)}>{person.gender}</div>
                }
                <div className={s.par + ' ' + s.birth}>{person.birth_year}</div>
            </div>
        </li>
    )
}

export default People