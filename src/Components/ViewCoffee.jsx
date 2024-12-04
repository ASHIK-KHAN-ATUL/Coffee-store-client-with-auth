import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';

const ViewCoffee = () => {

    const coffee = useLoaderData();
    const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    return (
        <div>
            <Header></Header>

            <div className='flex flex-col  gap-5 justify-center items-center h-screen w-[70%] xl:w-[60%] mx-auto'>
            <p className='font-bold text-lg md:text-2xl'>Information of : {name}</p>

            <div className='shadow-xl bg-[#eee8d7] flex flex-col justify-center'>
                <div className=" p-10 flex flex-col md:flex-row  ">
                    <img className='mx-auto ' src={photo} alt={name} />
                    <div className=" flex justify-around items-center ">
                        <div className=' flex flex-col gap-2'>
                            <h2 className="text-start font-semibold "><b>Name :</b> {name}</h2>
                            <p className='text-start'><b>Quantity :</b> {quantity}</p>
                            <p className='text-start'><b>Taste :</b> {taste}</p>
                            <p className='text-start'><b>supplier :</b> {supplier}</p>
                            <p className='text-start'><b>category :</b> {category}</p>
                            <p className='text-start'><b>details :</b> {details}</p>
                        </div>
                    </div>
                </div>
                <Link to={'/'} className='btn w-[30%] my-3 mx-auto bg-red-200 hover:bg-violet-300 hover:scale-90 transition-transform rounded-lg text-lg text-black hover:text-white border-none hover:border-black ' >Back Home</Link>
            </div>         
            </div>
        </div>
    );
};

export default ViewCoffee;