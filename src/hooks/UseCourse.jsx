import { useQuery } from '@tanstack/react-query';
//import React, { useEffect, useState } from 'react';

const UseCourse = () => {
    // const [course, setCourse] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('https://ass-12-server-rose.vercel.app/course')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourse(data);
    //             setLoading(false);
    //         })
    // }, [])
    // return [course, loading]


    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://ass-12-server-rose.vercel.app/course');
            return res.json();
        }
    })
    return [menu, loading, refetch]
};

export default UseCourse;