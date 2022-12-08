import React from 'react'

function privatebuttonsignup(signup) {
  return (
    <button
    type="button"
    className="login btn btn-outline-dark mx-1"
    aria-label="Left Align"
    onClick={signup}
  >
    signup
  </button>
     
  )
}

export default privatebuttonsignup