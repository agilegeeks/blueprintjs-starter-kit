import React, { Component } from 'react';
import { Button, Card, Divider, Icon, Breadcrumb, Breadcrumbs, H3, Navbar, Alignment, Elevation } from '@blueprintjs/core';

const BREADCRUMBS = [
    { href: '/users', icon: 'folder-close', text: 'Users' },
    { href: '/users/janet', icon: 'folder-close', text: 'Janet' },
    { icon: 'document', text: 'image.jpg' },
];

class App extends Component {

    renderCurrentBreadcrumb = ({ text, ...restProps }) => {
        // customize rendering of last breadcrumb
        return <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>;
    };

    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <Card elevation={Elevation.TWO}>
                        <H3>Test Title</H3>
                        <Divider/>
                        <ul>
                            <li>item 1</li>
                            <li>item 1</li>
                            <li>item 1</li>
                        </ul>
                    </Card>
                </div>
                <div className="main-content">
                    <Navbar>
                        <Navbar.Group align={Alignment.LEFT}>
                            <Navbar.Heading>Blueprint</Navbar.Heading>
                            <Navbar.Divider />
                            <Button className="bp3-minimal" icon="home" text="Home" />
                            <Button className="bp3-minimal" icon="document" text="Files" />
                        </Navbar.Group>
                    </Navbar>
                    <Breadcrumbs
                        currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
                        items={BREADCRUMBS}
                    />
                </div>
            </div>
        );
    }
}

export default App;
