import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useHistory = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user)
    //const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: history = [] } = useQuery({
        queryKey: ['history', user?.email],
        enabled: !loading,
        // queryFn: async () =>{
        //     const res = await fetch(`https://ass-12-server-rose.vercel.app/carts?email=${user?.email}`, {headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json()
        // } ,
        queryFn: async () =>{
            const res = await axiosSecure(`/history/${user?.email}`)
            console.log('res form ax', res)
            return res.data
        } ,
    })

    return [history, refetch]
};

export default useHistory;