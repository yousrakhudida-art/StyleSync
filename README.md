# StyleSync 👗

**StyleSync** is an intelligent wardrobe companion app for students and professionals. Scan your clothes, get AI-powered outfit recommendations based on weather, mood, and occasion, and visualize outfits on a personalized avatar before wearing them.

## 🎯 Features

### Phase 1 (MVP)
- 📸 **Clothing Scanner** — Scan and categorize clothes (shirts, pants, dresses, etc.)
- 📱 **Wardrobe Management** — Organize and tag clothes by color, style, occasion
- 🌦️ **Weather Integration** — Real-time weather-based outfit suggestions
- 😊 **Mood-Based Styling** — Get recommendations based on mood and occasion
- 🎨 **Style Inspiration** — Gallery of curated outfit combinations
- 🔍 **Smart Search** — Find outfits by occasion, color, style, or weather

### Phase 2
- 👤 **Avatar Creation** — Create a personalized avatar based on body measurements
- 👗 **Virtual Try-On** — Visualize outfits on your avatar before wearing
- ⭐ **Social Sharing** — Share favorite outfits with friends
- 📊 **Style Analytics** — Track outfit frequency, trending combinations

### Phase 3
- 🤖 **Advanced AI Styling** — ML-powered personalized recommendations
- 🛍️ **Shopping Integration** — Find similar items to buy
- 💾 **Cloud Sync** — Sync wardrobe across devices

## 🛠️ Tech Stack

| Layer | Technology |
|-------|----------|
| **Frontend** | React Native (Expo) + TypeScript |
| **Backend** | Node.js + Express |
| **Database** | Firebase Firestore |
| **Auth** | Firebase Authentication |
| **Storage** | Firebase Cloud Storage |
| **Computer Vision** | TensorFlow.js + MobileNet |
| **Weather API** | OpenWeatherMap |
| **Deployment** | Vercel (Backend), Expo (Mobile) |

## 📁 Project Structure

```
StyleSync/
├── frontend/                 # React Native + Expo
│   ├── src/
│   │   ├── screens/         # Screen components
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # API & Firebase services
│   │   ├── context/         # Context API state management
│   │   ├── utils/           # Helper functions
│   │   ├── styles/          # Theme & styling
│   │   └── assets/          # Images, icons, fonts
│   ├── app.json
│   └── package.json
├── backend/                  # Node.js + Express
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/      # Business logic
│   │   ├── middleware/       # Authentication, validation
│   │   ├── services/         # Firebase, ML services
│   │   ├── utils/            # Helpers
│   │   └── config/           # Environment config
│   ├── .env.example
│   └── package.json
├── ml/                       # Machine Learning models
│   ├── clothing-detector/    # TensorFlow.js model
│   └── recommendation-engine/
├── docs/                     # Documentation
│   ├── API.md
│   ├── DATABASE.md
│   ├── DESIGN.md
│   └── ROADMAP.md
└── .github/workflows/        # CI/CD pipelines
```

## 🎨 Design System

### Color Palette
- **Primary**: #F5F1E8 (Beige)
- **Secondary**: #FDFBF7 (Off-white)
- **Accent**: #8B7355 (Warm Brown)
- **Text**: #2C2C2C (Dark Gray)
- **Background**: #FFFFFF (White)
- **Success**: #6BA86B
- **Warning**: #D4A574
- **Error**: #C84C3C

### Typography
- **Display**: Montserrat Bold (24px, 28px, 32px)
- **Heading**: Montserrat SemiBold (18px, 20px)
- **Body**: Poppins Regular (14px, 16px)
- **Caption**: Poppins Regular (12px)

### Spacing
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Expo CLI
- Firebase account

### Installation

```bash
# Clone the repository
git clone https://github.com/yousrakhudida-art/StyleSync.git
cd StyleSync

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Set up environment variables
cp .env.example .env
# Fill in Firebase credentials and API keys
```

### Running Locally

```bash
# Terminal 1: Start backend server
cd backend
npm run dev

# Terminal 2: Start Expo app
cd frontend
npm start
```

## 📱 App Flow

1. **Onboarding** — User profile, body measurements, style preferences
2. **Wardrobe Upload** — Scan/upload clothes, tag with attributes
3. **Home Dashboard** — Today's weather, mood selector, outfit recommendation
4. **Outfit Generator** — AI creates outfit suggestions
5. **Virtual Try-On** — View outfit on personalized avatar
6. **History** — Track previous outfits and style

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Design System](./docs/DESIGN.md)
- [Development Roadmap](./docs/ROADMAP.md)

## 🤝 Contributing

We're building StyleSync together! Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License — See [LICENSE](./LICENSE) for details.

## 💬 Support

Questions or feedback? Open an [issue](https://github.com/yousrakhudida-art/StyleSync/issues) or reach out!

---

**Made with ❤️ for students and professionals who deserve a simpler morning.**