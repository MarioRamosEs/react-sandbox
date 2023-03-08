// assets
import { LoginOutlined, LaptopOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    LaptopOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const sandbox = {
    id: 'group-dashboard',
    title: 'Sandbox',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login (Redux)',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            //target: true
        },
        {
            id: 'register1',
            title: 'Register (Forms)',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            //target: true
        },
        {
            id: 'components-sandbox',
            title: 'Components Sandbox',
            type: 'item',
            url: '/components-sandbox',
            icon: icons.LaptopOutlined
        },
        {
            id: 'hooks-sandbox',
            title: 'Hooks Sandbox',
            type: 'item',
            url: '/hooks-sandbox',
            icon: icons.LaptopOutlined
        },
        {
            id: 'jss-sandbox',
            title: 'JSS Sandbox',
            type: 'item',
            url: '/jss-sandbox',
            icon: icons.LaptopOutlined
        },
    ]
};

export default sandbox;
