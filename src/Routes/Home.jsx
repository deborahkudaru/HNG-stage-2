import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Items from "../components/Items";
import itemData from "../itemData";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Arrival from "../components/Arrival";
import newArrival from "../newArrival";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <input
        type="text"
        placeholder="Search..."
        className="py-1.5 px-3.5 w-96 h-11 border rounded-2xl relative left-56 top-10 border-borderColor bg-generalColor"
      />
      <Category />
      <div className="ml-72 relative bottom-52">
        <div className="flex gap-5 mb-7">
          <Items
            itemImage={itemData[0].itemImage}
            itemName={itemData[0].itemName}
            price={itemData[0].price}
            rating={itemData[0].rating}
          />

          <Items
            itemImage={itemData[1].itemImage}
            itemName={itemData[1].itemName}
            price={itemData[1].price}
            rating={itemData[1].rating}
          />
          <Items
            itemImage={itemData[2].itemImage}
            itemName={itemData[2].itemName}
            price={itemData[2].price}
            rating={itemData[2].rating}
          />
          <Items
            itemImage={itemData[3].itemImage}
            itemName={itemData[3].itemName}
            price={itemData[3].price}
            rating={itemData[3].rating}
          />
        </div>

        <div className="flex gap-5 mb-7">
          <Items
            itemImage={itemData[4].itemImage}
            itemName={itemData[4].itemName}
            price={itemData[4].price}
            rating={itemData[4].rating}
          />

          <Items
            itemImage={itemData[5].itemImage}
            itemName={itemData[5].itemName}
            price={itemData[5].price}
            rating={itemData[5].rating}
          />
          <Items
            itemImage={itemData[6].itemImage}
            itemName={itemData[6].itemName}
            price={itemData[6].price}
            rating={itemData[6].rating}
          />
          <Items
            itemImage={itemData[7].itemImage}
            itemName={itemData[7].itemName}
            price={itemData[7].price}
            rating={itemData[7].rating}
          />
        </div>
        <div className="flex gap-5 ">
          <Items
            itemImage={itemData[8].itemImage}
            itemName={itemData[8].itemName}
            price={itemData[8].price}
            rating={itemData[8].rating}
          />

          <Items
            itemImage={itemData[9].itemImage}
            itemName={itemData[9].itemName}
            price={itemData[9].price}
            rating={itemData[9].rating}
          />
          <Items
            itemImage={itemData[10].itemImage}
            itemName={itemData[10].itemName}
            price={itemData[10].price}
            rating={itemData[10].rating}
          />
          <Items
            itemImage={itemData[11].itemImage}
            itemName={itemData[11].itemName}
            price={itemData[11].price}
            rating={itemData[11].rating}
          />
        </div>
      </div>
      <div className="flex gap-9 buttons">
        <button className="bg-imageColor w-11 h-11 relative bottom-3">
          {" "}
          <GrPrevious className="relative left-3" />
        </button>
        <p>1</p>
        <p>of</p>
        <p>20</p>
        <button className="bg-imageColor w-11 h-11 relative bottom-3">
          <GrNext className="relative left-3" />
        </button>
      </div>

      <div className="w-arrivalWidth h-arrivalHeight bg-customOrange mb-10">
        <h2 className="relative top-9 left-12 font-popins text-arrival text-white">
          New Arrival
        </h2>
      </div>
      <div className="ml-8">
        <div className="flex gap-5 mb-7 ">
          <Arrival
            itemImage={newArrival[0].itemImage}
            itemName={newArrival[0].itemName}
            price={newArrival[0].price}
            rating={newArrival[0].rating}
          />
          <Arrival
            itemImage={newArrival[1].itemImage}
            itemName={newArrival[1].itemName}
            price={newArrival[1].price}
            rating={newArrival[1].rating}
          />
          <Arrival
            itemImage={newArrival[2].itemImage}
            itemName={newArrival[2].itemName}
            price={newArrival[2].price}
            rating={newArrival[2].rating}
          />
          <Arrival
            itemImage={newArrival[3].itemImage}
            itemName={newArrival[3].itemName}
            price={newArrival[3].price}
            rating={newArrival[3].rating}
          />
          <Arrival
            itemImage={newArrival[4].itemImage}
            itemName={newArrival[4].itemName}
            price={newArrival[4].price}
            rating={newArrival[4].rating}
          />
        </div>

        <div className="flex gap-5">
          <Arrival
            itemImage={newArrival[5].itemImage}
            itemName={newArrival[5].itemName}
            price={newArrival[5].price}
            rating={newArrival[5].rating}
          />
          <Arrival
            itemImage={newArrival[6].itemImage}
            itemName={newArrival[6].itemName}
            price={newArrival[6].price}
            rating={newArrival[6].rating}
          />
          <Arrival
            itemImage={newArrival[7].itemImage}
            itemName={newArrival[7].itemName}
            price={newArrival[7].price}
            rating={newArrival[7].rating}
          />
          <Arrival
            itemImage={newArrival[8].itemImage}
            itemName={newArrival[8].itemName}
            price={newArrival[8].price}
            rating={newArrival[8].rating}
          />
          <Arrival
            itemImage={newArrival[9].itemImage}
            itemName={newArrival[9].itemName}
            price={newArrival[9].price}
            rating={newArrival[9].rating}
          />
        </div>
      </div>

      <div className="flex gap-9 buttons-two">
        <button className="bg-imageColor w-11 h-11 relative bottom-3">
          {" "}
          <GrPrevious className="relative left-3" />
        </button>
        <p>1</p>
        <p>of</p>
        <p>20</p>
        <button className="bg-imageColor w-11 h-11 relative bottom-3">
          <GrNext className="relative left-3" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
