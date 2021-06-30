import axios from 'axios'

const getCount = async () => {
  const response = await axios({
    method: 'get',
    url: '/inscription/length'
  })
  return response.data.count
}
const addInscription = async ({ inscription }) => {
  // const { name, lastName, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour } = inscription
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: '/inscription'
  })
  return response
}
const getInscritpions = async () => {
  const response = await axios({
    method: 'get',
    url: '/inscription'
  })
  return response
}

export { getCount, addInscription, getInscritpions }
