import { FC } from "react"
import { eyeColor } from "../../config/filterData"

import s from './Filter.module.scss'

interface FilterProps {
    filterEyeColor: string
    onSelect: (color: string) => void
}

const Filter: FC<FilterProps> = ({ filterEyeColor, onSelect }) => {
   
    return (
        <>
            <h1>Filter</h1>
            <select className={s.dropdownSelect} onChange={(e) => onSelect(e.target.value)} value={filterEyeColor}>
                {
                    eyeColor.map((item, index) => <option key={index}>{item}</option>)
                }
            </select>
        </>
    )
}

export default Filter