import Avatar from "@mui/material/Avatar";
import profilepic from "./path/to/your/image.jpg"; // Correct the path to your image file
import { styled } from "@mui/material/styles";

const ProfileAvatar = styled(Avatar)({
  width: 60, // Custom width
  height: 60, // Custom height
  border: "2px solid #ccc", // Optional border styling
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional shadow
});

export default function ProfileImage() {
  return <ProfileAvatar src={profilepic} alt="Profile Picture" />;
}
