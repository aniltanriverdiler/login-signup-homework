# 📱 Login & Signup Mobile App

A modern **React Native + Expo** mobile application featuring beautiful login and signup screens with a sleek, dark-themed UI. Built with **TypeScript**, **NativeWind (Tailwind CSS)**, and **Expo Router** for seamless navigation.

---

## 💻 Source Code

🔗 **GitHub Repository:** [https://github.com/aniltanriverdiler/login-signup-homework.git](https://github.com/aniltanriverdiler/login-signup-homework.git)

---

## ✨ Features

### 🔐 Authentication Screens
- ✅ **Login Screen:** Beautiful login interface with username and password fields
- ✅ **Signup Screen:** User registration with form validation
- ✅ **Password Recovery:** Forgot password functionality
- ✅ **Social Login:** Integration with Google, Apple, and Facebook authentication options

### 🎨 Design & UI
- 🌗 **Dark Theme:** Modern dark-themed interface with purple accents
- ✨ **Modern UI:** Styled with **NativeWind (Tailwind CSS)** for React Native
- 🎭 **Glassmorphism Effects:** Beautiful frosted glass effects on UI elements
- 📱 **Responsive Design:** Optimized for iOS and Android devices
- 🎨 **Custom Components:** Reusable input components with icons
- 🖼️ **SVG Graphics:** Custom secure login illustrations

### 📱 Mobile Features
- 📱 **Cross-Platform:** Works on both iOS and Android
- 🚀 **Expo Router:** File-based routing for seamless navigation
- ⚡ **Fast Performance:** Optimized React Native components
- 🎯 **Native Feel:** Uses native components for authentic mobile experience  

---

## 📂 Project Structure
```
login-signup-homework/
├─ app/                      # Expo Router app directory (file-based routing)
│  ├─ _layout.tsx           # Root layout component
│  └─ login.tsx              # Login screen
├─ assets/                   # Static assets (images, icons, SVG)
│  ├─ images/                # Image assets
│  └─ svg/                   # SVG components
├─ components/               # Reusable React Native components
│  ├─ common/                # Common components
│  │   └─ input.tsx          # Custom input component
│  ├─ ui/                    # UI components
│  │   ├─ collapsible.tsx
│  │   └─ icon-symbol.tsx
│  ├─ themed-view.tsx        # Themed view wrapper
│  ├─ themed-text.tsx        # Themed text component
│  └─ ...
├─ constants/                # App constants
├─ hooks/                    # Custom React hooks
├─ scripts/                  # Build and utility scripts
├─ .vscode/                  # VS Code settings
├─ app.json                  # Expo configuration
├─ package.json              # Dependencies and scripts
├─ tsconfig.json             # TypeScript configuration
├─ tailwind.config.js        # Tailwind CSS configuration
├─ metro.config.js           # Metro bundler configuration
├─ babel.config.js           # Babel configuration
├─ eslint.config.js          # ESLint configuration
├─ global.css                # Global styles
└─ README.md                 # Project documentation
```
---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/login-signup-homework.git
cd login-signup-homework
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Start the development server:**
```bash
npm start
# or
npx expo start
```

4️⃣ **Run on your device:**
- **iOS:** Press `i` in the terminal or scan QR code with Expo Go app
- **Android:** Press `a` in the terminal or scan QR code with Expo Go app
- **Web:** Press `w` in the terminal

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint

---    

## 🏗️ Tech Stack

- ⚛️ **React Native 0.81.5** – Cross-platform mobile framework
- 🟦 **TypeScript** – Type-safe development
- 🚀 **Expo ~54.0** – Development platform and tooling
- 📱 **Expo Router ~6.0** – File-based routing for React Native
- 🎨 **NativeWind 4.2** – Tailwind CSS for React Native
- 🎨 **Tailwind CSS 3.4** – Utility-first CSS framework
- 🔄 **React Navigation** – Navigation library
- 📦 **Expo Vector Icons** – Icon library (AntDesign, Entypo)
- 🎯 **React Native Gesture Handler** – Native gesture handling
- ⚡ **React Native Reanimated** – High-performance animations

---

## 🎮 How to Use

1️⃣ **Start the App** – Run `npm start` to launch the Expo development server  
2️⃣ **Open on Device** – Scan the QR code with Expo Go app (iOS/Android) or use simulator  
3️⃣ **Login Screen** – Enter your username and password  
4️⃣ **Forgot Password** – Tap "Forgot Password?" to recover your account  
5️⃣ **Social Login** – Use Google, Apple, or Facebook to sign in quickly  
6️⃣ **Sign Up** – Tap "Register Now" to create a new account  

---

## 📱 Screens

- **🔐 Login** – User authentication screen with username/password fields
- **📝 Signup** – User registration screen (to be implemented)
- **🔑 Password Recovery** – Forgot password functionality

---

## 📌 Technical Notes

- **Cross-Platform** – Built with React Native for iOS and Android support
- **Expo Managed Workflow** – Uses Expo SDK for simplified development
- **File-Based Routing** – Expo Router provides automatic routing based on file structure
- **NativeWind Styling** – Tailwind CSS utilities for React Native components
- **TypeScript** – Full type safety throughout the application
- **Modern Architecture** – Built with latest React Native patterns and best practices
- **Performance Optimized** – Uses React Native optimizations and native components

---

## 🤝 Contributing

💡 Have an idea or found a bug?

- 🍴 **Fork the repository**
- 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- 💻 **Make your changes** and test thoroughly on both iOS and Android
- 📝 **Commit your changes** (`git commit -m 'Add amazing feature'`)
- 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
- 🔄 **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Test on both iOS and Android platforms
- Ensure responsive design for different screen sizes
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Expo Team** – For the amazing React Native development platform
- **React Native Community** – For the incredible cross-platform framework
- **NativeWind** – For bringing Tailwind CSS to React Native
- **Open Source Community** – For the amazing libraries and tools
- **All Contributors** – Who help make this project better