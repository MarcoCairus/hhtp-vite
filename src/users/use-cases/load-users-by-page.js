import { localHostUserToModel } from "../mappers/localhost-user.mapper";

export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const user = data.map(localHostUserToModel);
        return user;
    }
    catch(err){
        console.error('Error')
    }
}