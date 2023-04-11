import { useState } from "react";

function ForSale({itemsDisplay}) {
    const [showText, setShowText] = useState(false);
    
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }
    return(
        <div  className="products">
            {itemsDisplay.map((element => {
                const {id, name, description, showMore, price, image} = element;
                return(
                    <div  className="product-card" key={id}>
                        <img className="product-header" src={image} width="150px" alt="pic"/>
                        <div>
                            <div className="product-info">
                                <h3 className="product-header">{name}</h3>
                                <h3>$ {price}</h3>
                            </div>
                            <p className="product-description">{showMore ? description : description.substring(0,45) +"..."}
                    <button onClick={() => showTextClick(element) > (!showMore)} className='btn-show'>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default ForSale;