import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getAllPokemon } from '../api/poke'
import Wait from '../controller/Wait'
import Card from '../controller/Card'


function Result() {

  const { name } = useParams()

  const [allData, setAllData] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    loadPokemon()
  }, [name])

  const loadPokemon = async () => {

    try {

      const data = await getAllPokemon()

      const filterData = data.results.filter((el) =>
        el.name.includes(name.toLowerCase())
      )

      const finalData = await Promise.all(

        filterData.map(async (el) => {

          const res = await fetch(el.url)

          return res.json()

        })

      )

      setAllData(finalData)

    } catch (err) {

      console.log(err)

    } finally {

      setLoad(false)

    }

  }

  if(load){
    return <Wait />
  }

  return (

    <div className='mainBox'>

      <h1 className='resultTitle'>
        Search Result
      </h1>

      <div className='resultGrid'>

        {
          allData.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))
        }

      </div>

    </div>

  )

}

export default Result