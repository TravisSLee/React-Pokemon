import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './Pokemon.module.css'

export default function Pokemon({url}) {
    const {name} = useParams();
    const [loading, setLoading] = useState(true)
    const [mon, setMon] = useState()

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(url+ "/" + name, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setLoading(false)
          setMon(res.data)
          console.log(res.data)
        })
    
        return () => cancel()
        
      }, [url])



      if (loading) return "Loading..."

    return (
        <div>
            <div className={style.name}>{name} #{mon.id}</div>
        </div>
    )
}
