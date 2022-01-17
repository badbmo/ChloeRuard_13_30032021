import React from "react";
import "../style/feature.css";

/**
 * Feature Component
 * @param {string} src source feature's icon
 * @param {string} alt alt feature's icon
 * @param {string} title feature's title
 * @param {string} description feature's description
 * @returns {JSX} React component
 */

function Feature(src, alt, title, description) {
	return (
		<div className="feature-item">
			<img src={src} alt={alt} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default Feature;
