import React from 'react'

const HeadLineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute h-full w-full bg-black/40 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO'S Out</p>
                    <p className='px-2'>through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'
                    src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>

            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute h-full w-full bg-black/40 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Fries and Dipping Sauce</p>
                    <p className='px-2'>Tasty</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'
                    src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>

            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute h-full w-full bg-black/40 rounded-xl text-white '>
                    <p className='font-bold text-2xl px-2 pt-4'>Fries and Burger on Plate</p>
                    <p className='px-2'>through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'
                    src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>
    )
}

export default HeadLineCards