const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-blue-500' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-white rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder-gray-400 transition duration-200'
			/>
		</div>
	);
};

export default Input;
