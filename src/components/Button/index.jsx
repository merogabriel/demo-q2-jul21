import { Container } from './styles'

const Button = ({children, onClick}) => <Container onClick={onClick}>{children}</Container>

export default Button;