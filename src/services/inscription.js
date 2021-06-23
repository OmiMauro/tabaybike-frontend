import axios from 'axios'

const addInscription = async ({ inscription }) => {
  // const { name, lastName, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour } = inscription
  console.log(inscription)
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: '/inscription'
  })
  return response
}

export { addInscription }
