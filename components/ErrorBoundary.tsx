import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-amber-500 p-8 text-center font-sans border-t-4 border-amber-900">
          <div className="max-w-3xl w-full bg-gray-900 border border-amber-900/50 rounded-lg p-8 shadow-[0_0_50px_rgba(180,83,9,0.2)]">
            <div className="text-4xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-4 font-fantasy tracking-wider">A Critical Error Has Occurred</h1>
            <p className="text-gray-400 mb-6 italic">"The magic weaves of the world have tangled..."</p>
            <div className="bg-black/50 p-4 rounded text-left overflow-auto max-h-64 border border-gray-800">
              <pre className="text-red-400 text-sm font-mono whitespace-pre-wrap">
                {this.state.error?.message}
                {this.state.error?.stack}
              </pre>
            </div>
            <p className="mt-6 text-gray-500 text-sm">Please refresh the page or check your magical configuration.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}