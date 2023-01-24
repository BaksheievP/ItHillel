import { Button, Paper, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';
import { useState } from 'react'

const EMAIL_VALIDATION_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function UsersForm() {
    const { id } = useParams();
    const { user, changeUser, saveUser } = useUser(id);

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const isFormValid = !Object.keys(errors).length

    useEffect(() => validate(user), [user]);

    const navigate = useNavigate();

    function onInputChange(e) {
        changeUser({ [e.target.name]: e.target.value });
    }

    function onInputBlur(e) {
        setTouched({ ...touched, [e.target.name]: true });
    }



    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(user).then(() => {
            navigate('..');
        })
    }

    function validate(values) {
        const errors = {};

        if (values.name === '') {
            errors.name = 'Name is required';
        }
        if (values.surname === '') {
            errors.surname = 'Surname is required';
        }
        if (!EMAIL_VALIDATION_REGEX.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        if (values.email === '') {
            errors.email = 'Email is required';
        }
        setErrors(errors);
    }
    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField
                    sx={{ marginBottom: 2 }}
                    name='name'
                    label="Name"
                    value={user.name}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    fullWidth
                    helperText={touched.name && errors.name}
                    error={touched.name && !!errors.name}
                />
                <TextField
                    sx={{ marginBottom: 2 }}
                    name='surname'
                    label="Surname"
                    value={user.surname}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    fullWidth
                    helperText={touched.surname && errors.surname}
                    error={touched.surname && !!errors.surname}
                />
                <TextField
                    sx={{ marginBottom: 2 }}
                    name='email'
                    label="Email"
                    value={user.email}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    fullWidth
                    helperText={touched.email && errors.email}
                    error={touched.email && !!errors.email}
                />
                <Button
                    sx={{ marginBottom: 2 }}
                    color='primary'
                    variant='contained'
                    type='submit'
                    disabled={!isFormValid}
                    error={!!errors.name}
                >
                    Save
                </Button>
                <Button
                    sx={{ marginBottom: 2 }}
                    color='error'
                    variant='text'
                    to='..'
                    component={NavLink}
                    error={!!errors.name}
                >
                    Cancel
                </Button>

            </form>
        </Paper>
    )
}

export default UsersForm