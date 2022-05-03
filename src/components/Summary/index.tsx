import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (acc, transaction) => {
      const amount = Number(transaction.amount)
      if (transaction.type === "deposit") {
        acc.deposits += amount;
        acc.total += amount;
      } else {
        acc.withdraws += amount;
        acc.total -= amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(Number(summary.deposits))}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeImg} alt="saidas" />
        </header>
        <strong>
          {" "}
          -
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(Number(summary.withdraws))}
        </strong>
      </div>
      <div className="highlight-backgroud">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
