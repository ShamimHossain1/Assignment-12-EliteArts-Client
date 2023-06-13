import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300 px-5">
            <h1 className='text-6xl md:text-7xl font-bold mb-8'>404</h1>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Oops! Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        We're sorry, but the page you are looking for does not exist. Please check the URL or click the button below to go back to the homepage.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded">
        Go Back to Homepage
      </Link>
    </div>
    );
};

export default Error;