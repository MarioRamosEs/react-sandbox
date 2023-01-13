// assets
import { LoginOutlined, LaptopOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    LaptopOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const sandbox = {
    id: 'group-dashboard',
    title: 'Sandbox',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login (w/ Redux)',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
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
        }
    ]
};

export default sandbox;
