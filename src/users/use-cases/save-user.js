import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

export const saveUser = async(userLike) => {

    const user = new User(userLike);

    const userToSave = userModelToLocalHost(user);
    
    if(user.id) {
        throw 'No implementada la actualizacion'
    }

    const updatedUser = await createUser(userToSave)
    return updatedUser;
}

const createUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await response.json();
    console.log({newUser});
    return newUser;
}
