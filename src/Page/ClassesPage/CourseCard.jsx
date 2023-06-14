import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { Slide } from 'react-awesome-reveal';

const CourseCard = ({course}) => {
    //console.log(course)
    const {name, image, _id, seats, instructors, price,  students } = course
    const {user} =useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()
    const [ , refetch] = useCart()
    const handleAddToCart = course => {
        
        if(user && user.email){
            const orderItem = {courseItemId: _id, name, image, price, seats , instructors, email: user.email}
            fetch('https://ass-12-server-rose.vercel.app/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{instructors}</p>
                    <p>Remaining Seats: {seats}</p>
                    <p>Total Enrolled: {students}</p>
                    <div className="card-actions justify-end">
                        <p>Fee: {price}$</p>
                        <button onClick={() => handleAddToCart(course)} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
            </Slide>
        </div>
    );
};

export default CourseCard;