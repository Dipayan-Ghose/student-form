import React, { useState } from "react";
import { MdOutlinePreview } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi/";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditStudents from "./EditStudents";
import { Link } from "react-router-dom";

const StudentTable = ({ info, handleDelete, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
    
  };
  const {
    _id,
    fName,
    mName,
    lName,
    sClass,
    roll,
    address1,
    address2,
    pincode,
    city,
    division,
    landmark,
  } = info;

  return (
    <>
      <tr className="hover:bg-red-50 ">
        <td className="px-6 py-4">
          {fName} {mName} {lName}
        </td>
        <td className="px-6 py-4">{sClass}</td>
        <td className="px-6 py-4">{roll}</td>
        <td className="px-6 py-4">
          <div className="flex justify-start gap-6 text-xl cursor-pointer text-red-400">
            {isOpen && (
              <div
              className="card shadow-xl  "
                style={{
                  position: "fixed",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transitionDuration: '200ms',
                  background: "rgb(249 250 251)",
                  padding: "50px",
                  borderRadius: "20px",
                  boxShadow: "10px",
                  width: '900px',
                }}
              >
                <p>
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
                              placeholder={`F Name: ${fName}`}
                              readOnly
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="middle_name"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`M Name: ${mName}`}
                              readOnly
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="last_name"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`L Name: ${lName}`}
                              readOnly
                            ></input>
                          </div>

                          <div>
                            <input
                              name="class"
                              readOnly
                              class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`Class: ${sClass}`}
                            ></input>
                          </div>
                          <div>
                            <input
                              name="division"
                              readOnly
                              class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`Div: ${division}`}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="roll"
                              className="bg-gray-50 numberType border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`Roll: ${roll}`}
                              min="0"
                              max="99"
                              maxLength="2"
                              readOnly
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
                              placeholder={`Address-1: ${address1}`}
                              readOnly
                            ></textarea>
                          </div>
                          <div>
                            <textarea
                              type="text"
                              name="address2"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                              placeholder={`Address-2: ${address2}`}
                              readOnly
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
                              placeholder={`Landmark: ${landmark}`}
                              readOnly
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="city"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`City: ${city}`}
                              readOnly
                            ></input>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="pincode"
                              className="bg-gray-50 numberType border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder={`Pincode: ${pincode}`}
                              maxLength="6"
                              readOnly
                            ></input>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </p>
                <label
                  onClick={toggleModal}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
            )}
            <MdOutlinePreview onClick={toggleModal}></MdOutlinePreview>
            <Link to='/editStudent'><BiEditAlt onClick={()=> <EditStudents info={info}/>}> </BiEditAlt></Link>
            <RiDeleteBin6Line onClick={()=>handleDelete(_id)}></RiDeleteBin6Line>
          </div>
        </td>
      </tr>
      
    </>
  );
};

export default StudentTable;
