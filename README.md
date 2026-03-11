# YouTube Clone 🎥

A modern, responsive YouTube Clone built with **Vanilla JavaScript** and **Tailwind CSS v4**. This project fetches real-time data from the official YouTube Data API v3 to provide a dynamic viewing experience.

## ✨ Features

- **Real-time Data**: Fetches "Most Popular" videos directly from the YouTube API.
- **Dynamic Video Cards**: Displays high-quality thumbnails, channel logos, view counts, and upload dates.
- **Responsive Layout**: Seamless switching between grid and list views depending on screen size.
- **Modern Styling**: Built using the latest Tailwind CSS v4 features for a sleek, premium look.
- **Interactive Sidebar**: Fully functional toggleable sidebar for mobile and desktop navigation.
- **API Integration**: Handles asynchronous requests for video statistics and channel details.

## 🚀 Technologies Used

- **HTML5**: Semantic structure.
- **Tailwind CSS v4**: Utility-first styling with the new CSS-first configuration.
- **Vanilla JavaScript (ES6+)**: Logic, DOM manipulation, and API integration.
- **YouTube Data API v3**: To fetch live video and channel metadata.

## 🛠️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adiaditya78/youtube_clone.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Tailwind CSS watch process**:
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```

4. **Add your API Key**:
   Open `src/index.js` and replace `my_API_key` with your own YouTube Data API key from the [Google Cloud Console](https://console.cloud.google.com/).

5. **Open the project**:
   Open `index.html` in your browser.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
