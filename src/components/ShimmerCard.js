const ShimmerCard =()=>{
    return(
    <div className="res-list">
        {Array(10).fill("").map((index)=>{return <div className="shimmer-card" key={index}></div>})}
    </div>
    );
}

export default ShimmerCard;