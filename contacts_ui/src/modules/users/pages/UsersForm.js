import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';

function UsersForm() {
    const { id } = useParams();
    const { user, changeUser, saveUser } = useUser(id);
    function onInputChange(e) {
        changeUser({ [e.target.name]: e.target.value })
    }
    const navigate = useNavigate();
    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(user).then(() => {
            navigate('..');
        })
    }

    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField name='name' label="Name" value={user.name} onChange={onInputChange} fullWidth />
                <TextField name='surname' label="Surname" value={user.surname} onChange={onInputChange} fullWidth />
                <TextField name='email' label="Email" value={user.email} onChange={onInputChange} fullWidth />
                <Button color='primary' variant='contained' type='submit'>Save</Button>
                <Button color='error' variant='text' to='..' component={NavLink}>Cancel</Button>

            </form>
        </Paper>
    )
}

export default UsersForm