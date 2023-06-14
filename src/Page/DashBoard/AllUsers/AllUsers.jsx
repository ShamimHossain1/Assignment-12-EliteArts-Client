import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://ass-12-server-rose.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeIns = user => {
        fetch(`https://ass-12-server-rose.vercel.app/users/ins/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an ins Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        
    }
    return (
        <div>
            <h1>{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.role === 'admin' ? (
                                    'Admin'
                                ) : user.role === 'instructor' ? (
                                    'Instructor'
                                ) : (
                                    <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-xs btn-ghost bg-orange-600 text-white"
                                    >
                                        <FaUserShield></FaUserShield>
                                    </button>
                                )}</td>
                                <td>{user.role === 'admin' ? (
                                    'Admin'
                                ) : user.role === 'instructor' ? (
                                    'Instructor'
                                ) : (
                                    <button
                                        onClick={() => handleMakeIns(user)}
                                        className="btn btn-xs btn-ghost bg-orange-600 text-white"
                                    >
                                        <FaUserShield></FaUserShield>
                                    </button>
                                )}</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs bg-red-800"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;