import {useEffect} from "react";
import gsap from "gsap";


const Loading = () => {

    useEffect(() => {

        const tl = gsap.timeline({
            repeat:-1,
        })

        tl.from('.li',{y:300,duration:0.75,stagger:0.75,autoAlpha:0})
        tl.to('.li',{y:-100,duration:0.75,stagger:0.75,autoAlpha:0},0.75)
    },[])
    return (
        <>
            <div>
                <ul>
                    <li className={'li flex space-x-5 text-3xl items-center'}>
                        <h2>1</h2>
                        <h2>🎊</h2>
                    </li>
                    <li className={'li flex space-x-5 text-3xl items-center'}>
                        <h2>2</h2>
                        <h2>🎎</h2>
                    </li>
                    <li className={'li flex space-x-5 text-3xl items-center'}>
                        <h2 >3</h2>
                        <h2 >📱</h2>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Loading