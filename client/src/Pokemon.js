import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './Pokemon.module.css'

export default function Pokemon({url,loading, setLoading}) {
    const {name} = useParams();
    const [thisPgUrl] = useState(url + "/" + name)
    const [mon, setMon] = useState()

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(thisPgUrl, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setLoading(false)
          console.log(res.data)
          setMon(res.data)
        })
    
        return () => cancel()
        
      }, [])



      if (loading) return "Loading..."

    return (
        <div>
            <div className={style.name}>{name} #{mon.id}</div>
        </div>
    )
}
