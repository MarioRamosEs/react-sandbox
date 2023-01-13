import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const HooksSandbox = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { //Any update. Used as componentDidMount, componentDidUpdate, componentWillUnmount
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('render! - General useEffect');
        document.title = `You clicked ${count} times`;

        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log('unmounting...');
    });


    //Prevent useEffect From Running Every Render
    //If you want your effects to run less often, you can provide a second argument – an array of values. Think of them as the dependencies for that effect.
    useEffect(() => {
        console.log('render! - Specific Count useEffect');
        document.title = `You clicked ${count} times`;
    }, [count])  // pass `value` as a dependency

    return (
        <div>
            <a href="https://reactjs.org/docs/hooks-reference.html">https://reactjs.org/docs/hooks-reference.html</a>
            <br></br>
            <MainCard title='useEffect'>
                Effects let a component connect to and synchronize with external systems. <br></br>
                <p>You clicked {count} times</p>
                <Button variant="outlined" onClick={() => setCount(count + 1)}>
                    Click me
                </Button>
            </MainCard>
        </div>
    );
};

export default HooksSandbox;
