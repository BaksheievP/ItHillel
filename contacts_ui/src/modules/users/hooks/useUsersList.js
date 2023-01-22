import { useEffect, useState } from "react";
import Api from "../../../Api";

export default function useUsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, []);


    function fetchUsers() {
        return Api.get('users').then(({ data }) => setUsers(data));
    }

    function deleteUser(id) {
        return Api.delete('users/' + id).then(fetchUsers);
    }
    return {
        users,
        fetchUsers,
        deleteUser,
    }
}