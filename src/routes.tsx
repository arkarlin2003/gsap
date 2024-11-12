import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import GeneralError from "./pages/errors/general-error.tsx";

const App = lazy(() => import("./layouts/App.tsx"));
const FirstAnimation = lazy(()=>import('./pages/first-animation'))
const ControlCallback = lazy(()=> import('./pages/control-callback'))
const Landing = lazy(() => import('./pages/landing'))
const Stagger = lazy(() => import('./pages/stagger'))

export default  function Router(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<App/>} errorElement={<GeneralError/>}>
                    <Route index element={<Landing/>}/>
                    <Route path={'first-animation'} element={<FirstAnimation/>}/>
                    <Route path={'control-callback'} element={<ControlCallback/>}/>
                    <Route path={'stagger'} element={<Stagger/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}