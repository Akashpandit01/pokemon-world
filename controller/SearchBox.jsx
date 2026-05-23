import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

  const [txt, setTxt] = useState('')
  const [allPokemon, setAllPokemon] = useState([])
  const [showData, setShowData] = useState([])

  const nav = useNavigate()

  useEffect(() => {
    loadPokemonName()
  }, [])

  const loadPokemonName = async () => {

    try {

      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=500'
      )

      const data = await res.json()

      setAllPokemon(data.results)

    } catch (err) {

      console.log(err)

    }

  }

  const changeText = (e) => {

    const value = e.target.value.toLowerCase()

    setTxt(value)

    if(value === ''){

      setShowData([])
      return

    }

    const filterData = allPokemon.filter((el) =>
      el.name.includes(value)
    )

    setShowData(filterData.slice(0, 5))

  }

  const goSearch = (name) => {

    nav(`/find/${name}`)

    setTxt(name)

    setShowData([])

  }

  return (

    <div className='searchMain'>

      <div className='searchBox'>

        <input
          type='text'
          placeholder='Search pokemon'
          value={txt}
          onChange={changeText}
        />

        <button onClick={() => goSearch(txt)}>
          Search
        </button>

      </div>

      {
        showData.length > 0 && (

          <div className='suggestBox'>

            {
              showData.map((el) => (

                <p
                  key={el.name}
                  onClick={() => goSearch(el.name)}
                >
                  {el.name}
                </p>

              ))
            }

          </div>

        )
      }

    </div>

  )

}

export default SearchBox