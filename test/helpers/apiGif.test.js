import { apiGif } from "../../src/helpers/apiGif";

describe('Pruebas apiGif', () => {
    test('Debe de retornar un arreglo de gifs', async() => {
        const gifs=await apiGif('Dragon Ball')
        //Toma el primer elemento del gif y verifica que tenga las
        //Propiedades de ese objeto
        expect(gifs[0]).toEqual({
            id:expect.any(String), //Espera cualquier cosa mientras sea un String
            title:expect.any(String),
            urlImg:expect.any(String)
        })
    });
});