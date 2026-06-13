# Contributing to StyleSync

Thank you for your interest in contributing to StyleSync! We welcome contributions from developers, designers, and enthusiasts. This guide will help you get started.

## 🤝 Ways to Contribute

- 🐛 **Report bugs** — Found an issue? Let us know!
- 💡 **Suggest features** — Have an idea? We'd love to hear it!
- 📝 **Improve documentation** — Help us keep docs up-to-date
- 🔧 **Submit code** — Fix bugs or build new features
- 🎨 **Design** — Contribute UI/UX improvements
- 📢 **Spread the word** — Share StyleSync with your network

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Git
- Firebase account (for backend)
- React Native/Expo knowledge (for frontend)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/yousrakhudida-art/StyleSync.git
cd StyleSync

# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Set up environment variables
cp backend/.env.example backend/.env
# Fill in Firebase credentials

# Start development
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```

## 📋 Contribution Workflow

### 1. Choose or Create an Issue
- Browse [open issues](https://github.com/yousrakhudida-art/StyleSync/issues)
- Comment to express interest
- Create a new issue if you found a bug or have a feature request

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**Branch naming:**
- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation
- `refactor/` for code refactoring

### 3. Make Your Changes

- Keep commits clean and descriptive
- Write meaningful commit messages
- Test your changes locally

### 4. Write Tests

For code contributions:
```bash
# Add tests for your feature
npm test

# Ensure tests pass
npm run test:coverage  # Aim for > 80% coverage
```

### 5. Update Documentation

Update relevant docs if your changes affect:
- API endpoints → Update `docs/API.md`
- Database schema → Update `docs/DATABASE.md`
- Design system → Update `docs/DESIGN.md`
- Features → Update `README.md`

### 6. Submit a Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name

# Create PR on GitHub with:
# - Clear title and description
# - Reference any related issues (#123)
# - Screenshots/videos for UI changes
# - Checklist of changes
```

### 7. Code Review

- Address feedback from reviewers
- Make requested changes
- Re-request review when ready

### 8. Merge

Once approved, maintainers will merge your PR. Congratulations! 🎉

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: Add clothing item tagging system

- Allow users to add custom tags to wardrobe items
- Tag suggestions based on item category
- Search by tags functionality

Fixes #123
```

**Format:**
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build, dependencies, etc.

## 🎨 Code Style

### Frontend (React Native/TypeScript)
```typescript
// Use functional components
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState<StateType>();

  return (
    <View style={styles.container}>
      {/* Content */}
    </View>
  );
};

export default MyComponent;
```

- Use TypeScript types
- Use functional components with hooks
- Follow Prettier formatting
- 2-space indentation

### Backend (Node.js/Express)
```javascript
// Use async/await
router.post('/endpoint', async (req, res) => {
  try {
    const data = await service.doSomething(req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

- Use async/await (no callbacks)
- Proper error handling
- ESLint configuration
- 2-space indentation

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Branch is up-to-date with `main`
- [ ] Code follows style guidelines
- [ ] Tests pass locally (`npm test`)
- [ ] No console errors/warnings
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No unnecessary files committed
- [ ] Related issues referenced

## 🐛 Bug Reports

When reporting bugs, include:

```markdown
### Description
Brief description of the bug

### Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

### Expected Behavior
What should happen?

### Actual Behavior
What actually happens?

### Environment
- Device/OS: iOS 15 / Android 12
- App Version: 1.0.0
- React Native Version: 0.69

### Screenshots/Videos
[Attach if relevant]
```

## 💡 Feature Requests

When suggesting features, include:

```markdown
### Problem
What problem does this solve?

### Solution
How should it work?

### Alternatives
Any alternative approaches?

### Additional Context
Any other information?
```

## 📚 Documentation

If you're improving docs:

- Use clear, concise language
- Include examples where helpful
- Keep formatting consistent
- Update table of contents if needed
- Proofread before submitting

## 🧪 Testing Guidelines

- Write unit tests for functions
- Write integration tests for features
- Test edge cases
- Maintain > 80% code coverage
- Run tests before submitting PR

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- components/Button.test.tsx
```

## 🔒 Security Considerations

- Never commit sensitive data (API keys, secrets)
- Use environment variables for configs
- Follow OWASP guidelines
- Report security issues privately to maintainers
- Don't hardcode credentials

## 📞 Questions or Need Help?

- 💬 Open a discussion in GitHub Discussions
- 📧 Reach out to maintainers
- 📖 Check existing documentation
- 🔍 Search closed issues for similar problems

## 🙏 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Be Respectful

- Treat all community members with respect
- Listen to different perspectives
- Provide constructive feedback
- No harassment or discrimination

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to StyleSync! Your efforts help make this project better for everyone.** 🚀

