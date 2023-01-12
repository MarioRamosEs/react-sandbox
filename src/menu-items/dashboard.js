// assets
import { DashboardOutlined, LaptopOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    LaptopOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
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

export default dashboard;
