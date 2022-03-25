import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
  return(
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="entradas" />
      </header>
      <strong>R$ 1.000,00 </strong>
    </div>
    <div>
      <header>
        <p>Saidas</p>
        <img src={outComeImg} alt="saidas" />
      </header>
      <strong> - R$ 500,00 </strong>
    </div>
    <div className="highlight-backgroud">
      <header>
        <p>Total</p>
        <img src={totalImg} alt="total" />
      </header>
      <strong>R$500,00 </strong>
    </div>
  </Container>
  )
}