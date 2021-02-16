import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getRegister} from '../../Redux/actions/register'

import styled from 'styled-components';
const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '33%',
        left: '40%',
        width: '20%',
    },
});
const Signup = () => {
    const [mail,setMail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const log= useSelector(state=>state.register)
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>{
        await dispatch(getRegister(mail,username,password))
    }
    const go= ()=>{window.location.href = "http://localhost:3000"}
    const style = useStyles();
    return (

        <div className={style.root}>
            <form>
                <StyledInput 
                id="email" 
                label="Email" 
                onChange={(e)=>setMail(e.target.value)} 
                error ={log.data =='Email already exist!'? true: false}
                />
                <StyledInput 
                id="username" 
                label="Username" 
                error ={log.data =='Email already exist!'? true: false}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <StyledInput
                    onChange={(e)=>setPassword(e.target.value)}
                    id="outlined-secondary-password-input"
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
                <Button variant="contained" color="primary" onClick={()=>{handleSubmit()}}>
                    Register
                </Button>
            </form>
            
        </div>
    )
}

const StyledInput = styled(TextField)`
width:100%;
margin-bottom:1rem;
`

export default Signup
