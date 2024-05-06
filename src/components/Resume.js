import Resumes from '../Assets/Resume.jpg'
export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/1z1ZAN2Vv6-u4FirYZ1-AZZTMDJIMkehg/view?usp=drivesdk',
    }
    return <section className='flex flex-col md:flex-row bg-primary' id='Resume'>
        <div className='md:w-1/2 px-5 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={Resumes} alt='Resume'/>
        </div>
        <div className=' md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white px-3'>
            <h1 className='text-4xl  border-b-4 border-[#00a86b] mb-5  w-[14s0px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume <a href={config.link} className='btn' >Download</a></p>
            </div>
        </div>
    </section>
}
