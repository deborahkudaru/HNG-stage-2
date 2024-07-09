import React from "react";
import Calc from "../components/Calc";
import cart from "../Cart";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Footer from "../components/Footer";
import Like from "../components/Like";
import like from "../like";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const ShoppingCart = () => {
  return (
    <div>
      <div className="lg:pl-14 px-7 pt-8">
        <div className=" font-popins pb-7">
          <h2 className="lg:text-arrival lg:text-start text-center text-2xl">
            Shopping Cart
          </h2>
          <div className="lg:flex mt-6 lg:visible hidden">
            <p className="text-2xl">Product Detail</p>
            <p className="text-2xl ml-52">Quantity</p>
            <p className="text-2xl ml-36">Price</p>
            <p className="text-2xl ml-36">Total</p>
          </div>
        </div>
        <div className="flex flex-col gap-">
          <Calc
            image={cart[0].image}
            name={cart[0].imageName}
            quantity={cart[0].quantity}
            price={cart[0].price}
            total={cart[0].total}
          />
          <Calc
            image={cart[1].image}
            name={cart[1].imageName}
            quantity={cart[1].quantity}
            price={cart[1].price}
            total={cart[1].total}
          />
          <Calc
            image={cart[2].image}
            name={cart[2].imageName}
            quantity={cart[2].quantity}
            price={cart[2].price}
            total={cart[2].total}
          />
          <Calc
            image={cart[3].image}
            name={cart[3].imageName}
            quantity={cart[3].quantity}
            price={cart[3].price}
            total={cart[3].total}
          />
        </div>
        <div className="lg:flex justify-between lg:pr-72 pr-0">
          <div>
            <div className="">
              <p className="font-popins mt-5 lg:text-xl text-lg mb-3">
                Promo Code?
              </p>
              <div className="flex gap-10 w-32 px-2  py-2 border border-borderColor rounded-md">
                <p className="font-popins ">Inem22</p>
                <p className="font-popins font-medium">x</p>
              </div>
            </div>

            <div className="lg:flex gap-2 text-xl border-customOrange text-customOrange py-3 px-4 border rounded-lg mt-10 lg:visible hidden">
              <GoArrowLeft className="mt-1" />
              <Link to="/" className="">
                Back to Shop
              </Link>
            </div>
          </div>
          <div>
            <p className="font-popins mt-5 lg:text-xl text-lg">
              Sub-Total <span className="text-borderColor">(Tax Incl.)</span>
            </p>
            <p className="font-popins mt-3 lg:text-xl text-lg">
              Promo <span className="text-borderColor">(15%)</span>
            </p>
            <hr className="border-t-2 border-dotted border-gray-700 mt-2" />

            <p className="text-customBlack font-popins mt-3 lg:text-xl text-lg font-semibold">
              TOTAL
            </p>
            <div className="lg:flex gap-2 font-popins text-white lg:rounded-lg lg:py-3 lg:px-4 lg:text-xl bg-customOrange mt-4 w-48 py-2 pl-11 rounded-md m-auto mb-2">
              <Link to="/check-out">Check-Out</Link>
              <GoArrowRight className="mt-1 g:visible hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-arrivalHeight h-12 bg-customOrange mb-16 w-full mt-20">
        <h2 className="relative lg:top-10 left-12 top-3 font-popins lg:text-arrival text-xl text-white">
          You may also like
        </h2>
      </div>
      <div className=" grid lg:grid-cols-5 lg:gap-6 px-5">
        <Like
          itemImage={like[0].itemImage}
          itemName={like[0].itemName}
          price={like[0].price}
          rating={like[0].rating}
          rating2={like[0].rating2}
          rating3={like[0].rating3}
          rating4={like[0].rating4}
          rating5={like[0].rating5}
        />
        <Like
          itemImage={like[1].itemImage}
          itemName={like[1].itemName}
          price={like[1].price}
          rating={like[1].rating}
          rating2={like[1].rating2}
          rating3={like[1].rating3}
          rating4={like[1].rating4}
          rating5={like[1].rating5}
        />
        <Like
          itemImage={like[2].itemImage}
          itemName={like[2].itemName}
          price={like[2].price}
          rating={like[2].rating}
          rating2={like[2].rating2}
          rating3={like[2].rating3}
          rating4={like[2].rating4}
          rating5={like[2].rating5}
        />
        <Like
          itemImage={like[3].itemImage}
          itemName={like[3].itemName}
          price={like[3].price}
          rating={like[3].rating}
          rating2={like[3].rating2}
          rating3={like[3].rating3}
          rating4={like[3].rating4}
          rating5={like[3].rating5}
        />
        <Like
          itemImage={like[4].itemImage}
          itemName={like[4].itemName}
          price={like[4].price}
          rating={like[4].rating}
          rating2={like[4].rating2}
          rating3={like[4].rating3}
          rating4={like[4].rating4}
          rating5={like[4].rating5}
        />
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

export default ShoppingCart;
