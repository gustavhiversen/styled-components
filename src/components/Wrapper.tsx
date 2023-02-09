import {NavLink, Outlet} from "react-router-dom";
import React from "react";

export const Wrapper = () => {
    return (
        <div className={'wrapper'} >
            <header>
                <nav>
                    <h1>Router</h1>
                    <div className={'wrapper-link-container'}>
                        <NavLink to="/styled-components">Root</NavLink>
                        <NavLink to="/styled-components/child">child</NavLink>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}