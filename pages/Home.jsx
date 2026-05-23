import { useEffect, useState } from 'react'


import { oneById } from '../api/poke'
import Top from '../controller/Top'
import SearchBox from '../controller/SearchBox'
import Card from '../controller/Card'
import Wait from '../controller/Wait'

function Home() {

  const [todayCard, setTodayCard] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {

    const oldDate = localStorage.getItem('poke-date')

    const oldData = localStorage.getItem('poke-data')

    const nowDate = new Date().toDateString()

    if(oldDate === nowDate && oldData){

      setTodayCard(JSON.parse(oldData))

      setLoad(false)

      return

    }

    getTodayPokemon()

  }, [])

  const getTodayPokemon = async () => {

    try {

      const randomId =
        Math.floor(Math.random() * 500) + 1

      const data = await oneById(randomId)

      setTodayCard(data)

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

      <Top />

      <SearchBox />

      <div className='dailyBox'>

        <h2>Today Pokemon</h2>

        {
          load
          ?
          <Wait />
          :
          todayCard && <Card item={todayCard} />
        }

      </div>

    </div>

  )

}

export default Home