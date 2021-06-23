import axios from 'axios'
const urlBase = 'https://apis.datos.gob.ar/georef/api'
// "https://apis.datos.gob.ar/georef/api/municipios?provincia=Misiones&campos=id,nombre&max=100"
const getProvinces = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/provincias?campos=id,nombre`
    })
    return response
  } catch (e) {
    console.log(e)
  }
}
const getLocations = async province => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/municipios?provincia=${province}&campos=id,nombre&max=100`
    })
    return response
  } catch (e) {
    console.log(e)
  }
}
export { getProvinces, getLocations }
