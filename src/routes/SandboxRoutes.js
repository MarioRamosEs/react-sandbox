import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - login
const ComponentsSandbox = Loadable(lazy(() => import('pages/sandbox/ComponentsSandbox')));

// ==============================|| AUTH ROUTING ||============================== //

const SandboxRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: 'components-sandbox',
			element: <ComponentsSandbox />
		},
	]
};

export default SandboxRoutes;
