import React from 'react';
import {store} from 'component-router';


export const RouteContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired
  },


  getInitialState() {
    return store.getState();
  },


  componentDidMount() {
    this.unsubscribe = store.subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    const {children: render} = this.props;

    return render(this.state);
  }
});
