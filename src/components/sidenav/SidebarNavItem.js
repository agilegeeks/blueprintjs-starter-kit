import React, { Component } from 'react';
import classNames from 'classnames';
import { Classes } from '@blueprintjs/core';

export default class SidebarNavItem extends Component {
    render() {
        const { className, isActive, isExpanded, section, ...htmlProps } = this.props;
        return (
            <a className={classNames(Classes.MENU_ITEM, className)} {...htmlProps}>
                <span>{section.title}</span>
                {this.props.children}
            </a>
        );
    }
}