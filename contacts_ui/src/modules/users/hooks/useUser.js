import { useState, useEffect } from "react";
import { createHashRouter } from "react-router-dom";
import Api from "../../../Api";

const EMPTY_USER = {
    name: '',
    surname: '',
    email: '',
}

export default function useUser(id){
     const [user, setUser] = useState({EMPTY_USER});

     useEffect(() => {
        if(isNaN(id)){
            setUser(EMPTY_USER)
        }
        else{
            Api.get('users/'+id).then(({data}) => setUser(data))
        }
     }, [id]);

   function changeUser(changes){
    setUser({
        ...user,
        ...changes
    })
   }
   function saveUser(user){
    if(user.id){
        return updateUser(user);
    }
    else {
       return  createUser(user);
    }
   }
   function updateUser(user){
    return Api.put('users/'+user.id, user);
   }
   function createUser(user) {
    return Api.post('users', user);
    
   }
     return {
        user,
        changeUser,
        saveUser,
     }
}