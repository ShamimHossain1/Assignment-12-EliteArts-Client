import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {
    const {data: instructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('https://ass-12-server-rose.vercel.app/ins');
            return res.json();
        }
    })
    return [instructor, loading, refetch]
};

export default useInstructors;