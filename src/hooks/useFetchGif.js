import { useEffect, useState } from "react"
import { apiGif } from "../helpers/apiGif"

export const useFetchGif = (category) => {
    const [gifs, setGifs] = useState([])
    const [cargando, setCargando] = useState(true)

    //Obtenemos las imagenes del apiGif que retorna la info de cada busqueda
    const getGif=async()=>{
        const newGif=await apiGif(category)
        //Guardamos en gifs toda la info
        setGifs(newGif)
        //Cambiamos el estado de cargando a False porque ya se cargaron todas las imagenes
        setCargando(false)
    }
    
    //Se ejecuta una vez cada que el componente GifGrid se actualiza
    //recordar que esto sucede cada vez que hay una nueva búsqueda
    useEffect(() => {
        getGif()
        // apiGif(category)
    }, [])

    //Esto es lo que se desestructurará 
    return {
        gifs:gifs,
        cargando
    }
}
