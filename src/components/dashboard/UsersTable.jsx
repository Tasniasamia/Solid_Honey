
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table"


const UsersTable = ({table_type, data, header_title, Component}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage] = useState(10)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = data?.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='p-5 bg-muted rounded-md'>
        <div className='flex md:flex-row flex-col justify-between md:items-center items-start mb-4'>
            <h1 className='text-xl font-bold mb-4 text-honey'>{header_title}</h1>
            <Component />
        </div>
        <Table>
            <TableHeader>   
                <TableRow>
                <TableHead className="text-honey">নাম</TableHead>
                <TableHead className="text-honey">Phone Number</TableHead>
                <TableHead className="text-honey text-right">Address</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {currentUsers?.map((d, i) => (
                    <TableRow key={i} className="hover:bg-honey hover:text-muted">
                        <TableCell className="font-medium">{d?.name}</TableCell>
                        <TableCell>{d?.phone_number}</TableCell>
                        <TableCell className="text-right">{d?.address}</TableCell>

                    </TableRow>
                ))}
            </TableBody>

        </Table>

        <div className='text-center mt-8'>
            {Array.from({ length: totalPages }, (_, i) => (
            <button className={`text-white py-1 px-2 hover:bg-honey ${i === (currentPage - 1) ? 'bg-honey' : 'bg-indigo-500'}`} key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
            ))}
        </div>
    </div>
  )
}

export default UsersTable
