import { BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";
import { PrivateRoute } from "./privaterouting";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import Dashboard from "../pages/dashboard/dashboard";
import Navbar from "../component/Navbar";
import { PublicRoutes } from "./PublicRoutes";



export const RouteLink= ()=>{

    const item = [
        {path:"/", Component:Login},
        {path:"/register", Component: Register},
        
        
    ]
    
    const item2 =[
        {path:"/dash", Component:Dashboard}
    ]
    
    return(
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                {
                    item.map((item)=>{
                        return(<Route path={item.path} element= { <PublicRoutes Component={item.Component} />}/>)

                    })
                }

                {
                    item2.map((item)=>{
                        return(<Route path={item.path} element= { <PrivateRoute Component={item.Component} />}/>)
                    })
                }
               
                </Routes>

            </BrowserRouter>
        </>
    )
}