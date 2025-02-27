# Ignis Search 🔥

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/badge/Status-Active-green)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)

Ignis Search is an ultra-fast web search redirector that harnesses the power of bang commands for lightning-quick searches. It provides a minimal, elegant interface while delivering maximum performance.

## ✨ Features

### Current Features

- **Lightning-fast Bang Redirects**: Instantly redirect to search engines and websites using bang commands
- **Default Search Engine Support**: Falls back to a default search engine when no bang is specified
- **Simple Setup**: Easy to set up as a custom search engine in any browser
- **Minimal Interface**: Clean, distraction-free design focused on speed and usability

### How It Works

1. Type a bang command (e.g., `!g` for Google) followed by your search term
2. Ignis instantly redirects you to the appropriate search engine with your query
3. No intermediary pages, no tracking, just pure search speed

## 🚀 Upcoming Features

Based on our [development roadmap](ideas.md), we're planning to implement:

### Core Functionality Enhancements
- Custom bang creation for personalized redirects
- Bang favorites and recently used system
- Categorized bang organization
- Visual bang suggestions as you type

### Performance Optimizations
- Web workers for non-blocking bang processing
- Client-side caching of frequently used bangs
- Optimized bang matching algorithms
- IndexedDB storage for user preferences

### Search Improvements
- Inline previews for certain searches
- Quick answers for common queries
- Improved fallback search behavior
- Local search history

### User Experience
- Dark/light mode toggle
- Customizable themes and accent colors
- Keyboard shortcuts
- Visual bang selection interface

### Personalization
- User profiles stored locally
- Customizable landing page
- Personal usage statistics
- Configurable default search engine

## 🛠️ Getting Started

### As a User

1. **Copy** the search URL from the Ignis homepage
2. **Add** it as a custom search engine in your browser
   - In Chrome: Settings → Search engines → Add
   - In Firefox: Bookmarks → Add a keyword for this search
   - In Edge: Settings → Privacy, search and services → Address bar → Manage search engines → Add
3. **Set** it as your default search engine (optional)
4. **Search** using bang commands (e.g., `!w Python programming` to search Wikipedia)

### For Developers

```bash
# Clone the repository
git clone https://github.com/pallepadehat/ignis.git

# Navigate to project directory
cd ignis

# Install dependencies
npm install

# Start development server
npm run dev
```

## 💡 Project Vision

Ignis aims to be the fastest, most efficient search tool available. We believe that:

- Search should be instantaneous
- Users should maintain control over their search experience
- Minimal design leads to maximum usability
- Open source development creates better tools for everyone

Our goal is to build a community-driven search utility that prioritizes speed, privacy, and user control above all else.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Check our [ideas.md](ideas.md) file for planned features and improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by [DuckDuckGo's bang commands](https://duckduckgo.com/bang.html)
- Built with React and TypeScript
- Special thanks to all contributors and users

## 📬 Contact

- Website: [t3.chat](https://t3.chat)
- GitHub: [@pallepadehat](https://github.com/pallepadehat)
- Project Link: [github.com/pallepadehat/ignis](https://github.com/pallepadehat/ignis)
