import React from "react";
import Category from "../components/Category";
import Items from "../components/Items";
import itemData from "../itemData";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Arrival from "../components/Arrival";
import newArrival from "../newArrival";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="md:py-1.5 md:px-3.5 py-1 px-2 w-search m-auto relative left-3 top-4 rounded-md md:w-96 md:h-11 h-7 border md:rounded-2xl md:relative md:left-56 md:top-10 border-borderColor bg-generalColor"
      />
      <Ads />
      <Category />
      <div className="lg:h-arrivalHeight h-12 bg-customOrange mb-16 lg:pb-24 lg:hidden md:hidden flex  justify-between relative top-20">
        <h2 className="relative lg:top-10 left-12 top-3 font-popins lg:text-arrival text-xl text-white">
          All Category
        </h2>
        <div className="flex"><Link to="/no-page" className="relative lg:top-10 left-12 top-3 font-popins lg:text-arrival text-xl text-white mr-20">View All</Link><GoArrowRight className="text-white text-xl relative top-4 right-6" /></div>
        
      </div>
      <div className="md:ml-72 px-3 relative bottom-10 lg:bottom-32">
        <div className="grid md:gap-10  lg:grid-cols-4 md:grid-cols-3 lg:gap-6 grid-cols-2 gap-5 px-5 mt-40">
          <Items
            itemImage={itemData[0].itemImage}
            itemName={itemData[0].itemName}
            price={itemData[0].price}
            rating={itemData[0].rating}
            rating2={itemData[0].rating2}
            rating3={itemData[0].rating3}
            rating4={itemData[0].rating4}
            rating5={itemData[0].rating5}
          />

          <Items
            itemImage={itemData[1].itemImage}
            itemName={itemData[1].itemName}
            price={itemData[1].price}
            rating={itemData[1].rating}
            rating2={itemData[1].rating2}
            rating3={itemData[1].rating3}
            rating4={itemData[1].rating4}
            rating5={itemData[1].rating5}
          />
          <Items
            itemImage={itemData[2].itemImage}
            itemName={itemData[2].itemName}
            price={itemData[2].price}
            rating={itemData[2].rating}
            rating2={itemData[2].rating2}
            rating3={itemData[2].rating3}
            rating4={itemData[2].rating4}
            rating5={itemData[2].rating5}
          />
          <Items
            itemImage={itemData[3].itemImage}
            itemName={itemData[3].itemName}
            price={itemData[3].price}
            rating={itemData[3].rating}
            rating2={itemData[3].rating2}
            rating3={itemData[3].rating3}
            rating4={itemData[3].rating4}
            rating5={itemData[3].rating5}
          />
          <Items
            itemImage={itemData[4].itemImage}
            itemName={itemData[4].itemName}
            price={itemData[4].price}
            rating={itemData[4].rating}
            rating2={itemData[4].rating2}
            rating3={itemData[4].rating3}
            rating4={itemData[4].rating4}
            rating5={itemData[4].rating5}
          />

          <Items
            itemImage={itemData[5].itemImage}
            itemName={itemData[5].itemName}
            price={itemData[5].price}
            rating={itemData[5].rating}
            rating2={itemData[5].rating2}
            rating3={itemData[5].rating3}
            rating4={itemData[5].rating4}
            rating5={itemData[5].rating5}
          />
          <Items
            itemImage={itemData[6].itemImage}
            itemName={itemData[6].itemName}
            price={itemData[6].price}
            rating={itemData[6].rating}
            rating2={itemData[6].rating2}
            rating3={itemData[6].rating3}
            rating4={itemData[6].rating4}
            rating5={itemData[6].rating5}
          />
          <Items
            itemImage={itemData[7].itemImage}
            itemName={itemData[7].itemName}
            price={itemData[7].price}
            rating={itemData[7].rating}
            rating2={itemData[7].rating2}
            rating3={itemData[7].rating3}
            rating4={itemData[7].rating4}
            rating5={itemData[7].rating5}
          />
          <Items
            itemImage={itemData[8].itemImage}
            itemName={itemData[8].itemName}
            price={itemData[8].price}
            rating={itemData[8].rating}
            rating2={itemData[8].rating2}
            rating3={itemData[8].rating3}
            rating4={itemData[8].rating4}
            rating5={itemData[8].rating5}
          />

          <Items
            itemImage={itemData[9].itemImage}
            itemName={itemData[9].itemName}
            price={itemData[9].price}
            rating={itemData[9].rating}
            rating2={itemData[9].rating2}
            rating3={itemData[9].rating3}
            rating4={itemData[9].rating4}
            rating5={itemData[9].rating5}
          />
          <Items
            itemImage={itemData[10].itemImage}
            itemName={itemData[10].itemName}
            price={itemData[10].price}
            rating={itemData[10].rating}
            rating2={itemData[10].rating2}
            rating3={itemData[10].rating3}
            rating4={itemData[10].rating4}
            rating5={itemData[10].rating5}
          />
          <Items
            itemImage={itemData[11].itemImage}
            itemName={itemData[11].itemName}
            price={itemData[11].price}
            rating={itemData[11].rating}
            rating2={itemData[11].rating2}
            rating3={itemData[11].rating3}
            rating4={itemData[11].rating4}
            rating5={itemData[11].rating5}
          />
        </div>
      </div>
      <div className="lg:flex lg:gap-9 lg:buttons lg:pb-7 hidden w-60 m-auto">
        <button className="bg-imageColor w-11 h-11 relative bottom-3 pr-6">
          {" "}
          <GrPrevious className="relative left-3" />
        </button>
        <p className="bg-customOrange h-7 px-3 ">1</p>
        <p>of</p>
        <p>20</p>
        <button className="bg-imageColor w-11 h-11 relative bottom-3 pr-6">
          <GrNext className="relative left-3" />
        </button>
      </div>

      <div className="lg:h-arrivalHeight h-12 bg-customOrange mb-16 lg:pb-24 flex justify-between">
        <h2 className="relative lg:top-10 left-12 top-3 font-popins lg:text-arrival text-xl text-white">
          New Arrival
        </h2>
        <div className="flex lg:hidden md:hidden" ><Link to="/no-page" className="relative lg:top-10 left-12 top-3 font-popins lg:text-arrival text-xl text-white mr-20 ">View All</Link><GoArrowRight className="text-white text-xl relative top-4 right-6" /></div>
      
      </div>
      <div className=" px-5 lg:px-5">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 lg:gap-6 grid-cols-2 gap-5">
          <Arrival
            itemImage={newArrival[0].itemImage}
            itemName={newArrival[0].itemName}
            price={newArrival[0].price}
            rating={newArrival[0].rating}
            rating2={newArrival[0].rating2}
            rating3={newArrival[0].rating3}
            rating4={newArrival[0].rating4}
            rating5={newArrival[0].rating5}
          />
          <Arrival
            itemImage={newArrival[1].itemImage}
            itemName={newArrival[1].itemName}
            price={newArrival[1].price}
            rating={newArrival[1].rating}
            rating2={newArrival[1].rating2}
            rating3={newArrival[1].rating3}
            rating4={newArrival[1].rating4}
            rating5={newArrival[1].rating5}
          />
          <Arrival
            itemImage={newArrival[2].itemImage}
            itemName={newArrival[2].itemName}
            price={newArrival[2].price}
            rating={newArrival[2].rating}
            rating2={newArrival[2].rating2}
            rating3={newArrival[2].rating3}
            rating4={newArrival[2].rating4}
            rating5={newArrival[2].rating5}
          />
          <Arrival
            itemImage={newArrival[3].itemImage}
            itemName={newArrival[3].itemName}
            price={newArrival[3].price}
            rating={newArrival[3].rating}
            rating2={newArrival[3].rating2}
            rating3={newArrival[3].rating3}
            rating4={newArrival[3].rating4}
            rating5={newArrival[3].rating5}
          />
          <Arrival
            itemImage={newArrival[4].itemImage}
            itemName={newArrival[4].itemName}
            price={newArrival[4].price}
            rating={newArrival[4].rating}
            rating2={newArrival[4].rating2}
            rating3={newArrival[4].rating3}
            rating4={newArrival[4].rating4}
            rating5={newArrival[4].rating5}
          />
          <Arrival
            itemImage={newArrival[5].itemImage}
            itemName={newArrival[5].itemName}
            price={newArrival[5].price}
            rating={newArrival[5].rating}
            rating2={newArrival[5].rating2}
            rating3={newArrival[5].rating3}
            rating4={newArrival[5].rating4}
            rating5={newArrival[5].rating5}
          />
          <Arrival
            itemImage={newArrival[6].itemImage}
            itemName={newArrival[6].itemName}
            price={newArrival[6].price}
            rating={newArrival[6].rating}
            rating2={newArrival[6].rating2}
            rating3={newArrival[6].rating3}
            rating4={newArrival[6].rating4}
            rating5={newArrival[6].rating5}
          />
          <Arrival
            itemImage={newArrival[7].itemImage}
            itemName={newArrival[7].itemName}
            price={newArrival[7].price}
            rating={newArrival[7].rating}
            rating2={newArrival[7].rating2}
            rating3={newArrival[7].rating3}
            rating4={newArrival[7].rating4}
            rating5={newArrival[7].rating5}
          />
          <Arrival
            itemImage={newArrival[8].itemImage}
            itemName={newArrival[8].itemName}
            price={newArrival[8].price}
            rating={newArrival[8].rating}
            rating2={newArrival[8].rating2}
            rating3={newArrival[8].rating3}
            rating4={newArrival[8].rating4}
            rating5={newArrival[8].rating5}
          />
          <Arrival
            itemImage={newArrival[9].itemImage}
            itemName={newArrival[9].itemName}
            price={newArrival[9].price}
            rating={newArrival[9].rating}
            rating2={newArrival[9].rating2}
            rating3={newArrival[9].rating3}
            rating4={newArrival[9].rating4}
            rating5={newArrival[9].rating5}
          />
        </div>
      </div>

      <div className="lg:flex lg:gap-9 lg:buttons-two hidden lg:w-60 lg:m-auto lg:mt-10">
        <button className="bg-imageColor w-11 h-11 relative bottom-3 pr-6">
          {" "}
          <GrPrevious className="relative left-3" />
        </button>
        <p className="bg-customOrange h-7 px-3 ">1</p>
        <p>of</p>
        <p>20</p>
        <button className="bg-imageColor w-11 h-11 relative bottom-3 pr-6">
          <GrNext className="relative left-3" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
