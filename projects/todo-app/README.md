# Todo List Application

A simple, elegant to-do list application with local storage functionality. Add, edit, delete, and manage your tasks with ease.

## Features

✅ **Add Tasks** — Create new to-do items
✅ **Mark Complete** — Check off completed tasks
✅ **Edit Tasks** — Modify existing tasks
✅ **Delete Tasks** — Remove tasks from your list
✅ **Local Storage** — Persist tasks in browser storage
✅ **Filter Tasks** — View all, active, or completed tasks
✅ **Task Statistics** — See task completion progress
✅ **Responsive Design** — Works on mobile and desktop

## Technologies

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: Browser LocalStorage API
- **Styling**: CSS Grid & Flexbox

## Installation

```bash
# Clone the repository
git clone https://github.com/yousrakhudida-art/StyleSync.git
cd StyleSync/projects/todo-app

# Open in browser
open index.html
# or
start index.html
```

## Usage

1. **Add a Task**: Type in the input field and click "Add" or press Enter
2. **Complete a Task**: Click the checkbox to mark a task as done
3. **Edit a Task**: Click the edit icon to modify the task text
4. **Delete a Task**: Click the trash icon to remove a task
5. **Filter Tasks**: Use the filter buttons to view different task states
6. **Clear Completed**: Remove all completed tasks at once

## File Structure

```
todo-app/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── app.js              # Application logic
└── README.md           # Documentation
```

## LocalStorage Keys

- `todos` — Array of task objects stored as JSON

## Task Object Structure

```javascript
{
  id: 1234567890,           // Unique timestamp-based ID
  text: "Buy groceries",    // Task description
  completed: false,         // Completion status
  createdAt: 1234567890,    // Creation timestamp
  dueDate: "2024-12-31"     // Optional due date
}
```

## Browser Support

- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)
- Mobile browsers

## Future Enhancements

- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Priority levels
- [ ] Recurring tasks
- [ ] Cloud sync
- [ ] Dark mode
- [ ] Export/Import tasks

## License

MIT License
