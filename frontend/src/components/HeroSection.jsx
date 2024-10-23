import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-rgb(18, 194, 108)'>
            <div className='flex flex-col gap-5 my-10 '>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#0c0a09] font-medium'>No. 1 Job Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[GREEN]'>Dream Jobs</span></h1>
                <p>SHOW YOUR SKILLS</p>
                <div className='flex w-[50%] shadow-2xl border border-black-200 pl-3 rounded-full items-center gap-4 mx-auto  '>
                    <input
                        type="text"
                        
                        placeholder='  '
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full  search '

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[GREEn]">
                        <Search className='h-51 w-51' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection