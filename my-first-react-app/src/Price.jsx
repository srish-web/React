import "./Price.css";

export default function Price({oldPrice, newPrice}){
    return(
        <>
            <div>
                <span className="old">{oldPrice}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="new">{newPrice}</span>
            </div>
        </>
    )
}