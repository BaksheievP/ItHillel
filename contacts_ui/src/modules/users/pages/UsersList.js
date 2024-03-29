import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material'

import React from 'react'
import { NavLink } from 'react-router-dom';
import useUsersList from '../hooks/useUsersList'

function UsersList() {
    const { users, deleteUser } = useUsersList();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.surname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant='outlined' to={user.id} component={NavLink}>Edit</Button>
                                <Button variant='outlined' color="error" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        )
    }

export default UsersList