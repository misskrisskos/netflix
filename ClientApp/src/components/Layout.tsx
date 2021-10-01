import * as React from 'react';
import { Container } from 'reactstrap';
// import NavMenu from './NavMenu';
import NavNetflix from './NavNetflix';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavNetflix />
                {/* <NavMenu /> */}
                <Container>
                    {this.props.children}
                </Container>
            </React.Fragment>
        );
    }
}