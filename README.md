# 🌦️ ClimaSense

**ClimaSense** is a modern, API-driven weather dashboard that delivers real-time climate information with a premium dark-green glassmorphism UI. It allows users to search weather by city or current location and view detailed weather metrics in an intuitive dashboard.

![ClimaSense Banner](img/CS_home.png)

---

## ✨ Features

* 🔍 **City-based Search:** Instantly find weather conditions for any city worldwide.
* 📍 **Geolocation Support:** Auto-detect current location weather.
* 🌡️ **Real-time Metrics:** Live temperature, humidity, wind speed, pressure & visibility.
* 🌅 **Astronomy Data:** Accurate sunrise & sunset timings.
* 📅 **5-Day Forecast:** Planning made easy with a multi-day outlook.
* ⏳ **Smooth UX:** Animated loading skeletons and neon SVG weather icons.
* 🔄 **Unit Conversion:** Toggle seamlessly between Celsius (°C) and Fahrenheit (°F).
* 🗂️ **Search History:** Saves recent searches using `localStorage` for quick access.
* 🎨 **Modern UI:** Dark-green glassmorphism aesthetic.
* 📱 **Responsive:** Fully optimized for all screen sizes.

---

## 📸 Screenshots

### 🏠 Dashboard View
![Dashboard](img/CS_home.png)

---

## 🛠️ Tech Stack

| Frontend | APIs & Browser Features |
| :--- | :--- |
| HTML5 | OpenWeatherMap API |
| CSS3 (Glassmorphism) | Geolocation API |
| JavaScript (ES6) | localStorage |
| | Fetch API / Async-Await |

---

## 🔑 API Used

**OpenWeatherMap API**
This project utilizes the OpenWeatherMap API to fetch accurate weather data.
* Current Weather Data
* 5 Day / 3 Hour Forecast

🔗 [Get API Key Here](https://openweathermap.org/api)

---

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/ClimaSense.git](https://github.com/yourusername/ClimaSense.git)
    cd ClimaSense
    ```

2.  **Configure API Key**
    Open `script.js` and insert your OpenWeatherMap API key:
    ```javascript
    const apiKey = "YOUR_OPENWEATHER_API_KEY";
    ```

3.  **Run the project**
    * **Option A (Recommended):** Use the "Live Server" extension in VS Code.
    * **Option B:** Simply open `index.html` in your web browser.

---

## 🧠 What This Project Demonstrates

* **API Integration:** Proficient use of `Fetch` and `async/await` patterns.
* **Data Handling:** Parsing and displaying complex JSON data structures.
* **Browser APIs:** Implementation of Geolocation and LocalStorage.
* **State Management:** Handling UI states (Loading, Error, Success) gracefully.
* **Modern Design:** Responsive dashboard layout with glassmorphism effects.

---

## 📁 Project Structure

```text
ClimaSense/
│
├── index.html        # Main HTML structure
├── style.css         # Styling and Glassmorphism effects
├── script.js         # API logic and DOM manipulation
├── about.html        # About page
└── images/           # Assets folder
    └── screenshots/  # Images for README


---
```
## 📄 License

This project is developed for educational purposes.

## 📬 Contact

**Naveen Kumar P** [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/naveenkumarp20/)

