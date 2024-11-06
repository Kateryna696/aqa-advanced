function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error fetching todo');
			}
			return response.json();
		})
		.catch((error) => {
			console.error('Error in fetchTodo:', error);
			throw error;
		});
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error fetching user');
			}
			return response.json();
		})
		.catch((error) => {
			console.error('Error in fetchUser:', error);
			throw error;
		});
}

Promise.all([fetchTodo(), fetchUser()])
	.then(([todo, user]) => {
		console.log('Result from Promise.all:');
		console.log('Todo:', todo);
		console.log('User:', user);
	})
	.catch((error) => {
		console.error('Error in Promise.all:', error);
	});

Promise.race([fetchTodo(), fetchUser()])
	.then((firstResult) => {
		console.log('Result from Promise.race:', firstResult);
	})
	.catch((error) => {
		console.error('Error in Promise.race:', error);
	});
