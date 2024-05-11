import React, { useEffect, useState } from "react";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import closeIcon from "../images/icon-close.svg";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import OverlayThumbnails from "../components/OverlayThumbnails";

const Overlay = ({ showOverlay, setShowOverlay }) => {
	const [overlayImg, setOverlayImg] = useState(image1);
	const [overlayThumbnail, setOverlayThumbnail] = useState(1);

	useEffect(() => {
		if (overlayThumbnail === 1) {
			setOverlayImg(image1);
		} else if (overlayThumbnail === 2) {
			setOverlayImg(image2);
		} else if (overlayThumbnail === 3) {
			setOverlayImg(image3);
		} else {
			setOverlayImg(image4);
		}

		console.log(overlayThumbnail);
	}, [overlayThumbnail]);

	return (
		<>
			{showOverlay && (
				<div className="overlay">
					<div className="container">
						<img
							src={closeIcon}
							alt=""
							className="close-icon"
							onClick={() => setShowOverlay(false)}
						/>

						<button
							className="caret-btn previous"
							onClick={() => {
								setOverlayThumbnail(
									overlayThumbnail > 1 ? overlayThumbnail - 1 : 4
								);
							}}
						>
							<img
								src={previous}
								alt=""
								className="caret"
							/>
						</button>

						<img
							src={overlayImg}
							alt="thumbnail"
							className="thumbnail"
						/>

						<button
							className="caret-btn next"
							onClick={() => {
								setOverlayThumbnail(
									overlayThumbnail < 4 ? overlayThumbnail + 1 : 1
								);
							}}
						>
							<img
								src={next}
								alt=""
								className="caret"
							/>
						</button>
					</div>

					<OverlayThumbnails
						setOverlayImg={setOverlayImg}
						overlayThumbnail={overlayThumbnail}
						setOverlayThumbnail={setOverlayThumbnail}
					/>
				</div>
			)}
		</>
	);
};

export default Overlay;
