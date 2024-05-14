import { Controller } from "react-hook-form";

function InputField({ placeholder, label, type, control, name, options }: any) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <div className="inptFieldbox">
          <label htmlFor={name}>{label}</label>
          <div className="inptField">
            {type === "select" ? (
              <select
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              >
                <option value="" disabled selected>
                  {placeholder}
                </option>
                {options.map((option: any, index: any) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          </div>
          {error && <p className="error">{error.message}</p>}
        </div>
      )}
    />
  );
}

export default InputField;
