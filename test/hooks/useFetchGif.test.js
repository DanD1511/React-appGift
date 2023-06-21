import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";
import { GifGrid } from "../../src/Components/GifGrid";

//TODO: Prueba del hook que creamos
describe('Pruebas en useFecthGif', () => {
    test('Debe retornar el estado iniciar de los useState gifs y cargando', () => {
        //RenderHook nos permite simular la respuesta del hook
        const {result}=renderHook(()=>useFetchGif('Dragon Ball'))
        console.log(result)
        //Prueba que gifs venga vacio
        expect(result.current.gifs.length).toBe(0)

        //Prueba que cargando sea true
        expect(result.cargando).not.toBe(false)
    });

    test('Debe simular el comportamiento de getGif, cambiando los estados iniciales de los useState', async() => {
        const {result}=renderHook(()=>useFetchGif('Dragon Ball'))
        const {gifs,cargando}=result.current

        //Espera a que result,current.gifs.length sea mayor a 0
        await waitFor(()=> expect(result.current.gifs.length).toBeGreaterThan(0) )
        
        //Luego de esperar, si ya se recibieron GIFS el estado de cambiando tambien es False
        expect(gifs.length).toBeGreaterThan(0)
        expect(cargando).toBeFalsy()
    });
});