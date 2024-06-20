import React from 'react'
import UsersTable from '../../components/dashboard/UsersTable'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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




const CustomerPage = () => {

	const searchHandler = (e, setValue) => {
		setValue(e.targer.value)
	}

	return (
		<div>
			<div className='mb-5'>
				<Link to={"/account/customer/transaction"}><Button>কাস্টমার লেনদেন</Button></Link>
			</div>
		  <div className='mb-4'>
			<SearchBox searchHandler={searchHandler} />
		  </div>
		  <div>
			<UsersTable header_title={"Customer"} data={data} Component={AddModal} action />
		  </div>
		</div>
	)
}

export default CustomerPage





const AddModal = () => {
	
	const addHandler = (e) => {
		e.preventDefault()

		const form = new FormData(formElement)

		const formData = {}

		for (let [key, value] of form.entries()) {
			formData[key] = value
		}

		console.log(formData);


		// handle backend post data
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Add Customer</Button>
				</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
		<DialogHeader>
			<DialogTitle>Add Customer</DialogTitle>
		</DialogHeader>
		<form onSubmit={addHandler} className="grid gap-4 py-4" id='formElement'>
			<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="name" className="text-right">
				Name
			</Label>
			<Input
			name="name"
				id="name"
				
				className="col-span-3"
			/>
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="phone_number" className="text-right">
				Phone Number
			</Label>
			<Input
			name="phone_number"
				id="phone_number"
				
				className="col-span-3"
			/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="address" className="text-right">
				Address
			</Label>
			<Input
			name="address"
				id="address"
				
				className="col-span-3"
			/>
			</div>
			<DialogFooter>
				<Button type="submit">Save</Button>
			</DialogFooter>
		</form>

		</DialogContent>
		</Dialog>
	)
}
