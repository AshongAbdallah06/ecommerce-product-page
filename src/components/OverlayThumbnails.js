import React, { useState } from "react";
import image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";

const Thumbnails = ({ setOverlayImg, overlayThumbnail, setOverlayThumbnail }) => {
	return (
		<div className="others">
			<div
				className={`overlay-thumbnail ${overlayThumbnail === 1 ? "is-active" : ""}`}
				onClick={() => setOverlayThumbnail(1)}
			>
				<img
					src={image1Thumbnail}
					alt="little-thumbnail"
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`overlay-thumbnail ${overlayThumbnail === 2 ? "is-active" : ""}`}
				onClick={() => setOverlayThumbnail(2)}
			>
				<img
					src={image2Thumbnail}
					alt="little-thumbnail"
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`overlay-thumbnail ${overlayThumbnail === 3 ? "is-active" : ""}`}
				onClick={() => setOverlayThumbnail(3)}
			>
				<img
					src={image3Thumbnail}
					alt="little-thumbnail"
					className="little-thumbnail"
				/>
			</div>
			<div
				className={`overlay-thumbnail ${overlayThumbnail === 4 ? "is-active" : ""}`}
				onClick={() => setOverlayThumbnail(4)}
			>
				<img
					src={image4Thumbnail}
					alt="little-thumbnail"
					className="little-thumbnail"
				/>
			</div>
		</div>
	);
};

export default Thumbnails;
