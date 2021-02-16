import React from 'react'
import { AppBar, Button, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sign } from 'crypto'

const Nav = () => {
    const user = window.sessionStorage.getItem('user')

    return (
        <div>
            <AppBar position="static">
                <Toolbar className='flex flex-row justify-between'>
                    <span>
                       <Link to="/"><Typography variant="h6">Movie and Series</Typography></Link> 
                    </span>
                    <span className='flex flex-row justify-between w-1/3'>
                        <InputBase placeholder="Search…"></InputBase>
                        {console.log(user)}
                        {user ? signOut():login()}
                    </span>

                </Toolbar>
            </AppBar>
        </div>
    )
}
const signOut = () =>{
    const out = ()=>{
        window.sessionStorage.removeItem('user')
        window.location.href = "http://localhost:3000"
    }
    return(
        <>
        <Link to='/'><Button color="inherit" onClick={()=>{out()}}>Sign Out</Button></Link>
        </>
    )
}

const login =()=>{
    return(
        <>
        <Link to='/login'><Button color="inherit">Login</Button></Link>
        <Link to='/signup'><Button color="inherit">Sign Up</Button></Link>
        </>
    )
}

export default Nav
