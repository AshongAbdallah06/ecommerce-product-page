import React, { useState } from "react";
import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import CartDropdown from "./CartDropdown";

const Header = ({ quantity, added }) => {
	const [cartDropdown, setCartDropdown] = useState(false);
	return (
		<header>
			<div className="left">
				<img
					src={logo}
					alt="logo"
					className="logo"
				/>

				<nav>
					<ul>
						<li className="nav-list">Collections</li>
						<li className="nav-list">Men</li>
						<li className="nav-list">Women</li>
						<li className="nav-list">About</li>
						<li className="nav-list">Contact</li>
					</ul>
				</nav>
			</div>

			<div className="right">
				<img
					src={cartIcon}
					alt="cart"
					className="cart"
					onClick={() => setCartDropdown(!cartDropdown)}
				/>
				<img
					src={avatar}
					alt="avatar"
					className="avatar"
				/>

				{cartDropdown && (
					<CartDropdown
						quantity={quantity}
						added={added}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
