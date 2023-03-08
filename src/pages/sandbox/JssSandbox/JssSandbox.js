import React from 'react';
import { JssSandboxStyle } from './JssSandbox.jss';
import TextField from '@mui/material/TextField';
import { useTheme } from 'react-jss';

export const JssSandbox = (props) => {
	const theme = useTheme();
	const [color, setColor] = React.useState('blue');

	const style = JssSandboxStyle({ color });

	return (
		<>

			<section>
				<a className={style.textContainer}>{color}</a>
				<div style={{ paddingTop: 30 }}>
					<TextField label='Text Color' variant='standard'
							   helperText='Please enter a CSS color' value={color}
							   onChange={(e) => {
								   setColor(e.target.value);
							   }} />
				</div>
				<div style={{ paddingTop: 30 }}><a>Try to change the input to 'red'</a></div>
			</section>
		</>
	);
};