import React from 'react';
import UseCourse from '../../../hooks/UseCourse';
import CourseTable from './CourseTable';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Course = () => {
    const [ courses, , refetch ] = UseCourse()
    const [axiosSecure] = useAxiosSecure();
    console.log(courses);
    const handleDelete = course =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/course/${course._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="w-full">
            

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr key={course._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.category}
                                </td>
                                <td className="text-right">${course.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



            {/* <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        courses.map(course => <CourseTable
                            key={course._id}
                            course={course}
                        ></CourseTable>)
                    }
                    </tbody>
                </table>
            </div> */}

        </div>
    );
};

export default Course;