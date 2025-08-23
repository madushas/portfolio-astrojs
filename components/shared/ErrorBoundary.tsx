import React from "react";
import * as Sentry from "@sentry/nextjs";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === "production") {
  Sentry.captureException(error, { extra: { ...errorInfo } });
    } else {
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <pre className="mb-4 text-sm text-red-500">{this.state.error?.message}</pre>
            <button className="px-4 py-2 bg-primary text-white rounded" onClick={this.handleReset}>
              Try Again
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
