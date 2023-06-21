import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function AddCategory({onNewCategory,borrarGifs}) {
    
    const [inputValue, setInputValue] = useState('')

    //Evento del input
    const onInputChange=(evento)=>{
        //InputValue Almacena el valor del inputValue
        setInputValue(evento.target.value)
    }

    //Evento del form
    const onSubmit=(evento)=>{
        evento.preventDefault()
        let newCategory=inputValue
        //Si viene vacio
        if(inputValue.trim().length >1){
            //Recordar que el primer valor de la funcion es [...categories] y luego se le agrega el inputValue
            onNewCategory(newCategory)
            //Borramos el contenido del input
            setInputValue('')
            
        }
        else{
            return
        }
    }
  return (
    <>
    
    <form action="" onSubmit={onSubmit} aria-label='form'>

        <input type="text" placeholder="Insert an category" onInput={onInputChange} value={inputValue} />
    </form>
    </>
  )
}

AddCategory.propTypes={
    onNewCategory:PropTypes.func.isRequired
}