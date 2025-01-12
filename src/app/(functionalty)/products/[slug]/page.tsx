"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Divide, Minus, Plus } from "lucide-react";
import { Itim } from "next/font/google";
import { useAppSelector } from "../../Store/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtocart } from "../../Store/features/cart";
import Toastify from "@/components/toastify";

// Adding key prop in star array
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

  
  
export default function SlugPage({params}:{params:{slug:string}}) {
  const products = useSelector((state:any)=>state.product);
  const slug:any = products.find((item:any) => item.slug === params.slug);
  const dispatch = useDispatch()
   
  if (!slug) {
    return <h1 className="mt-28 text-center font-bold">Product not found</h1>;
  } 
  
  //   add to cart video start 
    // eslint-disable-next-line react-hooks/rules-of-hooks
     const [cartitem,setcartitem] =  useState({
          id:slug.id,
          title: slug.title,
          image:slug.image[0],
          slug: slug.slug,
          price: slug.price,
          size:slug.size[0],
          color:slug.color[0],
          qty: slug.qty,
          discount: slug.discount,
          
     })
    
     
  return (
    <div className="mt-16 lg:mt-28">
      {/* <BreadcrumbCollapsed /> */}
      <div className="flex flex-col md:flex-row justify-center  sm:justify-evenly sm:mt-10 p-5  sm:p-0 max-w-screen-2xl  mx-auto">
        {/* left */}
        <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
          {/* images */}
          <Image
            src={slug.image[0]}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px]  rounded-[20px]"
            alt="productdetaile"
            width={100}
            height={100}
          ></Image>
          <Image
            src={slug.image[1]}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3  rounded-[20px]"
            alt="productdetaile"
            width={100}
            height={100}
          ></Image>
          <Image
            src={slug.image[0]}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
            alt="productdetaile"
            width={100}
            height={100}
          ></Image>
        </div>
        {/* mid div */}
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
          <Image
            src={slug.image[0]}
            alt="productdetaile"
            className="w-full h-[95%] rounded-[20px]"
            width={100}
            height={100}
          ></Image>
        </div>
        {/* right div */}
        <div className="w-full sm:w-[500px] h-[500px] mt-3 order-3">
          <h1 className="text-2xl md:text-3xl font-bold">{cartitem.title}</h1>
          {/* <div className="flex text-yellow-400">{star}</div> */}
          <div className="flex text-yellow-400">
                                 {/* Map stars correctly */}
                                 {star.map((icon, index) => (
                                   <span key={index}>{icon}</span>
                                 ))}
                               </div>
             <div className="flex items-center space-x-2">
             <p className="font-bold  ">{cartitem.price * cartitem.qty} </p>
          <span className="text-gray-400 line-through">{cartitem.discount >0 && (cartitem.price -(cartitem.price*cartitem.discount) / 100 )* cartitem.qty} </span>
          <span className="bg-red-400 rounded-[10px]">{cartitem.discount >0 && (<div>{`-${cartitem.discount}%`}</div>)}</span>
             </div>
          <p>
           {slug.description}
          </p>
          {/* select color */}
          <div className="mt-5">
            <p className="text-gray-500">Select Colors</p>
            <div className="flex space-x-3 mt-2">
             {slug.color.map((item:any,i:any)=>{
              return <button key={i} 
              onClick={()=>setcartitem({...cartitem,color:item})}
              className="w-[37px] h-[37px]  active:outline  rounded-full  flex justify-center items-center"
               style={{backgroundColor:item}}></button>
             })}
            </div>
          </div>
          {/* Choose Size */}
          <div className="mt-4">
            <p className="text-gray-500">Choose Size</p>
            <div className="flex space-x-3 mt-2">
             {slug.size.map((item:any,i:any)=>{
              return  <button key={i}
              onClick={()=>setcartitem({...cartitem,size:item})}
              className="w-[80px] h-[40px] flex justify-center items-center active:outline  rounded-[62px] bg-[#F0F0F0] text-gray-400">
              {item}
             </button>
             })}
            </div>
          </div>
          {/* BTNS */}
          <div className="flex justify-start items-center mt-7 space-x-4">
             <button  onClick={()=>setcartitem({ ...cartitem,qty:cartitem.qty <= 1? 1 :  --cartitem.qty})}> <Minus /></button>
               <span> {cartitem.qty}</span>
              <button onClick={()=>setcartitem({ ...cartitem,qty: ++cartitem.qty})}> <Plus /></button>
              
            {/* <Button className="bg-black text-white w-[300px]"
            onClick={()=>dispatch(addtocart(cartitem))}>Add to Cart</Button> */}
            <Toastify cartitem={cartitem}/>
          </div>
        </div>
      </div>
      {/* <CustomerTestimonials /> */}
      {/* <T_shirts /> */}
    </div>
  
  );
}