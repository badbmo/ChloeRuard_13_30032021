import React from "react";
import "../style/featuresList.css";
import featuresList from "../utils/const/featuresList";
import Feature from "./Feature";

/**
 * FeaturesList Component displaying all Feature Components
 * @returns {JSX} React component
 */

function FeaturesList() {
	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			{featuresList.map((feature, index) => (
				<Feature key={index} src={feature.src} alt={feature.alt} title={feature.title} description={feature.description}/>
			))}
		</section>
	);
}

export default FeaturesList;
