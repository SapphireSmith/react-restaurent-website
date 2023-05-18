import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [foods, setFood] = useState(data);

    // Filter By Food type
    const FilterType = (category) => {
        setFood(data.filter((item) => {
            return item.category === category
        }))
    }

    //Filter By Price
    const filterPrice = (price) => {
        setFood(data.filter((item) => {
            return item.price === price
        }))
    }
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-3xl sm:text-4xl text-center'>Top Rated Food Menu</h1>

            {/* filtter row */}
            <div className=' flex flex-col lg:flex-row justify-between'>
                {/* filter type */}

                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex flex-wrap gap-3'>
                        <button onClick={() => { setFood(data) }}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={() => { FilterType('burger') }}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={() => { FilterType('pizza') }}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={() => { FilterType('salad') }}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={() => { FilterType('chicken') }}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* filter prize */}

                <div>
                    <div>
                        <p className='font-bold text-gray-700'>Filter Price</p>
                        <div className='flex justify-between max-w-[390px] w-full'>
                            <button onClick={() => { filterPrice('$') }}
                                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                            <button onClick={() => { filterPrice('$$') }}
                                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                            <button onClick={() => { filterPrice('$$$') }}
                                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                            <button onClick={() => { filterPrice('$$$$') }}
                                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8'>
                {foods.map((food, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={food.image} alt={food.name}
                            className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{food.name}</p>
                            <p><span className='bg-orange-500 text-white rounded-full p-1'>{food.price}</span></p>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Food