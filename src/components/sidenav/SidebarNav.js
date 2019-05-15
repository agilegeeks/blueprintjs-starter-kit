import React, { Component } from 'react';
import classNames from 'classnames';
import { Classes } from '@blueprintjs/core';
import SidebarNavItem from './SidebarNavItem';

export default class SidebarNav extends Component {
    render() {
        const { renderSidebarNavItem = SidebarNavItem } = this.props;
        const menu = this.props.items.map(section => {
            const isActive = this.props.activeSectionId === section.route;
            const isExpanded = isActive || isParentOfRoute(section.route, props.activeSectionId);
            const itemClasses = classNames(`depth-${section.level - this.props.level - 1}`, {
                'docs-nav-expanded': isExpanded,
                [Classes.ACTIVE]: isActive,
            });
            const item = renderSidebarNavItem({
                className: itemClasses,
                href: '#' + section.route,
                isActive,
                isExpanded,
                onClick: () => props.onItemClick(section.route),
                section,
            });
            return (
                <li key={section.route}>
                    {item}
                    {isPageNode(section) ? <SidebarNav {...props} level={section.level} items={section.children}/> : null}
                </li>
            );
        });
        const classes = classNames('docs-nav-menu', Classes.LIST_UNSTYLED, props.className);
        return <ul className={classes}>{menu}</ul>;
    }
}

const isParentOfRoute = (parent, route) => {
    return route.indexOf(parent + '/') === 0 || route.indexOf(parent + '.') === 0;
};