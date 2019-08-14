import React from 'react';
import { Switch, withRouter, RouteChildrenProps  } from 'react-router';

interface IProps extends RouteChildrenProps {
  children: React.ReactChildren
}
interface IState { }

class SwitchContainer extends React.Component<IProps> {
  constructor (props: IProps) {
    super(props);
    this.state = { } as IState;
  }
  getSnapshotBeforeUpdate (prevProps: IProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('Before render: prevLocation: ', prevProps.location.pathname, ', newLocation: ', this.props.location.pathname);
    }
    return null;
  }
  componentDidUpdate (prevProps: IProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('After render: prevLocation: ', prevProps.location.pathname, ', newLocation: ', this.props.location.pathname);
    }
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
