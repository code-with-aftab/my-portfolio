"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin, Mail, Phone, GraduationCap, School, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface Project {
  year: string;
  title: string;
  stats: { label: string; value: string }[];
  tags: string;
  gradient: string;
  borderColor: string;
  url: string;
  desc?: string;
  image?: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      year: "2024",
      title: "Alfaiz Foundation Web Platform",
      stats: [
        { label: "Community Engagement", value: "High" },
        { label: "Responsive Design", value: "100%" },
      ],
      tags: "Full-Stack Web App",
      gradient: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10",
      borderColor: "border-blue-200 dark:border-blue-800",
      url: "https://alfaizfoundation.com/"
    },
    {
      year: "2025",
      title: "Adowise • UI/UX Design & Frontend",
      stats: [
        { label: "User Interaction", value: "Smooth" },
        { label: "Modern Aesthetics", value: "Premium" },
      ],
      tags: "UI/UX & Web Design",
      gradient: "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-900/10",
      borderColor: "border-purple-200 dark:border-purple-800",
      url: "https://adowise.com"
    },
    {
      year: "2023",
      title: "Flying Bird Program (C++)",
      stats: [
        { label: "Interactive Experience", value: "Focus" },
        { label: "Problem Solving", value: "Key" },
      ],
      tags: "Console Application",
      gradient: "from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-900/10",
      borderColor: "border-green-200 dark:border-green-800",
      url: "#",
      desc: undefined,
      image: undefined
    }
  ]

  const experience = [
    {
      company: "DIET Academy",
      role: "Teacher / Computer Instructor",
      period: "Jan 2025 — June 2025",
      desc: "Delivered computer science education, mentored students on technical concepts, and managed classroom training sessions.",
      logo: null
    },
    {
      company: "Explorin",
      role: "MERN Stack Developer Intern",
      period: "July 2024 — October 2024",
      desc: "Developed full-stack features using MERN, optimized database queries, and helped scale backend system performance.",
      logo: "/explorin.png"
    },
    {
      company: "Smart Cool Pvt Ltd",
      role: "Graphic Designer",
      period: "Previous Experience",
      desc: "Created high-quality marketing materials, brand identities, and visual assets using Adobe Creative Suite.",
      logo: null
    }
  ]

  const services = [
    {
      title: "Graphic Design & Branding",
      desc: "Creating visually appealing designs, logos, and marketing materials using Adobe Creative Suite.",
      price: "Creative Design"
    },
    {
      title: "Hardware Troubleshooting",
      desc: "PC Assembling, hardware fault identification, operating systems configuration, and network setup.",
      price: "System Admin"
    }
  ]

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 text-foreground">
      
      {/* Floating Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4 p-2 bg-background/70 backdrop-blur-lg border border-border shadow-sm rounded-full">
        <Button variant="ghost" className="rounded-full gap-2 hidden md:flex">
          Home
        </Button>
        <div className="flex items-center gap-1 border-x border-border px-2">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="mailto:infomohdaftab@gmail.com"><Mail className="w-4 h-4" /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://linkedin.com/in/mohd-aftab-21a788347" target="_blank"><Linkedin className="w-4 h-4" /></Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
             <Link href="tel:+919805160586" target="_blank"><Phone className="w-4 h-4" /></Link>
          </Button>
        </div>
        <ThemeToggle />
        <Button className="rounded-full ml-1" asChild>
          <Link href="mailto:infomohdaftab@gmail.com">Contact Me</Link>
        </Button>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* Section 1: Hero */}
        <section className="space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Work
            </div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              Crafting Designs<br />
              That Maximize<br />
              Impact.
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Hi, I&apos;m Mohd Aftab—A Full-Stack Developer & UI/UX Expert. 
              Currently based in Himachal Pradesh, I build engineering robust, scalable web applications with a focus on clean design.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Button size="lg" className="rounded-full gap-2 px-8">
                Download Resume <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 underline underline-offset-8">
                My Story ↓
              </Button>
            </motion.div>
          </div>
        </section>

        {/* My Story Section (Placed after Section 1) */}
        <section id="story" className="bg-accent/20 p-8 md:p-12 rounded-[3.5rem] border border-border/50">
          <div className="grid md:grid-cols-[1fr_350px] gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold">My Story</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="font-medium text-foreground leading-relaxed text-2xl">
                  I&apos;m Mohd Aftab, A Full-Stack Web Developer & UI/UX Expert with a BCA degree.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Passionate about the complete product cycle. I specialize in modern Javascript ecosystems like React, Next.js, and Node.js to build scalable products, clean UI, and high-performance web apps.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4 border-l-4 border-primary/20 pl-6 py-2 italic bg-background/30 rounded-r-lg">
                  Previously, I worked as a Graphic Designer at Smart Cool Pvt Ltd and organized the Tech Fest at SGGSJ College. I thrive in environments where creativity meets practical problem solving.
                </p>
              </div>
              <Button className="rounded-full gap-2 px-8 mt-4" variant="default" asChild>
                <Link href="mailto:infomohdaftab@gmail.com">Contact Me <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>

            <div className="relative h-[380px] w-full max-w-[350px] mx-auto group">
              <div className="absolute inset-[-6px] bg-gradient-to-tr from-[#4facfe] via-[#00f2fe] to-[#f093fb] blob-shape opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-0 bg-background flex items-center justify-center overflow-hidden blob-shape border-[4px] border-background shadow-2xl z-10">
                <Image 
                  src="/profile.jpg" 
                  alt="Mohd Aftab" 
                  fill 
                  className="object-cover object-center scale-[1.05] group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <School className="w-8 h-8 text-primary" /> Education History
            </h2>
            
            <div className="grid gap-6">
              <div className="flex items-center gap-6 bg-accent/30 p-6 rounded-3xl border border-border/50 hover:bg-accent/50 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-muted-foreground">SGGSJ Govt College, Paonta Sahib</p>
                  <p className="text-primary/70 text-sm font-bold uppercase tracking-widest mt-1">HPU Shimla • 2021 — 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-accent/30 p-6 rounded-3xl border border-border/50 hover:bg-accent/50 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 transition-transform">
                  <School className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Higher Secondary (12th)</h3>
                  <p className="text-muted-foreground">GSSS School</p>
                  <p className="text-primary/70 text-sm font-bold uppercase tracking-widest mt-1">HPBOSE • 2020 — 2021</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-accent/30 p-6 rounded-3xl border border-border/50 hover:bg-accent/50 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 group-hover:scale-110 transition-transform">
                  <School className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Matriculation (10th)</h3>
                  <p className="text-muted-foreground">GSSS School</p>
                  <p className="text-primary/70 text-sm font-bold uppercase tracking-widest mt-1">HPBOSE • 2018 — 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" /> Work Experience
          </h2>
          
          <div className="grid gap-8">
            {experience.map((exp, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row gap-8 bg-accent/20 p-8 rounded-[3rem] border border-border/50 hover:bg-accent/40 transition-all">
                {exp.logo ? (
                  <div className="w-20 h-20 relative bg-background rounded-3xl overflow-hidden border border-border/50 p-2 shrink-0 shadow-lg">
                    <Image src={exp.logo} alt={exp.company} fill className="object-contain p-2" />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0">
                    <Briefcase className="w-10 h-10" />
                  </div>
                )}
                <div className="space-y-3 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <span className="text-sm font-bold px-4 py-1.5 bg-background/50 rounded-full border border-border text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xl text-foreground font-medium">{exp.role}</p>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work & Projects */}
        <section className="space-y-12">
          <h2 className="text-4xl font-semibold text-center">Featured Projects</h2>
          
          <div className="space-y-[-60px] md:space-y-[-100px]">
            {projects.map((project, i) => (
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                key={i}
                className={`relative p-8 md:p-12 rounded-[3.5rem] bg-gradient-to-br ${project.gradient} border ${project.borderColor} shadow-2xl dark:shadow-none hover:-translate-y-8 transition-all duration-500 cursor-pointer`}
                style={{ zIndex: projects.length - i }}
              >
                <div className="absolute inset-0 bg-background/60 backdrop-blur-md rounded-[3.5rem]" />
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest opacity-60">
                    <span>{project.year}</span>
                    <span>{project.tags}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-3xl md:text-4xl font-semibold">{project.title}</h3>
                        {project.url !== "#" && (
                          <Button variant="outline" size="icon" asChild className="rounded-full bg-background/50 hover:bg-background h-12 w-12 shrink-0">
                            <Link href={project.url} target="_blank">
                              <ArrowRight className="w-6 h-6" />
                            </Link>
                          </Button>
                        )}
                      </div>

                      {project.desc && <p className="text-muted-foreground text-lg italic border-l-4 border-primary/20 pl-6">{project.desc}</p>}
                      
                      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                        {project.stats.map((stat, j) => (
                          <div key={j}>
                            <p className="text-3xl font-bold mb-1">{stat.value}</p>
                            <p className="text-sm font-medium opacity-60 uppercase tracking-wider">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {project.image && (
                      <div className="w-32 h-32 md:w-48 md:h-48 relative shrink-0 bg-background/50 rounded-[2rem] overflow-hidden border border-border/50 p-4 shadow-xl">
                        <Image src={project.image} alt={project.title} fill className="object-contain p-4" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">What Can I Serve You!</h2>
            <p className="text-muted-foreground text-lg">My comprehensive tech stack and specialized services.</p>
          </div>
          
          <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Express.js", 
              "MongoDB", "PostgreSQL", "Prisma", "Tailwind CSS", 
              "Shadcn UI", "Redux", "GraphQL", "Zod", "WebSockets"
            ].map((item, i) => (
              <Button key={i} variant={i < 4 ? "default" : "outline"} className="rounded-full h-12 px-8 text-md font-medium">
                {item}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-accent/20 border border-border/50 flex flex-col gap-6 hover:bg-accent/30 transition-all">
                <div className="h-20 w-20 bg-background rounded-3xl flex items-center justify-center shrink-0 shadow-md border border-border/10">
                  <div className="w-8 h-8 border-2 border-primary rounded-md" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow text-lg">{service.desc}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-2xl font-black text-primary uppercase tracking-tighter">{service.price}</p>
                </div>
                <Button className="w-full h-14 rounded-full mt-4 gap-3 text-lg font-bold" variant="default">
                  Let&apos;s Discuss <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer / Copyright */}
      <footer className="py-12 border-t border-border/50 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Mohd Aftab. Crafted with passion & Next.js.</p>
      </footer>
    </div>
  )
}
