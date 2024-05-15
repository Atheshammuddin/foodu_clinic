import InputField from "../../componnets/InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  RecipeName: z.string().min(4, "Name should be at least 4 characters"),
  ServingSize: z.string().min(1, "Serving size is required"),
  uploadImage: z.string().refine((value) => {
    // Check if value is a valid image URL
    const isValidURL = /\.(png|jpg|jpeg)$/i.test(value);
    if (!isValidURL) {
      return false;
    }
    const isWithinSizeLimit = value.length <= 5 * 1024 * 1024;
    return isWithinSizeLimit;
  }, "Only PNG, JPG, and JPEG images allowed, max 5MB"),
  PreparationsInstructions: z
    .string()
    .min(10, "Preparation instructions should be at least 10 characters"),
});

function AddRecipes() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      RecipeName: "",
      ServingSize: "",
      uploadImage: "",
      PreparationsInstructions: "",
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
  const back = () => {
    navigate("/Recipes");
  };
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <InputField
            placeholder={"Chiken Birayani"}
            label={"Recipe Name"}
            type={"text"}
            control={control}
            name={"RecipeName"}
          />
        </div>
        <div className="col-span-6">
          <InputField
            placeholder={"3 persons"}
            label={"Serving Size"}
            type={"text"}
            control={control}
            name={"ServingSize"}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 ">
        <div className="col-span-4  ">
          <InputField
            placeholder={"Upload Image"}
            label={"Upload Image"}
            type={"file"}
            control={control}
            name={"uploadImage"}
          />
        </div>
        <div className="col-span-2 mt-[29px] ">
          <button className="btn1 ">Browse</button>
          <button className="btn1">Upload</button>
        </div>
        <div className="col-span-6 pl-[10px]">
          <p className="label font-bold">Preparations Instructions</p>
          <div className="col-span-6 inptFieldbox ">
            <textarea
              name="PreparationsInstructions"
              placeholder="Preparations Instructions"
              className="textarea-input"
              style={{
                minHeight: "100px",
                width: "100%",
                resize: "none",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
              }}
              //   {...register("PreparationsInstructions")}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="btnsGroup">
            <button className="cancel" onClick={back}>
              Cancel
            </button>
            <button className="addbtn" onClick={Add}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipes;
