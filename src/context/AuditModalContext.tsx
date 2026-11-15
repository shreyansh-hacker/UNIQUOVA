"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import AuditModal from "@/components/audit/AuditModal";

interface AuditModalContextType {
  isOpen: boolean;
  openAuditModal: () => void;
  closeAuditModal: () => void;
}

const AuditModalContext = createContext<AuditModalContextType | undefined>(undefined);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAuditModal = () => setIsOpen(true);
  const closeAuditModal = () => setIsOpen(false);

  return (
    <AuditModalContext.Provider value={{ isOpen, openAuditModal, closeAuditModal }}>
      {children}
      <AuditModal isOpen={isOpen} onClose={closeAuditModal} />
    </AuditModalContext.Provider>
  );
}

export function useAuditModal() {
  const context = useContext(AuditModalContext);
  if (!context) {
    throw new Error("useAuditModal must be used within an AuditModalProvider");
  }
  return context;
}
