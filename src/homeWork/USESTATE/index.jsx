import React, { useEffect, useState } from 'react'

const Counter = () => {
// Создай простое React-приложение, в котором используй хук useState. Твоя задача - создать простой счетчик.
// В файле компонента App.js создай функциональный компонент Counter.
// Внутри компонента Counter используй хук useState для создания переменной count и функции setCount.
// Отобрази значение счетчика на странице.
// Добавь две кнопки: "Увеличить" и "Уменьшить", которые будут увеличивать и уменьшать значение счетчика соответственно.

    const [ count , setCount ] = useState(0)
    const plus = () => {setCount(elem => elem +1)}
    const minus = () => {setCount(elem => elem -1)}
    useEffect(() => {console.log(count)}, [count])
    return (
        <div>
            {count}
            <div>
                <button onClick={plus}>plus</button>
                <button onClick={minus}>minus</button>
            </div>
        </div>
    );
};

export default Counter