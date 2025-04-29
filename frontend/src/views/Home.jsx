import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaInstagram, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub as FaGithubAlt, FaGitlab, FaAws, FaFileAlt, FaGraduationCap, FaCode, FaUsers, FaProjectDiagram, FaLaptopCode, FaReact, FaNode, FaJs, FaDatabase, FaDropbox, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiFlask, SiExpress, SiAxios, SiDjango, SiFlutter, SiNextdotjs, SiMongodb, SiMysql, SiSqlite, SiVisualstudiocode, SiSpring, SiGooglecloud, SiHeroku, SiFirebase, SiDart, SiVercel, SiFigma, SiShopify } from 'react-icons/si';
import pfp from '../media/pfp.jpg';
import '../styling/bg.css';
import { ProjectData } from '../components/ProjectData';

const TypingEffect = ({ text, className }) => {
  const [displayText, setText] = useState('');

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      if (displayText === text) {
        clearTimeout(timer);
        return;
      }

      setText(text.substring(0, displayText.length + 1));
      timer = setTimeout(handleTyping, 150);
    };

    timer = setTimeout(handleTyping, 150);
    return () => clearTimeout(timer);
  }, [displayText, text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] inline-block text-transparent bg-clip-text">
        <span className="hidden sm:inline">{displayText}</span>
        <span className="inline sm:hidden">{text}</span>
      </span>
      <span className="absolute -right-[10px] top-0 h-full w-[3px] bg-gradient-to-r from-[#0066FF] to-[#00A3FF] animate-blink hidden lg:block"></span>
    </span>
  );
};

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Map technology names to their respective icons
  const techIcons = {
    'React': <SiReact className="text-[#61DAFB]" />,
    'Axios': <SiAxios className="text-[#5A29E4]" />,
    'Flask': <SiFlask className="text-black" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Express': <SiExpress className="text-black" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'Figma': <SiFigma className="text-[#F24E1E]" />,
    'Liquid': <FaDropbox className="text-[#0061FF]" />,
    'Shopify': <SiShopify className="text-[#7AB55C]" />
  };

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, ProjectData.length);
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0.1, 0.5, 0.9]
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveProject(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white border-t border-b border-gray-100"
      id="project-section"
    >
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[8px] bg-gradient-to-r from-[#0066FF] to-[#00A3FF]"></div>
            <p className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] inline-block text-transparent bg-clip-text font-medium text-lg">
              Featured Work
            </p>
          </div>
         
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Scrolling Projects */}
          <div className="space-y-16 lg:space-y-32 py-20">
            {ProjectData.map((project, index) => (
              <div key={index} className="flex flex-col gap-8">
                <div
                  data-index={index}
                  ref={el => projectRefs.current[index] = el}
                  className="h-[60vh] relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-10%" }}
                    className="w-full h-full rounded-lg overflow-hidden relative group shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform 
                      group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
                
                {/* Project Text Content - Only visible on mobile/tablet */}
                <div className="lg:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-10%" }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "36px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-1 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] mb-3"
                    />
                    
                    <div className="flex flex-col gap-1 mb-3">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-transparent bg-clip-text">
                        {project.title}
                      </h2>
                      <span className="text-sm text-gray-600">{project.type}</span>
                    </div>

                    <p className="text-black/75 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="mb-4">
                        <ul className="grid grid-cols-1 gap-2">
                          {project.metrics.slice(0, 2).map((metric, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-black/75">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF]" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black flex items-center gap-1 border border-gray-200"
                        >
                          {techIcons[tech] || <FaCode className="text-[#0066FF] text-xs" />}
                          <span className="text-xs">{tech}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-black text-xs border border-gray-200 hover:bg-gray-200 transition-colors duration-300"
                        >
                          <FaGithub className="text-sm" />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] rounded-full text-white text-xs hover:from-[#0052CC] hover:to-[#0080FF] transition-colors duration-300"
                        >
                          <FaArrowRight className="text-sm" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Scrolling Text Content - Only visible on desktop */}
          <div className="hidden lg:block space-y-32 py-20">
            {ProjectData.map((project, index) => (
              <div key={index} className="h-[60vh] relative flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-10%" }}
                  className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full
                    ${activeProject === index ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "36px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="h-1 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] mb-3"
                  />
                  
                  <div className="flex flex-col gap-1 mb-3">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-transparent bg-clip-text">
                      {project.title}
                    </h2>
                    <span className="text-sm text-gray-600">{project.type}</span>
                  </div>

                  <p className="text-black/75 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="mb-4">
                      <ul className="grid grid-cols-1 gap-2">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-black/75">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF]" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black flex items-center gap-1 border border-gray-200"
                      >
                        {techIcons[tech] || <FaCode className="text-[#0066FF] text-xs" />}
                        <span className="text-xs">{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-black text-xs border border-gray-200 hover:bg-gray-200 transition-colors duration-300"
                      >
                        <FaGithub className="text-sm" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] rounded-full text-white text-xs hover:from-[#0052CC] hover:to-[#0080FF] transition-colors duration-300"
                      >
                        <FaArrowRight className="text-sm" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-20 relative">
          <div className="absolute top-0 left-0 w-32 h-1 bg-[#4776E6]"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
            {/* Text Content - Left Side */}
            <div className="lg:w-full z-10 lg:pr-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#0066FF] to-[#00A3FF]"></div>
                <p className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] inline-block text-transparent bg-clip-text font-medium mb-3 text-lg">Welcome to my portfolio</p>
              </div>
              
              <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-black mb-6 leading-tight">
                I am a <br />
                <TypingEffect text="Software Developer" className="font-bold" />
              </h1>
              
              <p className="text-black mb-8 max-w-xl text-base md:text-md leading-relaxed">
                Full-stack developer specializing in building exceptional digital experiences. 
                Transforming ideas into elegant solutions through clean code and intuitive design.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/projects" className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0052CC] hover:to-shade3 text-white hover:text-white py-3 px-8 rounded-full font-medium transition duration-300 flex items-center group">
                  View My Work
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="border border-gray-300 text-gray-700 py-3 px-8 rounded-full font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition duration-300">
                  Contact Me
                </Link>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="hidden lg:block lg:w-1/2 relative mt-12 lg:mt-0 lg:max-w-md">
             
              
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-white shadow-xl">
                <img 
                  src={pfp} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Social Media Links */}
              <div className="relative z-10 flex flex-col items-center gap-4 mt-2">
                <div className="flex justify-center items-center gap-8 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <a 
                    href="https://github.com/XEthanLynchX" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-[#0066FF] transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ethan-lynch-04a188255/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-[#0066FF] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a 
                    href="https://www.instagram.com/ethan_lynch123/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-[#0066FF] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="  shadow-md  text-gray-700 hover:text-[#0066FF] transition-colors duration-300"
                  aria-label="Resume"
                >
                  <FaFileAlt size={24} />
                </a>
                </div>
              
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section id="projects" className="py-16 md:py-24">
          <ProjectShowcase />
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start mb-12">
              <div className="flex items-center gap-3 mb-4">
                
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-black mb-6">Professional Experience</h2>
              <div className="w-48 h-[8px] bg-gradient-to-r from-[#0066FF] to-[#00A3FF]"></div>
            </div>

            <div className="space-y-12">
              {/* Freelance Experience */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-black">Freelance Web Developer / Shopify Website Manager</h3>
                    <p className="text-gray-600">PuddleJumpers | LuckyDaySigns</p>
                  </div>
                  <p className="text-[#0066FF] font-medium mt-2 md:mt-0">2024 - Present | Remote</p>
                </div>
                <ul className="space-y-3 text-black/75">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Contributed to the successful completion of e-commerce platforms, generating over $500,000 in annual revenue.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Established clear communication channels with clients, ensuring alignment on project goals and timely delivery of web projects.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Provided ongoing maintenance and updates for client websites, including SEO optimization, bug fixes, and feature enhancements, leading to improved site performance and higher conversion rates.</p>
                  </li>
                </ul>
              </div>

              {/* Customer Service Experience */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-black">Customer Service Representative</h3>
                    <p className="text-gray-600">Sports Warehouse | Alpharetta, GA</p>
                  </div>
                  <p className="text-[#0066FF] font-medium mt-2 md:mt-0">2021 - Current</p>
                </div>
                <ul className="space-y-3 text-black/75">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Engaged customers proactively, providing personalized product recommendations and valuable insights. Resulted in a significant increase in customer satisfaction and sales conversion rates while honing my communication and sales skills.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Managed high-volume calls and online inquiries, maintaining a professional and friendly demeanor while ensuring quick and effective problem resolution to enhance the customer experience.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex-shrink-0"></div>
                    <p>Dedicated time and effort to curating a comprehensive knowledge store of products and services, actively staying updated on industry trends and advancements. It has become an extensive and valuable customer resource and has enhanced my field expertise.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        

        {/* About Me Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Me Text */}
            <div>
              <div>
                <h2 className="text-xl font-bold text-black">About Me</h2>
                <div className="w-48 h-[8px] bg-gradient-to-r from-[#0066FF] to-[#00A3FF] mb-8"></div>

                <p className="text-black/80 leading-relaxed mb-6">
                  I'm a passionate software developer and engineer dedicated to building clean, efficient, and user-friendly applications. 
                  With a strong foundation in both front-end and back-end technologies, I enjoy solving complex problems and bringing creative ideas to life. 
                  I stay committed to continuous learning, keeping up with new tools and best practices to deliver scalable, high-quality solutions.
                </p>
                <p className="text-black/80 leading-relaxed mb-12">
                  My expertise spans the full development stack—from crafting intuitive user interfaces to implementing robust backend systems. 
                  I focus on delivering high-performance solutions that blend clean architecture with exceptional user experiences, helping businesses streamline operations 
                  and drive digital transformation.
                </p>

                {/* Expertise Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <FaCode className="text-[#0066FF] text-xl" />
                    </div>
                    <h3 className="text-md font-semibold text-black mb-2">Clean and Scalable Code</h3>
                    <p className="text-black/80">
                      Writing efficient, maintainable code with a focus on clarity, performance, and scalability across the full development stack.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <FaUsers className="text-[#0066FF] text-xl" />
                    </div>
                    <h3 className="text-md font-semibold text-black mb-2">Collaboration & Communication</h3>
                    <p className="text-black/80">
                      Working closely with teams, designers, and stakeholders to build solutions, share ideas, and continuously learn from others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education and Focus Areas */}
            <div className="space-y-8 lg:mt-[52px]">
              {/* Education */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <FaGraduationCap className="text-2xl text-[#0066FF]" />
                  <h3 className="text-lg font-semibold text-black">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#0066FF] pl-4">
                    <h4 className="font-medium text-black">Kennesaw State University</h4>
                    <p className="text-sm text-black/70 mb-1">Bachelor of Science in Computer Science</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#0066FF]">May 2027</span>
                      <span className="text-green-600 font-medium">3.8 GPA</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#0066FF] pl-4">
                    <h4 className="font-medium text-black">Coding Dojo at Colorado Technical University</h4>
                    <p className="text-sm text-black/70 mb-1">Full-Stack Developer Certificate</p>
                    <span className="text-sm text-[#0066FF]">July 2023</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-semibold mb-4 text-black">Current Focus</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FaLaptopCode className="text-[#0066FF]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Real-World Solutions</h4>
                      <p className="text-sm text-black/70">Creating applications to solve real-world problems and make a positive impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FaCode className="text-[#0066FF]" />
                        </div>
                    <div>
                      <h4 className="font-medium text-black">Modern Technologies</h4>
                      <p className="text-sm text-black/70">Exploring and implementing cutting-edge tech solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="stack" className="py-16 md:py-24 bg-white text-black rounded-3xl px-8 border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Technologies I use.</h2>
          <p className="text-gray-600 mb-8 text-sm">Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>
          
          <div className="space-y-6">
            {/* Languages */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600">Languages:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaPython className="text-[#3776AB] text-lg" />
                  <span className="text-sm">Python</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiJavascript className="text-[#F7DF1E] text-lg" />
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaJava className="text-[#007396] text-lg" />
                  <span className="text-sm">Java</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiDart className="text-[#0175C2] text-lg" />
                  <span className="text-sm">Dart</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaHtml5 className="text-[#E34F26] text-lg" />
                  <span className="text-sm">HTML</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaCss3Alt className="text-[#1572B6] text-lg" />
                  <span className="text-sm">CSS</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600">Frameworks & Libraries:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiFlask className="text-black text-lg" />
                  <span className="text-sm">Flask</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiReact className="text-[#61DAFB] text-lg" />
                  <span className="text-sm">React</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiExpress className="text-black text-lg" />
                  <span className="text-sm">Express.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiAxios className="text-[#5A29E4] text-lg" />
                  <span className="text-sm">Axios</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiNodedotjs className="text-[#339933] text-lg" />
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiDjango className="text-[#092E20] text-lg" />
                  <span className="text-sm">Django</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiFlutter className="text-[#02569B] text-lg" />
                  <span className="text-sm">Flutter</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiNextdotjs className="text-black text-lg" />
                  <span className="text-sm">NextJS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiTailwindcss className="text-[#06B6D4] text-lg" />
                  <span className="text-sm">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600">Databases:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiMongodb className="text-[#47A248] text-lg" />
                  <span className="text-sm">MongoDB</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiMysql className="text-[#4479A1] text-lg" />
                  <span className="text-sm">MySQL</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiSqlite className="text-[#003B57] text-lg" />
                  <span className="text-sm">SQLite</span>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600">Tools & Technologies:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiVisualstudiocode className="text-[#007ACC] text-lg" />
                  <span className="text-sm">VS Code</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiSpring className="text-[#6DB33F] text-lg" />
                  <span className="text-sm">Spring Tool Suite</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaAws className="text-[#FF9900] text-lg" />
                  <span className="text-sm">AWS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiGooglecloud className="text-[#4285F4] text-lg" />
                  <span className="text-sm">Google App Engine</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiHeroku className="text-[#430098] text-lg" />
                  <span className="text-sm">Heroku</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaGitAlt className="text-[#F05032] text-lg" />
                  <span className="text-sm">Git</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaGithubAlt className="text-black text-lg" />
                  <span className="text-sm">GitHub</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <FaGitlab className="text-[#FCA121] text-lg" />
                  <span className="text-sm">GitLab</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiFirebase className="text-[#FFCA28] text-lg" />
                  <span className="text-sm">Firebase</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <SiVercel className="text-black text-lg" />
                  <span className="text-sm">Vercel</span>
                </div>
              </div>
            </div>
        </div>
          
          <p className="text-gray-600 mt-6 text-sm text-center">...and many more!</p>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start mb-12">
              <h2 className="text-3xl md:text-2xl font-bold text-black mb-6">Get In Touch</h2>
              <div className="w-48 h-1 bg-gradient-to-r from-[#0066FF] to-[#00A3FF]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <p className="text-black/75 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <FaEnvelope className="text-[#0066FF]" />
                    </div>
                    <a href="mailto:ethanlynch72@gmail.com" className="text-black/75 hover:text-[#0066FF] transition-colors">
                      ethanlynch72@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <FaLinkedin className="text-[#0066FF]" />
                    </div>
                    <a href="https://www.linkedin.com/in/ethan-lynch-04a188255/" target="_blank" rel="noopener noreferrer" className="text-black/75 hover:text-[#0066FF] transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <form 
                  className="space-y-6"
                  action="https://formspree.io/f/mdknnene"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    fetch("https://formspree.io/f/mdknnene", {
                      method: "POST",
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    }).then(response => {
                      if (response.ok) {
                        alert("Message sent successfully!");
                        e.target.reset();
                      } else {
                        alert("Error sending message. Please try again.");
                      }
                    }).catch(error => {
                      alert("Error sending message. Please try again.");
                    });
                  }}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none"
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white py-3 px-6 rounded-lg font-medium hover:from-[#0052CC] hover:to-[#0080FF] transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <FaArrowRight className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    );
};

export default Home;
