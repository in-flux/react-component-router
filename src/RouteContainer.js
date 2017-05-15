import React from 'react';
import PropTypes from 'prop-types';


export class RouteContainer extends React.Component {
  static contextTypes = {
    getComponentRouterStore: PropTypes.func,
    getComponentRouterState: PropTypes.func
  };


  static propTypes = {
    children: PropTypes.func.isRequired
  };


  state = {routerState: this.context.getComponentRouterState()};


  componentDidMount() {
    this.unsubscribe = this.context.getComponentRouterStore()
      .subscribe(this.onChange);

    // Must update the state since other components could update routes
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({routerState: this.context.getComponentRouterState()});
  }


  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }


  onChange = () => {
    if (this.unsubscribe) {
      this.setState({routerState: this.context.getComponentRouterState()});
    }
  };


  render() {
    const {children: render} = this.props;
    const {routerState} = this.state;

    return render(routerState);
  }
}
