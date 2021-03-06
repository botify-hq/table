import React from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';

export default class ExpandIcon extends React.Component {
  static propTypes = {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    expandable: PropTypes.any,
    expanded: PropTypes.bool,
    needIndentSpaced: PropTypes.bool,
    onExpand: PropTypes.func,
    expandIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  };

  shouldComponentUpdate(nextProps) {
    return !shallowequal(nextProps, this.props);
  }

  render() {
    const {
      expandable,
      prefixCls,
      onExpand,
      needIndentSpaced,
      expanded,
      record,
      expandIcon,
    } = this.props;

    if (expandable) {
      if (typeof expandIcon === 'function') {
        return <span onClick={e => onExpand(record, e)}>{expandIcon({ expanded, record })}</span>;
      }

      const expandClassName = expanded ? 'expanded' : 'collapsed';
      return (
        <span
          className={`${prefixCls}-expand-icon ${prefixCls}-${expandClassName}`}
          onClick={e => onExpand(record, e)}
        />
      );
    } else if (needIndentSpaced) {
      return <span className={`${prefixCls}-expand-icon ${prefixCls}-spaced`} />;
    }
    return null;
  }
}
