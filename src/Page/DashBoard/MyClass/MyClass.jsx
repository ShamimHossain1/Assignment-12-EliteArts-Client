import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyClass = () => {
    const {user} = useAuth()
    const [lass, setClass] = useState([]);

    useEffect(() => {
        fetch(`https://ass-12-server-rose.vercel.app/course/${user.email}`)
            .then(res => res.json())
            .then(data => setClass(data))
            .catch(error => console.error(error))
    }, [])

    console.log(lass)
    return (
        <div className='grid   grid-cols-3 gap-3 mt-20 mb-20'>
        {
            lass.map(data =>
                <div key={data._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.instructors}</p>
                  <p>Seats: {data.seats}</p>
                  <p>Students: {data.students}</p>
                  
                </div>
              </div>
            )
        }
    </div>
    );
};

export default MyClass;