import AboutImg from '../Assets/About1.png'
export default function About(){
    const config={
        line1:'Hi!, My name is A.Akash. I am a Frontend web developer. I built responsive and beautifull user interface Websites with React.js and Bootstrap',
        line2:'I am proficient in Frontend skills like React.js, Redux, Axios, Tailwindcss, Bootstrap, Javascript, SASS, CSS, HTML.',
        line3:'Im  Detail-Oriented, Fast Learner and have Passion for technology!',
    }
    return <section className='flex flex-col md:flex-row bg-primary' id='About'>
        <div className='md:w-1/2 px-5 py-5'>
            <img src={AboutImg}/>
        </div>
        <div className=' md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white px-3'>
            <h1 className='text-4xl  border-b-4 border-[#00a86b] mb-5  w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'> {config.line2} </p>
            <p className='pb-5'>{config.line3} </p>
            </div>
           
        </div>
    </section>
}