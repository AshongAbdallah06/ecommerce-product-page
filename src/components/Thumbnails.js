import React from "react";
import image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";

const Thumbnails = ({ thumbnail, setThumbnail }) => {
	return (
		<div className="others">
			<div
				className={`${thumbnail === 1 ? "is-active" : ""}`}
				onClick={() => setThumbnail(1)}
			>
				<img
					src={image1Thumbnail}
					alt="little-thumbnail"
					style={{ opacity: thumbnail === 1 && 0.4 }}
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`${thumbnail === 2 ? "is-active" : ""}`}
				onClick={() => setThumbnail(2)}
			>
				<img
					src={image2Thumbnail}
					alt="little-thumbnail"
					style={{ opacity: thumbnail === 2 && 0.4 }}
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`${thumbnail === 3 ? "is-active" : ""}`}
				onClick={() => setThumbnail(3)}
			>
				<img
					src={image3Thumbnail}
					alt="little-thumbnail"
					style={{ opacity: thumbnail === 3 && 0.4 }}
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`${thumbnail === 4 ? "is-active" : ""}`}
				onClick={() => setThumbnail(4)}
			>
				<img
					src={image4Thumbnail}
					alt="little-thumbnail"
					style={{ opacity: thumbnail === 4 && 0.4 }}
					className="little-thumbnail"
				/>
			</div>
		</div>
	);
};

export default Thumbnails;
