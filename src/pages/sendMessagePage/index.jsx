import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SendIcon } from 'lucide-react'


const SendMessagePage = () => {
  return (
    <div className='bg-muted rounded-md p-8 md:w-1/2 w-full'>
        <h1 className='text-xl font-bold mb-4'>এসএমএস</h1>
      <form action="">
        <div className='flex flex-col items-start gap-2 mb-5'>
          <select name="" id="" className='w-full py-2 rounded-md'>
            <option value="">f</option>
            <option value="">f</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-2 ">
            <Label htmlFor="category_name" className="text-right">
                মোবাইল নম্বর
            </Label>
            <Input

                name="category_name"
                id="category_name"
                placeholder="EX: 017654254788, 01985465895"
                className="col-span-3"
            />
        </div>


        <div className="flex flex-col items-start gap-2 mt-5">
            <Label htmlFor="sms_text" className="text-right">
                এসএমএস টেক্সট
            </Label>
            
            <Textarea id="sms_text" className="col-span-3" />
        </div>


        <div className='mt-5'>
            <Button variant={"destructive"}> <SendIcon className='mr-2' size={20} /> সেন্ড এসএমএস</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMessagePage
