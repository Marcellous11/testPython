import React from "react";

function Photo({ photo }) {
	return (
		<div className="border rounded-lg shadow-md p-4">
			<img
				src={photo.urls.small}
				alt={photo.description || "No description"}
				className="w-full h-auto 
mb-2"
			/>
			<p className="text-gray-700">{photo.description || "No description"}</p>
		</div>
	);
}

export default Photo;
