// Storage Management
class StorageManager {
    constructor(key = 'enhancedTodos') {
        this.key = key;
    }

    // Save todos to localStorage
    saveTodos(todos) {
        try {
            localStorage.setItem(this.key, JSON.stringify(todos));
            return true;
        } catch (error) {
            console.error('Error saving todos:', error);
            return false;
        }
    }

    // Load todos from localStorage
    loadTodos() {
        try {
            const stored = localStorage.getItem(this.key);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading todos:', error);
            return [];
        }
    }

    // Clear all todos
    clearTodos() {
        try {
            localStorage.removeItem(this.key);
            return true;
        } catch (error) {
            console.error('Error clearing todos:', error);
            return false;
        }
    }

    // Save theme preference
    saveTheme(isDark) {
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            return true;
        } catch (error) {
            console.error('Error saving theme:', error);
            return false;
        }
    }

    // Load theme preference
    loadTheme() {
        try {
            const theme = localStorage.getItem('theme');
            return theme === 'dark';
        } catch (error) {
            console.error('Error loading theme:', error);
            return false;
        }
    }

    // Export todos as JSON
    exportTodos(todos) {
        const dataStr = JSON.stringify(todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `tasks-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Import todos from JSON
    importTodos(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const todos = JSON.parse(e.target.result);
                    if (Array.isArray(todos)) {
                        resolve(todos);
                    } else {
                        reject('Invalid format');
                    }
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsText(file);
        });
    }
}
