import React from "react";
import "../style/featuresList.css";
import { featuresList } from "../utils/const/featuresList";
import Feature from "./Feature";

/**
 * FeaturesList Component displaying all Feature Components
 * @returns {JSX} React component
 */

function FeaturesList() {
	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			{featuresList.map((feature) => (
				<Feature src={feature.src} alt={feature.alt} title={feature.title} descirption={feature.description}/>
			))}
		</section>
	);
}

export default FeaturesList;
