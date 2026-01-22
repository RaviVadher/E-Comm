import { useOutletContext } from "react-router-dom";
const Product = ()=>{
    const sharedShopData = useOutletContext();
    return (
        <h1 className="flex items-center justify-center min-h-screen text-4xl">{sharedShopData.price}</h1>
    );
}

export default Product;