import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from '../layout/MainLayout';
import { JssSandbox } from '../pages/sandbox/JssSandbox/JssSandbox';

// render - login
const ComponentsSandbox = Loadable(lazy(() => import('pages/sandbox/ComponentsSandbox')));
const HooksSandbox = Loadable(lazy(() => import('pages/sandbox/HooksSandbox')));

// ==============================|| AUTH ROUTING ||============================== //

const SandboxRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: 'components-sandbox',
			element: <ComponentsSandbox />
		},
		{
			path: 'hooks-sandbox',
			element: <HooksSandbox />
		},
		{
			path: 'jss-sandbox',
			element: <JssSandbox />
		},
	]
};

export default SandboxRoutes;
