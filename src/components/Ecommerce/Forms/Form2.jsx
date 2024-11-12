import React from 'react'

const Form2 = () => {
  return (
    <>
                 <form className='mt-4 container'>
               
               <div className="row mb-3">
                   <div className="col-md-6">
                       <label htmlFor="firstName" className="form-label">First Name</label>
                       <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="lastName" className="form-label">Last Name</label>
                       <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                   </div>
               </div>
             
               <div className="row mb-3">
                   <div className="col-md-12">
                       <label htmlFor="title" className="form-label">Title</label>
                       <input type="text" className="form-control" id="title" placeholder="Title" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                       <label htmlFor="streetAddress1" className="form-label">Street Address</label>
                       <input type="text" className="form-control" id="streetAddress1" placeholder="Street Address" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="streetAddress2" className="form-label">Street Address 2</label>
                       <input type="text" className="form-control" id="streetAddress2" placeholder="Street Address 2" />
                   </div>
               </div>
               <div className="row mb-3">
                   <div className="col-md-4">
                       <label htmlFor="city" className="form-label">City</label>
                       <input type="text" className="form-control" id="city" placeholder="City" />
                   </div>
                   <div className="col-md-4">
                       <label htmlFor="country" className="form-label">Country</label>
                       <input type="text" className="form-control" id="country" placeholder="Country" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                       <label htmlFor="postalCode" className="form-label">Postal Code/Zip Code</label>
                       <input type="text" className="form-control" id="postalCode" placeholder="Postal Code/Zip Code" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="stateRegion" className="form-label">State/Region</label>
                       <input type="text" className="form-control" id="stateRegion" placeholder="State/Region" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                       <label htmlFor="phone" className="form-label">Phone Number</label>
                       <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="email" className="form-label">Email</label>
                       <input type="email" className="form-control" id="email" placeholder="Email" />
                   </div>
               </div>
           </form> 
    </>
  )
}

export default Form2
