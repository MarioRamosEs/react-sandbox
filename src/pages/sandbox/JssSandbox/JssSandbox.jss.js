import { createUseStyles } from "react-jss";

/*export const JssSandboxStyle = createUseStyles((theme) => ({
	textContainer: {
		//color: 'red',
		color: theme.color,
	}
}));*/

export const JssSandboxStyle = createUseStyles({
	textContainer: {
		//color: 'red',
		color: (props) => (props.color),
	}
});