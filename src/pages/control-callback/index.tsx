import {useEffect} from "react";
import gsap from "gsap";
const ControlCallback = () => {
    useEffect(() => {
        gsap.set('.information',{yPercent:100})
        gsap.utils.toArray<HTMLElement>('.Container').forEach((container)=>{
            const tl = gsap.timeline({paused:true})
            const info = container.querySelector('.information');
            const silhouette = container.querySelector('.silhouette .cover')
            tl.to(info,{yPercent:0}).to(silhouette,{opacity:0},0)
            container.addEventListener('mouseenter',()=>{
                tl.timeScale(1).play()
            })
            container.addEventListener('mouseleave',()=>{
                tl.timeScale(2).reverse()
            })
        })
    }, []);
    return (<main className={'w-full grid grid-cols-2 md:grid-cols-3 gap-7'}>
        <div className={'Container'}>
            <div className={'silhouette'} id={'Bulbasaur'}>
                <div className={'cover'}></div>
            </div>
            <div
                className={'w-44 h-56 border overflow-hidden relative rounded-lg shadow-sm flex items-center justify-center'}>
                <h1 className={'text-2xl font-bold'}>Who</h1>
                <div
                    className={'information absolute top-0 left-0 w-full h-full border-y-8 border-green-400 rounded-t-lg rounded-b-lg bg-white'}>
                    <h1 className={'text-lg text-center py-2 border-b-2 border-dashed border-green-400'}>Bulbasaur</h1>
                    <div className={'p-2 text-sm leading-tight'}>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking
                            up the sun's rays, the seed grows progressively larger.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={'Container'}>
            <div className={'silhouette'} id={'Charmander'}>
                <div className={'cover'}></div>
            </div>
            <div
                className={'w-44 h-56 border overflow-hidden relative rounded-lg shadow-sm flex items-center justify-center'}>
                <h1 className={'text-2xl font-bold'}>Who</h1>
                <div
                    className={'information absolute top-0 left-0 w-full h-full border-y-8 border-green-400 rounded-t-lg rounded-b-lg bg-white'}>
                    <h1 className={'text-lg text-center py-2 border-b-2 border-dashed border-green-400'}>Bulbasaur</h1>
                    <div className={'p-2 text-sm leading-tight'}>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking
                            up the sun's rays, the seed grows progressively larger.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={'Container'}>
            <div className={'silhouette'} id={'Squirtle'}>
                <div className={'cover'}></div>
            </div>
            <div
                className={'w-44 h-56 border overflow-hidden relative rounded-lg shadow-sm flex items-center justify-center'}>
                <h1 className={'text-2xl font-bold'}>Who</h1>
                <div
                    className={'information absolute top-0 left-0 w-full h-full border-y-8 border-green-400 rounded-t-lg rounded-b-lg bg-white'}>
                    <h1 className={'text-lg text-center py-2 border-b-2 border-dashed border-green-400'}>Bulbasaur</h1>
                    <div className={'p-2 text-sm leading-tight'}>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking
                            up the sun's rays, the seed grows progressively larger.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>)
}

export default ControlCallback