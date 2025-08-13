"use client"

import type React from "react"
import {useState} from "react"

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Github, Linkedin, Mail, MapPin, Send} from "lucide-react"
import {toast} from "sonner";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        // Reset form
        // setFormData({name: "", email: "", subject: "", message: ""})
        toast("Event has been created", {
            description: (
                <span className="text-gray-400">Sunday, December 03, 2023 at 9:00 AM</span>
            ),
            duration: 2000, // hiển thị 5 giây
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link className="font-bold text-xl text-blue-600" href={"/public"}>Alex Portfolio</Link>
                        <div className="flex space-x-8">
                            <Link href="/public" className="text-gray-600 hover:text-blue-600 font-medium">
                                Home
                            </Link>
                            <Link href="/contact" className="text-blue-600 font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to bring your mobile app idea to life? Let&#39;s discuss your project and see how I
                            can help you
                            succeed.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
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
                                            <Link href="mailto:alex.thompson@example.com"
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

                            {/* Social Links */}
                            <Card className="p-8">
                                <CardHeader className="p-0 mb-6">
                                    <CardTitle className="text-2xl text-gray-900">Connect With Me</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Follow my work and connect on social platforms
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="flex space-x-4">
                                        <Link
                                            href="https://github.com/anhtuanMDev"
                                            className="bg-gray-900 text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
                                        >
                                            <Github className="w-6 h-6"/>
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-1ab336294/"
                                            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                            <Linkedin className="w-6 h-6"/>
                                        </Link>
                                        <Link
                                            href="mailto:anhtuan03.MDev@gmail.com"
                                            className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors"
                                        >
                                            <Mail className="w-6 h-6"/>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card className="p-8">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Fill out the form below and I&#39;ll get back to you within 24 hours
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or question..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                        <Send className="w-4 h-4 mr-2"/>
                                        Send Message
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
                        <Link href="mailto:alex@example.com" className="text-gray-400 hover:text-white">
                            <Mail className="w-6 h-6"/>
                        </Link>
                        <Link href="https://github.com/anhtuanMDev" className="text-gray-400 hover:text-white">
                            <Github className="w-6 h-6"/>
                        </Link>
                        <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                    <p className="text-gray-400">© 2024 Alex Vin. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
