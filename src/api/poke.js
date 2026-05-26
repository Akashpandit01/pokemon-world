const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const getPokemon = async (name) => {

  const res = await fetch(`${baseUrl}/${name}`)

  if(!res.ok){
    throw new Error('Pokemon not found')
  }

  return res.json()

}

const getAllPokemon = async () => {

  const res = await fetch( 'https://pokeapi.co/api/v2/pokemon?limit=1000')

  return res.json()

}

export {  getPokemon, getAllPokemon}