import { FC, useRef } from "react";
import { IPerson } from "../../interfaces/interfaces";

import s from './ModalWindow.module.scss'

interface ModalWindowProps {
    person: IPerson
    closeWindow: () => void
}

const ModalWindow: FC<ModalWindowProps> = ({ person, closeWindow }) => {
    const windowRef = useRef()
    const handleClose = (e) => {
        if (e.target === windowRef.current) {
            closeWindow()
        }
    }
    return (
        <div className={s.background} onClick={handleClose} ref={windowRef}>
            <div className={s.window}>
                <div className={s.left}>
                    {person.gender === 'male' && <img src="./male.png" alt="male" />}
                    {person.gender === 'female' && <img src="./female.png" alt="female" />}
                    {person.gender === 'hermaphrodite' && <img src="./hermaphrodite.png" alt="hermaphrodite" />}
                    <div className={s.genderBirth}>
                        {
                            person.gender !== 'n/a' && <div className={s.par + ' ' + (person.gender === 'male' ? s.male : person.gender === 'female' ? s.female : s.hermaphrodite)}>{person.gender}</div>
                        }
                        <div className={s.par + ' ' + s.birth}>{person.birth_year}</div>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.name}>{person.name}</div>
                    <div className={s.desc}>
                        {person.hair_color !== 'n/a' && <div className={s.descValue}>hair color: {person.hair_color}</div>}
                        {person.skin_color !== 'n/a' && <div className={s.descValue}>skin color: {person.skin_color}</div>}
                        {person.eye_color !== 'n/a' && <div className={s.descValue}>eye color: {person.eye_color}</div>}
                    </div>
                    <div className={s.parameters}>

                        {
                            person.height !== 'unknown' &&
                            <div className={s.parameter}>
                                <div className={s.parameterValue}>{person.height}</div>
                                <div className={s.parameterText}>height</div>
                            </div>
                        }

                        {
                            person.mass !== 'unknown' &&
                            <div className={s.parameter}>
                                <div className={s.parameterValue}>{person.mass}</div>
                                <div className={s.parameterText}>mass</div>
                            </div>
                        }
                    </div>

                </div>
                <div className={s.close} onClick={closeWindow}>
                    <img src="./close-ico.png" alt="close-ico" />
                </div>
            </div>
        </div >
    )
}

export default ModalWindow