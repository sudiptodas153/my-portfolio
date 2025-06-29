import React from 'react';
import DetailsNav from '../Shared/DetailsNav/DetailsNav';
import { useLoaderData } from 'react-router';
import Banner from '../Shared/Banner/Banner';

const Details = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <DetailsNav></DetailsNav>
            </div>

            <div className='max-w-11/12 mx-auto mb-5'>
                <div className=''>
                    <div className=''>
                        <Banner data={data}></Banner>
                        <div className='flex gap-4 justify-end mt-1'>
                            <button className='btn border hover:bg-white hover:text-black border-gray-300 px-3 py-1 rounded-lg'><a href={data.githubClient} target='blank'>GitHub Repository</a></button>
                            <button className='btn border hover:bg-white hover:text-black border-gray-300 px-3 py-1 rounded-lg'><a href={data.liveLink} target='blank'>Live</a></button>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-4xl font-bold'>{data.name}</h2>
                        <p className='md:pr-40'>{data.description}</p>
                        <div>
                            <h2 className='text-2xl font-bold'>Technology</h2>
                            <div className='grid grid-cols-2 md:flex gap-5 mt-3'>
                                {
                                    data.stack.map(stack =>
                                        <p className='border rounded-lg border-gray-400 py-1 px-3'>{stack}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-2'>Challenges</h2>
                            <p>{data.challenges}</p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-2'>Improvements</h2>
                            <p>{data.improvements}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;