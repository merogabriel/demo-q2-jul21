// Importações (libs, componentes, css, estilização)
import "./styles.css";

function Button({ text, children }) {
  // Javascript (Lógica do nosso componente)

  return (
    <div>
      <button className="button-container">
        {/** JSX */}
        {children}
      </button>
      <span>{text}</span>
    </div>
  );
}

// Exportação
export default Button;
