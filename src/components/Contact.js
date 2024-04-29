
export default function Contact(){
    const config={
        email:'akashprabha23@gmail.com',
        phone:'+91 9514807305'
    }
    return <section className='flex flex-col  bg-secondary px-5 py-32 text-white' id="Contact">
       
        <div className='  flex flex-col items-center  '>
           
            <h1 className='text-4xl  border-b-4 border-[ #018749] mb-5  w-[14s0px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, Please Contact Me. </p>
            <p className="py-2 "><span classname='font-bold'>Email: </span>{config.email} </p>
            <p className="py-2 "><span classname='font-bold'>Phone: </span>{config.phone} </p>
            
           
        </div>
    </section>
}