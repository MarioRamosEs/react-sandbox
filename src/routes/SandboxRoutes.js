import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - login
const MarioTest = Loadable(lazy(() => import('pages/mario-test/MarioTestPage')));

// ==============================|| AUTH ROUTING ||============================== //

const SandboxRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: 'mario-test',
			element: <MarioTest />
		},
	]
};

export default SandboxRoutes;
