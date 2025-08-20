'use client';
import Link from "next/link"
import Image from "next/image"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, Linkedin, Mail, MapPin, Send} from "lucide-react"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {useState} from "react"
import {toast} from "sonner"
import {projects} from "@/utils/mock";

export default function HomePage() {
    const openLink = (s: string) => window.open(s, "_blank")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const date = new Date();
        const formattedDate = date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).replace(", ", " at ")

        setFormData({name: "", email: "", subject: "", message: ""})
        toast("Message sent!", {
            description: <span className="text-gray-400">{formattedDate}</span>,
            duration: 2000
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <title>Alex Vin Portfolio</title>
            <div className="min-h-screen bg-slate-50">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="font-bold text-xl text-blue-600 cursor-pointer">Alex Portfolio</div>
                            <div className="flex space-x-8">
                                <Link href="#home" className="text-blue-600 font-medium">Home</Link>
                                <Link href="#projects"
                                      className="text-gray-600 hover:text-blue-600 font-medium">Projects</Link>
                                <Link href="#contact"
                                      className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <Image
                            src="/images/avatar.jpg"
                            alt="avatar"
                            width={150}
                            height={150}
                            className="rounded-full size-[150px] object-cover mx-auto mb-6 border-4 border-blue-100 overflow-hidden"
                        />
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Hi, I&#39;m <span className="text-blue-600">Alex Vin</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Mobile Developer passionate about creating beautiful, functional apps that solve real-world
                            problems.
                            With 2+ years of experience in React Native, I bring ideas to life on iOS and Android
                            platforms.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#projects">View Projects</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                            <p className="text-xl text-gray-600">Some of my recent work that I&#39;m proud of</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <Card
                                    onClick={() => openLink(project.link)}
                                    key={index}
                                    className="overflow-hidden hover:shadow-lg transition-shadow py-0 pb-6 cursor-pointer"
                                >
                                    <div className="aspect-video relative">
                                        <Image src={project.image || '/images/placeholder.svg'} alt={project.title} fill
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

                {/* Contact */}
                <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Ready to bring your mobile app idea to life? Let&#39;s discuss your project and see how
                                I can help you succeed.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Info */}
                            <div className="space-y-8">
                                <Card className="p-8">
                                    <CardHeader className="p-0 mb-6">
                                        <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                                        <CardDescription className="text-gray-600">
                                            Feel free to reach out through any of these channels
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0 space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-100 p-3 rounded-full">
                                                <Mail className="w-6 h-6 text-blue-600"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Email</p>
                                                <Link href="mailto:anhtuan03.MDev@gmail.com"
                                                      className="text-blue-600 hover:underline">
                                                    anhtuan03.MDev@gmail.com
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-100 p-3 rounded-full">
                                                <MapPin className="w-6 h-6 text-blue-600"/>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Location</p>
                                                <p className="text-gray-600">Viet Nam, TP. Ho Chi Minh</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Social */}
                                <Card className="p-8">
                                    <CardHeader className="p-0 mb-6">
                                        <CardTitle className="text-2xl text-gray-900">Connect With Me</CardTitle>
                                        <CardDescription className="text-gray-600">Follow my work and connect on social
                                            platforms</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="flex space-x-4">
                                            <Link href="https://github.com/anhtuanMDev"
                                                  className="bg-gray-900 text-white p-4 rounded-full hover:bg-gray-800">
                                                <Github className="w-6 h-6"/>
                                            </Link>
                                            <Link
                                                href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-1ab336294/"
                                                className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700">
                                                <Linkedin className="w-6 h-6"/>
                                            </Link>
                                            <Link href="mailto:anhtuan03.MDev@gmail.com"
                                                  className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600">
                                                <Mail className="w-6 h-6"/>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Form */}
                            <Card className="p-8">
                                <CardHeader className="p-0 mb-6">
                                    <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                                    <CardDescription className="text-gray-600">Fill out the form below and I&#39;ll get
                                        back to you within 24 hours</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input id="name" name="name" value={formData.name}
                                                       onChange={handleChange} placeholder="Your full name" required/>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" name="email" type="email" value={formData.email}
                                                       onChange={handleChange} placeholder="your.email@example.com"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" name="subject" value={formData.subject}
                                                   onChange={handleChange} placeholder="What's this about?" required/>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" name="message" value={formData.message}
                                                      onChange={handleChange}
                                                      placeholder="Tell me about your project or question..." rows={6}
                                                      required/>
                                        </div>
                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                            <Send className="w-4 h-4 mr-2"/> Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

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
        </>
    )
}
