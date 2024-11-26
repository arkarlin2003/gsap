import {Link} from "react-router-dom";
import {useEffect} from "react";
import gsap from "gsap";

const Landing = () => {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo('.nav-item', {opacity: 0, y: -200}, {
            opacity: 1,
            duration: 1.3,
            delay: 0.3,
            y: 0,
            stagger: -0.25,
            ease: 'bounce'
        })
    }, []);
    return (
        <div className={'mt-20 flex items-center'}>
            <ul className={'flex flex-col gap-3 w-1/2 md:w-1/3 mx-auto'}>
                {
                    navLists.map((nav) => (
                        <li key={nav.href}
                            className={'nav-item text-sm py-2 px-3 text-center rounded-lg bg-gray-200 hover:text-orange-500 hover:duration-300 text-gray-600 hover:font-medium hover:transition-all hover:ease-out'}>
                            <Link to={nav.href}>{nav.title}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Landing


const navLists = [
    {
        title: 'First Animation',
        href: 'first-animation'
    },
    {
        title: 'Control Callback',
        href: 'control-callback'
    },
    {
        title: 'Stagger',
        href: 'stagger'
    },
    {
        title: 'Scroll tigger',
        href: 'scroll-tigger'
    },
    {
        title: 'Loading',
        href: 'loading'
    },
    {
        title: 'Reveal Animation',
        href: 'reveal-animation'
    },
    {
        title: 'Slider',
        href: 'slider'
    },
]