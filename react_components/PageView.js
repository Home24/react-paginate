'use strict';

import React from 'react';
import classNames from 'classnames';

export default class PageView extends React.Component {
  render() {
    let linkClassName = this.props.pageLinkClassName;
    let cssClassName = this.props.pageClassName;
    let pageButton;

    if (this.props.selected) {
      if (typeof(cssClassName) !== 'undefined') {
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else {
        cssClassName = this.props.activeClassName;
      }
    }

      if (this.props.selected) {
          pageButton = (<span {...this.props} className={classNames(linkClassName, cssClassName)}>
              {this.props.page}
          </span>);
      } else {
          pageButton = (<a {...this.props} href="#" className={classNames(linkClassName, cssClassName)}>
              {this.props.page}
          </a>);
      }

    return pageButton;
  }
};
