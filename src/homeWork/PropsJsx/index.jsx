import React from 'react';

const PropsJsx = ({children}) => {
// JSX - Синтаксис написания в React
// Задание:
// Создайте новый React-компонент и используйте JSX для создания элементов интерфейс Используйте как минимум 3 различных тега JSX и вложенности. Затем отобразите этот компонент в основном приложении. Покажите JS данные где нибудь в JSX, к примеру числа или строку которую сохраните в переменную

const arr = [1,2,3,4,5]

    return (
        <div>
            <h1>{"Hello React".split("").reverse().join("").toLocaleLowerCase()}</h1>
            <div>{arr}<span>   {arr}</span></div>
            <ChildComponents text="first"/>
            <ChildComponents2 text="Second"/>
        </div>
    )
}

export default PropsJsx

// Props - Передача свойств в компоненты
// Задание:
// Создайте родительский компонент и два дочерних компонента. Передайте свойства из родительского компонента в каждый из дочерних компонентов. Используйте эти свойства для отображения информации в каждом дочернем компоненте. Информация может быть любой, главое чтобы она передавалась пропсом (свойством)

const ChildComponents = (props) => {
    const {text} = props
    return (
        <div>
            child element {text}
        </div>
    )
}

const ChildComponents2 = (props) => {
    const {text} = props
    return (
        <div>
            child element2 {text}
        </div>
    )
}