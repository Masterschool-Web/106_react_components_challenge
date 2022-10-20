import Button from "../button/Button";
import "./choose.css";

export const ChooseButton = ({ addCharacter, id }) => {
  return (
    <Button className='choose-button' onClick={() => addCharacter(id)}>
      Choose
    </Button>
  );
};
