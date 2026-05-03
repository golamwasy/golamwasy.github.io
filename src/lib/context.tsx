"use client";

import React, { createContext, useContext } from 'react';
import { PortfolioData } from './data';

const PortfolioContext = createContext<PortfolioData | null>(null);

export function PortfolioProvider({ data, children }: { data: PortfolioData; children: React.ReactNode }) {
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
