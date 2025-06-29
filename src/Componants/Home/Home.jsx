import React from 'react';
import Display from '../Shared/Display/Display';
import About from '../Shared/About/About';
import Skills from '../Shared/Skills/Skills';
import Projects from '../Shared/Projects/Projects';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div className='max-w-11/12 mx-auto space-y-20 my-10'>
            <Display></Display>
            <About></About>
            <Skills></Skills>
            <Projects data={data}></Projects>
        </div>
    );
};

export default Home;