"use client"

import react from "react"
import { SessionProvider } from 'next-auth/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
      <SessionProvider>
        {children}
      </SessionProvider>
    );
  };