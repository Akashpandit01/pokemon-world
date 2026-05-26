import { useEffect, useState } from 'react'

import {
  useParams,
  useNavigate
} from 'react-router-dom'

import Wait from '../components/Wait'

import { getPokemon } from '../api/poke'

function FullInfo() {

  const { id } = useParams()

  const move = useNavigate()

  const [fullData, setFullData] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    getInfo()
  }, [id])

  const getInfo = async () => {

    try {

      const data = await getPokemon(id)

      setFullData(data)

    } catch (err) {

      console.log(err)

    } finally {

      setLoad(false)

    }

  }

  if(load || !fullData){
    return <Wait />
  }

  return (

  <div className='infoPage'>

    <div className='infoCard'>

      {/* LEFT SIDE */}

      <div className='leftInfo'>

        <div className='topArea'>

          {/* <button
            className='backBtn'
            onClick={() => move(-1)}
          >
            ← Back
          </button> */}

        </div>

        <div className='imgBox'>

          <img
            src={
              fullData.sprites.other[
                'official-artwork'
              ].front_default
            }
            alt={fullData.name}
          />

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className='rightInfo'>

        <h1>{fullData.name}</h1>

        <div className='idBox'>

          <span>
            Pokemon ID : #{fullData.id}
          </span>

        </div>

        <div className='typeRow'>

          {
            fullData.types.map((el) => (

              <span key={el.type.name}>
                {el.type.name}
              </span>

            ))
          }

        </div>

        <div className='insideInfo'>

          <div className='infoLine'>

            <strong>Height</strong>

            <p>{fullData.height}</p>

          </div>

          <div className='infoLine'>

            <strong>Weight</strong>

            <p>{fullData.weight}</p>

          </div>

          <div className='infoLine'>

            <strong>Base Experience</strong>

            <p>{fullData.base_experience}</p>

          </div>

          <div className='infoLine'>

            <strong>Abilities</strong>

            <div className='skillBox'>

              {
                fullData.abilities.map((el) => (

                  <span key={el.ability.name}>
                    {el.ability.name}
                  </span>

                ))
              }

            </div>

          </div>

        </div>

        <div className='statsBox'>

          <h2>Battle Stats</h2>

          {
            fullData.stats.map((el) => (

              <div
                className='singleStat'
                key={el.stat.name}
              >

                <div className='statTop'>

                  <span>
                    {el.stat.name}
                  </span>

                  <span>
                    {el.base_stat}
                  </span>

                </div>

                <div className='bar'>

                  <div
                    className='fillBar'
                    style={{
                      width:
                      `${el.base_stat}%`
                    }}
                  ></div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  </div>

)
  

}

export default FullInfo