import React from 'react';
import useHistory from '../../hooks/useHistory';
import CourseCard from '../ClassesPage/CourseCard';
import { FaPlay } from 'react-icons/fa';

const Enrolled = () => {
    const [history] = useHistory()
    console.log(history);
    return (
        <div className='lg:mt-40 lg:mb-40'>
            <div className='grid grid-cols-3 gap-10'>
                {
                    history.map(course => <div
                        key={course._id}
                        course={course}
                    >
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{course.itemNames.map((itemName, index) => (
                                                <div className="font-bold">
                                                {itemName}</div>
                                            ))}</h2>
                                <p>Date: {course.date}</p>
                                <p>Date: {course.status}</p>
                                <div>
                                    <FaPlay></FaPlay>
                                </div>
                                
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default Enrolled;