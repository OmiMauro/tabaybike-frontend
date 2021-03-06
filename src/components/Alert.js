import React from 'react'
const Alert = (props) => {
  return (
    <>
      <div className={props.bg} role='alert'>
        <strong>{props.message}</strong>
        {/* <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button> */}
      </div>
    </>
  )
}
export default Alert
