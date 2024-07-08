import React from "react";
import Calc from "../components/Calc";
import cart from "../Cart";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const ShoppingCart = () => {
  return (
    <div>
      <div className="pl-14 pt-8">
        <div className=" font-popins pb-7">
          <h2 className="text-arrival">Shopping Cart</h2>
          <div className="flex mt-6">
            <p className="text-2xl">Product Detail</p>
            <p className="text-2xl ml-52">Quantity</p>
            <p className="text-2xl ml-36">Price</p>
            <p className="text-2xl ml-36">Total</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
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
        <div className="flex justify-between pr-72">
          <div>
            <p className="font-popins mt-5 text-xl mb-3">Promo Code?</p>
            <div className="flex gap-10 w-32 px-2  py-2 border border-borderColor rounded-md">
              <p className="font-popins ">Inem22</p>
              <p className="font-popins font-medium">x</p>
            </div>
            <div className="flex gap-2 text-xl border-customOrange text-customOrange py-3 px-4 border rounded-lg mt-10">
              <GoArrowLeft className="mt-1" />
              <Link to="/" className="">
                Back to Shop
              </Link>
            </div>
          </div>
          <div>
            <p className="font-popins mt-5 text-xl">
              Sub-Total <span className="text-borderColor">(Tax Incl.)</span>
            </p>
            <p className="font-popins mt-3 text-xl">
              Promo <span className="text-borderColor">(15%)</span>
            </p>
            <p className="text-customBlack font-popins mt-3 text-xl font-semibold">
              TOTAL
            </p>
            <div className="flex gap-2 font-popins text-white rounded-lg py-3 px-4 text-xl bg-customOrange mt-4">
              <Link to="/check-out" className="">
                Check-Out
              </Link>
              <GoArrowRight className="mt-1 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
