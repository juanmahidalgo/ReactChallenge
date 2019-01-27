import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        const { applyStyle } = this.props;
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" onClick={() => applyStyle('bold')} type="button"><b>B</b></button>
                    <button className="format-action" onClick={() => applyStyle('italic')} type="button"><i>I</i></button>
                    <button className="format-action" onClick={() => applyStyle('underline')} type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
