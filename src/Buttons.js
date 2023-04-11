function Buttons({filteredItems}) {
    return (
        <div className="cont">
            <button className="btn" onClick={()=>filteredItems("oil")}>Oils</button>
            <button className="btn" onClick={()=>filteredItems("tea")}>Teas</button>
            <button className="btn" onClick={()=>filteredItems("spices")}>Spices</button>
        </div>
    )
}

export default Buttons;