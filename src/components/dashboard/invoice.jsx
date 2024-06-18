import React from "react";

const Invoice = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-full h-auto">
        <img
          src="/header.png"
          alt="invoice"
          className="w-full h-auto object-fill"
        />
      </div>
      <div className="mt-[50px] container ">
        <div className="w-full mx-auto md:max-w-5xl pb-6 ">
          <h1 className="text-[24px] font-bold text-center">চালান</h1>
          <div className=" mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-3  sm:gap-y-0 gap-y-6 lg:justify-items-center sm:justify-items-start justify-items-center ">
            <div className="col-span-1">
              <div className=" text-[18px]"> চালান নম্বর : 10068</div>
              <div className=" text-[18px] mt-2">তারিখ : ০৪/০৫/২৪</div>
            </div>
            <div className="col-span-1">
              <div className=" text-[18px] ">নাম : মাজেদুল ইসলাম</div>
              <div className=" text-[18px] mt-2">ঠিকানা : মহিপাল , ফেনী</div>
              <div className=" text-[18px] mt-2">Mobile : 01814874161</div>
            </div>
            <div className="col-span-1">
              <img
                src="/barcode.png"
                alt="barcode"
                className="w-[100px] h-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto md:max-w-5xl mx-auto">
          <table className="w-full  table-auto border-collapse border border-slate-400  ">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500 h-10 ">
              <th className="border border-slate-300 font-bold">ক্রম</th>
              <th className="border border-slate-300 font-bold">পণ্যের নাম</th>
              <th className="border border-slate-300 font-bold">পণ্যের ধরণ</th>
              <th className="border border-slate-300 font-bold">পরিমান</th>
            </thead>
            <tbody className="text-center divide-y divide-gray-100 ">
              <td className="border border-slate-300">1</td>
              <td className="border border-slate-300">মধু</td>
              <td className="border border-slate-300">সুন্দরবনের মধু</td>
              <td className="flex justify-between px-4 border border-slate-300">
                <span>কেজি</span>
                <span>২.০০</span>
              </td>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full mt-[120px] ">
        <img
          src="/footer.png"
          alt="invoice"
          className="w-full h-auto object-fill"
        />
      </div>
    </div>
  );
};

export default Invoice;
