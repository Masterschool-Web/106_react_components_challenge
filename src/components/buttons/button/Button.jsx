import "./button.css";

const Button = ({ children, className }) => {
  return <button className={"button " + className}>{children}</button>;
};

export default Button;
