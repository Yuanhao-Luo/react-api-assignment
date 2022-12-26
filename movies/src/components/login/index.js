import React, { useState, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import DialogContentText from '@mui/material/DialogContentText';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const {authenticate, register} = useContext(MoviesContext);

    const handleLogin = () => {
        authenticate(username, password);
        props.action(false)
    }

    const handleRegister = () => {
        register(username, password)
        props.action(false);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="username"
                value={username}
                fullWidth
                variant="standard"
                onChange={handleUsername}
            />
            <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                value={password}
                fullWidth
                variant="standard"
                onChange={handlePassword}
            />
            {/* {error &&
                <DialogContentText id="error_info" color="red">
                    {error}
                </DialogContentText>
            } */}
            
        </DialogContent>

        <DialogActions>
            <Button id="Login" onClick={handleLogin}>Login</Button>
            <Button id="Register" onClick={handleRegister}>Register</Button>
        </DialogActions>
        </>
        
    );
};

export default Login;