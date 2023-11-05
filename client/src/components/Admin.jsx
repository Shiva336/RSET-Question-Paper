import { useState } from 'react';
import axios from "axios"
import '../styles/admin.css';

const Admin = () => {
  const [subjectCode, setSubjectCode] = useState('');
  const [semester, setSemester] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('Select the branch');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(file.buffer);

    const data = {
      code: subjectCode,
      sem: semester,
      name: subjectName,
      year: year,
      branch: branch,
      pdf: file,
    };

   axios.put("http://localhost:3002/questionpaper/upload",data);

  };

  return (
    <div className='bg-quaternary-color min-h-screen flex flex-col'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='mx-auto flex items-center justify-center'>
          <h2 className='mt-20 text-center text-xl font-bold leading-6 tracking-tight text-white'>
            Admin Page
          </h2>
        </div>
        <br />

        <form className='space-y-4' encType="multipart/form-data" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor='subjectCode'
              className='block text-sm font-medium leading-5 text-white'
            >
              Subject Code:
            </label>
            <input
              id='subjectCode'
              type='text'
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='semester'
              className='block text-sm font-medium leading-5 text-white'
            >
              Semester:
            </label>
            <input
              id='semester'
              type='number'
              value={semester}
              min='1'
              max='8'
              onChange={(e) => setSemester(e.target.value)}
              className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='subjectName'
              className='block text-sm font-medium leading-5 text-white'
            >
              Subject Name:
            </label>
            <input
              id='subjectName'
              type='text'
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='year'
              className='block text-sm font-medium leading-5 text-white'
            >
              Year:
            </label>
            <input
              id='year'
              type='text'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            />
            <p className='text-white'>
              Type in year, question paper number. Eg: 2021-A
            </p>
          </div>
          <div>
            <label
              htmlFor='branch'
              className='block text-sm font-medium leading-5 text-white'
            >
              Branch:
            </label>
            <select
              id='branch'
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            >
              <option value='Select the branch'>Select the branch</option>
              <option value='IT'>IT</option>
              <option value='CSE'>CSE</option>
              <option value='AIDS'>AIDS</option>
              <option value='ME'>ME</option>
              <option value='EEE'>EEE</option>
              <option value='ECE'>ECE</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='file'
              className='block text-sm font-medium leading-5 text-white'
            >
              Upload PDF:
            </label>
            <input
              id='file'
              type='file' 
              accept='.pdf'
              onChange={(e) => setFile(e.target.files[0])}
              className='block w-full rounded-md border border-gray-300 py-2 text-white placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
            />
          </div>
          <div>
            <button
              type='submit'
              className='admin-btn flex w-full justify-center rounded-md text-lg font-semibold leading-5 text-white shadow-md hover-bg-indigo-500 focus-ring focus-ring-indigo-600 focus-ring-opacity-50 focus-outline-none transform hover-scale-105'
            >
              Upload Question Paper
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
