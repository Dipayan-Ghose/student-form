import React from "react";
import dateFormat from "dateformat";
import "./AddStudent.css";
import { Toaster, toast } from "react-hot-toast";

const AddStudent = () => {
  const now = new Date();
  const date = dateFormat(now, "dS mmm yyyy, h:MM TT");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.first_name.value;
    const mName = form.middle_name.value;
    const lName = form.last_name.value;
    const sClass = form.class.value;
    const division = form.division.value;
    const roll = form.roll.value;
    const address1 = form.address1.value;
    const address2 = form.address2.value;
    const landmark = form.landmark.value;
    const city = form.city.value;
    const pincode = form.pincode.value;

    const submitInfo = {
      fName,
      mName,
      lName,
      sClass,
      division,
      roll,
      address1,
      address2,
      landmark,
      city,
      pincode,
    };

    fetch("https://student-form-server-chi.vercel.app/info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submitInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Student Info Added");
          form.reset();
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <div className="sm:w-full lg:w-[80vw] ">
      <div className="flex justify-between  mb-4">
        <span className="font-bold text-lg">Add Student</span>
        <span className="text-gray-500">{date}</span>
      </div>
      <div className="mx-start bg-white ">
        <form onSubmit={handleSubmit}>
          <div className="">
            {/* 1st row */}

            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <input
                  type="text"
                  name="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  name="middle_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Middle Name"
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  required
                ></input>
              </div>

              <div>
                <select
                  name="class"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div>
                <select
                  name="division"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select Division</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  name="roll"
                  className="bg-gray-50 numberType border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Roll Number in Digits"
                  min="0"
                  max="99"
                  maxlength="2"
                  required
                ></input>
              </div>
            </div>
          </div>

          {/* 2nd row */}

          <div className="grid gap-3 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <textarea
                type="text"
                name="address1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                placeholder="Address line 1 "
                required
              ></textarea>
            </div>
            <div>
              <textarea
                type="text"
                name="address2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                placeholder="Address line 2"
              ></textarea>
            </div>
          </div>

          {/* 3rd row */}

          <div className="grid gap-3 my-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            <div>
              <input
                type="text"
                name="landmark"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Landmark"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
                required
              ></input>
            </div>
            <div>
              <input
                type="number"
                name="pincode"
                className="bg-gray-50 numberType border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pincode"
                maxLength="6"
                required
              ></input>
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              style={{ backgroundColor: "#F33823" }}
              className=" text-white text-center hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-64 sm:w-48 px-5 py-2.5  mt-5"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddStudent;
