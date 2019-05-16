import React, { Component } from 'react';
import { Icon, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';


export default class App extends Component {
    state = {
        open: true
    };

    showSidenav = (e) => {
        this.setState({open: true});
    }

    hideSidenav = (e) => {
        this.setState({open: false});
    }

    render() {
        const { open } = this.state;
        return (
            <div className="ag-grid-container">
                <div className="ag-menu-icon">
                    <Button minimal small onClick={this.showSidenav} icon={IconNames.LIST}>
                        {/* <Icon icon={IconNames.LIST}/> */}
                    </Button>
                </div>
                <div className="ag-header"></div>
                <div className={open ? 'ag-sidenav active' : 'ag-sidenav'}>
                    <div className="ag-sidenav__close-icon">
                        <Icon icon={IconNames.CHEVRON_LEFT} onClick={this.hideSidenav}/>
                    </div>
                    <ul className="ag-sidenav__list">
                        <li className="ag-sidenav__list-item">Item One</li>
                        <li className="ag-sidenav__list-item">Item Two</li>
                        <li className="ag-sidenav__list-item">Item Three</li>
                        <li className="ag-sidenav__list-item">Item Four</li>
                        <li className="ag-sidenav__list-item">Item Five</li>
                    </ul>
                </div>
                <div className="ag-main">
                    <div className="ag-main-header">
                        <div className="main-header__heading">Hello User</div>
                        <div className="main-header__updates">Recent Items</div>
                    </div>
                    <div className="ag-main-overview">
                        <div className="ag-overviewcard">
                            <div className="ag-overviewcard__icon">Overview</div>
                            <div className="ag-overviewcard__info">Card</div>
                        </div>
                        <div className="ag-overviewcard">
                            <div className="ag-overviewcard__icon">Overview</div>
                            <div className="ag-overviewcard__info">Card</div>
                        </div>
                        <div className="ag-overviewcard">
                            <div className="ag-overviewcard__icon">Overview</div>
                            <div className="ag-overviewcard__info">Card</div>
                        </div>
                        <div className="ag-overviewcard">
                            <div className="ag-overviewcard__icon">Overview</div>
                            <div className="ag-overviewcard__info">Card</div>
                        </div>
                    </div>
                    <div className="ag-main-cards">
                        <div className="ag-card">Card</div>
                        <div className="ag-card">Card</div>
                        <div className="ag-card">Card</div>
                    </div>
                </div>
                <div className="ag-footer"></div>
            </div>
        );
    }
}