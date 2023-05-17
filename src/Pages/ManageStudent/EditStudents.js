import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const EditStudents = () => {
const Toasty=()=>{
  toast('Can not update');
}

  return (
    <div>
      <div className="sm:w-full lg:w-[80vw] ">
      <p className="text-start font-bold text-lg mb-3">Update Student</p>

        <div className="w-full ">
          <div className="mx-start bg-white ">
            <form>
              {/* 1st row */}

              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`F Name: `}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    name="middle_name"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`M Name: `}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`L Name: `}
                    required
                  ></input>
                </div>

                <div>
                  <input
                    name="class"
                    required
                    class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Class: `}
                  ></input>
                </div>
                <div>
                  <input
                    name="division"
                    required
                    class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Div: `}
                  ></input>
                </div>
                <div>
                  <input
                    type="number"
                    name="roll"
                    className="bg-gray-50 numberType border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Roll: `}
                    min="0"
                    max="99"
                    maxLength="2"
                    required
                  ></input>
                </div>
              </div>

              {/* 2nd row */}

              <div className="grid gap-3 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <textarea
                    type="text"
                    name="address1"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                    placeholder={`Address-1: `}
                    required
                  ></textarea>
                </div>
                <div>
                  <textarea
                    type="text"
                    name="address2"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                    placeholder={`Address-2: `}
                    required
                  ></textarea>
                </div>
              </div>

              {/* 3rd row */}

              <div className="grid gap-3 my-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                <div>
                  <input
                    type="text"
                    name="landmark"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Landmark: `}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`City: `}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="number"
                    name="pincode"
                    className="bg-gray-50 numberType border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Pincode: `}
                    maxLength="6"
                    required
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-3">
            <button
              type="submit"
              onClick={Toasty}
              style={{ backgroundColor: "#F33823" }}
              className=" text-white text-center hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-64 sm:w-48 px-5 py-2.5  mt-5"
            >
             Update
            </button>
            <Link to='/manageStudent'><button
              type="submit"
              style={{ backgroundColor: "#F33823" }}
              className=" text-white text-center hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-64 sm:w-48 px-5 py-2.5  mt-5"
            >
             Go Back
            </button></Link>
          </div>
      </div>
    </div>
  );
};

export default EditStudents;
