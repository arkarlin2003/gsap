import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import GeneralError from "./pages/errors/general-error.tsx";

const App = lazy(() => import("./layouts/App.tsx"));
const FirstAnimation = lazy(()=>import('./pages/first-animation'))

export default  function Router(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<App/>} errorElement={<GeneralError/>}>
                    <Route path={'first-animation'} element={<FirstAnimation/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}