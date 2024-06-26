import FoodComm from '../Assets/FoodVlog.jpg';
import Zenplay from '../Assets/ZenPlay3.PNG';
import Planetoids from '../Assets/Planetoids.PNG';


export default function Projects() {

    const config = {
        projects : [
            {
                image: FoodComm,
                description: 'A Food commerce Website. Built with React and Bootstrap.',
                link: 'https://chicken-bowl-git-main-akash-star-03s-projects.vercel.app/'
            },
            {
                image: Zenplay,
                description: 'Online Anime site like Aniwatch, Built using HTMl, CSS, Javascript, Bootstrap. ',
                link: 'https://zenplay-j7g8bzulk-akash-star-03s-projects.vercel.app/'
            },
            {
                image: Planetoids,
                description: 'Plants ECommerce site, Built using HTMl, CSS, Javascript, Bootstrap. ',
                link: 'https://planetoids.vercel.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, Bootstrap and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[350px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}