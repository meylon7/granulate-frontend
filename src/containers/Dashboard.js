import React from 'react'
import { useRoutes } from "hookrouter";
import Home from '../components/home'
import Nav from '../components/Nav'
import SideBar from '../components/Sidebar/Sidebar'
import NotFound from '../components/notfound'
import ChartComponent from '../components/Chart'
import Service from "../components/service"
const Dashboard = () => {
    const routes = {
        "/": () => <Home />,
        "/chart": () => <ChartComponent />,
        "/service": () => <Service />
      };
      const match = useRoutes(routes);
    return (
        <div>
            <Nav />
            <SideBar />
            <div>
                {match || <NotFound />}                
              </div>
        </div>
    )
}

export default Dashboard
