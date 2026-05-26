import { useEffect, useState } from 'react'

import SearchBox from '../components/SearchBox'
import Card from '../components/Card'
import Wait from '../components/Wait'
import '../style/Home.css'
import '../style/Search.css'
import '../style/Card.css'
import '../style/FullInfo.css'
import { getPokemon } from '../api/poke'


function Home() {

  const [todayData, setTodayData] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {

    const oldDate = localStorage.getItem('poke-date')

    const oldData = localStorage.getItem('poke-data')

    const nowDate = new Date().toDateString()

    if(oldDate === nowDate && oldData){

      setTodayData(JSON.parse(oldData))

      setLoad(false)

      return

    }

    getRandomPokemon()

  }, [])

  const getRandomPokemon = async () => {

    try {

      const randomId =
        Math.floor(Math.random() * 500) + 1

      const data = await getPokemon(randomId)

      setTodayData(data)

      localStorage.setItem(
        'poke-date',
        new Date().toDateString()
      )

      localStorage.setItem(
        'poke-data',
        JSON.stringify(data)
      )

    } catch (err) {

      console.log(err)

    } finally {

      setLoad(false)

    }

  }

  return (

    <div className='mainBox'>

      <div className='topBox'>

        <h1>Pokemon World</h1>

        <p>
          Search and explore pokemon
        </p>

      </div>

      <SearchBox />

      <div className='dailyBox'>

        <h2>Today Pokemon</h2>

        {
          load
          ?
          <Wait />
          :
          todayData && (
            <Card item={todayData} />
          )
        }

      </div>

    </div>

  )

}

export default Home