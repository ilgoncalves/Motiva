const USER_SET_USERS_SORTED = 'USER_SET_USERS_SORTED'
const USER_SET_LOADING = 'USER_SET_LOADING'
const initialState = {
    usersSortedByScore: [],
    loading:false
}

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case USER_SET_USERS_SORTED:
            return { ...state, usersSortedByScore: action.payload }
        case USER_SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}
