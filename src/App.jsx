import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex justify-center bg-blue-600 min-h-screen items-center">
			<button
				className="h-10 px-6 font-semibold rounded-md bg-black text-white"
				type="submit"
			>
				Buy now
			</button>
		</div>
	);
}

export default App;
