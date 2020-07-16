import React from 'react';

function Modal({setPar,setVal,setAbout,value,about}){
    return (
        <>
            <div className='modal'>
                <a>Задача</a>
                <input value={value} onChange={event => setVal(event.target.value)}/>
                <a>Описание</a>
                <textarea className='in' value={about} onChange={event => setAbout(event.target.value)}/>
                <button className='btn' onClick={()=> setPar(value,about)}>Добавить</button>
            </div>
        </>
    )
}

export default Modal;