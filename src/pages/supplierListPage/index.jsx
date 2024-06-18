import React from "react";
import CommonTable from "../../components/ui/commonTable";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button"

const SupplierListPage = () => {
  const data = [
    {
      name: "Naim",
      phone_number: "00000000",
      address: "Khulna",
    },
    {
      name: "Naim",
      phone_number: "00000000",
      address: "Khulna",
    },
  ];
  return (
    <div className="w-full">
      <CommonTable data={data} action index Component={AddModal} header_title={"সরবরাহকারী"}/>
      
    </div>
  );
};

export default SupplierListPage;

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
				<Button variant="outline">Add Supplier</Button>
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
