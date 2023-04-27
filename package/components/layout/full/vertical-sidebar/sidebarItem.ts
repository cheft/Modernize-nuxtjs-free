import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon,
    FolderMinusIcon,
    AdIcon,
    DeviceGamepadIcon,
    ReportIcon,
    UserCheckIcon,
    SettingsIcon,
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    { header: 'Advertising' },
    {
        title: 'Project',
        icon: FolderMinusIcon,
        to: '/ui/project'
    },
    {
        title: 'Advertising',
        icon: AdIcon,
        to: '/ui/shadow'
    },
    { header: 'Analyze' },
    {
        title: 'Developer',
        icon: DeviceGamepadIcon,
        to: '/auth/login'
    },
    {
        title: 'Report',
        icon: ReportIcon,
        to: '/auth/register'
    },
    { header: 'System' },
    {
        title: 'Roles',
        icon: UserCheckIcon,
        to: '/icons'
    },
    {
        title: 'Settings',
        icon: SettingsIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
