import React, {useCallback, useMemo} from 'react'

const Memo = () => {

    const logIndex = useCallback((idx) => {console.log(idx)}, [])

    const arr = [1,2,3,4,5]

    const arrFilter = useMemo(() => arr.filter((elem) => elem % 2 === 0), [arr])

    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {arrFilter.map((elem, idx) => <li key={idx} onClick={() => logIndex(idx)}>{elem}</li>)}
            </ul>
        </div>
    )
}

export default Memo