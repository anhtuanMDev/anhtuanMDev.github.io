import {ProjectInfo, SkillsSet, TestimonialsInfo} from "@/app/types";

export const skills: SkillsSet[] = [
    {name: "React Native", level: 75},
    {name: "Flutter", level: 35},
    {name: "TypeScript", level: 65},
    {name: "iOS Development", level: 0},
    {name: "Android Development", level: 65},
    {name: "UI/UX Design", level: 45},
]

export const testimonials: TestimonialsInfo[] = [
    {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        content:
            "Alex delivered an exceptional mobile app that exceeded our expectations. The attention to detail and user experience is outstanding.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "CTO at StartupXYZ",
        content:
            "Working with Alex was a pleasure. The app was delivered on time and the code quality is top-notch. Highly recommended!",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Design Lead at CreativeStudio",
        content:
            "Alex has an excellent eye for design and technical implementation. The collaboration was smooth and professional.",
        rating: 5,
    },
]

export const projects: ProjectInfo[] = [
    {
        title: "StellarScope",
        description: "Astronomy app provides detailed information about planets, stars, asteroids and space events in real time. Track orbits, view images from the Telescope and get notifications when special astronomical phenomena occur.",
        image: '/images/stellar-scope.png',
        techStack: ["React Native", "TypeScript"],
        link: 'https://play.google.com/store/apps/details?id=com.stellarscope',
    },
]
