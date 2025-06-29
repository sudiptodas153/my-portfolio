import React from 'react';
import { Link } from 'react-router';

const Projects = ({ data }) => {



    return (
        <div id='projects'>
            <h2 className='text-4xl font-bold text-center'>Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    data.map(p =>
                        <div key={p.id} className="card border border-gray-400 p-2 bg-base-100 shadow-sm">

                            <img className='rounded-lg'
                                src={p.image}
                                alt="Shoes" />

                            <div className="mt-3">
                                <h2 className="text-2xl font-bold">{p.name}</h2>
                                <p>{p.description.length === 100 ? p.description : p.description.slice(0, 100) + '.....'}</p>
                                <div className="">
                                    <Link to={`/details/${p.id}`}>
                                        <button className="btn w-full bg-white text-black">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Projects;