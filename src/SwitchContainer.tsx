import React from 'react';
import { Switch, withRouter, RouteChildrenProps  } from 'react-router';

interface IProps extends RouteChildrenProps {
  children: React.ReactChildren
}
interface IState { }

class SwitchContainer extends React.Component<IProps> {
  static getDerivedStateFromProps(props: IProps, state: IState) {
    console.log('Before render:', props.history.location.pathname);
    return null;
  }
  constructor (props: IProps) {
    super(props);
    this.state = { } as IState;
  }
  componentDidMount () {
    console.log('After render: ', this.props);
  }
  componentDidUpdate (prevProps: IProps) {
    console.log('After render: ', this.props);
  }
  render() {
    return (
      <Switch>
        {this.props.children}
      </Switch>
    );
  }
}

export default withRouter(SwitchContainer as any);
