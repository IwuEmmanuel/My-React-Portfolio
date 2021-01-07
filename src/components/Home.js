import React from 'react';
import image from '../Try.jpg';

//<img alt="background" src={image} className="absolute object-cover w-full h-full"  />
export default function Home() {
    return (
        <main style={{backgroundImage: "url(" + image + ")"}} className="overflow-hidden sm:object-scale-down bg-cover bg-fixed w-full h-full">            
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className = "text-white home-name font-bold cursive leading-none lg:leading-snug">Aloha... I'm Emmanuel</h1>
            </section>
        </main>
    )
}