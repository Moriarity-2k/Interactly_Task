import {  useEffect } from "react";

import ReactFlowRender from "./ReactFlow/ReactFlowRender";


function App() {
	useEffect(() => {
		document.title = "Home";
	}, []);

	return (
		<div className="h-[100vh] w-[100vw] bg-[#f1f6ff] flex flex-col items-center gap-8">
			<h1 className="font-mono text-black uppercase mx-auto mt-6 text-3xl">
				React Flow Render PlayGround
			</h1>

			<ReactFlowRender />
		</div>
	);
}

// function CreateNode({ setNodes, initialDigit }) {
// 	setNodes((prev) => [
// 		...prev,
// 		{
// 			id: `${initialDigit}`,
// 			data: { label: Math.random() * 30000 },
// 			position: {
// 				x: initialDigit * 10,
// 				y: initialDigit * 10,
// 			},
//
// 			type: "nameChanger",
// 		},
// 	]);
// }

export default App;
