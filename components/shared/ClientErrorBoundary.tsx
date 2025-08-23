"use client";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";

export default function ClientErrorBoundary({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
