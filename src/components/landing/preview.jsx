import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const Preview = () => {
  const [hiddenItems, setHiddenItems] = useState({
    header: false,
    footer: false,
    both: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setHiddenItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const isHeaderHidden = hiddenItems.header || hiddenItems.both;
  const isFooterHidden = hiddenItems.footer || hiddenItems.both;

  return (
    <div className="container mx-auto my-[20px]">
      <div className="bg-white w-full">
        {!isHeaderHidden && (
          <div className="w-full h-auto">
            <img
              src="/header.png"
              alt="invoice"
              className="w-full h-auto object-fill"
            />
          </div>
        )}
        <div className="mt-[50px] container mx-auto md:max-w-5xl">
          <div className="w-full pb-6">
            <h1 className="text-[24px] font-bold text-center">চালান</h1>
            <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-3 sm:gap-y-0 gap-y-6 lg:justify-items-center sm:justify-items-start justify-items-center">
              <div className="col-span-1">
                <div className="text-[18px]"> চালান নম্বর : 10068</div>
                <div className="text-[18px] mt-2">তারিখ : ০৪/০৫/২৪</div>
              </div>
              <div className="col-span-1">
                <div className="text-[18px] ">নাম : মাজেদুল ইসলাম</div>
                <div className="text-[18px] mt-2">ঠিকানা : মহিপাল , ফেনী</div>
                <div className="text-[18px] mt-2">Mobile : 01814874161</div>
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

          {/* Table with Scrollbar */}
          <div className="sm:overflow-x-auto overflow-x-scroll">
            <table className="w-full table-auto border-collapse border border-slate-300 min-w-max">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500 h-10">
                <tr>
                  <th className="border border-slate-300 font-bold px-4 py-2">ক্রম</th>
                  <th className="border border-slate-300 font-bold px-4 py-2">পণ্যের নাম</th>
                  <th className="border border-slate-300 font-bold px-4 py-2">পরিমান</th>
                  <th className="border border-slate-300 font-bold px-4 py-2">দর</th>
                  <th className="border border-slate-300 font-bold px-4 py-2">মোট</th>
                </tr>
              </thead>
              <tbody className="text-center divide-y divide-gray-100">
                <tr>
                  <td className="border border-slate-300 px-4 py-2 whitespace-nowrap">1</td>
                  <td className="border border-slate-300 px-4 py-2 whitespace-nowrap">সুন্দরবনের মধু</td>
                  <td className="border border-slate-300 px-4 py-2 whitespace-nowrap">২ কেজি</td>
                  <td className="border border-slate-300 px-4 py-2 whitespace-nowrap">০.০০</td>
                  <td className="border border-slate-300 px-4 py-2 whitespace-nowrap">০</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 justify-between mt-5">
            <div className="flex flex-col lg:w-[50%] w-full">
              <div className="flex justify-between items-center">
                <span className="w-[80px] py-2">পরিবহন :</span>
                <div className="p-2 border border-slate-300 flex-1 font-bold">জননী</div>
              </div>
              <div className="flex justify-between">
                <span className="w-[80px] py-2">কন্ডিশন :</span>
                <div className="p-2 border border-y-0 border-slate-300 flex-1 font-bold">নরমাল</div>
              </div>
              <div className="flex justify-between">
                <span className="w-[80px] py-2">মন্তব্য :</span>
                <div className="p-2 border border-slate-300 flex-1 font-bold">এক কাটুন মধু</div>
              </div>
            </div>
            <div className="lg:w-[170px] w-full">
              <div className="flex justify-between items-center">
                <span className="w-[120px]">মোট পণ্য : </span>
                <span><TbCurrencyTaka /></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="w-[120px]">ছাড় : </span>
                <span><TbCurrencyTaka /></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="w-[120px]">মাল ফেরত : </span>
                <span><TbCurrencyTaka /></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="w-[120px]">পরিবহন : </span>
                <span><TbCurrencyTaka /></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="w-[120px]">সর্বমোট : </span>
                <span><TbCurrencyTaka /></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="w-[120px]">পেইড : </span>
                <span><TbCurrencyTaka /></span>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-4 mt-28">
            <div className="pt-2 border-t text-center md:w-[40%] w-[50%]">ক্রেতার স্বাক্ষর</div>
            <div className="pt-2 border-t text-center md:w-[40%] w-[50%]">বিক্রেতার স্বাক্ষর</div>
          </div>
          <div className="text-center mt-10">
            <span>05/04/2024 06:02:50 PM</span>
          </div>
        </div>
        {!isFooterHidden && (
          <div className="w-full mt-[120px]">
            <img
              src="/footer.png"
              alt="invoice"
              className="w-full h-auto object-fill"
            />
          </div>
        )}
      </div>
      <div className="mt-5">
        <h3 className="text-base font-semibold">Hidden Items</h3>
        <input type="checkbox" onChange={handleCheckboxChange} id="header" name="header" />
        <label htmlFor="header"> Header</label><br/>
        <input type="checkbox" onChange={handleCheckboxChange} id="footer" name="footer" />
        <label htmlFor="footer"> Footer</label><br/>
        <input type="checkbox" onChange={handleCheckboxChange} id="both" name="both" />
        <label htmlFor="both"> Both</label>
      </div>
    </div>
  );
};

export default Preview;
