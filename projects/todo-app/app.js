// Todo Application
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.storageKey = 'todos';
        
        this.init();
    }

    // Initialize the app
    init() {
        this.loadTodos();
        this.setupEventListeners();
        this.render();
    }

    // Setup Event Listeners
    setupEventListeners() {
        // Add task
        document.getElementById('addBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Action buttons
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
        document.getElementById('deleteAllBtn').addEventListener('click', () => this.deleteAll());
    }

    // Add new task
    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();

        if (!text) {
            this.showNotification('Please enter a task', 'error');
            return;
        }

        if (text.length > 200) {
            this.showNotification('Task is too long (max 200 characters)', 'error');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        this.todos.unshift(todo);
        this.saveTodos();
        input.value = '';
        input.focus();
        this.showNotification('Task added successfully! ✅', 'success');
        this.render();
    }

    // Toggle task completion
    toggleTask(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    // Delete task
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
            this.showNotification('Task deleted ✓', 'info');
            this.render();
        }
    }

    // Edit task
    editTask(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt('Edit task:', todo.text);
        if (newText && newText.trim()) {
            todo.text = newText.trim();
            this.saveTodos();
            this.showNotification('Task updated ✓', 'success');
            this.render();
        }
    }

    // Clear completed tasks
    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear', 'info');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveTodos();
            this.showNotification(`${completedCount} task(s) cleared ✓`, 'success');
            this.render();
        }
    }

    // Delete all tasks
    deleteAll() {
        if (this.todos.length === 0) {
            this.showNotification('No tasks to delete', 'info');
            return;
        }

        if (confirm(`Delete all ${this.todos.length} tasks? This cannot be undone.`)) {
            this.todos = [];
            this.saveTodos();
            this.showNotification('All tasks deleted ✓', 'success');
            this.render();
        }
    }

    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    // Get filtered todos
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    // Update statistics
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const remaining = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('remainingTasks').textContent = remaining;
    }

    // Render the app
    render() {
        this.updateStats();
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        tasksList.innerHTML = '';

        if (filteredTodos.length === 0) {
            emptyState.classList.add('show');
            return;
        }

        emptyState.classList.remove('show');

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `task-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="app.toggleTask(${todo.id})"
                >
                <span class="task-text">${this.escapeHtml(todo.text)}</span>
                <div class="task-actions">
                    <button class="task-btn edit" onclick="app.editTask(${todo.id})" title="Edit">✏️</button>
                    <button class="task-btn delete" onclick="app.deleteTask(${todo.id})" title="Delete">🗑️</button>
                </div>
            `;
            tasksList.appendChild(li);
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        // You can enhance this with a toast notification library
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Save todos to localStorage
    saveTodos() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
        } catch (error) {
            console.error('Error saving todos:', error);
            alert('Failed to save tasks. Check your storage.');
        }
    }

    // Load todos from localStorage
    loadTodos() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            this.todos = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading todos:', error);
            this.todos = [];
        }
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});
