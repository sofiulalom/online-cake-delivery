import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import useTitle from '../../../Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider'



const ChackOut = () => {
    const {_id, title ,price}= useLoaderData();
    const  {user}=useContext(AuthContext);
    useTitle('chackOut')
    const handelesubmitproduct=event=>{
        event.preventDefault()
        const form=event.target;
        const name=`${form.firstname.value} ${form.lastname.value}`;
        const phone=form.phone.value;
        const email= user?.email || "unregisterd";
        const message=form.message.value;
        
        const order={
         service: _id,
          servicename: title,
          customaraname: name,
          phone,
          email,
          price,
          message
 
        };
        fetch('http://localhost:5000/orders', {
           method: 'POST',
           headers: {
              'content-type': 'application/json'
           },
           body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data =>{ 
         
         console.log(data)
         if(data.acknowledged){
           alert('you are order successfuly')
         }       
       
       })
        .catch(e => console.error(e))
 
    }
    return (
        <div className='bg-black h-max p-5 border-white text-white'>
        <h1 className='text-2xl'>You have order now your choiage</h1>
        <p className='text-3xl ml-3 mb-3'> price: {price}</p>
      <form onSubmit={handelesubmitproduct}>
        <div className='text-center '>
        <input name='firstname' type="text" placeholder="First Name" className="input mb-3 input-bordered input-error w-full max-w-xs" />
        <br /> 
        <input name='lastname' type="text" placeholder="Last Name" className="input mb-3 input-bordered input-error w-full max-w-xs" />
        <br /> 
        <input name='phone' type="text" placeholder="Your Phone" className="input mb-3 input-bordered input-error w-full max-w-xs"  required />
        <br />
        <input name='email' type="eamil" placeholder="your Email" defaultValue={user?.email} className="input mb-3 input-bordered input-error w-full max-w-xs" readOnly/>
        <br />
        <textarea name='message' className="textarea textarea-warning w-full max-w-xs mb-3" placeholder="your comment and review" required></textarea>
        <br />
        <button className="btn btn-outline btn-success w-96">Agre now</button>
        </div>
      </form>
    </div>
    );
};

export default ChackOut;