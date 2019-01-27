import React from 'react';
import classNames from 'classnames';
import css from './Text.css'; // eslint-disable-line

const Text = ({ value, onClick, styles }) => {
    return (
        <span onDoubleClick={onClick} className={classNames(styles)}> { `${value}` } </span>
    );
}
export {
    Text
};
