import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';



export default function Projects() {
    const[projectData, setProjectData] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title, 
            date,
            codeUrl,
            mainImage,
            hostedUrl,
            description,
            projectType,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);


    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-700 flex justify-center mb-12"> Take a look at some of my Projects!</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                   {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-900 text-3xl font-bold mb-2 hover: text-gray-800">
                           <a 
                           href={project.codeUrl}
                           alt={project.title}
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                           {project.title}
                           </a> 
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                            {project.description}
                            </p>
                            <a href={project.hostedUrl} rel="noopener noreferrer"
                            target="_blank"
                            className="text-red-500 font-bold hover:underline hover:text-red-400">
                               Live preview{" "}
                            <span role="img" aria-label="right pointer">
                               👉 
                            </span>
                            </a>
                            <p className=" my-4 text-red-400 leading-relaxed">{project.tags}</p>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    ) 
}