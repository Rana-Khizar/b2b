import React from 'react'
import Layout from '../../../Layout/Layout'

function ContactForm() {
    return (
        <Layout>
        <>
         <form className='mt-4 container'>
               
               <div className="row mb-3">
                   <div className="col-md-6">
                        First Name
                       <label htmlFor="firstName" className="form-label">First Name</label>
                       <input type="text" className="form-control" id="firstName" placeholder="" />
                   </div>
                   <div className="col-md-6">
                        Last Name
                       <label htmlFor="lastName" className="form-label">Last Name</label>
                       <input type="text" className="form-control" id="lastName" placeholder="" />
                   </div>
               </div>
             
               <div className="row mb-3">
                   <div className="col-md-12">
                        Title
                       <label htmlFor="title" className="form-label">Title</label>
                       <input type="text" className="form-control" id="title" placeholder="" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                        Street Address 1
                       <label htmlFor="streetAddress1" className="form-label">Street Address</label>
                       <input type="text" className="form-control" id="streetAddress1" placeholder="" />
                   </div>
                   <div className="col-md-6">
                        Street Address 2
                       <label htmlFor="streetAddress2" className="form-label">Street Address 2</label>
                       <input type="text" className="form-control" id="streetAddress2" placeholder="" />
                   </div>
               </div>
               <div className="row mb-3">
                   <div className="col-md-4">
                        City
                       <label htmlFor="city" className="form-label">City</label>
                       <input type="text" className="form-control" id="city" placeholder="" />
                   </div>
                   <div className="col-md-4">
                        Country
                       <label htmlFor="country" className="form-label">Country</label>
                       <input type="text" className="form-control" id="country" placeholder="" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                       Postal Code/Zip Code
                       <label htmlFor="postalCode" className="form-label">Postal Code/Zip Code</label>
                       <input type="text" className="form-control" id="postalCode" placeholder="" />
                   </div>
                   <div className="col-md-6">
                   State/Region
                       <label htmlFor="stateRegion" className="form-label">State/Region</label>
                       <input type="text" className="form-control" id="stateRegion" placeholder="" />
                   </div>
               </div>
              
               <div className="row mb-3">
                   <div className="col-md-6">
                   Phone Number
                       <label htmlFor="phone" className="form-label">Phone Number</label>
                       <input type="text" className="form-control" id="phone" placeholder="" />
                   </div>
                   <div className="col-md-6">
                   Email
                       <label htmlFor="email" className="form-label">Email</label>
                       <input type="email" className="form-control" id="email" placeholder="" />
                   </div>
               </div>
           </form> 
        </>
        </Layout>
    )
}

export default ContactForm

