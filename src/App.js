import { useEffect, useState } from "react";
import "./App.css";
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";
import Preview from "./components/Preview";
import Add from "./components/Add";
import ProductBio from "./components/ProductBio";
import ProductPrice from "./components/ProductPrice";
import Header from "./components/Header";
import Overlay from "./components/Overlay";

function App() {
	const [quantity, setQuantity] = useState(0);
	const [thumbnail, setThumbnail] = useState(1);
	const [img, setImg] = useState(image1);
	const [added, setAdded] = useState(false);

	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		if (thumbnail === 1) {
			setImg(image1);
		} else if (thumbnail === 2) {
			setImg(image2);
		} else if (thumbnail === 3) {
			setImg(image3);
		} else {
			setImg(image4);
		}
	}, [thumbnail]);

	const quantityDecrease = () => {
		quantity > 0 && setQuantity(quantity - 1);
	};
	const quantityIncrease = () => {
		setQuantity(quantity + 1);
	};

	return (
		<div className="App">
			<Header
				quantity={quantity}
				added={added}
			/>

			<main>
				<Overlay
					showOverlay={showOverlay}
					setShowOverlay={setShowOverlay}
				/>

				<Preview
					thumbnail={thumbnail}
					setThumbnail={setThumbnail}
					img={img}
					showOverlay={showOverlay}
					setShowOverlay={setShowOverlay}
				/>

				<div className="description">
					<p className="company">SNEAKER COMPANY</p>
					<h1 className="product-name">
						Fall Limited Edition <br /> Sneakers
					</h1>

					<ProductBio />

					<ProductPrice />

					<Add
						quantity={quantity}
						quantityIncrease={quantityIncrease}
						quantityDecrease={quantityDecrease}
						setAdded={setAdded}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
