import style from './Detail.module.css';
import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getAllDrivers,clearDetail, getDriversById} from '../../redux/actions/actions'



function Detail() {
  const dispatch = useDispatch()
  const {id} = useParams();
  
  useEffect(()=>{
    dispatch(getDriversById(`${id}`));
    return () => {dispatch(clearDetail())}//limpia el detail
  },[])
  
  const users = useSelector(state=> state.driverDetail)

  return (
    <>
      <div className={style.container}>
          <div>
          <h2 className={style.title}>Driver's detail</h2>
          </div>

          <div className={style.detail}>
              <div className={style.leftColumn}>
                <h1>{`Nombre ${users.nombre}`}</h1>
                <h2>{`Apellido ${users.apellido}`}</h2>
                <h3>{`Nacionalidad ${users.nacionalidad}`}</h3>
                <p>{`descripcion ${users.descripcion}`}</p>
                <p>{`Fecha de Nacimiento ${users.FechaDeNacimiento}`}</p>
                <h3>{`team/s: ${users.teams}`}</h3>
                <h3>{`ID: ${users.id}`}</h3>
              </div>

              <div className={style.rightColumn}>
                <img src={users.image} alt="Imagen" />
              </div>
          </div>
      </div>
    </>
  )
}

export default Detail
