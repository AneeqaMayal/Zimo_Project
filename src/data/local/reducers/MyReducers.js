import { combineReducers, createStore } from "redux"
import ReducersConstants from "./ReducersConstants"
import Defaultlanguage from "../../../assets/language/English.json";
import Defaulttheme from "../../../assets/theme/Dark.json";

const initialThemeState = {
    theme: Defaulttheme
}
const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case ReducersConstants.ACTIVE_THEME:
            return { theme: action.theme }
    }
    return state
}

const initialLangState = {
    language: Defaultlanguage
}
const languageReducer = (state = initialLangState, action) => {
    switch (action.type) {
        case ReducersConstants.ACTIVE_LANGUAGE:
            return { language: action.language }
    }
    return state
}


const reducers = combineReducers({ themeReducer, languageReducer})
const store = createStore(reducers)
export default store