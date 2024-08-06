import React from "react";

const Sectioncard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://krosskulture.com/cdn/shop/files/DSC06265.jpg?v=1715688957&width=990"
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          Amal MOM KLX- 00518 (3PC)
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          A gracefully elegant composition is portrayed on this classy top
          rendered in classy vanilla ice shade cotton net self embroidered base.
          It
        </p>
      </div>
    </div>
  );
};

export default Sectioncard;
