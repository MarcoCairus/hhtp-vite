

export const deleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    const response = await fetch(url, {
        method: 'DELETE',
    });

    const deleteResult = await response.json();
    console.log(deleteResult);
    return true;
}