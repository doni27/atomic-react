const Label = (props) => {
	const { htmlFor, text, children } = props;
	return (
		<label
			htmlFor="email"
			className="block text-slate-700 text-sm font-bold mb-2"
		>
			{children}
		</label>
	);
};
export default Label;
