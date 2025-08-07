
'use client'; 
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
         <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
                  <div className="bg-purple-600 p-2 rounded-lg text-white font-bold text-xl">D</div>
          <span className="text-white text-xl font-bold">Dimension</span>
        </div>

 
        <div className="hidden md:flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
             <a href="#" className="hover:text-white transition-colors duration-300">Careers</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Blog</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Changelog</a>
                   <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Join waitlist
          </button>
        </div>

        
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
               </svg>
                 </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md text-gray-300 px-4 py-4 space-y-4">
          <a href="#" className="block hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="block hover:text-white transition-colors duration-300">Careers</a>
          <a href="#" className="block hover:text-white transition-colors duration-300">Blog</a>
          <a href="#" className="block hover:text-white transition-colors duration-300">Changelog</a>
          <button className="w-full bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Join waitlist
          </button>
        </div>
      )}
    </nav>
  );
};


const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${className} transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </section>
  );
};


export default function Home() {
  return (
    <div className={`bg-[#0A0C16] text-white min-h-screen ${inter.className}`}>
     
      <div className="fixed inset-0 z-0 bg-[url('https://tailwindui.com/img/grid.svg')] bg-repeat opacity-5"></div>
      <div className="fixed inset-0 z-10 bg-gradient-to-t from-[#0A0C16] via-transparent to-[#0A0C16]"></div>
      
      
      <Navbar />

      <main className="relative z-20">
       
        <header className="relative pt-32 pb-24 text-center overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
                       The new standard for collaboration.
                           </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-fade-in-up delay-200">
              Just to make work feel exciting again.
            </p>
                   <div className="mt-8 flex justify-center space-x-4 animate-fade-in-up delay-400">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                Join waitlist
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
                Contact sales
              </button>
            </div>
            
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 200 C300 0, 700 0, 900 200"
                stroke="#6D28D9"
                strokeWidth="2"
                strokeOpacity="0.2"
                className="animate-draw-path"
                style={{ animationDelay: '1s', strokeDasharray: '2000', strokeDashoffset: '2000' }}
              />
              <path
                     d="M400 400 C600 200, 1000 200, 1200 400"
                stroke="#6D28D9"
                   strokeWidth="2"
                strokeOpacity="0.2"
                className="animate-draw-path"
                style={{ animationDelay: '1.5s', strokeDasharray: '2000', strokeDashoffset: '2000' }}
              />
            </svg>
          </div>
        </header>

     
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 text-center">
               <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Mission</h2>
                 <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              We believe software development is broken - thousands of tools, hundreds of tabs, and a lack of integration results in a slow, painful development process and a poor developer experience.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mt-4">
              We're crafting a delightful collaboration experience that brings back magic into the creation of software.
            </p>
          </div>
        </AnimatedSection>

        
                          <AnimatedSection className="py-24">
          <div className="container mx-auto px-4">
                  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              The most complete developer experience.
            </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2">Chat</h3>
                <p className="text-gray-400">
                  Collaborate with team members using our powerful devtool integrations.
                </p>
              </div>
              
                     <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2">Deployments</h3>
                   <p className="text-gray-400">
                  View, manage, and deploy your applications directly from Dimension.
                </p>
              </div>
             
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                     <h3 className="text-xl font-bold mb-2">Code Explorer</h3>
                <p className="text-gray-400">
                  View and edit your repository directly from Dimension.
                 </p>
              </div>
          
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                   <h3 className="text-xl font-bold mb-2">Tasks</h3>
                <p className="text-gray-400">
                  View, track, and edit GitHub Issues directly from Dimension - with end-to-end sync.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2">Inbox</h3>
                <p className="text-gray-400">
                  Stay up-to-date on the latest information within your organization.
                </p>
                </div>
              
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2">AI</h3>
                <p className="text-gray-400">
                  AI to make you 10x faster on everyday workflows - baked into Dimension.
                </p>
                </div>
            </div>
          </div>
        </AnimatedSection>
        

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Collaborate on everything.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              From deployments to tasks, work with your team every step of the way.
            </p>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
