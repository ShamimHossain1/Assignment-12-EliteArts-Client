import React from 'react';
import useInstructors from '../../hooks/useInstructors';
import { Hinge, Zoom } from 'react-awesome-reveal';

const PopularInstructors = () => {
    const [instructor, , refetch] = useInstructors()

    const byClass = [...instructor].sort((a, b) => b.students
    - a.students
    );


    //console.log(byClass)
    return (
        <>
        <div>
        <Zoom><h1 className='text-center mt-10 text-4xl font-bold'>Popular Instructors</h1></Zoom>
        </div>
       <Zoom> <div className='justify-items-center grid gap-10 lg:mt-20 lg:grid-cols-3 mb-20 lg:mb-52'>
            {
                byClass.slice(0, 6).map(data =>
                    <div key={data._id} className=" card w-96 bg-base-100 shadow-xl">

                        <div className="mt-5 avatar flex justify-center">
                            <div className="w-24 rounded-full">
                                <img src={data.photo} />
                            </div>
                        </div>
                        <div className="card-body mb-5">
                            <h2 className="card-title">{data.name}</h2>
                            <p>Email: {data.email}</p>
                            <p>Students: {data.students}</p>
                            
                        </div>
                    </div>
                )
            }
        </div></Zoom>
        </>
    );
};

export default PopularInstructors;