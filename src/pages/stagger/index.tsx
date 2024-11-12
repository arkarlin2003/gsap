import {useEffect} from "react";
import gsap from "gsap";

const Stagger = () => {


    useEffect(() => {
        const tl = gsap.timeline({
            yoyo:true,
            repeat:-1,
            repeatDelay:0.5
        })
        tl.to('.box',{
            duration:1,
            scale:0.1,
            y: 60,
            ease: "power1.inOut",
            stagger:{
                grid:[5,13],
                amount:1.5,
                from:'center',
                axis:'x',
                ease:'power2.in',
            }
        })
    }, []);
    return (
        <div className='flex flex-wrap gap-3 mx-auto'>
            {
                new Array(64).fill(0).map((_, i) => (
                    <div key={i} className='box w-12 h-12 rounded-lg bg-lime-500'></div>
                ))
            }
        </div>
    )
}

export default Stagger