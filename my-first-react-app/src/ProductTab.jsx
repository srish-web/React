import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab(){
    return(
        <>
        
        <div className="box">
            
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil (3rd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-transform" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
        </>
    )
}
export default ProductTab;