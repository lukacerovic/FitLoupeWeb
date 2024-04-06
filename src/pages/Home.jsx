import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";
import { RxCalendar } from "react-icons/rx";
import { FaVideo } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

export default function Home() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollRef = useRef(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000); // Promenio sam interval na 5 sekundi radi bržeg demonstriranja animacije

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            const refPosition = scrollRef.current.offsetTop;
            if (currentPosition >= refPosition) {
                const gradientDivHeight = Math.max(10, Math.min(100, 10 + (currentPosition - refPosition) / 10));
                setScrollHeight(gradientDivHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollRef]);

  return (
    <div className='bg-[#292929]'>
        <NavBar/>
        <div style={{position: 'relative', zIndex:1000, overflow: 'hidden', width: '100%', height: '70vh', boxShadow: '-15px 14px 40px 40px rgba(0, 0, 0, 0.6)' }}>
            <video controls autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover' style={{ zIndex: '-1', objectFit: 'cover' }}>
                <source src="../public/videos/FitLoupeBackgroundVideo.mp4" type="video/mp4"/>
            </video> 
        </div>
        <div className='flex flex-col text-white pt-[15vh] gap-[10vh]'>
            <h1 className='text-8xl text-center'>Monetize Your Helth</h1>
            <p className='w-[70%] text-center self-center text-4xl' style={{ lineHeight: '2em' }}>
            FitLoupe serves as a modern alternative to traditional tools, providing trainers with a user-friendly platform to create personalized workout plans, track client progress, manage schedules, and facilitate seamless communication.
            </p>
            <div className='progress-container'>
                <div className={`progress-item ${activeIndex === 0 ? 'active' : ''}`} style={{ order: 2, transform: `translateX(${activeIndex === 0 ? '110%' : activeIndex === 1 ? '0%' : '-110%'}) scale(${activeIndex === 1 ? 1 : 0.7})`, opacity: `${activeIndex === 1 ? 1 : 0.4}` }}>
                    <img src="../public/images/clientInfo.png" alt="Client Info" />
                    <div className='pt-10 flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Kalendar ce ovde</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Organize Schedule
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Client Scheduling Features.
                                </p>
                            </span>
                          
                        
                        </div>
                    </div>
                </div>
                <div className={`progress-item ${activeIndex === 1 ? 'active' : ''}`} style={{ order: 3, transform: `translateX(${activeIndex === 0 ? '-240%' : activeIndex === 1 ? '-20%' : '-125%'}) scale(${activeIndex === 2 ? 1 : 0.7})`, opacity: `${activeIndex === 2 ? 1 : 0.4}` }}>
                    <img src="../public/images/progres.png" alt="Progress" />
                    <div className='pt-10 flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Track Progress</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Graphic Progress Display
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Progress Visualization
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                    Identify Patterns In Progress
                                </p>
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className={`progress-item ${activeIndex === 2 ? 'active' : ''}`} style={{ order: 1, transform: `translateX(${activeIndex === 0 ? '130%' : activeIndex === 1 ? '20%' : '240%'}) scale(${activeIndex === 0 ? 1 : 0.7})`, opacity: `${activeIndex === 0 ? 1 : 0.4}` }}>
                    <img src="../public/images/plan.png" alt="Plan" />
                    <div className='pt-10 flex flex-col w-full pl-5'>
                        <h1 className='text-6xl text-center pb-5'>Fast and Simple Plan</h1>
                        <div className='text-3xl pt-5'>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Easy Workout Creation
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Remote Training
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Duplicate and Edit Plan
                                </p>
                            </span>
                            <span className='flex items-center gap-[5%] pb-5'>
                                <FaSearch color='cyan'/>
                                <p>
                                Client Workout Archives
                                </p>
                            </span>
                       
                        </div>
                    </div>
                </div>
            </div>              
        </div>
        <div className='mt-[30vh] ml-[5vh]'>
            <h1 className='text-white text-8xl'>Key Benefits: </h1>
        </div>
        <div ref={scrollRef} className='flex h-[100vh]  px-[10%] py-[30vh]'>
            <div className='flex flex-col w-[49%] justify-between pt-[20vh] gap-[25vh]'>
                <div className='p-[2%] bg-[#0CC0DF] w-[80%] rounded-3xl flex items-center gap-[5%]'>
                    <HiOutlineClipboardDocumentList color='white' size={120}/>
                    <div>
                       <h1>Easy Workout Plan</h1>
                       <p>Training plan created in couple of seconds</p> 
                       <p>All trainings in one place</p> 
                       <p>500+ Exercise</p> 
                    </div>
                </div>
                <div className='p-[2%] bg-[#0CC0DF] w-[80%] rounded-3xl flex items-center gap-[5%] '>
                    <RxCalendar color='white' size={120}/>
                    <div>
                        <h1>Calendar</h1>
                        <p>Keep your schedule organized</p> 
                        <p>Monetize a calenadr of you client as well</p> 
                    </div>
                    
                </div>
                <div className='p-[2%] bg-[#0CC0DF] w-[80%] rounded-3xl flex items-center gap-[5%] '>
                    <TiMessages color='white' size={120}/>
                    <div>
                        <h1>Chat</h1>
                        <p>Keep you profesional conversation in one place</p>
                    </div>
                    
                </div>
            </div>
            <div className='w-[1%] rounded-full h-[100vh] bg-white'>
                <div className='rounded-full h-[10vh]' style={{background:'linear-gradient(to bottom, #5DE0E6, #004AAD)', height: `${scrollHeight}vh`}}></div>
            </div>
            <div className='flex flex-col items-end justify-between w-[49%] gap-[25vh] pt-[40vh]'>
                <div className='p-[2%] bg-[#0CC0DF] w-[80%] rounded-3xl flex items-center gap-[5%] '>
                    <GiProgression color='white' size={120}/>
                    <div>
                        <h1>Graphic of Progress</h1>
                        <p>Presentable progress over period of time</p> 
                        <p>Motivated Clients</p> 
                        <p>Omogucava ukazivanje na dobre i lose  rutine</p> 
                    </div>
                </div>
                <div className='p-[2%] bg-[#0CC0DF] w-[80%] rounded-3xl flex items-center gap-[5%] '>
                    <FaVideo color='white' size={120}/>
                    <div>
                        <h1>Video Galery</h1>
                        <p>Video galery for each client </p> 
                        <p>Helps in remote work with clients </p> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='mt-[30%] flex justify-between px-[5%]'>
            <div>
                <h1>Text</h1>
                <p>Pojasnjenje</p>
            </div>
            <img src='../public/images/app2.jpeg' className='w-[30%]'/>
        </div>
        <div className='bg-[#181818] h-screen'>

        </div>
    </div>
  )
}
