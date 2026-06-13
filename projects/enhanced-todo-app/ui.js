// UI Management
class UIManager {
    constructor(app) {
        this.app = app;
        this.categories = {
            personal: '👥 Personal',
            work: '💼 Work',
            shopping: '🛒 Shopping',
            health: '💪 Health',
            finance: '💰 Finance',
            education: '🎓 Education',
            events: '🎉 Events',
            home: '🏠 Home'
        };
    }

    // Initialize UI
    init() {
        this.renderCategories();
        this.setupEventListeners();
        this.updateStats();
        this.render();
    }

    // Setup event listeners
    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.app.setFilter(e.target.dataset.filter);
            });
        });

        // Priority filters
        document.querySelectorAll('.priority-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.priority-filter').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.app.setPriorityFilter(e.target.dataset.priority);
            });
        });

        // Category filters
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.app.setCategoryFilter(e.target.dataset.category);
            }
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.app.setSearchQuery(e.target.value);
        });

        // Sort
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.app.setSortBy(e.target.value);
        });

        // Add task
        document.getElementById('addTaskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.app.addTask(
                document.getElementById('taskTitle').value,
                document.getElementById('taskDescription').value,
                document.getElementById('taskCategory').value,
                document.getElementById('taskPriority').value,
                document.getElementById('taskDueDate').value
            );
            document.getElementById('addTaskForm').reset();
            this.render();
        });

        // Clear completed
        document.getElementById('clearCompletedBtn').addEventListener('click', () => {
            if (confirm('Clear all completed tasks?')) {
                this.app.clearCompleted();
                this.render();
            }
        });

        // Delete all
        document.getElementById('deleteAllBtn').addEventListener('click', () => {
            if (confirm('Delete all tasks? This cannot be undone.')) {
                this.app.deleteAll();
                this.render();
            }
        });

        // Export
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.app.export();
        });

        // Import
        document.getElementById('importBtn').addEventListener('click', () => {
            document.getElementById('importFile').click();
        });

        document.getElementById('importFile').addEventListener('change', (e) => {
            if (e.target.files[0]) {
                this.app.import(e.target.files[0]);
            }
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.app.toggleTheme();
        });
    }

    // Render categories
    renderCategories() {
        const categoryList = document.getElementById('categoryList');
        categoryList.innerHTML = '';
        
        Object.entries(this.categories).forEach(([key, label]) => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = label;
            btn.dataset.category = key;
            categoryList.appendChild(btn);
        });
    }

    // Render tasks
    render() {
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');
        const tasks = this.app.getFilteredTasks();

        tasksList.innerHTML = '';

        if (tasks.length === 0) {
            emptyState.classList.add('show');
        } else {
            emptyState.classList.remove('show');
            tasks.forEach(task => {
                const taskEl = this.createTaskElement(task);
                tasksList.appendChild(taskEl);
            });
        }
    }

    // Create task element
    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} ${this.isOverdue(task) ? 'overdue' : ''}`;
        
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '';
        const categoryLabel = this.categories[task.category] || task.category;
        const priorityEmoji = { high: '🔴', medium: '🟡', low: '🟢' }[task.priority];
        
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="app.ui.toggleTask(${task.id})">
            <div class="task-content">
                <div class="task-title">${this.escapeHtml(task.title)}</div>
                ${task.description ? `<div class="task-description">${this.escapeHtml(task.description)}</div>` : ''}
                <div class="task-meta">
                    <span class="task-tag">${categoryLabel}</span>
                    <span class="task-tag">${priorityEmoji} ${task.priority}</span>
                    ${dueDate ? `<span class="task-tag">📅 ${dueDate}</span>` : ''}
                </div>
            </div>
            <div class="task-actions">
                <button class="task-btn" onclick="app.ui.editTask(${task.id})" title="Edit">✏️</button>
                <button class="task-btn delete" onclick="app.ui.deleteTask(${task.id})" title="Delete">🗑️</button>
            </div>
        `;
        
        return li;
    }

    // Toggle task
    toggleTask(id) {
        this.app.toggleTask(id);
        this.render();
        this.updateStats();
    }

    // Edit task
    editTask(id) {
        const task = this.app.todos.find(t => t.id === id);
        if (!task) return;

        document.getElementById('editTaskId').value = id;
        document.getElementById('editTitle').value = task.title;
        document.getElementById('editDescription').value = task.description || '';
        document.getElementById('editCategory').value = task.category;
        document.getElementById('editPriority').value = task.priority;
        document.getElementById('editDueDate').value = task.dueDate || '';

        // Setup category select
        const categorySelect = document.getElementById('editCategory');
        categorySelect.innerHTML = '';
        Object.entries(this.categories).forEach(([key, label]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = label;
            categorySelect.appendChild(option);
        });
        categorySelect.value = task.category;

        document.getElementById('editTaskForm').onsubmit = (e) => {
            e.preventDefault();
            this.app.updateTask(
                id,
                document.getElementById('editTitle').value,
                document.getElementById('editDescription').value,
                document.getElementById('editCategory').value,
                document.getElementById('editPriority').value,
                document.getElementById('editDueDate').value
            );
            this.closeEditModal();
            this.render();
            this.updateStats();
        };

        document.getElementById('editModal').classList.add('show');
    }

    // Delete task
    deleteTask(id) {
        if (confirm('Delete this task?')) {
            this.app.deleteTask(id);
            this.render();
            this.updateStats();
        }
    }

    // Update statistics
    updateStats() {
        const total = this.app.todos.length;
        const completed = this.app.todos.filter(t => t.completed).length;
        const remaining = total - completed;
        const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

        document.getElementById('statTotal').textContent = total;
        document.getElementById('statCompleted').textContent = completed;
        document.getElementById('statRemaining').textContent = remaining;
        document.getElementById('statProgress').textContent = progress + '%';
    }

    // Check if task is overdue
    isOverdue(task) {
        if (!task.dueDate || task.completed) return false;
        return new Date(task.dueDate) < new Date();
    }

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Close edit modal
    closeEditModal() {
        document.getElementById('editModal').classList.remove('show');
    }
}

function closeEditModal() {
    document.getElementById('editModal').classList.remove('show');
}
