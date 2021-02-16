import { Button, IconButton, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components';
import {getLogin,User} from '../../Redux/actions/login'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '33%',
        left: '40%',
        width: '20%',
    },
});
const Login = () => {
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();
    const log= useSelector(state=>state.login)
    const user= useSelector(state=>state.user)
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>{
        await dispatch(getLogin(username,password))
    }
    const go= ()=>{window.location.href = "http://localhost:3000"}
    const style = useStyles();
    return (
        <div className={style.root}>
            <form>
                <StyledInput id="mail" label="Email" name='mail' onChange={(e)=>{setUsername(e.target.value)}}/>
                <StyledInput
                    id='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    name='password'
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    color='secondary'
                    style={{
                        color: 'white'
                    }}
                />
                {log ? window.sessionStorage.setItem('user', JSON.stringify(log.data)):console.log('bbb')}
                {log ? go():console.log('bbb')}
                <Button variant="contained" color="primary" onClick={()=>handleSubmit()} >
                    Login
                </Button>
            </form>
        </div>
    )
}

const StyledInput = styled(TextField)`
width:100%;
margin-bottom:1rem;
`

export default Login
