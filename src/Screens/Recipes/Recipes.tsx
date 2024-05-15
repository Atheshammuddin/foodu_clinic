import Header from "../../componnets/Header";
import RecipesTable from "./RecipesTable";
import { useNavigate } from "react-router-dom";
interface recipes {
  name: string;
  servingSize: string;
  costPerServing: number;
  id: number;
}

function Recipes() {
  const navigate = useNavigate();
  const recipesdata: recipes[] = [
    {
      name: "Chiken biryani",
      servingSize: "3 persons",
      costPerServing: 400,
      id: 1,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 2,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 3,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 4,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 5,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 6,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 7,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 8,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 9,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 10,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 11,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 12,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 13,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 14,
    },
    {
      name: "Zinger Burgur",
      servingSize: "7 persons",
      costPerServing: 700,
      id: 15,
    },
  ];
  const AddItems = () => {
    navigate("/AddRecipes");
  };
  console.log(recipesdata);
  return (
    <div className="container">
      <Header Addbtn={AddItems} />
      <RecipesTable data={recipesdata} />
    </div>
  );
}

export default Recipes;
