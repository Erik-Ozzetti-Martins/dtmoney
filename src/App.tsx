import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';


export function App() {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <Dashboard />
    </>
  );
}

