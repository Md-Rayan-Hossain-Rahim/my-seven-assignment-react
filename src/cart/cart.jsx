import React from "react";

const Cart = ({ selectedVideos, totalCost, credit }) => {
    console.log(selectedVideos);

    return (
        <div className="second-cart ">
            <h3>Credit Hour Remaining 7 hr</h3>
            {selectedVideos.map((videos) => (
            <li>{videos.name}</li>
            ))}
            <h5>Total Credit Hour:{credit<20?credit:alert("Credit is more then 20")}</h5>
            <h5>Total Price:{totalCost}</h5>
            
        </div>
    );
};

export default Cart;