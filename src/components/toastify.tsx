"use client"
import { addtocart } from '@/app/(functionalty)/Store/features/cart';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import { Button } from './ui/button';

function Toastify({cartitem}:any) {
    const notify = () => 
    toast.success('Product added Successfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      const dispatch = useDispatch()
  return (
    <>
    <div  onClick={()=>dispatch(addtocart(cartitem))}>
         <Button  onClick={notify} className="bg-black text-white w-[300px]"
           >Add to Cart</Button>
    </div>
     <ToastContainer
     position="bottom-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick={false}
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition={Bounce}
     />
     </>

  )
}

export default Toastify