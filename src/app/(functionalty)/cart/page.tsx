"use client"
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";
import Cartpage from "./cartpage";
import { useSelector } from "react-redux";

const Page = () => {


  interface CartItem {
    price: number;
    discount: number;
    qty: number;
  }
  
  const cartArray: CartItem[] = useSelector((state: { cart: CartItem[] }) => state.cart);
  
  const total = cartArray.reduce((total: number, arr: CartItem) => {
    const discountedPrice = arr.discount > 0 ? arr.price - (arr.price * arr.discount) / 100 : arr.price;
    return total + discountedPrice * arr.qty;
  }, 0);
  
    

  return (
        
    <div className="flex flex-col justify-center items-center  max-w-screen-2xl mt-20  mx-auto relative"> 
        
    <div className="w-[95%] max-w-[1200px]  ">
    <h1 className="text-2xl md:text-3xl font-bold pl-36">Your cart</h1>
    </div>
  
          <div className="w-[95%] sm:w-full  mt-10 flex flex-col md:flex-row justify-center items-start gap-6 p-5">
                  <Cartpage/>
                  {/* right */}
                    {/* Order Summary */}
                         <div className="bg-white p-4 w-full lg:w-[500px] border rounded-[20px]">
                             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                             <div className="space-y-2">
                               <div className="flex justify-between">
                                 <p>Subtotal</p>
                                 <p>${total}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Discount (-20%)</p>
                                 <p>-${0}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Delivery Fee</p>
                                 <p>${0}</p>
                               </div>
                               <div className="border-t pt-2 flex justify-between font-bold">
                                 <p>Total</p>
                                 <p>${total}</p>
                               </div>
                               <div className="flex justify-between items-center">
                                <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
                                <Button className="w-[100px] rounded-[20px]">Apply</Button>
                               </div>
                             </div>
                             <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
                               Go to Checkout
                             </button>
                         </div>
          </div>
          </div>
      
  )
}

export default Page;