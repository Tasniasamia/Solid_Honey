import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../../redux/actions/categoriesSlice'
import { Link } from 'react-router-dom'


const BuyPage = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state?.category)
    const [subCategoryList, setSubCategoryList] = useState([])
    const [sellProduct, setSellProduct] = useState([])


    useEffect(() => {
        dispatch(getCategoriesList())
    }, [dispatch])

    const getSubCategory = (id) => {
        const subCategory = categories?.filter(c => c?.id == id)[0]

        setSubCategoryList([...subCategory?.subcategories])
    }

   const handlePrint=()=>{
    console.log("print");
   }




  return (
    <div>
      
      <div className="bg-gray-100 h-screen py-8">
        <div className="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap">
            <div className="flex items-center">
                <h2 className="font-bold text-2xl text-honey pl-1">বেল/মেমো</h2>
            </div>
            <button className="border px-2 py-1 rounded-md text-red-900 font-semibold">পূর্বের বিল অনুসন্ধান</button>

            <div className="relative flex items-center hidden md:inline-flex">
                <input type="text" placeholder="Search" className="border border-gray-200 rounded-md py-1 px-2"/>
                <svg className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>


        
        <div className="container mx-auto px-4">
            <br/>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-3/4">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <table className="w-full">
                            <thead>

                                <tr>
                                    
                                    <th className="text-left font-semibold">ক্রেতার নাম</th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="text" name="name" id="" placeholder="Enter a text "/>
                                </tr>
                                <tr>
                                    <th className="text-left font-semibold">ধরন </th>
                                    <select className='border-black p-1 bg-gray-200 rounded-lg mt-1' name="type" id="">
                                        <option value="">Cash</option>
          
                                    </select>
                                    <th className="text-left font-semibold">মোবাইল নাম্বার #</th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="number" name="phone_number" id="" placeholder="Enter Phone Number "/>
                                </tr>
                                <tr>
                                    <th className="text-left font-semibold">কন্ডিশন :</th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="text" name="condition" id="" placeholder="Enter a text "/>
                                    <th className="text-left font-semibold">ঠিকানা </th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="text" name="address" id="" placeholder="Enter a text "/>
                                </tr>
                                <tr>
                                    <th className="text-left font-semibold">পরিবহন :</th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="text" name="transport" id="" placeholder="Enter a text "/>
                                    <th className="text-left font-semibold">মন্তব্য :</th>
                                    <input className='border-black p-1 bg-gray-200 rounded-lg mt-1' type="text" name="comment" id="" placeholder="Enter a text "/>
                                </tr>
                            </thead>
                            
                        </table>
                        <div className="container mx-auto mt-10">
                            <div className="wrapper bg-white rounded shadow w-full ">
                                <table className="w-full">
                                    <thead>
                                    <tr>
                                        <th className='text-start'>
                                        <a className='pl-4' href="#">Remove</a>
                                        </th>
                                        <th className="p-2 text-left border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-base">
                                        
                                        </th>
                                        <th className='w-10 text-right pr-4 pl-2 text-blue-900 cursor-pointer'>Save/Add</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <table className="mt-4 w-full border-collapse border border-blue-500">
                        <tbody>
                            <tr className="bg-white border-b border-blue-500">
                                <td className="py-2 px-4">
                                    <select onChange={e => getSubCategory(e.target.value)} className="py-2 px-4 w-full" name="" id="">
                                        <option value="">Select ..</option>
                                        {categories?.map((c, i) => (
                                            <option key={i} value={c?.id}>{c?.category}</option>
                                        ))}
                                    </select>
                                </td>
                                <td colSpan={2} className="py-2 px-4">
                                    <select className="py-2 px-4 w-full" name="" id="">
                                        <option value="">Select ..</option>
                                        {subCategoryList?.map((sc, i) => (
                                            <option value={sc?.id}>{sc?.product_sub_category}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-blue-500">
                                <td className="py-2 px-4 bg-gray-300">পরিমান : <span className='w-full text-center bg-white pr-20'> 0.00</span>
                                </td>
                                <td className="py-2 px-4 bg-gray-300">দর : <span className='w-full text-center bg-white pr-20'> 0.00</span>
                                </td>
                                <td className="py-2 px-4 bg-gray-300">মোট : <span className='w-full text-center bg-white pr-20'> 0.00</span>
                                </td>
                            </tr>
                        </tbody>
                        </table>

                        <div className="container mx-auto mt-4">
                            <div className="wrapper bg-white rounded shadow w-full ">
                            <table className="w-full">
                                <thead>
                                <tr>
                                    <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    ধরন

                                    </th>
                                    <th className="p-2 bg-honey text-white border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    পণ্যর ID
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
                                    <tr>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                    text

                                    </td>
                                    <td className="p-2 text-center border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                     text

                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="md:w-1/4">
                    <h2 className="text-lg font-semibold mb-4">হিসাব/নিকাশ <span class="bg-gray-400 p-2 rounded-xl text-white cursor-pointer">অন্যান্য</span></h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex justify-between bg-red-300 p-2">
                            <span className="font-semibold text-red-900">মোট পণ্য</span>
                            <span className="font-semibold text-red-900">মাল ফেরত</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between mb-2 bg-yellow-500">
                            <span className='ml-2'>0</span>
                            <span className='mr-2'>0</span>
                        </div>
                        <hr/>
                        <div class="flex justify-between bg-red-300 p-2">
                            <span className="font-semibold text-red-900">ছাড়</span>
                            <span className="font-semibold text-red-900">পরিবহন</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between bg-yellow-500">
                            <span className='ml-2'>0</span>
                            <span className='mr-2'>0</span>
                        </div>
                        <hr />
                        <p className="text-center font-semibold bg-red-300 p-2 mt-2">সর্বমোট</p>
                        <hr/>
                        <p className="text-center bg-yellow-500 mb-2">0</p>
                        <hr/>
                        <p className="text-center font-semibold bg-red-300 p-2">নগদ গ্রহণ</p>
                        <hr/>
                        <p className="text-center bg-yellow-500 mb-2">0</p>
                        <hr/>
                        <div className="flex justify-between bg-red-300 p-2">
                            <span className="font-semibold">নতুন বকেয়া</span>
                            <span className="font-semibold">ব্যালেন্স</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between bg-yellow-500">
                            <span className='ml-2'>0</span>
                            <span className='mr-2'>0</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between mb-2 mt-2">
                            <span className="font-semibold bg-gray-300 p-2 rounded-xl ml-8"><Link href="/preview">প্রিভিউ</Link></span>
                            <span className="font-semibold bg-gray-300 p-2 rounded-xl mr-8"><Link to="/invoice">চালান</Link></span>
                        </div>

                        <hr className="my-2"/>
                        <button className="w-full text-center font-semibold bg-blue-100 text-purple-600 py-1 px-2 rounded-lg cursor-pointer"onClick={handlePrint}>প্রিন্ট</button>
                        <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Send SMS</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
   
    </div>
  )
}

export default BuyPage