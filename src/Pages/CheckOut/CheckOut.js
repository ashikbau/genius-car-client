import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id,title,price}= useLoaderData();
    const {user} = useContext(authContext)


const handlePlaceOrder = event=>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;


    
    const order = {
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone,
        message
    }

    // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

}


    return (
        <div>
           <form onSubmit={handlePlaceOrder}>
            <h2 className='text-4xl'>You are about to buy : {title}</h2>
            <h4>Price : {price}</h4>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered  " />
           <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered " />
           <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
           <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered " required />
         </div>
         <textarea name='message' className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
         <input className='btn w-full' type="submit" value='Place Your Order' required />
           </form>
        </div>
    );
};

export default CheckOut;