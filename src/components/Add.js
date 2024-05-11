import React from "react";
import buttonCartIcon from "../images/icon-cart-btn.svg";

const Add = ({ quantity, quantityIncrease, quantityDecrease, setAdded }) => {
	return (
		<div className="add">
			<div className="quantity">
				<button onClick={quantityDecrease}>-</button>
				<input
					type="text"
					value={quantity}
				/>
				<button onClick={quantityIncrease}>+</button>
			</div>

			<button
				className="add-to-cart"
				onClick={() => setAdded(true)}
			>
				<img
					src={buttonCartIcon}
					alt="cart"
					className="btn-cart"
				/>
				Add to cart
			</button>
		</div>
	);
};

export default Add;
