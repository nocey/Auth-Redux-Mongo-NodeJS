import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../movieCard/Moviecard';
import {getFilms} from '../../Redux/actions/films';


const Home = () => {
    const films = useSelector(state=>state.films)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFilms())
        return () => {

        }
    })
    const e = ()=>{
        dispatch(getFilms())
        console.log(films)
    }
    return (
        <div className={`w-full bg-gray-900 inline-block`}>
            <Typography variant="h6" className='text-white ' onClick={e()}>Movie</Typography>
            <div className='flex flex-row overflow-hidden justify-evenly flex-wrap'>
                {films&&films.map((data)=>{
                    {console.log(data)}
                    <Movie data={data}></Movie>
                })}
            </div>
            <Typography variant="h6" className='text-white'>Series</Typography>
            <div className='flex flex-row overflow-hidden justify-evenly flex-wrap'>
                {/* <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie> */}
            </div>
        </div>
    )
}

export default Home
