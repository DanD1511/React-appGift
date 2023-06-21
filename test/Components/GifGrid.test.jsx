import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

//Llamamos el hook que creamos
jest.mock('../../src/hooks/useFetchGif')

describe('Pruebas en <GifGrid>', () => {
    const category='Dragon Ball'
    test('Debe de mostrar "cargando" ', () => {
        
        //useFetchGif desestructura gifs y cargando
        //Inicialmente no hay imagenes y cargando es true. Retornamos esos valores 
        useFetchGif.mockReturnValue({
            gifs:[],
            cargando:true
        })
        render(<GifGrid category={category}></GifGrid>)
        screen.debug()
        //Verificamos que se muestre el texto de Categoria en algun lugar del componente
        expect(screen.getByText(category))
        //Verificamos que se muestre el texto de 'Cargando...' en algun lugar del componente
        expect(screen.getByText('Cargando...'))
    });

    test('Debe mostrar imagenes cuando se hace la petición a la API', () => {
        

        //Luego de que se haga la solicitud,llegan imagenes  y cargando es false. Retornamos esos valores 
        useFetchGif.mockReturnValue({
            gifs:[{
                id:1,
                title:'Goku',
                urlImg:'https://localhost/goku'
            },
            {
                id:2,
                title:'Goku2',
                urlImg:'https://localhost/goku2'
            }],
            
            cargando:false
        })
        render(<GifGrid category={category}></GifGrid>)

        screen.debug()

        expect(screen.getAllByRole('img').length).toBe(2)
    });
});