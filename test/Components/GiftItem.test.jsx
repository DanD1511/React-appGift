import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/Components/GiftItem";

describe('Pruebas en <GiftItem></GiftItem>', () => {
    const title='Dragon ball'
    const urlImg='https://dragonball.com/goku.jpg'

    test('Debe hacer match con el snapshot', () => {
        
        const {container}=render(<GiftItem title={title} urlImg={urlImg}></GiftItem>)
        expect(container).toMatchSnapshot()
    });

    test('Debe mostrar el nombre de la img y su ALT', () => {
        render(<GiftItem title={title} urlImg={urlImg}></GiftItem>)
        //Obtenemos el src y el alt de la imagen
        
        // expect(screen.getByRole('img').src).toBe(urlImg)
        // expect(screen.getByRole('img').alt).toBe(title)

        //Otra manera 
        const {src,alt}=screen.getByRole('img')
        expect(src).toBe(urlImg)
        expect(alt).toBe(title)
    });

    test('Debe de haber un texto <p>{title}</p> en el componente', () => {
        render(<GiftItem title={title} urlImg={urlImg}></GiftItem>)
        //Obtenemos el texto que tenga valor title y verificamos que exista
        //Recordar que screen es una copia del componente
        expect(screen.getByText(title)).toBeTruthy()

    });
});