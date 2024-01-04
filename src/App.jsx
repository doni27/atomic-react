import React from "react";

const Button = (props) => {
	const { children = "...", variant = "bg-black" } = props;
	return (
		<button
			className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
			type="submit"
		>
			{children} {/* {props.text} */}
		</button>
	);
};

function App() {
	return (
		<div className="flex justify-center bg-blue-600 min-h-screen items-center">
			<div className="flex gap-x-3">
				<Button variant="bg-red-700">
					{" "}
					Login
				</Button>
				{/* //   variant="bg-red-700"
      //   text="Login"
      // /> */}

				<Button variant="bg-slate-700">
					{" "}
					Logout
				</Button>
				<Button variant="bg-black"> </Button>
			</div>
		</div>
	);
}

export default App;
