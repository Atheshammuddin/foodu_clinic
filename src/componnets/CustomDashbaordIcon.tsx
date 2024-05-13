import { SvgIcon } from "@mui/material";
import DashboardSvg from "../../assets/icons/dashboardIcon.svg";

// Creating a custom SvgIcon component using the SVG file
export const CustomDashboardIcon = (props: any) => (
  <SvgIcon {...props}>
    <DashboardSvg />
  </SvgIcon>
);

// Using the custom icon in the component
