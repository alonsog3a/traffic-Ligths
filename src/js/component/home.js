import React, { useState } from "react";
//import "./styles.css";
//import { Ligthgreen } from "./styles.js";
//import { Ligthyellow } from "./styles.js";
//import { Ligthred } from "./styles.js";
//import { Trafficligth } from "./styles.js";
//import { Ligth1 } from "./styles.js";
//import { Card } from "./styles.js";
//import { Button1 } from "./styles.js";

export function Home() {
	const [color, setcolor] = useState(null);

	return (
		<div className="card">
			<div className="trafficligth">
				<div className="ligth1">
					<div
						className={
							"light red " +
							(color == "light red" ? "light shadows" : null)
						}
						onClick={() => setcolor("light red")}></div>
				</div>

				<div className="ligth2">
					<div
						className={
							"light yellow " +
							(color == "light yellow" ? "light shadows" : null)
						}
						onClick={() => setcolor("light yellow")}></div>
				</div>
				<div className="ligth3">
					<div
						className={
							"light green " +
							(color == "light green" ? "light shadows" : null)
						}
						onClick={() => setcolor("light green")}></div>
				</div>
			</div>
		</div>
	);
}
