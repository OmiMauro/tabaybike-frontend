import React, { useState, useEffect } from 'react'
import { getProvinces, getLocations } from '../services/location'
import { addInscription } from '../services/inscription'
import 'react-lite-toast/dist/index.css'
/* import { Toast } from 'react-lite-toast'
 */import Alert from './Alert'
const Signup = () => {
  const [toast, setToast] = useState(false)
  const [provinces, setProvinces] = useState([])
  const [locations, setLocations] = useState([])
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [DNI, setDNI] = useState('')
  const [numberCell, setNumberCell] = useState('')
  const [email, setEmail] = useState('')
  const [provinceOrigin, setProvinceOrigin] = useState('')
  const [locationOrigin, setLocationOrigin] = useState('')
  const [distanceTour, setDistanceTour] = useState('')
  const [almuerzo, setAlmuerzo] = useState('')
  const [selectTermsConditions, setSelectTermsConditions] = useState(false)
  /*   const [count, setCount] = useState(0) */
  const [message, setMessage] = useState('')
  const [bg, setBg] = useState('')
  const handleProvinces = async () => {
    const response = await getProvinces()
    const sorted = response.data.provincias.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setProvinces(sorted)
  }
  useEffect(() => {
    async function getProvincesHook () {
      await handleProvinces()
    }
    getProvincesHook()
  }, [])
  /*  const handleCount = async () => {
    const response = await getCount()
    setCount(response)
  }
  useEffect(() => {
    async function getCountInscription () {
      await handleCount()
    }
    getCountInscription()
  }, []) */
  const handleLocality = async (name) => {
    const response = await getLocations(name)
    const sorted = await response.data.municipios.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setLocations(sorted)
  }
  const handleInscription = async e => {
    e.preventDefault()
    const inscription = {
      name, lastname, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour, almuerzo
    }
    try {
      const response = await addInscription({ inscription })
      setBg('alert alert-success alert-dismissible fade show')
      setMessage(response.data.message)
      setToast(true)
      setName('')
      setDNI('')
      setLastName('')
      setEmail('')
      setNumberCell('')
      /*  setCount(count + 1) */
      setProvinceOrigin('')
      setLocationOrigin('')
      setDistanceTour('')
      setAlmuerzo('')
      setSelectTermsConditions(false)
      setTimeout(() => { setToast(false) }, 10000)
    } catch (e) {
      setBg('alert alert-danger alert-dismissible fade show')
      setMessage('Verifique los datos ingresados')
      setToast(true)
      setTimeout(() => { setToast(false) }, 10000)
    }
  }

  return (
    <section className='signup-section' id='signup'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto text-center'>
            <h2 className='text-white mb-1'>Preinscripción al IV Encuentro Provincial de MTB</h2>
            {/*  <p className='text-white mb-2'><i>Total de inscriptos: {count}</i></p> */}
            <form id='inscriptionForm' onSubmit={handleInscription}>
              <div className='form-row'>
                <div className='col'>
                  <input value={name} onChange={(e) => setName(e.target.value)} className='form-control mr-0 mr-sm-2 mb-3 mb-sm-0' id='name' type='text' placeholder='Nombre/s *' name='name' required='required' />
                </div>
                <div className='col'>
                  <input value={lastname} onChange={(e) => setLastName(e.target.value)} className='form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='lastname' type='text' placeholder='Apellido/s *' name='lastname' required='required' />
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <input value={DNI} maxlength='8' minLength='7' onChange={(e) => setDNI(e.target.value.replace(/[^0-9]/g, ''))} className='form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='DNI' type='text' placeholder='DNI *' name='DNI' required='required' />
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='email' type='email' placeholder='Correo electronico *' name='email' required='required' />
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <input value={numberCell} onChange={(e) => setNumberCell(e.target.value)} className='form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='numberCell' type='tel' placeholder='Número de teléfono' name='numberCell' />
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={provinceOrigin} onChange={e => {
                      setProvinceOrigin(e.target.value)
                      const name = e.target.value
                      handleLocality(name)
                    }}
                    className='custom-select flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='provinceOrigin' name='provinceOrigin' required
                  >
                    <option hidden>Provincia *</option>
                    {provinces.map(prov => (
                      <option value={prov.nombre} key={prov.id}>{prov.nombre}</option>)
                    )}
                  </select>
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={locationOrigin}
                    onChange={e => setLocationOrigin(e.target.value)}
                    className='custom-select flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0'
                    id='locationOrigin' name='locationOrigin' required
                  >
                    <option hidden>Localidad * </option>
                    {locations.map(item => (
                      <option value={item.nombre} key={item.id}>{item.nombre}</option>)
                    )}
                    <option value='Otro'>No se encuentra en la lista</option>
                  </select>
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={distanceTour} onChange={e => setDistanceTour(e.target.value)} className='custom-select flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0'
                    id='distanceTour' name='distanceTour' required
                  >
                    <option hidden>¿Recorrido a realizar? *</option>
                    <option key='29km' value='29km'>29km</option>
                    <option key='57km' value='57km'>57km</option>
                  </select>
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={almuerzo} onChange={e => setAlmuerzo(e.target.value)} className='custom-select flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0'
                    id='almuerzo' name='almuerzo' required
                  >
                    <option hidden>¿Te quedás a almorzar el Domingo? *</option>
                    <option key='Si' value='true'>Sí</option>
                    <option key='No' value='false'>No</option>
                  </select>
                </div>
              </div>
              <div class='form-check mt-2'>
                <input
                  class='form-check-input' type='checkbox' checked={selectTermsConditions} onClick={e => {
                    setSelectTermsConditions(e.target.checked)
                  }} id='termsAndConditions'
                />
                <label class='form-check-label' for='termsAndConditions' style={{ color: 'white' }}>
                  He leído y acepto los <a href='terms_conditions.html' target='_blank' rel='noreferrer'>Terminos y Condiciones</a> y las
                  <a href='privacy_policy.html' target='_blank' rel='noreferrer'> Politicas de privacidad</a>
                </label>
              </div>
              <button disabled={!selectTermsConditions} className='btn btn-primary mx-auto mt-2' type='submit'>Enviar</button>
              {/* toast && <Toast type='success' title='Te esperamos!' description='Se inscribio con exito' position='bottomup' duration={10000} closeButton /> */}
            </form>
            {toast && <Alert message={message} bg={bg} />}
          </div>
        </div>
      </div>

    </section>
  )
}
export default Signup
