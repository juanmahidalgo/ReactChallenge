import { getMockText, getSynonyms } from '../text.service';

const fetchInitialText = () =>
    (dispatch, getState) => {
        dispatch({
            type: 'FETCH_TEXT',
        });

        return getMockText()
            .then(text => dispatch({
                type: 'FINISHED_FETCHING_TEXT',
                text,
            }))
            .catch((error) => {
                dispatch({
                    type: 'ERROR_FETCHING_TEXT',
                    error,
                });
            });
    };

const fetchSynonyms = word =>
    dispatch => {
        dispatch({
            type: 'FETCH_SYNONYMS',
        });

        return getSynonyms(word).then((payload) => {
            payload.json()
                .then(synonyms => dispatch({
                    type: 'FINISHED_FETCHING_SYNONYMS',
                    word,
                    synonyms
                }))
                .catch((error) => {
                    dispatch({
                        type: 'ERROR_FETCHING_SYNONYMS',
                        error,
                    });
                });
        })
    };

const replaceWord = synonym =>
    (dispatch, getState) => {
        console.log('synonym: ', synonym);
        const state = getState();
        const asArray = state.words.value.split(' ');
        asArray[state.words.selectedIndex] = synonym;

        dispatch({
            type: 'REPLACE_SYNONYM',
            selectedIndex: -1,
            // selectedWord: synonym,
            value: asArray.join(' ')
        });
    };

const selectWord = (index, word) =>
    (dispatch) => {
        dispatch({
            type: 'SELECT_WORD',
            index,
            word
        });
    };

const applyStyle = style =>
    (dispatch, getState) => {
        const selectedWord = getState().words.selectedWord;
        const state = getState();
        dispatch({
            type: 'APPLY_STYLE',
            styles: state.words.styles[selectedWord] ? [...state.words.styles[selectedWord], style] : [style],
            selectedWord,
        });
    };

export {
    fetchInitialText,
    applyStyle,
    selectWord,
    fetchSynonyms,
    replaceWord
}