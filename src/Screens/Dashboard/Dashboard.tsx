import { Cards } from "../../componnets/Cards";
import PersonIcon from "@mui/icons-material/Person";
function Dashboard() {
  const cardData = [
    { title: "Total Account", icon: <PersonIcon />, Amount: "100" },
    { title: "Active", icon: <PersonIcon />, Amount: "200" },
    { title: "Blocked", icon: <PersonIcon />, Amount: "300" },
    { title: "New Requets", icon: <PersonIcon />, Amount: "400" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
