import {useEffect} from "react";
import gsap from "gsap";

const RevealAnimation = () => {


    useEffect(() => {


        const ld = gsap.timeline()
        ld.fromTo('.img1', {height: 0}, {height: 256, duration: 1.5})
            .fromTo('.con', {height: 0}, {height: 40}, "-=1.2")
            .fromTo('.lt', {y: 40}, {y: 0}, '-=0.8')
            .fromTo('.img3', {y: '100%'}, {y: 0, duration: 1})
            .fromTo('.img2', {height: 0}, {height: 256}, "-=0.5")
            .to('.img3', {y: '-100%', duration: 1})
            .to('.l-container', {autoAlpha: 0, duration: 0.8, delay: 0.5})
            .fromTo('.title', {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0})
            .to('.line', {height: 250}, "-=0.1")
            .fromTo('.img', {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0}, "-=0.1")
            .fromTo('.button', {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0}, "-=0.1")
            .fromTo('li', {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0, stagger: 0.25}, "-=0.1")

    }, []);
    return (
        <div className='relative'>
            <div className={'l-container w-full h-screen bg-amber-500 absolute  z-50 flex justify-center items-center'}>
                <div className={'relative'}>
                    <div className={'relative overflow-hidden w-64 h-64 flex justify-center items-center'}>
                        <img src={'https://i.pinimg.com/474x/49/ba/b4/49bab4bf047d107d783b0acacc33da80.jpg'}
                             className={'img1 w-64 object-cover rounded-lg absolute '}/>
                        <img src={'https://i.pinimg.com/474x/54/51/2a/54512a6a5e54483f2a6d17294d347d53.jpg'}
                             className={'img2 w-64 object-cover rounded-lg absolute '}/>
                        <div className={'img3 w-64 bg-red-500 absolute h-64'}></div>
                    </div>
                    <div
                        className={'con w-24 absolute -left-10 overflow-hidden -bottom-3 rounded bg-amber-200 text-center flex items-center justify-center'}>
                        <h2 className={'text-sm lt'}>Hello World</h2>
                    </div>
                </div>

            </div>
            <div
                className={'bg-reveal-bg relative  w-full h-screen  bg-cover before:w-full before:h-full before:content[""] before:bg-black/30 before:absolute '}>
                <nav className={'relative z-40 h-16 '}>
                    <ul className={'flex h-full items-center justify-center gap-3'}>
                        <li>
                            <button className='py-1 px-3 border rounded text-white text-sm bg-white/20'>Home</button>
                        </li>
                        <li>
                            <button className='py-1 px-3 border rounded text-white text-sm bg-white/20'>About</button>
                        </li>
                        <li>
                            <button className='py-1 px-3 border rounded text-white text-sm bg-white/20'>Contact</button>
                        </li>
                    </ul>
                </nav>
                <div className='flex flex-col h-full space-y-7 items-center py-20 relative z-40'>
                    <h2 className={'title text-white text-5xl font-bold font-serif'}>Hello World</h2>
                    <div className='line  w-[2px] bg-white'></div>
                    <img src={'/85fe0e7752923f55c6adf13c5fc75557-removebg-preview.png'} className={'img'} width={70}/>
                    <button
                        className='uppercase py-1 px-3 border rounded text-white text-sm bg-white/20 button'>Discover
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RevealAnimation