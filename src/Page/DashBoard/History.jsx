import React from 'react';
import useHistory from '../../hooks/useHistory';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const History = () => {
    const [history] = useHistory()
    console.log(history);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://ass-12-server-rose.vercel.app/history/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toys Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        
                    }
                })
        }
    }
    return (
        <div className='w-full lg:mt-40 lg:mb-40'>
            <div className='flex justify-evenly'>
                <h3 className='text-3xl'>Total: {history.length}</h3>

                
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>

                            <th>cost</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((data, index) => <tr
                                key={data._id}
                            >
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            {data.itemNames.map((itemName, index) => (
                                                <div className="font-bold">
                                                {itemName}</div>
                                            ))}

                                            
                                        </div>
                                    </div>
                                </td>

                                <td>${data.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(data._id)} className="btn btn-ghost btn-xs bg-red-800"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default History;