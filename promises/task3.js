async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Error fetching todo');
        }
        return await response.json(); 
    } catch (error) {
        console.error('Error in fetchTodo:', error);
        throw error; 
    }
}


async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Error fetching user');
        }
        return await response.json(); 
    } catch (error) {
        console.error('Error in fetchUser:', error);
        throw error; 
    }
}


async function fetchData() {
    try {
        
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Result from Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);

        
        const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Result from Promise.race:', firstResult);
    } catch (error) {
        console.error('Error in fetchData:', error);
    }
}

fetchData();
