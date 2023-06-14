import React from 'react';
import UseCourse from '../../hooks/UseCourse';
import CourseCard from './CourseCard';
import useTitle from '../../hooks/UseTitle';

const ClassesPage = () => {
    const [courses] = UseCourse()
    //console.log(courses);
    useTitle('Elite Arts | Class')
    return (
        <div>
            <div className='grid grid-cols-3 mt-20 mb-20'>
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;