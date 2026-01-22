import { Outlet,Link} from "react-router-dom";

const AppLayout = ()=>
{
    return(
         <>
        <header>
           
       
      
        <nav className="bg-blue-400  shadow fixed top-0 left-0 w-full z-10">
            <div className="flex items-center justify-between px-6 py-3">
            <div><h2> My E-commarce Store</h2>
            </div>

             <Link to="/">Home</Link> 
             <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>

        
            </div>
            
         </nav>
        </header>

         <main>
        <Outlet/>
         </main>
        </>
    )
}

export default AppLayout;