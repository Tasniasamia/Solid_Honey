import React from 'react'
import UsersTable from '../../components/dashboard/UsersTable'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SearchBox from '../../components/dashboard/SearchBox'

const data = [
	{
		name: "Naim",
		phone_number: "00000000",
		address: "Khulna" 
	},
	{
		name: "Naim",
		phone_number: "00000000",
		address: "Khulna" 
	},
]




const SupplierPage = ({params}) => {
  return (
    <div>
      <div className='bg-muted rounded-md'>
        <div className="rounded-t px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">সরবরাহকারী তথ্য</h3>
            </div>
              <h1>অনুসন্ধান</h1>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <select class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" name="" id="">
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <section className="py-1 bg-blueGray-50">
              <div className="w-full xl:mb-0 px-4 mx-auto mt-2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                  <div className="rounded-t px-4 py-3 border-0">
                    <div className="flex justify-around items-center">
                      <div className="relative px-4">
                        <h3 className="font-semibold text-base text-blueGray-700">প্রোফাইল</h3>
                      </div>
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">লেনদেন</button>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                      <tbody>
                        <tr>
                          <th className="border-t-0 px-6 align-middle  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          সরবরাহকারী
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 rounded-xl text-base whitespace-nowrap p-2 ">
                          name
                          </td>
                          <td className="border-t-0 px-6 font-bold align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                          সর্বমোট পণ্য
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            0.00
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700">
                          ঠিকানা
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                          address
                          </td>
                          <td className="border-t-0 px-6 font-bold align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                          পরিশোধ
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            0.00
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700">
                          মোবাইল নাম্বার
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                          0169374986
                          </td>
                          <td className="border-t-0 px-6 font-bold align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                          ব্যালেন্স
                          </td>
                          <td className="border-t-0 px-6  align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            0.00
                          </td>
                        </tr>
                      </tbody>

                    </table>
                  </div>

                  <div className='text-right px-10 py-8'>
                      <Button>নতুন সরবরাহকারী</Button>
                      <Button className="ml-4">সেভ</Button>
                      
                  </div>
                </div>
              </div>
        </section>
      </div>
    </div>
  )
}

export default SupplierPage





// const AddModal = () => {
	
// 	const addHandler = (e) => {
// 		e.preventDefault()

// 		const form = new FormData(formElement)

// 		const formData = {}

// 		for (let [key, value] of form.entries()) {
// 			formData[key] = value
// 		}

// 		console.log(formData);


// 		// handle backend post data
// 	}

// 	return (
// 		<Dialog>
// 			<DialogTrigger asChild>
// 				<Button variant="outline">Add Supplier</Button>
// 				</DialogTrigger>
// 			<DialogContent className="sm:max-w-[425px]">
// 		<DialogHeader>
// 			<DialogTitle>Add Supplier</DialogTitle>
// 		</DialogHeader>
// 		<form onSubmit={addHandler} className="grid gap-4 py-4" id='formElement'>
// 			<div className="grid grid-cols-4 items-center gap-4">
// 			<Label htmlFor="name" className="text-right">
// 				Name
// 			</Label>
// 			<Input
// 			name="name"
// 				id="name"
				
// 				className="col-span-3"
// 			/>
// 			</div>
// 			<div className="grid grid-cols-4 items-center gap-4">
// 			<Label htmlFor="phone_number" className="text-right">
// 				Phone Number
// 			</Label>
// 			<Input
// 			name="phone_number"
// 				id="phone_number"
				
// 				className="col-span-3"
// 			/>
// 			</div>

// 			<div className="grid grid-cols-4 items-center gap-4">
// 			<Label htmlFor="address" className="text-right">
// 				Address
// 			</Label>
// 			<Input
// 			name="address"
// 				id="address"
				
// 				className="col-span-3"
// 			/>
// 			</div>
// 			<DialogFooter>
// 				<Button type="submit">Save</Button>
// 			</DialogFooter>
// 		</form>

// 		</DialogContent>
// 		</Dialog>
// 	)
// }

