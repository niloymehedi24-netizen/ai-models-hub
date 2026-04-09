import { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import NavBar from "./components/NavBar";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("models");
  const [carts, setCarts] = useState([]);
  console.log(carts);

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-35"
          aria-label="Models"
          onClick={() => setActiveTab("models")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-35"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "models" ? (
        <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      ) : null}

      {activeTab === "cart" ? <Cart carts={carts}></Cart> : null}

      <Footer></Footer>
    </>
  );
}

export default App;
