import { useState } from "react"
import AddCategory from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"

export const GiftApp = () => {

  
  const [categories, setCategories] = useState([])
  
  const onAddCategory=(newCategory)=>{
    newCategory=newCategory.charAt(0).toUpperCase() + newCategory.slice(1)
    //Verifiquemos que solo se agreguen categorias nuevas
    if(categories.includes(newCategory)){
      return
    }
    else{
      setCategories([newCategory,...categories,])

    }
  }
    
    return (
    <>
    
    <h1>Gift Expert App</h1>
    
    {/* //Enviamos la función al nuevo componente */}
    <AddCategory onNewCategory={onAddCategory} ></AddCategory>
    
    
      {/* Recorre el listado y en cada elemento y lo manda al componente GifGrid */}
      {categories.map(category=>{
          return <>
            <GifGrid category={category} key={category}></GifGrid>
          </>
      })}
       
   
    </>
  )
}
