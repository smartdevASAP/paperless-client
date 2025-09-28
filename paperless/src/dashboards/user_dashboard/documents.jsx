import React from "react";
import { assets } from "../../assets/assets_config";
import { documents } from "../../assets/assets_config";
import AllDocuments from "../../globals/allDocuments";
function Documents() {
  return (
    <>
      <h1 className="md:text-2xl text-xl font-bold text-gray-600">Documents</h1>
      {/* HOME SECTION */}
      <section className="mt-8 mb-8 p-2 border-1 border-gray-100 rounded-sm">
        <div className="w-full p-2 flex gap-4 rounded-sm">
          <img src={assets.addFile} alt="" />
          <div className="p-2">
            <p className="text-gray-400 text-xs md:text-sm  mb-5 w-full ">
              Upload and store your papers in paperless with extreme ease
            </p>
            <button className="py-2 px-3 text-xs md:text-sm rounded-xs  md:rounded-sm bg-blue-500 text-white text-center">
              Add PDF file
            </button>
          </div>
        </div>
      </section>
      <AllDocuments />
    </>
  );
}

export default Documents;
