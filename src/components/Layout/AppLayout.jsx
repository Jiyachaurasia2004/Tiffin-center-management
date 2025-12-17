import  Header  from "../UI/Header";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
    return (
    <>
    <div>
        <Header />
        <div  className="space-y-8">
              <Outlet />
        </div>
     
      <Footer /> 
    </div>
      
    </>
    );
};