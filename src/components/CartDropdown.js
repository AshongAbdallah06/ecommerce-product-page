import React from "react";
import image1 from "../images/image-product-1.jpg";
import trashcan from "../images/icon-delete.svg";

const CartDropdown = ({ quantity, added }) => {
	return (
		<div className="cart-container">
			<p className="cart-label">Cart</p>
			{added ? (
				<>
					<div className="item-container">
						<div className="item">
							<img
								src={image1}
								alt="product"
								className="product-image"
							/>
							<div className="details">
								<p className="name">Fall Limited Edition Sneakers</p>
								<p className="amount">
									$125.00 x {quantity}{" "}
									<span style={{ fontWeight: "bold" }}>
										${125 * Number(quantity) + ".00"}
									</span>
								</p>
							</div>
							<img
								src={trashcan}
								alt="trashcan"
								className="trashcan"
							/>
						</div>

						<button className="checkout">Checkout</button>
					</div>
				</>
			) : (
				<p>Add an item to display here</p>
			)}
		</div>
	);
};

export default CartDropdown;
