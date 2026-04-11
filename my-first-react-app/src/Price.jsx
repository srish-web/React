import "./Price.css";

export default function Price({oldPrice, newPrice}){
    return(
        <>
            <div className="priceBox">
                <span className="old">{oldPrice}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="new">{newPrice}</span>
            </div>
        </>
    )
}