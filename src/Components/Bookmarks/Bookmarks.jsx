/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, creditHour, creditRemaining }) => {
  return (
    <div className="md:w-[330px] ml-4 bg-slate-100 mt-8 p-4 ">
      <div className="border-b-2 mt-2 text-blue-500">
        <h2 className="text-xl font-semibold ">
          Credit Hour Remaining {creditRemaining}hr
        </h2>
      </div>
      <h1 className="text-2xl p-4 font-semibold">Course Name</h1>
      {bookmarks.map((bookmark,index) => (
        <Bookmark index={index+1} bookmark={bookmark}></Bookmark>
      ))}
      <div className="border-t-2 mt-2">
        <h2 className="text-xl font-semibold mt-2">
          Total Credit Hour : {creditHour}
        </h2>
      </div>
    </div>
  );
};

export default Bookmarks;
