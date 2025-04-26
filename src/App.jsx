import React, { useEffect , useState} from "react";
import Navbar from "./componenets/Navbar";
import Wishlist from "./componenets/Wishlist";


import { BrowserRouter, Routes, Route } from "react-router";
import CryptoTable from "./componenets/CryptoTable";


function App() {
  const [wishlistedcrypto, setwishlistedcryptos] = useState([]);
  const addtoWishlist = (crypto) => {
    setwishlistedcryptos([...wishlistedcrypto, crypto]);
  };
  const removefromWishlist = (crypto) => {
    const newWishlist = wishlistedcrypto.filter((m) => m.rank !== crypto.rank);
    setwishlistedcryptos(newWishlist);
  };
  
  const clearWishlist = () => {
    setwishlistedcryptos([]);
  };








  return (
    <>
      <div className=" min-h-[100vh] bg-black text-white position-relative">
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route
              path="/wishlist"
              element={
                <Wishlist  wishlistedcrypto={wishlistedcrypto} />
              }
            />
            <Route
              path="/"
              element={
                <>
                  <CryptoTable addtoWishlist={addtoWishlist} removefromWishlist={removefromWishlist} wishlistedcrypto={wishlistedcrypto} />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
