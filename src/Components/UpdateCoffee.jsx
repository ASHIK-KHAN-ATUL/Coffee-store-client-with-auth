import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        // send data to server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
    }

    return (
        <div>

            <Header></Header>

            <div className="bg-[#f0e9d5] py-7 px-12 md:py-16 md:px-24 2xl:py-20 2xl:px-32">
            <div className="text-center">
                <h2 className="font-bold text-black text-2xl md:text-5xl  mb-2">Update Coffee : {name} </h2>
                <p>Update the details of your coffee offerings to ensure accurate inventory and presentation. Use this form to provide up-to-date information</p>
            </div>
            <form onSubmit={handleUpdateCoffee} className="mt-8" >
                <div className=" md:grid  grid-cols-2 gap-5 ">

                    {/* Coffee name */}
                    <div className="form-control flex flex-col ">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    {/* Available Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* Supplier  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                      {/* Taste  */}
                      <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter Taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                    
                      {/* Category  */}
                      <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Enter Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                     {/* Details Quantity */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Enter Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                 {/* Photo URL */}
                 <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                </div>

                <input className="w-full btn bg-[#D2B48C] hover:bg-[#f0e9d5] p-3 rounded-lg  border-2 border-black hover:border-black mt-5 font-bold " type="submit" value="Update Coffee Details" />
            </form>
            <div className='flex justify-center mt-10'>
                <Link to={'/'} className='btn w-[20%]  mx-auto bg-red-200 hover:bg-violet-300 hover:scale-90 transition-transform rounded-lg text-base text-black hover:text-white border-none hover:border-black ' >Back Home</Link>
            </div>
        </div>
        </div>
    );
};

export default UpdateCoffee;