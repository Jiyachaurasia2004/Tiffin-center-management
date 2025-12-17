import  Header  from "../UI/Header";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";
import DashBoard from "../../dashborad/DashBoard";
export const AppLayout = () => {
    return (
    <>
    <div>
        <Header />
     
        <div  className="space-y-8">
              <Outlet />
                <Footer /> 
        </div>
     
    
    </div>
      
    </>
    );
};