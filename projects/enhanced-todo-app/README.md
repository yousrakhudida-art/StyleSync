# Enhanced Todo List Application

A feature-rich to-do list application with advanced functionality including due dates, categories, priorities, search, and dark mode.

## ✨ Features

### Core Features
✅ **Add Tasks** — Create tasks with title and description
✅ **Mark Complete** — Check off completed tasks
✅ **Edit Tasks** — Modify task details
✅ **Delete Tasks** — Remove tasks
✅ **LocalStorage** — Persist all data in browser

### Advanced Features
🎯 **Priority Levels** — High, Medium, Low priority flags
📅 **Due Dates** — Set and track task deadlines
🏷️ **Categories/Tags** — Organize by category (Work, Personal, Shopping, etc.)
🔍 **Search & Filter** — Find tasks by keyword, category, or priority
📊 **Statistics Dashboard** — Real-time insights
🌙 **Dark Mode** — Easy on the eyes theme toggle
📤 **Export/Import** — Backup and restore tasks as JSON
✨ **Animations** — Smooth transitions and effects
📱 **Responsive Design** — Mobile and desktop friendly

## 📦 Technologies

- HTML5, CSS3, JavaScript ES6+
- Browser LocalStorage API
- CSS Grid & Flexbox
- No external dependencies

## 🚀 Installation

```bash
cd StyleSync/projects/enhanced-todo-app
open index.html
```

## 📖 Usage

### Adding a Task
1. Enter task title
2. (Optional) Add description
3. Select priority (High/Medium/Low)
4. Choose category
5. Set due date
6. Click "Add Task"

### Organizing Tasks
- **Filter by Priority** — View High, Medium, or Low priority tasks
- **Filter by Category** — Filter by Work, Personal, Shopping, etc.
- **Search** — Search for tasks by keyword
- **Sort** — Sort by due date, priority, or creation date

### Managing Tasks
- **Mark Complete** — Click checkbox to complete
- **Edit** — Click edit icon to modify details
- **Delete** — Click trash icon to remove
- **Bulk Actions** — Clear all completed or delete all

### Settings
- **Dark Mode** — Toggle theme with moon icon
- **Export** — Download all tasks as JSON
- **Import** — Upload previously exported tasks

## 📁 File Structure

```
enhanced-todo-app/
├── index.html          # Main HTML
├── styles.css          # Styling (light + dark)
├── app.js              # Application logic
├── storage.js          # LocalStorage management
├── ui.js               # UI rendering
└── README.md           # Documentation
```

## 💾 Data Structure

```javascript
{
  id: 1234567890,
  title: "Buy groceries",
  description: "Milk, eggs, bread",
  priority: "high",        // high, medium, low
  category: "shopping",    // work, personal, shopping, health, finance
  dueDate: "2024-12-31",
  completed: false,
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z"
}
```

## 🎨 Categories

- 💼 **Work** — Work-related tasks
- 👥 **Personal** — Personal tasks
- 🛒 **Shopping** — Shopping list items
- 💪 **Health** — Health & fitness tasks
- 💰 **Finance** — Financial tasks
- 🎓 **Education** — Learning tasks
- 🎉 **Events** — Events and celebrations
- 🏠 **Home** — Home maintenance tasks

## 🎯 Priority System

- 🔴 **High** — Urgent, must complete today
- 🟡 **Medium** — Important, complete this week
- 🟢 **Low** — Nice to have, no deadline

## 🌙 Dark Mode

Click the theme toggle button to switch between:
- **Light Mode** — Clean, bright interface
- **Dark Mode** — Easy on eyes for evening use

Preference is saved in LocalStorage.

## 📊 Statistics

- Total tasks
- Completed tasks
- Remaining tasks
- Tasks by priority
- Tasks by category
- Completion percentage

## 💾 Export/Import

### Export
1. Click "Export" button
2. JSON file downloads automatically
3. File includes all tasks with metadata

### Import
1. Click "Import" button
2. Select previously exported JSON file
3. Tasks are merged or replaced (your choice)

## 🔒 Data Privacy

- All data stored locally in browser
- No server communication
- No tracking or analytics
- Complete user privacy

## 🚀 Future Enhancements

- [ ] Recurring tasks
- [ ] Task attachments
- [ ] Reminders/notifications
- [ ] Subtasks
- [ ] Collaboration features
- [ ] Cloud sync
- [ ] Mobile app
- [ ] Calendar view
- [ ] Gantt chart
- [ ] Pomodoro timer integration

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 📄 License

MIT License

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit pull requests.
