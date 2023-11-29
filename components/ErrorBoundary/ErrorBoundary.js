import React from 'react';

import Logo from '../Logo/Logo';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not.
    this.state = { hasError: false };
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col items-center justify-center h-screen'>
          <Logo />

          <h1 className='font-bold mt-2 text-xl'>
            { 'Oops! We\'re very sorry, something failed.' }
          </h1>
        </div>
      );
    };

    // Return children components in case of no error.
    return this.props.children;
  };
};

export default ErrorBoundary;
