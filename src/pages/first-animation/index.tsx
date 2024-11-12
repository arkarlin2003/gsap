import {useEffect} from "react";
import gsap from "gsap";


const FirstAnimation = () => {


    useEffect(() => {
        const tl = gsap.timeline({repeat:-1,yoyo:true});
        tl.fromTo('.logo',{scale:0.3},{duration:1.5,opacity:1,scale:1,ease:'bounce'})
        tl.fromTo('.circle',{opacity:0,y:()=> Math.random() * 400 - 200},{duration:0.5,opacity:1,y:0,stagger:{
            each:0.25,
            }})
        tl.addLabel('circleOutro','+=1')
        tl.to('.circle',{opacity:0,x:300,ease:'power3.inOut',stagger:-0.25},'circleOutro')
    }, []);


    return (
        <main className={'w-full h-full items-center flex space-x-10'}>
            <img src={'/tweenmax.thumb.png.c849c5b56c6752e3f2276b82ee702625.png'} className={'w-32 h-32 logo'} alt={''}/>
            <div className={'w-full flex gap-7'}>
                <div className={'w-20 h-20 rounded-full outline outline-black circle bg-amber-500'}></div>
                <div className={'w-20 h-20 rounded-full outline outline-black circle bg-cyan-500'}></div>
                <div className={'w-20 h-20 rounded-full outline outline-black circle bg-emerald-500'}></div>
                <div className={'w-20 h-20 rounded-full outline outline-black circle bg-fuchsia-500'}></div>
                <div className={'w-20 h-20 rounded-full outline outline-black circle bg-lime-500'}></div>
            </div>

        </main>
    )
}

export default FirstAnimation;