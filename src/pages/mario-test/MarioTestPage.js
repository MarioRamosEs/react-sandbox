// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
	<MainCard title='Sample Card title'>
		<Typography variant='body2'>
			Sample card content
		</Typography>
	</MainCard>
);

export default SamplePage;
