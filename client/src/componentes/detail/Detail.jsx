import style from './Detail.module.css';
import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getAllDrivers, getDriversById} from '../../redux/actions/actions'

const defaultImage = "https://www.donolli.com.ar/defaultImagePI.png"
function Detail() {
  const dispatch = useDispatch()
  const {id} = useParams();
  
  useEffect(()=>{
    dispatch(getDriversById(`${id}`));
    console.log(getAllDrivers);
  },[])
  
  const users = useSelector(state=> state.allDrivers)
  console.log("hols",users);

  return (
    <>
      <h1>Esta es la pagina de DETAIL!</h1>
      <h1>{`es un ${users.id}`}</h1>
         <h1>{`Nombre ${users.nombre}`}</h1>
         <img src={users.image} alt="Imagen" />
         <h1>{`Apellido ${users.apellido}`}</h1>
         <h1>{`Nacionalidad ${users.nacionalidad}`}</h1>
         <h1>{`descripcion ${users.descripcion}`}</h1>
         <h1>{`Fecha ${users.FechaDeNacimiento}`}</h1>
         <h1>{`team ${users.teams}`}</h1>
    </>
  )
}

export default Detail
