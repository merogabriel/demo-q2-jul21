import "./styles.css";

const Button = ({ children, onClick, blueButton }) => (
  <button onClick={onClick} className={blueButton ? 'button-container-2' : 'button-container-1'}>
    {children}
  </button>
);

export default Button;
