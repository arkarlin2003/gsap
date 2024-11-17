import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const ScrollPage = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.a',
                start:'top center',
                endTrigger:'.c',
                end:'top 100px',
                markers:true,
                pin:true,
                scrub:3,
                toggleActions:'restart pause reverse pause'
            },
        })

        tl.to('.b',{
            x:700,
            rotate:360,
            duration:3
        }).to('.b',{
            backgroundColor:'orange',
            duration:1.5,
        }).to('.b',{
            x:0,
            rotate:-360,
            duration:2,
        })

    }, []);
    return (
        <div className={'h-[1000px] mb-[1000px] w-full flex flex-col justify-around'}>
            <div className={'a w-20 rounded-lg h-20 bg-red-500'}></div>
            <div className='relative'>
                <div className={'ghost w-20 rounded-lg h-20 bg-gray-500 '}>
                </div>
                <div className={'b w-20 rounded-lg h-20 bg-blue-500 absolute top-0'}></div>
            </div>

            <div className={'c w-20 rounded-lg h-20 bg-green-500'}></div>
        </div>
    )
}


export default ScrollPage