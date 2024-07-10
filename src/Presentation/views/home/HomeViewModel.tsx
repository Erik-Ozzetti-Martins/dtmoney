import { useState } from "react";


export const HomeViewModel = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return {
    isNewTransactionModalOpen,
    handleOpenNewTransactionModal,
    handleCloseNewTransactionModal,
  };
};
