//importacion de axios
import axios from 'axios';

const URL_API ='https://66881f790bc7155dc01a8816.mockapi.io/api/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(URL_API);
        if(response.status === 200) {
            return response.data;
        }
        else{
            return [];
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

export const createUserServive = async (user) => {
    try {
        const response = await axios.post(URL_API, user);
        return response.status;
    } catch (error) {
        console.error('Error creating user:', user);
    }
}

export const updateUserService = async (user) => {
    try {
        const response = await axios.put(`${URL_API}/${user.id}`, user);
        return response.status;
    } catch (error) {
        console.error('Error updating user:', user);
    }
}

export const deleteUsersService = async (id) => {
    try {
        const response = await axios.delete(`${URL_API}/${id}`);
        return response.status;
    } catch (error) {
        console.error('Error deleting user:', user);
    }
}