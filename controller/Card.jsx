import { Link } from 'react-router-dom'

function Card({ item }) {

  return (

    <div className='cardBox'>

      <img
        src={
          item.sprites.other['official-artwork']
          .front_default
        }
        alt={item.name}
      />

      <h2>{item.name}</h2>

      <p>
        Height : {item.height}
      </p>

      <p>
        Weight : {item.weight}
      </p>

      <div className='btnBox'>

        <Link to={`/about/${item.id}`}>

          <button className='infoBtn'>
            Info
          </button>

        </Link>

      </div>

    </div>

  )

}

export default Card