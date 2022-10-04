import "./button.css";

export const Button = ({ children, className, onClick }) => {
  console.log("Function", onClick);
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
