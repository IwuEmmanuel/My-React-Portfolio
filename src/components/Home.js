import React from 'react';
import image from '../Try.jpg';


export default function Home() {
    return (
        <main>
            <img alt="background" src={image} className="absolute object-cover w-full h-full"  />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className = "text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">Aloha... I'm Emmanuel</h1>
            </section>
        </main>
    )
}