import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const CommonTable = ({ data, action, index, Component, header_title }) => {
  const searchItemRef = useRef("");

  const handleSearch = () => {
    console.log(searchItemRef.current.value.toLowerCase().trim());
  };

  return (
    <div className="w-full">
      <div className="relative my-4">
        <input
          className="w-full outline-1 border outline-[#B3B3B380] border-[#B3B3B380] border-opacity-50 rounded focus:border-primary focus:outline-primary h-fit pl-7 pr-4 py-2 text-base font-bold text-black"
          ref={searchItemRef}
          onChange={(e) => {
            console.log("search", e.target.value);
          }}
          placeholder={"অনুসন্ধান করুন"}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <FiSearch
          className="absolute top-3.5 right-2.5 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <div className="bg-white w-full">
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start mb-4 container pt-4">
          <h1 className="text-xl font-bold mb-4 text-honey">{header_title}</h1>
          <Component />
        </div>
        <div className="md:overflow-x-auto overflow-x-scroll ">
          <table className="w-full table-auto border-collapse border border-slate-300 min-w-max">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-honey h-16">
              <tr>
                {index && <th className=" px-4 py-2 whitespace-nowrap">#</th>}
                <th className=" font-bold px-4 py-2">নাম</th>
                <th className=" font-bold px-4 py-2">ফোন নাম্বার</th>
                <th className=" font-bold px-4 py-2">ঠিকানা</th>
                {action && <th className=" font-bold px-4 py-2">বিবরণ </th>}
              </tr>
            </thead>
            <tbody className="text-center divide-y divide-gray-100">
              {data.map((d, i) => {
                return (
                  <tr key={i} className="h-16 hover:bg-honey hover:text-white">
                    {index && (
                      <td className=" px-4 py-2 whitespace-nowrap">{i + 1}</td>
                    )}
                    <td className=" px-4 py-2 whitespace-nowrap">{d?.name}</td>
                    <td className=" px-4 py-2 whitespace-nowrap">
                      {d?.phone_number}
                    </td>
                    <td className=" px-4 py-2 whitespace-nowrap">
                      {d?.address}
                    </td>
                    {action && (
                      <td className=" px-4 py-2 text-blue-500 underline whitespace-nowrap ">
                        <Link
                          to={`/account/suppliers/${i}`}
                          className="cursor-pointer"
                        >
                          বিস্তারিত
                        </Link>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommonTable;
