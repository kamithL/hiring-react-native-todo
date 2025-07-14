## 🚀 Description

- Built a React Native TODO app (“tasked”) per spec and Figma designs  
- Scaffolded with Expo + TypeScript  
- Created a `useTodos` hook backed by AsyncStorage for add/edit/toggle/delete flows  
- Provided global state via React Context (`TodoContext`)  
- Split UI into modular components (`TodoInput`, `TodoList`, `TodoItem`) and `HomeScreen`  
- Matched Figma exactly: “tasked” header, inline add row, solid black unchecked boxes, teal-filled checked boxes, FAB toggles between “+” and “×”  
- Configured `app.json` to use `assets/base.png` for both app icon and splash screen with black background  

---

## 💡 Solution Rationale & User Value

- **Maintainability:** Hooks, context, components, screens, and navigation are each in their own folder  
- **Readability:** Single‐responsibility files make onboarding and reviews straightforward  
- **UX:** Inline add, long-press edit, clear visual feedback, and smooth `LayoutAnimation` transitions enhance usability  
- **Performance:** `useCallback` + `FlatList` keep re-renders minimal even as list grows  
---

## 💾 Local Persistence Rationale

I chose **AsyncStorage** because it’s zero-config in Expo, cross-platform, and ideal for small datasets like a TODO list.  
- **Pros:** Simple JSON storage, no native linking required  
- **Cons:** Not optimal for complex queries or huge data, but suits our needs perfectly  

---

## 🧠 Global State (if used)

I used **React Context** (`TodoContext`) to expose the `useTodos` hook application-wide.  
- Avoids prop‐drilling into nested components  
- Makes it trivial to add future screens (e.g. filters, stats) without refactoring  

---

## 💫 Animations (Bonus, if implemented)

- Leveraged `LayoutAnimation` to animate item insertions, deletions, and edit‐mode transitions for a polished feel  


---

## 🎥 Demo Video

Include a link to a short screen recording (e.g. Loom or MP4) showing the app in use.

> (https://drive.google.com/file/d/1qXayQgnZZvoWREVSzejyf7n8KvHLT_KT/view?usp=sharing) 
> *Shows add, edit (long-press), toggle, delete, and persistence after reload.*

---

## 🛠️ Setup Instructions (if different from README)

No changes beyond the README. To preview custom splash/icon, run a native build or dev client as described.

---

## 📌 Known Limitations / Assumptions

- No search or filter feature yet  
- Assumes reliable device storage; doesn’t handle migration or corruption  


## ✅ Checklist

- [x] Tasks can be added  
- [x] Tasks can be viewed  
- [x] Tasks can be edited  
- [x] Tasks can be marked complete/incomplete  
- [x] Tasks can be deleted  
- [x] Data is persisted locally on the device  
- [x] Local storage method explained  
- [x] Global state usage explained  
- [x] Animations added using `LayoutAnimation`  
- [x] Demo video included  
- [x] Solution rationale & user value explained  

---
