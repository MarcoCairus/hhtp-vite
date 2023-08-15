import { localHostUserToModel } from "../mappers/localhost-user.mapper";

export const getUserById = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const user = localHostUserToModel(data);
        return user;
    }
    catch(err){
        console.error('Error')
    }
}