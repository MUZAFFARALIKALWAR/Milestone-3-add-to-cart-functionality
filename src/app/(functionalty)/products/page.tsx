"use client"
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useAppSelector } from "../Store/hooks";
import { useSelector } from "react-redux";


// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

interface IProduct {
    id: number; // Product ka unique identifier
    title: string; // Product ka title ya name
    image?: string[] | StaticImageData | string; // Product ki images
    slug: string; // URL-friendly unique identifier for the product
    price: number; // Product ki price
    category: string; // Product ka category name
    description: string; // Product ka detailed description
    size: string[]; // Product ke available sizes
    color: string[]; // Product ke available colors
    qty: number; // Available quantity of the product
    discount?: number; // Discount on product (optional)
  };

export default function Products() {
    const products:IProduct[] = useSelector((state:any)=>state.product);
    // const items = products.slice(0,6)
    
    return (
          <main className=" pt-20 lg:pt-36">
            <div className="flex flex-col  lg:flex-row lg:flex-wrap justify-center items-center gap-6">
            {products.map((data:any) => { 
              return (
                  <div key={data.id} className=" flex-shrink-0  w-[283px] ">
                      <Link href={`/products/${data.slug}`}>
                          <div className=" md:w-[283px]  h-[290px] bg-[#F0EEED] rounded-[20px]">
                              <Image
                                  src={data.image[0]}
                                  alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                  width={100}
                                  height={100}
                              />
                          </div>
                      </Link>
                      <div className="pl-2">
                          <p className="lg:text-lg mt-2 font-bold">{data.title}</p>
                          <div className="flex text-yellow-400">
                              {star.map((icon, index) => (
                                  <span key={index}>{icon}</span> 
                              ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="font-bold  ">{data.price} </p>
                         <span className="text-gray-400 line-through">{data.discount >0 && (data.price -(data.price*data.discount) / 100)} </span>
                         {/* <span className="bg-red-400 rounded-[10px]">{data.discount >0 && (<div>{`-${data.discount}%`}</div>)}</span> */}
                            </div>
                      </div>
                      </div>
    );
})}
            </div>
          </main>
    );
}



