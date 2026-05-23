import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Wait from '../controller/Wait'
import { oneById } from '../api/poke'
import { useNavigate } from 'react-router-dom'
function FullInfo() {

  const { id } = useParams()

  const [fullData, setFullData] = useState(null)
  const [load, setLoad] = useState(true)
  const move = useNavigate()

  useEffect(() => {
    getInfo()
  }, [id])

  const getInfo = async () => {

    try {

      const data = await oneById(id)

      setFullData(data)

    } catch (err) {

      console.log(err)

    } finally {

      setLoad(false)

    }

  }

  if (load || !fullData) {
    return <Wait />
  }

  return (

    <div className='infoPage'>

      <div className='infoCard'>

        <div className='topArea'>

          <button
            className='backBtn'
            onClick={() => move(-1)}
          >
            ← Back
          </button>

        </div>

        <img
          src={fullData.sprites.other['official-artwork'].front_default}
          alt={fullData.name}
        />
        <h1>{fullData.name}</h1>

        <div className='insideInfo'>

          <p>
            <strong>Height :</strong> {fullData.height}
          </p>

          <p>
            <strong>Weight :</strong> {fullData.weight}
          </p>

          <p>
            <strong>Experience :</strong> {fullData.base_experience}
          </p>

          <div className='abilityBox'>

            <strong>Abilities :</strong>

            {
              fullData.abilities.map((el) => (
                <span key={el.ability.name}>
                  {el.ability.name},
                </span>
              ))
            }

          </div>

          <div className='typeBox'>

            <strong>Types :</strong>

            {
              fullData.types.map((el) => (
                <span key={el.type.name}>
                  {el.type.name},
                </span>
              ))
            }

          </div>

        </div>

      </div>

    </div>

  )

}

export default FullInfo