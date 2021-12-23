import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import style from './Pokemon.module.css'

export default function Pokemon({url,loading, setLoading}) {
    const {name} = useParams();
    const [thisPgUrl] = useState(url + "/" + name)
    const [mon, setMon] = useState(null)

    function getMon() {
      setTimeout(async () => {
          try {
              const res = await axios.get(thisPgUrl)
              setMon(res.data)
              setLoading(false)
          } catch (error) {
              await console.log(error);
          }
      }, 0);
  }

    useEffect(() => {
        getMon()
      }, [])

      


      if (loading) return "Loading..."

    return (
        <div>
            <div className={style.name}>{name} #{mon.id}</div>
        </div>
    )
}
