import React from "react";
import { Dashboard } from "../../Shared/components/Dashboard";
import { Header } from "../../Shared/components/Header";
import { NewTransactionModal } from "../../Shared/components/NewTransactionModal";
import { TransactionsProvider } from "../../Shared/hooks/useTransactions";
import { HomeViewModel } from "./HomeViewModel";

export const HomeView = () => {
  const {
    handleCloseNewTransactionModal,
    handleOpenNewTransactionModal,
    isNewTransactionModalOpen,
  } = HomeViewModel();
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
};
