import React from 'react'
import img from '../imgs/pardes.png'




const RestaurantCard = ({descripcion,nombre,direccion,imagen}) => {


  //FUNCIONES EN ESTE COMPONENTE
  // Traer la data de los restaurantes de la Firesotre
  // Mapear e impirmir una card por cada restaurante

  return (
    <>
    <div className='flex items-center gap-3 m-1 rounded-xl  '>
      <div className="">
        <img src={imagen} className="  m-2 " alt="" />
      </div>

      <div className="w-1/2">
        <h5 className="text-xl">{nombre}</h5>
        <p className="">
          <i className=""></i>
        </p>
        <p className="text-xs w-1/2">{descripcion}</p>
        <p className="text-xs w-1/2"></p>
      </div>
      </div>


      
    </>
  )
}

export default RestaurantCard