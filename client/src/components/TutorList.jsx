import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const createList = (tutors) => (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {tutors.map(mapTutor)}
    </section>
);
const mapTutor = (x) => (
    <div className='shadow p-6 rounded' key={x.id} >
        <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold'>{x.name} {x['last-name']}</h2>
            <Link
                className='hover:bg-blue-400 bg-blue-600 text-white p-2 rounded ml-2 view-button'
                to={`/users/${x.shortId}`}
            >View pofile
            </Link>
        </div>
        <div className='my-2'>
            <h3 className='text-xl'>Subjects</h3>
            <p>{x.subjects}</p>
        </div>
        <div>
            <h3 className='text-xl'>Languages</h3>
            <p>{x.languages}</p>
        </div>
    </div>
);

const TutorList = () => {
    const [ list, setList ] = useState([]);
    useEffect(() => {
        fetch('/api/users/tutors')
            .then(res => res.json())
            .then(res => setList(res))
            .catch(console.error);
    }, []);


    return (
        list.length === 0 ? <p> is loading...</p> : createList(list)
    );
};

export default TutorList;