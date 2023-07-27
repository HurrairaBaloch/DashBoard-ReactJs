import ViewModuleIcon from "@mui/icons-material/ViewModule";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <ViewModuleIcon />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <CategoryIcon />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <ShoppingCartIcon />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <PeopleAltIcon />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
  {
    key: "support",
    label: "Logout",
    path: "/support",
    icon: <LogoutIcon />,
  },
];
