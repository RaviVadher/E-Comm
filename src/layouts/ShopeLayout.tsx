import {Outlet} from 'react-router-dom';


const ShopeLayout = ()=>
{ 
    const sharedShopData ={
        currency :'INR',
        price :50,
        storeName:'My Awsome shop',
    }
    return(
        <div>
            <Outlet context={sharedShopData}/>
        </div>
      
    )
}

export default ShopeLayout;