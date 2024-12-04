import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Header from './Header';


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // send data to server

        fetch('http://localhost:5000/coffee', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
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

           <div className="bg-[#f0e9d5] py-16 px-24">
            <div className="text-center">
                <h2 className="font-bold text-black text-5xl  mb-2">Add New Coffee</h2>
                <p>Introduce a new coffee to your collection by filling out the details below. Provide the coffee's name, available quantity, supplier information, taste profile, category, and a brief description. Add a photo to make your coffee stand out and captivate customers.</p>
            </div>
            <form onSubmit={handleAddCoffee} className="mt-8" >
                <div className=" md:grid  grid-cols-2 gap-5 ">

                    {/* Coffee name */}
                    <div className="form-control flex flex-col ">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    {/* Available Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Enter Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* Supplier  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                      {/* Taste  */}
                      <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter Taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                    
                      {/* Category  */}
                      <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                     {/* Details Quantity */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                 {/* Photo URL */}
                 <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                </div>

                <input className="w-full btn bg-[#D2B48C] hover:bg-[#f0e9d5] p-3 rounded-lg  border-2 border-black hover:border-black mt-5 font-bold " type="submit" value="Add Coffee" />

                
            </form>
            <div className='flex justify-center mt-10'>
                    <Link to={'/'} className='btn w-[20%]  mx-auto bg-red-200 hover:bg-violet-300 hover:scale-90 transition-transform rounded-lg text-base text-black hover:text-white border-none hover:border-black ' >Back Home</Link>
            </div>
           </div>

        </div>
    );
};

export default AddCoffee;