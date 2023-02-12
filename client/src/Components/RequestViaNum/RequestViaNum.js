import React from 'react'

const RequestViaNum = () => {
  return (
    <>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Please Fulfill All Conditions</h1>
        <button type="button" className="btn-close bg-transparent" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className='d-flex align-items-center' >
              <input className='me-2' type="checkbox" checked />
              <span className='me-2'>Step 1 : </span>
            Register account on our website QuickClean
            </div>
          </li>
          <li className="list-group-item">
            <div className='d-flex align-items-center' >
              <input className='me-2' type="checkbox" checked />
              <span className='me-2'>Step 2 : </span>
            Provide us with your address/location
            </div>
          </li>
          <li className="list-group-item">
            <div className='d-flex align-items-center' >
              <input className='me-2' type="checkbox" checked />
              <span className='me-2'>Step 3 : </span>
            Verify your Number with 1-Step OTP Verification
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
    
  )
}

export default RequestViaNum