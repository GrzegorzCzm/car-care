import { TOGGLE_MENU } from "../actions/navigation";

export default function (state = { isMenuShown: false }, action) {

    switch (action.type) {

        case TOGGLE_MENU:
            return { ...state, isMenuShown: !state.isMenuShown};
            default:
            return state;
    }
}