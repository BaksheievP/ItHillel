import { CONTACT_URL } from "../config"

export function getList(){
    return fetch(CONTACT_URL).then(res => res.json());
}

export function deleteItem(id){
    return fetch(CONTACT_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}