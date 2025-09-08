# Changelog

All notable changes to this project will be documented in this file.  
This project follows [Conventional Commits](https://www.conventionalcommits.org/).  

---

## [1.1.0] - 2025-09-08
### ✨ Added
- Dark mode support across all pages
  - Updated `styles.css` with light and dark theme variables
  - Added `script.js` for toggle with localStorage persistence
  - Added 🌙/☀️ toggle buttons in page headers

---

## [1.0.1] - 2025-09-08
### 🐞 Fixed
- Prevented null reference error in `about.html`
  - Used safe optional chaining for `userProfile?.name`
  - Added "Guest" fallback value to avoid TypeError

---

## [1.0.0] - 2025-09-08
### 📚 Documentation
- Added README.md with description, features, and usage
- Added project logo and branding
- Created CONTRIBUTING.md with guidelines
- Added CODE_OF_CONDUCT.md
- Added SECURITY.md for responsible disclosure
- Added MIT LICENSE
- Created GitHub templates (Bug report, Feature request, Pull request)

### 🔨 Changed
- Rebranded project to **A11yForge Framework**
