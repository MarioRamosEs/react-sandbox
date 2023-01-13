import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const ComponentsSandbox = () => {
    const [mainMessage, setMainMessage] = React.useState('Welcome to React');

    return (<>
        <h2>{mainMessage}</h2>
        <CustomCard title='Title' text='Text' onClickCallback={setMainMessage} />
        <br></br>
        <CustomCard title='Title 2' text='Text 2' onClickCallback={setMainMessage} />
    </>);
};

const CustomCard = ({ title, text, onClickCallback }) => {
    return <MainCard title={title}>
        <Typography variant='body2'>
            {text}
            <br></br>
            <Button variant="outlined"
                onClick={() => {
                    onClickCallback(title);
                }}
            >CustomCard Button</Button>
        </Typography>
    </MainCard>;
};
CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func
}

export default ComponentsSandbox;
