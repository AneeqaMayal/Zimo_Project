import ReducersConstants from "./ReducersConstants"

const ReducersActions = (dispatch) => {
    return {
        themeReducer: (theme) => dispatch({ type: ReducersConstants.ACTIVE_THEME, theme: theme }),
        languageReducer: (language) => dispatch({ type: ReducersConstants.ACTIVE_LANGUAGE, language: language }),
    
    }
}

export default ReducersActions