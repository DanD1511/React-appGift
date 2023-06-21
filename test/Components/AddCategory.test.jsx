import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/Components/AddCategory";

describe('Pruebas AddCategory', () => {
    test('Debe cambiar la caja de texto', () => {
        render(<AddCategory onNewCategory={()=>{}}></AddCategory>)
        // screen.debug()

        //Recuperamos el input del componente
        const input=screen.getByRole('textbox')
        //Disparamos el evento input tal y como pasa en el componente
        fireEvent.input(input,{target:{value:'Dragon Ball'}})
        
        //Luego de disparar el evento y decir que el input tendrá valor 
        //de Dragon Ball, se verifica que eso se cumpla
        expect(input.value).toBe('Dragon Ball')
    });

    test('Debe de guardar lo introducido en el input en onNewCategory', () => {
        
        //El componente addCategory tiene como props onNewCategory que es una función
        const onNewCategory=jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
        const inputValue='Dragon Ball'

        //Recuperamos el input y el formulario
        const input=screen.getByRole('textbox')
        const form=screen.getByRole('form')
        //Recuperamos el valor del input disparando su evento
        fireEvent.input(input,{target:{value:inputValue}})
        //Disparamos el evento submit
        fireEvent.submit(form)

        //Se eséra que luego de submit el input esté vacio
        expect(input.value).toBe('')

        //Verifiquemos que la función onNewCategory si se invoque junto con su parametro del 
        //inputValue así como en la linea 22 de ese componente
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    });

    test('No debe hacer nada si el inputValue está vacio ', () => {
        //El componente addCategory tiene como props onNewCategory que es una función
        const onNewCategory=jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
        const form=screen.getByRole('form')
        
        //Disparamos el evento submit
        fireEvent.submit(form)

        //Verificar que haya sido llamada 0 veces
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()

    });
});