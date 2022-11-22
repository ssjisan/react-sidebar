import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const navConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
  },
  {
    id: 2,
    title: "Product",
    link: "",
    icon: <Inventory2OutlinedIcon />,
    subNav: [
      {
        title: "Add Product",
        link: "/product/addProduct",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "All Product",
        link: "/product/allProduct",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },
  {
    id: 3,
    title: "Zone",
    link: "/zone",
    icon: <MyLocationOutlinedIcon />,
  },
  {
    id: 4,
    title: "Salesman",
    link: "",
    icon: <PersonOutlineOutlinedIcon />,
    subNav: [
      {
        title: "Add Salesman",
        link: "/salesman/addSalesman",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "All Salesman",
        link: "/salesman/allSalesman",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },
];
const settings = [{ id: 1, title: "Name" }];
export { navConfig, settings };
