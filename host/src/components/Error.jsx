import React from "react";

export class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center bg-red-100 p-3 rounded">
          <h2>Ocurrio un error en el Micro-Frontend, favor de validarlo</h2>
        </div>
      )
    }

    return this.props.children;
  }
}
