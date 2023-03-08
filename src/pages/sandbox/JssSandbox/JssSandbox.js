import React from 'react';
import { JssSandboxStyle } from './JssSandbox.jss';
import TextField from '@mui/material/TextField';

export const JssSandbox = (props) => {
	const style = JssSandboxStyle({ ...props });
	const [color, setColor] = React.useState('red');

	return (
		<>
			<section >
				<div>
					<TextField id='standard-basic' label='Standard' variant='standard'
							   helperText='Please enter a CSS color' value={color}
							   onChange={(e) => {
								   setColor(e.target.value);
							   }} />
				</div>
			</section>
		</>
	);
};