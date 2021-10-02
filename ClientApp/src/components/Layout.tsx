import * as React from 'react';
import NavNetflix from './NavNetflix';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavNetflix />
                {this.props.children}
            </React.Fragment>
        );
    }
}