import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { useLoaderData, useRevalidator } from "react-router-dom";
import StudentTable from "./StudentTable";
import { toast } from "react-hot-toast";

const ManageStudent = () => {
  const now = new Date();
  const date = dateFormat(now, "dS mmm yyyy, h:MM TT");
  const getInfo = useLoaderData();
  const revalidator = useRevalidator();
  const [items, setItems] = useState([]);

  const handleDelete = async (id) => {
    try {
      const msg = window.confirm("Are you sure you want to delete this item?");
      if (msg) {
        await fetch(`https://student-form-server-chi.vercel.app/info/${id}`, {
          method: "DELETE",
        });
        setItems(items.filter((item) => item.id !== id));
        toast.Error("Deleted Successfully");
        revalidator.revalidate();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const fName = form.first_name.value;
  //   const mName = form.middle_name.value;
  //   const lName = form.last_name.value;
  //   const sClass = form.class.value;
  //   const division = form.division.value;
  //   const roll = form.roll.value;
  //   const address1 = form.address1.value;
  //   const address2 = form.address2.value;
  //   const landmark = form.landmark.value;
  //   const city = form.city.value;
  //   const pincode = form.pincode.value;

  //   const submitInfo = {
  //     // fName,
  //     // mName,
  //     // lName,
  //     // sClass,
  //     // division,
  //     // roll,
  //     address1,
  //     address2,
  //     // landmark,
  //     city,
  //     // pincode,
  //   };
  // }

  const handleUpdate = async (id) => {
    try {
      await fetch(`https://student-form-server-chi.vercel.app/info/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      });

      setItems(items.filter((item) => item.id !== id));
      toast.error("Deleted Successfully");
      revalidator.revalidate();
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="sm:w-full lg:w-[80vw] ">
      <div className="flex justify-between mb-4">
        <span className="font-bold text-lg">Manage Student</span>
        <span className="text-gray-500">{date}</span>
      </div>
      <div className=" rounded-lg border border-gray-200 shadow-sm m-0 sm:overflow-scroll lg:overflow-hidden">
        <table className="w-full border-collapse bg-white text-left text-sm text-black">
          <thead className="" style={{ backgroundColor: "#F33823" }}>
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Class
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Roll No.
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                View/Edit/Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {getInfo.map((info) => (
              <StudentTable
                key={info._id}
                info={info}
                handleDelete={handleDelete}
              ></StudentTable>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ManageStudent;
