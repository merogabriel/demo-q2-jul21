// Importações (libs, componentes, css, estilização)
import "./styles.css";

function Button({ text }) {
  // Javascript (Lógica do nosso componente)

  return (
    <button className="confetainer">
      {/** JSX */}
      {text}
    </button>
  );
}

// Exportação
export default Button;
