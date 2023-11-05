import React from 'react';
import Navbar from './Navbar';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const numbers = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];

  return (
    <div className='bg-primary-color min-h-screen'>
      <div className='nav-bar'>
        <Navbar />
      </div>
      <br />
      <br />
      <div className='text-center'>
        <h1 className='text-3xl font-semibold mb-4'>
          Semester Wise Question Papers
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4'>
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => navigate(`/semester/${number}`)} // Use onClick and provide a function
              className='bg-secondary-color text-white p-4 rounded-lg text-center h-32 w-24 flex flex-col items-center justify-center divcard'
            >
              <span className='text-2xl'>{number}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
