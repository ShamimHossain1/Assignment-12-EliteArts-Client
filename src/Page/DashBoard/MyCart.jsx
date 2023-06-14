import React from 'react';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = data => {
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

                axiosSecure.delete(`/carts/${data._id}`)
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
        <div className='w-full lg:mt-40 lg:mb-40'>
            <div className='flex justify-evenly'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3>total:{total}$</h3>
                <Link to="/dashboard/payment"><button className='btn btn-warning btn-sm'>Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Name</th>
                            <th>todo</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((data, index) => <tr
                                key={data._id}
                            >
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>${data.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(data)} className="btn btn-ghost btn-xs bg-red-800"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;