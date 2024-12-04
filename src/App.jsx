import { useState } from 'react'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='text-center'>
      <Header></Header>
     
      <div className='m-20'>
        <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee} 
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>

      <Footer></Footer>
      
    </div>
  )
}

export default App
