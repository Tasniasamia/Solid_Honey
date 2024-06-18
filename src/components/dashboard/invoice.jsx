import React from 'react';

const Invoice = () => {
    return (
        <div className='relative'> 
 {/* <div className="bg-[url('/cashmemo.png')] bg-no-repeat h-screen  bg-contain  max-w-auto mx-auto "> */}
            {/* <h1 className='text-[24px] font-bold text-center'>চালান</h1> */}
            <div className='lg:max-h-full lg:max-w-full'>
                <img src="/cashmemo.png" alt="invoice" className='w-full h-auto' />
            </div>
            <div className='absolute top-[24%] w-full'>
                <div className='w-full'>
                <h1 className='text-[24px] font-bold text-center'>চালান</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt dolor aliquam ipsa deleniti tempore, vero eius architecto. Non incidunt cumque alias cum tempore laborum recusandae dignissimos dolores molestiae? Harum!</p>
               </div>

            </div>
        {/* </div> */}
        </div>
       
    );
};

export default Invoice;