import { data } from "./data";
import { useState } from "react";
import Buttons from './Buttons';
import ForSale from "./ForSale";

function Store() {

    const [itemsForSale, setItemsForSale] = useState(data);
    const chosenItems = (searchTerm) => {
        const newItemsForSale = data.filter(element => element.searchTerm === searchTerm)
        setItemsForSale(newItemsForSale);
    }
    return (
        <div>
            < Buttons filteredItems = {chosenItems} />
            < ForSale itemsDisplay={itemsForSale}/>
        </div>
    )
}

export default Store;