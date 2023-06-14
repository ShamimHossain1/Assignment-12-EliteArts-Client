import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useIns = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/ins/${user?.email}`);
            //console.log('is ins res', res)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useIns;