import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import { getProdById } from "../../api/Api";
interface Product{
    id:number;
    title:string;
    category:string;
    price:number;
    description:string;
}

const ProductDetail = ()=>{
    const {productId} = useParams<{productId:string}>();
     const {data,isLoading,error }=useQuery<Product>({
        queryKey:["product",productId],
        queryFn: ()=> getProdById(productId as string),
     });

    // const data = getProdById(productId!);

     if(isLoading) return <h2>Loading</h2>
     if(error) return <p>Error</p>
    return (

        <div>
            <h2> {data.title}</h2>
            <p>{data.category}</p>
            <p>
                {data.price}
            </p>
            <p> {data.description}</p>
        </div>
    );
}

export default ProductDetail;