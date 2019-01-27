import React, { Component } from 'react';
import ControlPanel from "../control-panel/ControlPanel";
import FileZone from "../file-zone/FileZone";
import SynonymsSelector from "../SynonymsSelector/SynonymsSelector";

class Editor extends Component {
    render() {
        const { text, styles, selectWord, selectedWord, applyStyle, appliedStyles, synonyms, loadingSynonyms, replaceWord } = this.props;
        return (
            <React.Fragment>
                <ControlPanel
                    applyStyle={ applyStyle }
                    appliedStyles= { appliedStyles }
                />
                <FileZone
                    text={ text }
                    styles={ styles }
                    selectWord={ selectWord }
                />
                <SynonymsSelector
                    synonyms={ synonyms[selectedWord] }
                    loading={ loadingSynonyms }
                    replaceWord={ replaceWord }
                />
            </React.Fragment>
        );
    }
}

export default Editor;
