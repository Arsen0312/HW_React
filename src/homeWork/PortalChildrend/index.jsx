import React from 'react';
import { createPortal } from 'react-dom'


const Portal = (props) => {

    // Используйте порталы для рендеринга компонентов за пределами их родительского контейнера.
    // Создайте компонент, который рендерит содержимое в портале, например,
    // в другой части документа. Объясните, в каких сценариях это может быть полезным.

    const {
        children,
        container = document.body
    } = props
    return createPortal(children, container)

    //* Порталы будут полезны в тех случиях когда мы хотим сделать модальные окна, всплываюшие окна, 
}

export default Portal;