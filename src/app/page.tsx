'use client';
import Link from "next/link"
import Image from "next/image"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, Linkedin, Mail} from "lucide-react"
import Placeholder from '../../public/images/placeholder.svg'
import AvatarImage from '../../public/images/avatar.jpg'
import {projects} from "@/app/mock";

export default function HomePage() {
    const openLink = (s: string) => {
        window.open(
            s,
            "_blank"
        );
    }
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="font-bold text-xl text-blue-600 cursor-pointer">Alex Portfolio</div>
                        <div className="flex space-x-8">
                            <Link href="/" className="text-blue-600 font-medium">
                                Home
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <Image
                            src={AvatarImage}
                            alt="placeholder"
                            className="rounded-full size-[150px] object-cover mx-auto mb-6 border-4 border-blue-100 overflow-hidden"
                        />
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Hi, I&#39;m <span className="text-blue-600">Alex Vin</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Mobile Developer passionate about creating beautiful, functional apps that solve real-world
                            problems. With
                            2+ years of experience in React Native, I bring ideas to life on iOS and Android platforms.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                <Link href="/contact">Get In Touch</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#projects">View Projects</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                        <p className="text-xl text-gray-600">Some of my recent work that I&#39;m proud of</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card onClick={() => openLink(project.link)} key={index}
                                  className="overflow-hidden hover:shadow-lg transition-shadow py-0 pb-6 cursor-pointer">
                                <div className="aspect-video relative">
                                    <Image src={project.image || Placeholder} alt={project.title} fill
                                           className="object-cover"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                                    <CardDescription
                                        className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary"
                                                   className="bg-blue-100 text-blue-800">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/*/!* Skills Section *!/*/}
            {/*<section className="py-20 px-4 sm:px-6 lg:px-8">*/}
            {/*    <div className="max-w-6xl mx-auto">*/}
            {/*        <div className="text-center mb-16">*/}
            {/*            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>*/}
            {/*            <p className="text-xl text-gray-600">Technologies I work with</p>*/}
            {/*        </div>*/}
            {/*        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
            {/*            {skills.map((skill, index) => (*/}
            {/*                <Card key={index} className="p-6">*/}
            {/*                    <div className="flex justify-between items-center mb-4">*/}
            {/*                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>*/}
            {/*                        <span className="text-blue-600 font-medium">{skill.level}%</span>*/}
            {/*                    </div>*/}
            {/*                    <Progress value={skill.level} className="h-2"/>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* Testimonials Section *!/*/}
            {/*<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">*/}
            {/*    <div className="max-w-6xl mx-auto">*/}
            {/*        <div className="text-center mb-16">*/}
            {/*            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Feedback</h2>*/}
            {/*            <p className="text-xl text-gray-600">What colleagues and clients say about my work</p>*/}
            {/*        </div>*/}
            {/*        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
            {/*            {testimonials.map((testimonial, index) => (*/}
            {/*                <Card key={index} className="p-6">*/}
            {/*                    <CardContent className="p-0">*/}
            {/*                        <div className="flex mb-4">*/}
            {/*                            {[...Array(testimonial.rating)].map((_, i) => (*/}
            {/*                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>*/}
            {/*                            ))}*/}
            {/*                        </div>*/}
            {/*                        <p className="text-gray-600 mb-4 leading-relaxed">&#34;{testimonial.content}&#34;</p>*/}
            {/*                        <div>*/}
            {/*                            <p className="font-semibold text-gray-900">{testimonial.name}</p>*/}
            {/*                            <p className="text-sm text-gray-500">{testimonial.role}</p>*/}
            {/*                        </div>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex justify-center space-x-6 mb-8">
                        <Link href="mailto:anhtuan03.MDev@gmail.com" className="text-gray-400 hover:text-white">
                            <Mail className="w-6 h-6"/>
                        </Link>
                        <Link href="https://github.com/anhtuanMDev" className="text-gray-400 hover:text-white">
                            <Github className="w-6 h-6"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-1ab336294/"
                              className="text-gray-400 hover:text-white">
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                    <p className="text-gray-400">© 2024 Alex Vin. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
