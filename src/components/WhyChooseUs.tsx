"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const musicContent = [
    {
        "title": "Introduction to Music Theory",
        "description": "Dive into the fundamental concepts of music theory, including notes, scales, chords, and rhythm. Learn how to read sheet music, identify intervals, and understand basic harmonic progressions. Perfect for beginners or those looking to refresh their understanding of music theory.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Introduction to Music
            </div>
        ),
    },
    {
        "title": "Exploring Classical Music History",
        "description": "Embark on a journey through the rich history of classical music, from the Baroque period to the Romantic era. Discover the major composers, their works, and the cultural contexts that shaped their music. Gain insights into key musical forms such as symphonies, sonatas, and operas.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Exploring Classical Music History
            </div>
        ),

    },
    {
        "title": "Jazz Improvisation Techniques",
        "description": "Unleash your creativity with this course on jazz improvisation. Explore essential techniques for soloing over chord changes, including scales, arpeggios, and improvisational patterns. Learn to navigate through different jazz styles and develop your unique improvisational voice.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/courses/blues.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Improvisation Techniques"
                />
            </div>
        ),
    },

]

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicContent} />
        </div>
    )
}

export default WhyChooseUs