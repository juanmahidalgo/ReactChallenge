import React, { Component } from 'react';
import './ControlPanel.css';
import classNames from 'classnames';

class ControlPanel extends Component {
    render() {
        const { applyStyle, appliedStyles = [] } = this.props;
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                        className={classNames("format-action", { "selected": appliedStyles.includes('bold') })}
                        onClick={() => applyStyle('bold')}
                        type="button">
                        <b>B</b>
                    </button>
                    <button
                        className={classNames("format-action", { "selected": appliedStyles.includes('italic') })}
                        onClick={() => applyStyle('italic')}
                        type="button">
                        <i>I</i>
                    </button>
                    <button
                        className={classNames("format-action", { "selected": appliedStyles.includes('underline') })}
                        onClick={() => applyStyle('underline')}
                        type="button">
                        <u>U</u>
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
