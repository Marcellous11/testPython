import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

function App() {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
				const result = await axios.get("https://api.unsplash.com/photos/", {
					headers: {
						Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
					},
				});

				setPhotos(result.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <div className="text-center">Loading...</div>;
	if (error)
		return (
			<div className="text-center text-red-500">Error: {error.message}</div>
		);

	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{photos.map((photo) => (
					<Photo key={photo.id} photo={photo} />
				))}
			</div>
		</div>
	);
}

export default App;
