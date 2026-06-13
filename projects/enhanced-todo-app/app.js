// Enhanced Todo App
class TodoApp {
    constructor() {
        this.todos = [];
        this.filter = 'all';
        this.priorityFilter = null;
        this.categoryFilter = null;
        this.searchQuery = '';
        this.sortBy = 'created';
        this.isDarkMode = false;
        
        this.storage = new StorageManager();
        this.ui = new UIManager(this);
        
        this.init();
    }

    // Initialize app
    init() {
        this.loadTodos();
        this.loadTheme();
        this.ui.init();
    }

    // Add task
    addTask(title, description, category, priority, dueDate) {
        if (!title.trim()) {
            alert('Please enter a task title');
            return;
        }

        const task = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            category,
            priority,
            dueDate,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.todos.unshift(task);
        this.saveTodos();
    }

    // Update task
    updateTask(id, title, description, category, priority, dueDate) {
        const task = this.todos.find(t => t.id === id);
        if (task) {
            task.title = title.trim();
            task.description = description.trim();
            task.category = category;
            task.priority = priority;
            task.dueDate = dueDate;
            task.updatedAt = new Date().toISOString();
            this.saveTodos();
        }
    }

    // Toggle task completion
    toggleTask(id) {
        const task = this.todos.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.updatedAt = new Date().toISOString();
            this.saveTodos();
        }
    }

    // Delete task
    deleteTask(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
    }

    // Clear completed
    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.saveTodos();
    }

    // Delete all
    deleteAll() {
        this.todos = [];
        this.saveTodos();
    }

    // Set filter
    setFilter(filter) {
        this.filter = filter;
        this.ui.updateStats();
        this.ui.render();
        this.updatePageTitle();
    }

    // Set priority filter
    setPriorityFilter(priority) {
        this.priorityFilter = this.priorityFilter === priority ? null : priority;
        this.ui.render();
    }

    // Set category filter
    setCategoryFilter(category) {
        this.categoryFilter = this.categoryFilter === category ? null : category;
        this.ui.render();
    }

    // Set search query
    setSearchQuery(query) {
        this.searchQuery = query.toLowerCase();
        this.ui.render();
    }

    // Set sort
    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.ui.render();
    }

    // Get filtered tasks
    getFilteredTasks() {
        let filtered = this.todos;

        // Filter by status
        switch (this.filter) {
            case 'active':
                filtered = filtered.filter(t => !t.completed);
                break;
            case 'completed':
                filtered = filtered.filter(t => t.completed);
                break;
            case 'overdue':
                filtered = filtered.filter(t => {
                    if (t.completed || !t.dueDate) return false;
                    return new Date(t.dueDate) < new Date();
                });
                break;
        }

        // Filter by priority
        if (this.priorityFilter) {
            filtered = filtered.filter(t => t.priority === this.priorityFilter);
        }

        // Filter by category
        if (this.categoryFilter) {
            filtered = filtered.filter(t => t.category === this.categoryFilter);
        }

        // Filter by search query
        if (this.searchQuery) {
            filtered = filtered.filter(t => 
                t.title.toLowerCase().includes(this.searchQuery) ||
                t.description.toLowerCase().includes(this.searchQuery)
            );
        }

        // Sort
        filtered = this.sortTasks(filtered);

        return filtered;
    }

    // Sort tasks
    sortTasks(tasks) {
        const sorted = [...tasks];
        
        switch (this.sortBy) {
            case 'duedate':
                sorted.sort((a, b) => {
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate) - new Date(b.dueDate);
                });
                break;
            case 'priority':
                const priorityOrder = { high: 1, medium: 2, low: 3 };
                sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                break;
            case 'title':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'created':
            default:
                sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        return sorted;
    }

    // Toggle theme
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode');
        this.storage.saveTheme(this.isDarkMode);
    }

    // Load theme
    loadTheme() {
        this.isDarkMode = this.storage.loadTheme();
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }

    // Export todos
    export() {
        this.storage.exportTodos(this.todos);
    }

    // Import todos
    async import(file) {
        try {
            const imported = await this.storage.importTodos(file);
            if (imported.length > 0) {
                if (confirm(`Import ${imported.length} tasks? This will add to existing tasks.`)) {
                    this.todos = [...this.todos, ...imported];
                    this.saveTodos();
                    this.ui.render();
                    this.ui.updateStats();
                    alert('Tasks imported successfully!');
                }
            }
        } catch (error) {
            alert('Error importing tasks: ' + error);
        }
    }

    // Save todos
    saveTodos() {
        this.storage.saveTodos(this.todos);
    }

    // Load todos
    loadTodos() {
        this.todos = this.storage.loadTodos();
    }

    // Update page title
    updatePageTitle() {
        const titles = {
            all: 'All Tasks',
            active: 'Active Tasks',
            completed: 'Completed Tasks',
            overdue: 'Overdue Tasks'
        };
        document.getElementById('pageTitle').textContent = titles[this.filter] || 'Tasks';
        document.getElementById('taskCount').textContent = `${this.getFilteredTasks().length} tasks`;
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});
