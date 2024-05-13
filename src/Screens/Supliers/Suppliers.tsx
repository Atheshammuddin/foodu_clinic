import Header from "../../componnets/Header";
import SuppliersTables from "./SuppliersTable";

interface supplier {
  name: string;
  email: string;
  phone: number;
  gender: string;
  id: number;
}

function Suppliers() {
  const supplierdata: supplier[] = [
    {
      name: "jhon doe",
      email: "jhondoe@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 1,
    },
    {
      name: "moris",
      email: "moris@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 2,
    },
    {
      name: "philips",
      email: "phlips@gmail.com",
      phone: 11235484654,
      gender: "male",
      id: 3,
    },
    {
      name: "michlle",
      email: "@gmail.commichle",
      phone: +11235484654,
      gender: "male",
      id: 4,
    },
    {
      name: "hobbs",
      email: "hobbs@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 5,
    },
    {
      name: "kerlin",
      email: "kerlin@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 6,
    },
    {
      name: "brain",
      email: "brain@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 7,
    },
    {
      name: "alis",
      email: "alis@gmail.com",
      phone: +11235484654,
      gender: "female",
      id: 8,
    },
    {
      name: "bella",
      email: "bella@gmail.com",
      phone: +11235484654,
      gender: "female",
      id: 9,
    },
    {
      name: "renesme",
      email: "renesme@gmail.com",
      phone: +11235484654,
      gender: "female",
      id: 10,
    },
    {
      name: "jackoub",
      email: "jackoub@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 11,
    },
    {
      name: "george",
      email: "george",
      phone: +11235484654,
      gender: "male",
      id: 12,
    },
    {
      name: "manisa",
      email: "manisa@gmail.com",
      phone: +11235484654,
      gender: "female",
      id: 13,
    },
    {
      name: "thomas",
      email: "thomas@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 14,
    },
    {
      name: "morgan",
      email: "morgan@gmail.com",
      phone: +11235484654,
      gender: "male",
      id: 15,
    },
  ];

  return (
    <div className="container">
      <Header />
      <SuppliersTables data={supplierdata} />
    </div>
  );
}

export default Suppliers;
