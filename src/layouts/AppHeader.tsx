import {Link} from "react-router-dom";
import {useEffect} from "react";
import gsap from "gsap";
const AppHeader = () => {
    useEffect(() => {
        gsap.fromTo('.brand',{opacity:0,scale:0.3},{opacity:1,duration:1.5,scale:1,ease:'back'});
    }, []);
    return (
        <nav className={'flex items-center p-2 px-3 justify-between w-full'}>
            <div>
                <h1 className={'text-xl font-semibold brand'}><Link to="/"> Gsap Learning</Link>
                </h1>
            </div>
            {/*<ul className={'flex items-center gap-2 '}>*/}
            {/*    <li className={'text-sm hover:text-orange-500 hover:duration-300 text-gray-600 hover:font-medium hover:transition-all hover:ease-out'}>*/}
            {/*        <Link to={'/first-animation'}>First Animation</Link></li>*/}
            {/*    <li className={'text-sm hover:text-orange-500 hover:duration-300 text-gray-600 hover:font-medium hover:transition-all hover:ease-out'}>*/}
            {/*        <Link to={'/control-callback'}>Control callback</Link></li>*/}
            {/*</ul>*/}
        </nav>
    )
}

export default AppHeader