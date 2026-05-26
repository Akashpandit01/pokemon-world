import { Link } from 'react-router-dom'

function Card({ item }) {

  return (

    <div className='cardBox'>

      <img
        src={item.sprites.other['official-artwork'].front_default}
        alt={item.name} />

      <h2>{item.name}</h2>

      <p>
        Height : {item.height}
      </p>

      <p>
        Weight : {item.weight}
      </p>

      <div className='typeRow'>

        {
          item.types.map((el) => (

            <span key={el.type.name}>
              {el.type.name}
            </span>

          ))
        }

      </div>

      <Link to={`/about/${item.id}`}>

        <button className='infoBtn'>
          View Details
        </button>

      </Link>

    </div>

  )

}

export default Card