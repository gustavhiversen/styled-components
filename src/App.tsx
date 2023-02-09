/*import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


export const Wrapper = () => {
    return (
        <div id={'root'} >
            Wrapper
        </div>
    )
}

export const Child = () => {
    return (
        <div>CHILD</div>
    )
}
export const Root = () => {
    return (
        <div>ROOT</div>
    )
}

function App() {
    const router = createBrowserRouter(
        [
            {
                element: <Wrapper/>,
                children: [
                    {
                        path: '/',
                        element: <Root/>,
                    },
                    {
                        path: 'child',
                        element: <Child/>,
                    }
                ],
                errorElement: <div>ERROR ELEMENT</div>
            },
        ],
        {
            basename: "",
        }
    )

    return <RouterProvider router={router}/>
}*/

import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    NavLink, Outlet,
    Route,
    RouterProvider
} from "react-router-dom";
import React from "react";
import { Root} from "./components/Root";
import {Wrapper} from "./components/Wrapper";


export const Child = () => {
    return (
        <div>CHILD</div>
    )
}


export const ErrorElement = () => <div>ERROR</div>

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Wrapper/>} errorElement={<ErrorElement/>}>
            <Route path={"styled-components"} element={<Root/>}/>
            <Route path={"styled-components/child"} element={<Child/>}/>
        </Route>
    )
)

function App () {
    return <RouterProvider router={router}/>
}

export default App;
