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
            id: 'mario-test',
            title: 'Mario Test',
            type: 'item',
            url: '/mario-test',
            icon: icons.LaptopOutlined
        }
    ]
};

export default sandbox;
