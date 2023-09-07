export const apiGif=async(category)=>{
    const respuestaApi=await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=kSnxDtSaT0d2q0pHAWncLJBOhw1cfGOd&limit=4`)
    const {data}= await respuestaApi.json()
    // console.log(data)

    //Recorremos la data para obtener el id, title y su url
    const infoGifs=data.map(gif=>{

        return ({
            id:gif.id,
            title:gif.title,
            urlImg:gif.images.downsized.url
            
        })
    })
    // console.log(infoGifs)
    return infoGifs
    // setGifs(infoGifs)
}

