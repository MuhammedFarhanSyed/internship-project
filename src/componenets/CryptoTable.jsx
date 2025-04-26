import React, { useState, useEffect } from "react";
import { useRef } from "react";

function CryptoTable( { addtoWishlist, removefromWishlist ,wishlistedcrypto}) {
  const inputRef = useRef(null);
  const [searchedData, setSearchedData] = useState("");
  const itcontains = (cryptoData) => {
    for (let i = 0; i < wishlistedcrypto.length; i++) {
      if (wishlistedcrypto[i].rank === cryptoData.rank) {
        return true;
      }
    }
    return false;
  };
  const [cryptoData, setCryptoData] = useState([
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$93,759.48",
      oneHour: 0.43,
      twentyFourHour: 0.93,
      sevenDay: 11.11,
      marketCap: "$1,861,618,902,186",
      volume: "$43,874,950,947",
      circulatingSupply: "19.85M BTC",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$1,802.46",
      oneHour: 0.6,
      twentyFourHour: 3.21,
      sevenDay: 13.68,
      marketCap: "$217,581,279,327",
      volume: "$23,547,469,307",
      circulatingSupply: "120.71M ETH",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      rank: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      oneHour: 0.0,
      twentyFourHour: 0.0,
      sevenDay: 0.04,
      marketCap: "$145,320,022,085",
      volume: "$92,288,882,007",
      circulatingSupply: "145.27B USDT",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    },
    {
      rank: 4,
      name: "XRP",
      symbol: "XRP",
      price: "$2.22",
      oneHour: 0.46,
      twentyFourHour: 0.54,
      sevenDay: 6.18,
      marketCap: "$130,073,814,966",
      volume: "$5,131,481,491",
      circulatingSupply: "58.39B XRP",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
    },
    {
      rank: 5,
      name: "BNB",
      symbol: "BNB",
      price: "$606.65",
      oneHour: 0.09,
      twentyFourHour: -1.2,
      sevenDay: 3.73,
      marketCap: "$85,471,956,947",
      volume: "$1,874,281,784",
      circulatingSupply: "140.89M BNB",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
    },
    {
      rank: 6,
      name: "Solana",
      symbol: "SOL",
      price: "$151.51",
      oneHour: 0.53,
      twentyFourHour: 1.26,
      sevenDay: 14.74,
      marketCap: "$78,381,958,631",
      volume: "$4,881,674,486",
      circulatingSupply: "517.31M SOL",
      chart:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
      logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    },
  ]);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/xrpusdt@trade/bnbusdt@trade/solusdt@trade"
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const trade = message.data;

      setCryptoData((prevData) => {
        return prevData.map((crypto) => {
          if (crypto.symbol.toLowerCase() === trade.s.toLowerCase()) {
            return {
              ...crypto,
              price: `${parseFloat(trade.p).toFixed(2)}`,
            };
          }
          return crypto;
        });
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className="w-full ">
        <div className="flex justify-center items-center p-5">
          <div className="flex items-center gap-4 bg-gray-900 p-3 w-[25vw] rounded-2xl pl-5 min-w-[300px]">
            <i
              onClick={() => inputRef.current.focus()}
              className="fa-solid fa-magnifying-glass text-gray-400  hover:cursor-pointer"
            ></i>
            <input
              type="text"
              ref={inputRef}
              onChange={(e) => setSearchedData(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlekeydown();
                }
              }}
              placeholder="Search..."
              className="outline-none bg-gray-900 w-full "
            />
          </div>
        </div>
      </div>
      <div className="m-5 rounded-2xl overflow-x-auto border border-gray-800">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-900 text-white">
            <tr className="h-10 font-bold text-left text-sm uppercase">
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">1h %</th>
              <th className="px-3 py-2">24h %</th>
              <th className="px-3 py-2">7d %</th>
              <th className="px-3 py-2">Market Cap</th>
              <th className="px-3 py-2">24h Volume</th>
              <th className="px-3 py-2">Circulating Supply</th>
              <th className="px-3 py-2">7d Chart</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData
              .filter(
                (crypto) =>
                  crypto.name
                    .toLowerCase()
                    .includes(searchedData.toLowerCase()) ||
                  crypto.symbol
                    .toLowerCase()
                    .includes(searchedData.toLowerCase())
              )
              .map((crypto, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 duration-300 text-white border-b border-gray-800 text-sm"
                >
                  <td className="pl-5 py-2">
                    {itcontains(cryptoData) ? (
                      <div
                        onClick={() => removefromWishlist(cryptoData)}
                        
                      >
                        <div className="hover:scale-110 duration-200">
                          {"⭐"}
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => addtoWishlist(cryptoData)}
                       
                      >
                        <div className="hover:scale-110 duration-200 text-white font-semibold">
                          {"★"}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-3 py-2">{crypto.rank}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={crypto.logo}
                        alt="Crypto Logo"
                        width={26}
                        height={26}
                        className="min-w-[26px]"
                      />
                      <div className="font-semibold">{crypto.name}</div>
                      <div className="text-gray-400 text-xs">
                        {crypto.symbol}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2">{crypto.price}</td>
                  <td
                    className={`px-3 py-2 ${
                      crypto.oneHour > 0 ? "text-green-300" : "text-red-500"
                    }`}
                  >
                    <i
                      className={
                        crypto.oneHour > 0
                          ? "fa-solid fa-arrow-trend-up"
                          : "fa-solid fa-arrow-trend-down"
                      }
                    ></i>{" "}
                    {crypto.oneHour}%
                  </td>
                  <td
                    className={`px-3 py-2 ${
                      crypto.twentyFourHour > 0
                        ? "text-green-300"
                        : "text-red-500"
                    }`}
                  >
                    <i
                      className={
                        crypto.twentyFourHour > 0
                          ? "fa-solid fa-arrow-trend-up"
                          : "fa-solid fa-arrow-trend-down"
                      }
                    ></i>{" "}
                    {crypto.twentyFourHour}%
                  </td>
                  <td
                    className={`px-3 py-2 ${
                      crypto.sevenDay > 0 ? "text-green-300" : "text-red-500"
                    }`}
                  >
                    <i
                      className={
                        crypto.sevenDay > 0
                          ? "fa-solid fa-arrow-trend-up"
                          : "fa-solid fa-arrow-trend-down"
                      }
                    ></i>{" "}
                    {crypto.sevenDay}%
                  </td>
                  <td className="px-3 py-2 font-semibold">
                    {crypto.marketCap}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex flex-col items-start">
                      <div className="font-semibold text-base">
                        {crypto.volume}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        467.81K BTC
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 font-semibold">
                    {crypto.circulatingSupply}
                  </td>
                  <td className="px-3 py-2 h-[60px]">
                    <img
                      src={crypto.chart}
                      alt="7d Chart"
                      width={80}
                      className="min-w-[60px]"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CryptoTable;
