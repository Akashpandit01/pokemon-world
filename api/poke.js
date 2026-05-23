const baseUrl = 'https://pokeapi.co/api/v2'

const getAllPokemon = async () => {

  const res = await fetch(`${baseUrl}/pokemon?limit=500`)

  return res.json()

}

const oneById = async (id) => {

  const res = await fetch(`${baseUrl}/pokemon/${id}`)

  return res.json()

}

export { getAllPokemon, oneById }