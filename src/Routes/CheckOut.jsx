import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Summary from "../components/Summary";
import check from "../check";
import Footer from "../components/Footer";

const CheckOut = () => {
  return (
    <div>
      <div className="pl-14 pt-8 font-popins">
        <div className="flex gap-16">
          <div className="lg:flex lg:flex-col hidden">
            <h2 className="text-arrival mb-7">Order Summary</h2>
            <div className="flex flex-col gap-5">
              <Summary
                image={check[0].image}
                name={check[0].imageName}
                quantity={check[0].quantity}
                total={check[0].total}
              />
              <Summary
                image={check[1].image}
                name={check[1].imageName}
                quantity={check[1].quantity}
                total={check[1].total}
              />
              <Summary
                image={check[2].image}
                name={check[2].imageName}
                quantity={check[2].quantity}
                total={check[2].total}
              />
              <Summary
                image={check[3].image}
                name={check[3].imageName}
                quantity={check[3].quantity}
                total={check[3].total}
              />
            </div>
            <div className="flex gap-2 text-xl border-customOrange text-customOrange py-3 px-4 border rounded-lg mt-10 w-48">
              <GoArrowLeft className="mt-1" />
              <Link to="/" className="">
                Back to Shop
              </Link>
            </div>
          </div>
          <div className="h-90 border-l-2 border-gray-500 lg:flex hidden"></div>

          <div className="font-popins">
            <h2 className="lg:text-arrival mb-7">Payment Information</h2>
            <h4 className="font-popins font-semibold lg:text-2xl mb-2">
              Mode of Payment
            </h4>
            <div className="mb-2 flex gap-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="bg-generalColor checked:bg-generalColor"
              />
              <label htmlFor="" className="lg:text-xl">
                Debit/Credit Card
              </label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="lg:text-xl">
                Pay on Delivery
              </label>
            </div>
            <h4 className="font-popins font-semibold lg:text-2xl mt-10">
              Enter Card Details
            </h4>
            <div className="flex flex-col lg:text-xl mt-3">
              <label htmlFor="">Card Number</label>
              <input
                type="text"
                name=""
                id=""
                className="border border-borderColor w-input bg-generalColor rounded-lg px-2"
              />
            </div>
            <div className="flex flex-col lg:text-xl mt-3">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="border border-borderColor w-input bg-generalColor rounded-lg px-2"
              />
            </div>
            <div className="flex gap-10 mt-3 mb-5">
              <div className="flex flex-col lg:text-xl">
                <label htmlFor="">Expiry Date</label>
                <input
                  type="month"
                  name=""
                  id=""
                  className="border border-borderColor w-input2 bg-generalColor rounded-lg px-2"
                />
              </div>
              <div className="flex flex-col lg:text-xl">
                <label htmlFor="">CVV</label>
                <input
                  type="password"
                  name=""
                  id=""
                  className="border border-borderColor w-input2 bg-generalColor rounded-lg px-2"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Save card for future use</label>
            </div>
            <button className="rounded-lg py-3 px-6 mt-20 bg-customOrange text-white font-popins text-xl">
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
