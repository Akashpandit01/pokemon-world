import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

  const [txt, setTxt] = useState('')

  const [allPokemon, setAllPokemon] = useState([])

  const [suggest, setSuggest] = useState([])

  const [typing, setTyping] = useState(false)

  const move = useNavigate()

  /* LOAD POKEMON */

  useEffect(() => {

    getPokemon()

  }, [])

  const getPokemon = async () => {

    try {

      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=1000'
      )

      const data = await res.json()

      setAllPokemon(data.results)

    } catch (err) {

      console.log(err)

    }

  }

  /* DEBOUNCE */

  useEffect(() => {

    setTyping(true)

    const timer = setTimeout(() => {

      if (txt.trim() === '') {

        setSuggest([])

        setTyping(false)

        return
      }

      const filterData = allPokemon.filter((el) =>

        el.name.includes(
          txt.toLowerCase()
        )

      )

      setSuggest(
        filterData.slice(0, 6)
      )

      setTyping(false)

    }, 500)

    return () => clearTimeout(timer)

  }, [txt, allPokemon])

  /* SEARCH */

  const goNow = () => {

    if (txt.trim() === '') {
      return
    }

    move(
      `/find/${txt.toLowerCase()}`
    )

    setSuggest([])

  }

  /* ENTER */

  const pressEnter = (e) => {

    if (e.key === 'Enter') {

      goNow()

    }

  }

  /* CLEAR */

  const clearText = () => {

    setTxt('')

    setSuggest([])

  }

  return (

    <div className='searchMain'>

      <div className='searchBox'>

        {/* SEARCH ICON */}

        <span className='searchIcon'>
          🔍
        </span>

        <input
          type='text'
          placeholder='Search pokemon by name'
          value={txt}
          onChange={(e) =>
            setTxt(e.target.value)
          }
          onKeyDown={pressEnter}
        />

        {/* CLEAR BUTTON */}

        {
          txt && (

            <span
              className='clearBtn'
              onClick={clearText}
            >
              ✖
            </span>

          )
        }

        <button onClick={goNow}>
          Search
        </button>

      </div>

      {/* TYPING EFFECT */}

      {
        typing && (

          <div className='typingBox'>
            Searching...
          </div>

        )
      }

      {/* SUGGESTION */}

      {
        suggest.length > 0 && (

          <div className='suggestBox'>

            {
              suggest.map((el) => (

                <div
                  key={el.name}
                  className='suggestItem'
                  onClick={() => {

                    setTxt(el.name)

                    move(`/find/${el.name}`)

                    setSuggest([])

                  }}
                >

                  <span>
                    ⚡
                  </span>

                  <p>
                    {el.name}
                  </p>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  )

}

export default SearchBox