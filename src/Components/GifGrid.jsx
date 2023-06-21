
import { GiftItem } from "./GiftItem"
import { useFetchGif } from "../hooks/useFetchGif"
import PropTypes from 'prop-types'; // ES6



export const GifGrid = ({category}) => {
    
    //Usamos el custom hooks que creamos
    const {gifs,cargando}=useFetchGif(category)
    // console.log(cargando)
    
  return (
    
    <>
        <h3>{category}</h3>
        
        <div className="card-grid">

            {/* Si cargando está en true, muestra el mensaje de : Cargando... */}
            {cargando && (<h3>Cargando...</h3>)}
            {/* //Pasamos la info  a un nuevo componente que lo muestre */}
            {gifs.map(({id,title,urlImg})=>(
                <GiftItem key={id} id={id} title={title} urlImg={urlImg}></GiftItem>
            ))}

        </div>

        
    </>
  )
}

GifGrid.propTypes={
  category:PropTypes.string.isRequired
}