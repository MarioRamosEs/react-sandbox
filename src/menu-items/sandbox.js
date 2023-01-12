// assets
import { DashboardOutlined, LaptopOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    LaptopOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const sandbox = {
    id: 'group-dashboard',
    title: 'Sandbox',
    type: 'group',
    children: [
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
