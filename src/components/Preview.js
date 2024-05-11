import React from "react";
import Thumbnails from "./Thumbnails";

const Preview = ({ img, thumbnail, setThumbnail, showOverlay, setShowOverlay }) => {
	return (
		<div className="previews">
			<img
				src={img}
				alt="thumbnail"
				className="thumbnail"
				onClick={() => setShowOverlay(!showOverlay)}
			/>

			<Thumbnails
				thumbnail={thumbnail}
				setThumbnail={setThumbnail}
			/>
		</div>
	);
};

export default Preview;
