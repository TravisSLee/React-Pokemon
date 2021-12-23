import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './Pokemon.module.css'
import Image from 'react-bootstrap/Image';

export default function Pokemon({url, loading, setLoading}) {
    const {name} = useParams();
    const [thisPgUrl] = useState(url + "/" + name)
    const [mon, setMon] = useState(null)

    const success = async () => {

        const res = await axios.get(thisPgUrl)
        setMon(res.data)
        console.log(res.data)
    }

    const getMon = async () => {
          try {
              await success();
              setLoading(false)
          } catch (error) {
              await console.log(error);
          }
   
      }


    

    useEffect(() => {
        setLoading(true)
        getMon()
      }, [])
    
    
    function getTypes() {
      mon.types.map((t,i) => {
        return <div key={i}>{t.type.name}</div>
      })
    }
    
    function getAbilities(){
      
    }
      


    if (loading) return "Loading..."

    return (
        <>
            <div className={style.name}>{name} #{mon.id}</div>
            <Image src={mon.sprites.front_default} roundedCircle />
            <Image src={mon.sprites.front_shiny} roundedCircle />
            <div>{ getTypes() }</div>
        </>
    )
}
