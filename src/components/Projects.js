import FoodComm from '../Assets/FoodVlog.jpg';

export default function Projects(){
    const config={
        projects:[
            {
            image:FoodComm,
            description:'A Food E-Commerce website like Modal created by Bootstrap',
            link:''
        },
    ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id='Projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5 ">
            <h1 className="text-4xl  border-b-4 border-[#018749] mb-5  w-[150px] font-bold">Projects</h1>
            <p>These are my basic beginner level projects . I have built these with React and Bootstap. Check them Out! </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                {config.projects.map((project)=>(
                    
                      <div className='relative '>
                      <img className='h-[300px] w-[400px]'  src={project.image} alt='Food Commerce'/>
                          <div className='project-des'>
                           <p className='text-center px-5 py-5'> {project.description}</p>
                           <div className='flex justify-center'>
                          <a className='btn' target='blank' href={project.link}>View Project</a>
                          </div>
                          </div>
                          
                       </div>
                ))}
               
            </div>
        </div>
    </section>
}