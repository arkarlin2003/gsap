import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Routes from './routes'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import GeneralError from "./pages/errors/general-error.tsx";


const router = createBrowserRouter(createRoutesFromElements(<Route path={'/*'} element={<Routes/>} errorElement={<GeneralError/>}/>))


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
