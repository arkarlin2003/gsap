import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <nav className={'flex items-center py-2 justify-between w-full'}>
            <div>
                <h1 className={'text-xl font-semibold'}> Gsap Learning
                </h1>
            </div>
            <ul className={'flex items-center gap-2'}>
                <li className={'text-sm hover:text-orange-500 hover:duration-300 text-gray-600 hover:font-medium hover:transition-all hover:ease-out'}><Link to={'/first-animation'}>First Animation</Link></li>
            </ul>
        </nav>
    )
}

export default AppHeader