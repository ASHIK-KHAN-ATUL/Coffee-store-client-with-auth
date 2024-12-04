import React from 'react';
import { IoIosEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your Coffee has been deleted.",
            //     icon: "success"
            //   });
            
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining = coffees.filter(cof => cof._id !== _id);
                      setCoffees(remaining)
                }
            })
            }
          });
    }

    return (
        <div>
            <div className=" sm:flex shadow-xl bg-[#eee8d7] p-4">

            <img className='mx-auto w-[40%] scale-90' src={photo} alt={name} />

            <div className=" flex justify-around items-center sm:w-[60%]">
           
                <div className='text-sm md:text-xl lg:text-sm xl:text-xl 2xl:text-lg  flex flex-col gap-2'>
                    <h2 className="text-start font-semibold ">Name : {name}</h2>
                    <p className='text-start'>Quantity : {quantity}</p>
                    <p className='text-start'>Taste : {taste}</p>
                    <p className='text-start'>Supplier : {supplier}</p>
                </div>

                <div className="card-actions justify-end ">
                    <div className=" flex flex-col gap-2 scale-75 lg:scale-90">
                        <Link to={`/viewCoffee/${_id}`} className="btn bg-[#D2B48C] hover:bg-sky-300 hover:scale-110 "><IoIosEye className=' text-xl text-white '></IoIosEye></Link>
                        <Link to={`updateCoffee/${_id}`} className="btn bg-[#3C393B] hover:bg-sky-300 hover:scale-110 "><MdEdit className=' text-xl text-white'></MdEdit></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] hover:bg-sky-300 hover:scale-110 "><MdDelete className=' text-xl text-white'></MdDelete></button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;