# tasked — React Native TODO App

A simple, pixel-perfect TODO list app built with React Native and Expo, featuring:

- ✅ Add, edit, toggle, and delete tasks  
- 💾 Local persistence via AsyncStorage  
- 🎨 Figma-inspired UI: “tasked” header, inline add row, solid black unchecked boxes, teal-filled checked boxes with white checkmark  
- 🚀 Modular architecture: hooks, context, components, screens, navigation  
- 📱 Custom app icon & splash screen using `assets/base.png` on a black background  

---

## 🚀 Getting Started

1. Fork this repo, clone your fork, and switch to a new `develop` branch:
   ```bash
   git clone https://github.com/<your-username>/hiring-react-native-todo.git
   cd hiring-react-native-todo
   ```

2. Install project dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the project using Expo:
   ```bash
   npx expo start
   ```

---

## 🔧 Configuration

### App Icon & Splash Screen

This app uses a custom icon and splash (`assets/base.png`) with a black background.

In `app.json`:

```json
{
  "expo": {
    "icon": "./assets/base.png",
    "splash": {
      "image": "./assets/base.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      }
    }
  }
}
```

---

## 📦 Project Structure

```
.
├── App.tsx
├── app.json
├── assets/
│   ├── base.png             # app icon & splash
│   └── adaptive-icon.png    # Android adaptive icon
├── src/
│   ├── components/
│   │   ├── TodoInput.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   ├── contexts/
│   │   └── TodoContext.tsx
│   ├── hooks/
│   │   └── useTodos.ts
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   └── screens/
│       └── HomeScreen.tsx
└── README.md
```
## 🎥 Demo

Click below to watch a short demo of the app in use:

▶️ [Watch the Demo Video](https://drive.google.com/file/d/1qXayQgnZZvoWREVSzejyf7n8KvHLT_KT/view?usp=sharing)


