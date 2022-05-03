import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  created_at: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}
/*
interface TransactionInput{
  title:string;
  value:number;
  category:string;
  type:string;
}
*/
type TransactionInput = Omit<Transaction, "id" | "created_at">;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      api
        .get("/ledger", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => setTransactions(response.data.ledger));
    }
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await api.post(
        "/ledger",
        {
          ...transactionInput,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      const { ledger } = response.data;
      setTransactions([...transactions, ledger]);
    }
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
