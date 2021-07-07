import { getInscritpions } from '../services/inscription'
import React, { useEffect, useState } from 'react'
const Table = () => {
  const [inscription, setInscription] = useState([])

  useEffect(() => {
    async function inscriptionHook () {
      const response = await getInscritpions()
      await setInscription(response.data.listInscriptions)
    }
    inscriptionHook()
  }, [])
  console.log(inscription.almuerza)
  return (
    <>
      <div className='table-responsive'>
        <table className='table table-striped table-dark table-bordered table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Apellido</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>DNI</th>
              <th scope='col'>Email</th>
              <th scope='col'>Celular</th>
              <th scope='col'>Provincia</th>
              <th scope='col'>Localidad</th>
              <th scope='col'>Recorrido</th>
              <th scope='col'>Almuerza</th>
            </tr>
          </thead>
          <tbody className='table-striped'>
            {inscription.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{item.lastname}</th>
                <th>{item.name}</th>
                <th>{item.DNI}</th>
                <th>{item.email}</th>
                <th>{item.numberCell}</th>
                <th>{item.provinceOrigin}</th>
                <th>{item.locationOrigin}</th>
                <th>{item.distanceTour}</th>
                <th>{item.almuerzo ? 'SI' : 'NO'}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
