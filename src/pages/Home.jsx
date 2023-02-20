import React from "react";
import Layout from "../components/Layout"
import RestaurantCard from "../components/RestaurantCard";
import"../styles/home.scss"
import { Navigate } from "react-router-dom";
import {getData} from "../firebase"
import { useState ,useEffect } from "react";
import { async } from "@firebase/util";



const pepito= getData()







const Home = () => {
  const [restaurantes,setRestaurantes] = useState([])


  const getDataRess =async()=>{
    try {const res = await getData()
      console.log(res)
      



        setRestaurantes(res.docs.map((doc)=>({...doc.data(), id: doc.id})))
        console.log(restaurantes);







 
      
    } catch (error) {console.log(error);
      
    }
  }
  
  useEffect(()=>{
    getDataRess()
  },[0.1])
  



  return (
    <div className="main">
      <div className="login bg-white h-screen flex justify-between flex-col max-w-md mx-auto p-5 py-20 ">
        <div className="flex pr-5 ">
          <i className="text-yellow-300 m-3 fa-solid text-200 fa-location-dot location__icon"></i>
          <div className=" flex flex-col ">
            <p className="text-yellow-400 uppercase text-xs">Deliver to</p>
            <p className="text-grey-800 pr-5 ">882 Wessll St, New York</p>
          </div>
        </div>

        <div className="m-15 mb-5 ml-5  w-50vh h-1 rounded-lg">
          <img
            src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1676398916/food-app/Promo_1_jvxz2w.png"
            alt="image-descount"
            className="card-desc__imgn"
          />
        </div>

        <p className="ml-5  text-2xl font-medium mt-10 ">Restaurants and Cafe's</p>

        <div className="flex flex-wrap  w-200 mb-6 ">
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300">
            All
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className=" fa-solid fa-burger btn-filter__icon"></i>Burger
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-pizza-slice btn-filter__icon"></i>Pizza
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-bowl-food btn-filter__icon"></i>Salad
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-bacon btn-filter__icon"></i>Pasta
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-bowl-rice btn-filter__icon"></i>Fries
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-drumstick-bite btn-filter__icon"></i>Wings
          </button>
          <button className="bg-gray-300 w-20 h-8 m-1 mr-1 rounded text-xs hover:bg-yellow-300 ">
            <i className="fa-solid fa-utensils btn-filter__icon"></i>Soup
          </button>
        </div>

        <div className="flex flex-col items-center">
          {restaurantes.map(
            ({ descripcion, nombre, direccion, imagen, id }) => (
              <RestaurantCard
                key={id}
                descripcion={descripcion}
                nombre={nombre}
                direccion={direccion}
                imagen={imagen}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
