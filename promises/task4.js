class TodoService {
    async fetchTodo() {
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
}

class UserService {
    async fetchUser() {
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
}


class DataFetcher {
    constructor() {
        this.todoService = new TodoService();
        this.userService = new UserService();
    }

    
    async fetchAll() {
        try {
            const [todo, user] = await Promise.all([
                this.todoService.fetchTodo(),
                this.userService.fetchUser()
            ]);
            console.log('Result from Promise.all:');
            console.log('Todo:', todo);
            console.log('User:', user);
            return { todo, user };
        } catch (error) {
            console.error('Error in fetchAll:', error);
            throw error;
        }
    }

    
    async fetchRace() {
        try {
            const firstResult = await Promise.race([
                this.todoService.fetchTodo(),
                this.userService.fetchUser()
            ]);
            console.log('Result from Promise.race:', firstResult);
            return firstResult;
        } catch (error) {
            console.error('Error in fetchRace:', error);
            throw error;
        }
    }
}


const dataFetcher = new DataFetcher();


dataFetcher.fetchAll()
    .then(result => console.log('Received from fetchAll:', result))
    .catch(error => console.error('Error in fetchAll:', error));


dataFetcher.fetchRace()
    .then(result => console.log('Received from fetchRace:', result))
    .catch(error => console.error('Error in fetchRace:', error));
