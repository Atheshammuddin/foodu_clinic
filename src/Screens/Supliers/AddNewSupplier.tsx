import InputField from "../../componnets/InputField";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  SupplierName: z.string().min(4, "Name should be at least 4 characters"),
  email: z.string().email("Add valid email address"),
  Phone: z
    .string()
    .min(10, "Should not less than 10")
    .max(15, "Should not be more than 15"),
  Address: z.string().min(10, " Add full address"),
  Gender: z.enum(["male", "female", "other"]),
});

function AddNewSupplier() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      SupplierName: "",
      email: "",
      Phone: "",
      Address: "",
      Gender: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  const Add = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <InputField
            placeholder={"Jhon Doe"}
            label={"Supplier Name"}
            type={"text"}
            control={control}
            name={"SupplierName"}
          />
        </div>
        <div className="col-span-6">
          <InputField
            placeholder={"example@gmail.com"}
            label={"Email"}
            type={"email"}
            control={control}
            name={"email"}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <InputField
            placeholder={"123456789"}
            label={"Phone"}
            type={"number"}
            control={control}
            name={"Phone"}
          />
        </div>
        <div className="col-span-6">
          <InputField
            name="Gender"
            label="Gender"
            type="select"
            placeholder={"Select"}
            control={control}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <InputField
            placeholder={"House No 123 "}
            label={"Address"}
            type={"text"}
            control={control}
            name={"Address"}
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="btnsGroup">
            <button className="cancel">Cancel</button>
            <button className="addbtn" onClick={Add}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewSupplier;
