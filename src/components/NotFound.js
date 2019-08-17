import React from 'react';
import { flatNested, input, output } from '../flatNested';

const NotFound = () => {
	const obj = flatNested(input);
	const str = JSON.stringify(obj, null, 4);

	const example = JSON.stringify(output, null, 4);

  console.log('--- Function ---');
	console.log(str);
	console.log('--- Example ---');
	console.log(example);

	return (
		<div>
			<h1>Not found</h1>
		</div>
	)
};

export default NotFound;