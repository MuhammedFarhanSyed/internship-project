# Real-Time Crypto Price Tracker

A responsive real-time cryptocurrency price tracker built using **React** and **Redux Toolkit**, simulating WebSocket updates. This project was developed as part of an internship assignment to demonstrate real-time UI updates, state management, and responsive design inspired by CoinMarketCap.

---

## 📊 Features

- **Live Cryptocurrency Data**:
  - Displays key details for 5+ crypto assets (e.g., BTC, ETH, USDT):
    - Logo, Name, Symbol
    - Live Price
    - Percentage Changes (1h, 24h, 7d)
    - Market Cap
    - 24h Volume (with volume in coins)
    - Circulating Supply
    - Static 7d Mini Chart
- **Color-Coded Percentage Changes**:
  - 🟢 Green for positive changes
  - 🔴 Red for negative changes
- **Real-Time Updates**:
  - Simulated WebSocket updates using `setInterval`
- **State Management**:
  - Managed with **Redux Toolkit** for consistency and predictability
- **Responsive Design**:
  - Fully responsive table layout styled with **Tailwind CSS**
- **Interactive Icons**:
  - FontAwesome icons for enhanced visuals and interactivity

---

## 🛠 Tech Stack

- **React**: Component-based UI library
- **Redux Toolkit**: Simplified global state management
- **Tailwind CSS**: Utility-first CSS framework for fast styling
- **FontAwesome**: Icon library for interactive visuals
- **WebSocket Simulation**: Real-time updates using JavaScript `setInterval`

---

## 📂 Project Structure

```
src/
├── components/
│   └── CryptoTable.jsx
├── redux/
│   ├── store.js
│   └── cryptoSlice.js
├── data/
│   └── cryptoData.json
├── assets/
│   └── logos/ (optional)
├── App.jsx
├── index.js
```

---

## 🚀 Setup Instructions

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammedFarhanSyed/internship-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd internship-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## 🎨 Design and Development Approach

- **UI Design**: Inspired by CoinMarketCap, focusing on a clean and intuitive layout.
- **Styling**: Tailwind CSS was used for efficient and responsive styling.
- **State Management**: All live cryptocurrency data is managed within the Redux state for consistency and predictability.
- **Real-Time Updates**: Simulated using randomized price and volume changes at regular intervals.
- **Codebase**: Emphasizes modularity and reusability for maintainability and scalability.

---

## 📈 Future Improvements

- Integrate real WebSocket API (e.g., Binance Live Data)
- Add filtering and sorting options (e.g., Top Gainers, Top Losers)
- Implement a dark/light mode toggle
- Add pagination for more coins
- Write unit tests for reducers and selectors

---

## 📜 License

This project is for educational and internship purposes only.

---

## ✅ Next Steps

Save this content into a `README.md` file inside your project folder. Then run the following commands to commit and push the changes:

```bash
git add README.md
git commit -m "Add professional README file"
git push
```