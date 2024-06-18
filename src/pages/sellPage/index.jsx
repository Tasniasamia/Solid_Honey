import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesList } from "../../redux/actions/categoriesSlice";
import { POST_SELL_PRODUCTS } from "../../../axios";
import { Toaster, toast } from "react-hot-toast";
import { instance } from "../../../axios";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { products } from "../productdata";

const SellPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state?.category);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [sellProduct, setSellProduct] = useState([]);
  const sellFormRef = useRef(null);
  const [totalTaka, setTotalTaka] = useState(0);
  const [motValueChange, setMotValueChange] = useState();

  const [userData, setUserData] = useState({});

  const [showAddress, setShowAddress] = useState(false);

  const [dhor, setDhor] = useState(0);
  const [poriman, setPoriman] = useState(0);

  const totlaDhor = dhor * poriman;
  const [tab, setTab] = useState("calculation");
  const searchItemRef = useRef("");

  const handleSearch = () => {
    console.log(searchItemRef.current.value.toLowerCase().trim());
  };

  useEffect(() => {
    dispatch(getCategoriesList());
  }, [dispatch]);

  const getSubCategory = (id) => {
    const subCategory = categories?.filter((c) => c?.id == id)[0];

    setSubCategoryList([...subCategory?.subcategories]);
  };

  const sellSubmitHandler = (e) => {
    e.preventDefault();
    const form = new FormData(sellFormRef.current);
    const formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    formData["dhor"] = motValueChange;

    setSellProduct((prev) => {
      return [...prev, formData];
    });
  };

  const submitHandler = () => {
    if (sellProduct?.length < 0) {
      return toast.error("Please add product");
    }

    POST_SELL_PRODUCTS(sellProduct, (err, data) => {
      if (err) return toast.error("Something wrong");

      console.log(data);
    });
  };

  const calCulateTotalPoriman = (e) => {
    const poriman = Number(e.target.value);

    setPoriman(poriman);
  };

  const calCulateTotalDhor = (e) => {
    const dhor = Number(e.target.value);

    setDhor(dhor);
  };

  const searchHandlerWithNumber = async (e) => {
    const value = e?.target?.value;
    console.log(value);

    await instance
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/saler/product/salce/user/search/`,
        { phone_number: value }
      )
      .then(({ data }) => {
        setUserData(data);
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response?.data);
      });
  };

  const handlePrint = () => {
    console.log("print");
  };
  const handleProductReturn = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Toaster />
      <div className="bg-gray-100 h-screen py-8">
        <div className="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap">
          <div className="flex items-center">
            <h2 className="font-bold text-2xl text-honey pl-1">বেল/মেমো</h2>
          </div>
          <button className="border px-2 py-1 rounded-md text-red-900 font-semibold">
            পূর্বের বিল অনুসন্ধান
          </button>

          <div className="relative flex items-center hidden md:inline-flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-200 rounded-md py-1 px-2"
            />
            <svg
              className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <br />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <form onSubmit={sellSubmitHandler} ref={sellFormRef}>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">ক্রেতার নাম</th>
                        <input
                          defaultValue={userData?.user?.name}
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="text"
                          name="name"
                          id=""
                          placeholder="Enter a text "
                        />
                      </tr>
                      <tr>
                        <th className="text-left font-semibold">ধরন </th>
                        <select
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          name="type"
                          id=""
                        >
                          <option value="1">Cash</option>
                          <option value="0">Due</option>
                        </select>
                        <th className="text-left font-semibold">
                          মোবাইল নাম্বার #
                        </th>
                        <input
                          onKeyUp={searchHandlerWithNumber}
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="number"
                          name="phone_number"
                          id=""
                          placeholder="Enter Phone Number "
                        />
                      </tr>
                      <tr>
                        <th className="text-left font-semibold">কন্ডিশন :</th>
                        <input
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="text"
                          name="condition"
                          id=""
                          placeholder="Enter a text "
                        />
                        <th className="text-left font-semibold">
                          ঠিকানা{" "}
                          {userData?.user?.address && (
                            <input
                              onChange={() => setShowAddress((prev) => !prev)}
                              checked={showAddress}
                              type="checkbox"
                            />
                          )}{" "}
                        </th>
                        <input
                          defaultValue={
                            userData && showAddress
                              ? userData?.user?.address
                              : ""
                          }
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="text"
                          name="address"
                          id=""
                          placeholder="Enter a text "
                        />
                      </tr>
                      <tr>
                        <th className="text-left font-semibold">পরিবহন :</th>
                        <input
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="text"
                          name="transport"
                          id=""
                          placeholder="Enter a text "
                        />
                        <th className="text-left font-semibold">মন্তব্য :</th>
                        <input
                          defaultValue={userData?.user?.remarks}
                          className="border-black p-1 bg-gray-200 rounded-lg mt-1"
                          type="text"
                          name="comment"
                          id=""
                          placeholder="Enter a text "
                        />
                      </tr>
                    </thead>
                  </table>

                  {userData?.last_purchase && (
                    <div className="my-4 bg-white p-5">
                      <h1 className="font-bold">Last Purchase Details</h1>

                      <div className="mt-4">
                        <p>
                          Unit Price : {userData?.last_purchase?.unit_price}
                        </p>
                        <p>Total Price : {userData?.last_purchase?.total}</p>
                      </div>
                    </div>
                  )}
                  {/* <div className="container mx-auto mt-10">
                            <div className="wrapper bg-white rounded shadow w-full ">
                                <table className="w-full">
                                    <thead>
                                    <tr>
                                        <th className='text-start'>
                                        <a className='pl-4' href="#">Remove</a>
                                        </th>
                                        <th className="p-2 text-left border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-base">
                                        
                                        </th>
                                        <th className='w-10 text-right pr-4 pl-2 text-blue-900 cursor-pointer'>Add</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div> */}
                  <table className="mt-4 w-full border-collapse border border-blue-500">
                    <tbody>
                      <tr className="bg-white border-b border-blue-500">
                        <td className="py-2 px-4">
                          <select
                            onChange={(e) => getSubCategory(e.target.value)}
                            className="py-2 px-4 w-full"
                            name=""
                            id=""
                          >
                            <option value="">Select ..</option>
                            {categories?.map((c, i) => (
                              <option key={i} value={c?.id}>
                                {c?.category}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td colSpan={2} className="py-2 px-4">
                          <select
                            className="py-2 px-4 w-full"
                            name="dhoron"
                            id=""
                          >
                            <option value="">Select ..</option>
                            {subCategoryList?.map((sc, i) => (
                              <option value={sc?.id}>
                                {sc?.product_sub_category}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr className="bg-white border-b border-blue-500">
                        <td className="py-2 px-4 bg-gray-300">
                          পরিমান :{" "}
                          <input
                            onKeyUp={calCulateTotalPoriman}
                            name="poriman"
                            className="w-full text-center bg-white pr-20"
                          />
                        </td>
                        <td className="py-2 px-4 bg-gray-300">
                          দর :{" "}
                          <input
                            onKeyUp={calCulateTotalDhor}
                            name="dhor"
                            className="w-full text-center bg-white pr-20"
                          />
                        </td>
                        <td className="py-2 px-4 bg-gray-300">
                          মোট :{" "}
                          <input
                            onChange={() => setMotValueChange(e.target.value)}
                            value={totlaDhor}
                            name="mot"
                            className="w-full text-center bg-white pr-20"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-5">
                    <Button type="submit">Add</Button>
                  </div>
                </form>

                <div className="container mx-auto mt-4">
                  <div className="wrapper bg-white rounded shadow w-full ">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            Number
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            Condition
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            ধরন
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            নাম
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            পরিমান
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            ধর
                          </th>
                          <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                            মোট
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sellProduct?.map((p, i) => (
                          <tr key={i}>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.phone_number}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.condition}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.type}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.name}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.poriman}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.dhor}
                            </td>
                            <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                              {p?.mot}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {sellProduct?.length > 0 && (
                    <Button onClick={submitHandler} className="mt-5">
                      Save
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="md:w-1/4">
              <h2 className="text-lg font-semibold mb-4">
                <span
                  onClick={() => setTab("calculation")}
                  className="cursor-pointer"
                >
                  হিসাব/নিকাশ{" "}
                </span>
                <span
                  className="bg-gray-400 p-2 rounded-xl text-white cursor-pointer"
                  onClick={() => setTab("others")}
                >
                  অন্যান্য
                </span>
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                {tab === "calculation" ? (
                  <div>
                    <div className="flex justify-between bg-red-300 p-2">
                      <span className="font-semibold text-red-900">
                        মোট পণ্য
                      </span>
                      <span className="font-semibold text-red-900">
                        মাল ফেরত
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2 bg-yellow-500">
                      <span className="ml-2">0</span>
                      <span className="mr-2">0</span>
                    </div>
                    <hr />
                    <div class="flex justify-between bg-red-300 p-2">
                      <span className="font-semibold text-red-900">ছাড়</span>
                      <span className="font-semibold text-red-900">পরিবহন</span>
                    </div>
                    <hr />
                    <div className="flex justify-between bg-yellow-500">
                      <span className="ml-2">0</span>
                      <span className="mr-2">0</span>
                    </div>
                    <hr />
                    <p className="text-center font-semibold bg-red-300 p-2 mt-2">
                      সর্বমোট
                    </p>
                    <hr />
                    <p className="text-center bg-yellow-500 mb-2">0</p>
                    <hr />
                    <p className="text-center font-semibold bg-red-300 p-2">
                      নগদ গ্রহণ
                    </p>
                    <hr />
                    <p className="text-center bg-yellow-500 mb-2">0</p>
                    <hr />
                    <div className="flex justify-between bg-red-300 p-2">
                      <span className="font-semibold">নতুন বকেয়া</span>
                      <span className="font-semibold">ব্যালেন্স</span>
                    </div>
                    <hr />
                    <div className="flex justify-between bg-yellow-500">
                      <span className="ml-2">0</span>
                      <span className="mr-2">0</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2 mt-2">
                      <span className="font-semibold bg-gray-300 p-2 rounded-xl ml-8">
                        <Link to="/preview">প্রিভিউ</Link>
                      </span>
                      <span className="font-semibold bg-gray-300 p-2 rounded-xl mr-8">
                        <Link to="/invoice">চালান</Link>
                      </span>
                    </div>

                    <hr className="my-2" />
                    <button
                      className="w-full text-center font-semibold bg-blue-100 text-purple-600 py-1 px-2 rounded-lg cursor-pointer"
                      onClick={handlePrint}
                    >
                      প্রিন্ট
                    </button>

                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    >
                      Send SMS
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <h1 className="text-gray-500 text-lg">Search by Id</h1>
                    <div className="relative mt-2">
                      <input
                        className="w-full outline-1 border outline-[#B3B3B380] border-[#B3B3B380] border-opacity-50 rounded focus:border-primary focus:outline-primary h-fit pl-7 pr-4 py-2 text-base "
                        ref={searchItemRef}
                        onChange={(e) => {
                          console.log("search", e.target.value);
                        }}
                        placeholder={"Search here..."}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSearch();
                        }}
                      />
                      <FiSearch
                        className="absolute top-3.5 right-2.5 text-gray-500 cursor-pointer"
                        onClick={handleSearch}
                      />
                    </div>
                    {products.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className="text-gray-500 bg-white p-2 border my-2"
                        >
                          <h2>
                            ক্রেতার নাম: <span>{i?.name}</span>
                          </h2>
                          <h2>
                            মোট খরচ : <span>{i?.price}</span>
                          </h2>
                          <h2
                            className="text-red-500 text-end cursor-pointer underline"
                            onClick={() => handleProductReturn(i?.id)}
                          >
                            মাল ফেরত
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                )}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
