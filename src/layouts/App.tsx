import AppHeader from "./AppHeader.tsx";
import {Outlet} from "react-router-dom";

export default function App() {

    return (
        <main className={'max-w-5xl container mx-auto'}>
            <AppHeader/>
            <div className={'p-7'}>
                <Outlet/>
            </div>
        </main>
    )
}