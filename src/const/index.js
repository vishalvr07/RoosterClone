import Select from "react-select";

//dummy data , ignore that .
export const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const MyComponent = () => <Select options={options} />;
