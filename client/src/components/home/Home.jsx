import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import Movie from '../movieCard/Moviecard';

const useStyles = makeStyles({
    root: {
    },
  });

const Home = () => {
    const log = useSelector(state=>state.login)
    const style = useStyles();
    console.log(log)
    return (
        <div className={`w-full bg-gray-900 inline-block ${style.root}`}>
            <Typography variant="h6" className='text-white'>Movie</Typography>
            <div className='flex flex-row overflow-hidden justify-evenly flex-wrap'>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </div>
            <Typography variant="h6" className='text-white'>Series</Typography>
            <div className='flex flex-row overflow-hidden justify-evenly flex-wrap'>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </div>
        </div>
    )
}

export default Home
