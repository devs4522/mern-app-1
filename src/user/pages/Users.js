import React from "react";
import UsersList from "../components/UsersList";

const Users = () =>{
    const USERS = [
        {
            id: 'u1',
            name: "Devendra",
            image: "https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            places: "3"
        }
    ];

    return <UsersList items={USERS} />
}

export default Users;