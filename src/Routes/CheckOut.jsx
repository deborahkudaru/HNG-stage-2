import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Summary from "../components/Summary";
import check from "../check";
import Footer from "../components/Footer";

const CheckOut = () => {
  return (
    <div>
      <div className="lg:pl-14 px-4 pt-8 font-popins">
        <div className="flex gap-16">
          <div className="lg:flex lg:flex-col md:flex md:flex-col hidden">
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
          <div className="flex flex-col">
            <div className="">
              <GoArrowLeft className="flex lg:hidden relative top-7 text-2xl" />
              <h2 className="text-center lg:text-arrival lg:text-start text-2xl mb-5 lg:hidden">
                Checkout
              </h2>
            </div>
            <div className="flex flex-col gap-2 lg:hidden md:hidden">
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
            <div>
              <div className="bg-check mt-10 lg:hidden flex flex-col"  >
                <h3 className="font-popins font-semibold  text-customOrange">
                  Order Summary
                </h3>
                <table className="">
                  <tr>
                    <td className="pr-10"> 
                      Sub-Total <span className="text-borderColor">(Tax incl)</span>
                    </td>
                    <td>N33,000</td>
                  </tr>
                  <tr>
                    <td>
                      Promo <span className="text-borderColor">(15%)</span>
                    </td>
                    <td>N4,950</td>
                  </tr>
                  <hr className="border-t-2 border-dotted border-gray-700 mt-2 w-full" />
                  <tr>
                    <td>Total</td>
                    <td>N28,050</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="font-popins">
              <div className="lg:flex lg:flex-col hidden">
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
              </div>

              <h4 className="font-popins font-semibold lg:text-2xl mt-10 lg:text-black text-customOrange">
                Enter Card Details
              </h4>
              <div className="flex flex-col lg:text-xl mt-3">
                <label htmlFor="">Card Number</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-borderColor lg:w-input bg-generalColor rounded-lg px-2"
                />
              </div>
              <div className="flex flex-col lg:text-xl mt-3">
                <label htmlFor="">Name on card</label>
                <input
                  type="text"
                  className="border border-borderColor lg:w-input bg-generalColor rounded-lg px-2"
                />
              </div>
              <div className="flex lg:gap-10 gap-7 mt-3 mb-5">
                <div className="flex flex-col lg:text-xl">
                  <label htmlFor="">Expiry Date</label>
                  <input
                    type="month"
                    name=""
                    id=""
                    className="border border-borderColor lg:w-input2 w-full bg-generalColor rounded-lg px-2"
                  />
                </div>
                <div className="flex flex-col lg:text-xl">
                  <label htmlFor="">CVV</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="border border-borderColor lg:w-input2 w-full bg-generalColor rounded-lg px-2"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Save card for future use</label>
              </div>
              <button className="rounded-lg py-3 px-6 lg:mt-28 mt-10 lg:ml-0 ml-32 bg-customOrange text-white font-popins text-xl">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
